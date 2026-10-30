let propertiesData = [];
let currentActiveCategory = 'ALL';
let activeProperty = null;
let connectivityMapPlaces = [];
let connectivitySearchTimer = null;
let connectivityLeafletMap = null;
let connectivityMapPropertyId = null;
let connectivityOriginMarker = null;
let connectivityRouteLayer = null;
let connectivityRouteController = null;
let connectivityRouteRequestId = 0;
let connectivityPreviewMap = null;
let connectivityPreviewMarker = null;
let connectivityPreviewObserver = null;
let projectGalleryImages = [];
let currentGalleryCategory = 'photo';
let currentGalleryIndex = 0;
let projectGalleryTrigger = null;
const connectivityRouteCache = new Map();
let initialDocumentTitle = document.body.dataset.homeTitle || document.title;
let initialMetaDescription = document.body.dataset.homeDescription || document.querySelector('meta[name="description"]')?.content || '';


function updatePageMetadata(title, description) {
    document.title = title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.content = description;

    const openGraphTitle = document.querySelector('meta[property="og:title"]');
    if (openGraphTitle) openGraphTitle.content = title;
    const openGraphDescription = document.querySelector('meta[property="og:description"]');
    if (openGraphDescription) openGraphDescription.content = description;

    const canonicalUrl = new URL(window.location.pathname, window.location.origin);
    const homePath = document.querySelector('base')?.pathname || '/';
    const currentPath = title === initialDocumentTitle ? homePath : window.location.pathname;
    canonicalUrl.pathname = currentPath.replace(/\/$/, '') || '/';
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.rel = 'canonical';
        document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = canonicalUrl.href;

    const openGraphUrl = document.querySelector('meta[property="og:url"]');
    if (openGraphUrl) openGraphUrl.content = canonicalUrl.href;
}

function getPropertyMetaDescription(item) {
    const builder = document.body.dataset.homeBuilder || document.body.dataset.builder;
    return `Explore ${item.name} by ${builder}. View location, configurations, price, floor plans, and amenities.`;
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', async () => {
    document.addEventListener('contextmenu', event => {
        if (event.target.closest('img')) event.preventDefault();
    });
    document.addEventListener('dragstart', event => {
        if (event.target.closest('img')) event.preventDefault();
    });
    document.addEventListener('click', handleBhkDropdownClick);
    document.addEventListener('click', handleProjectDropdownClick);
    document.addEventListener('keydown', handleBhkDropdownKeydown);
    document.addEventListener('keydown', handleProjectDropdownKeydown);
    window.addEventListener('popstate', restorePropertyRoute);
    window.addEventListener('popstate', () => {
        const map = document.getElementById('connectivity-map');
        if (map && !map.hidden && new URL(window.location.href).searchParams.get('map') !== 'location') {
            closeConnectivityMap({ updateUrl: false, restoreFocus: false });
        }
    });
    document.getElementById('connectivity-map-open')?.addEventListener('click', () => openConnectivityMap());
    document.getElementById('dt-project-comparison')?.addEventListener('click', event => {
        const enquiryButton = event.target.closest('[data-enquiry-project]');
        if (enquiryButton) {
            goToProjectEnquiry(enquiryButton.dataset.enquiryProject);
            return;
        }
        const detailsButton = event.target.closest('[data-details-project]');
        if (detailsButton) openPropertyDetails(detailsButton.dataset.detailsProject);
    });
    document.getElementById('projectGalleryPreview')?.addEventListener('click', event => openProjectGallery(event.currentTarget));
    document.getElementById('projectGalleryClose')?.addEventListener('click', closeProjectGallery);
    document.getElementById('projectGalleryDialog')?.addEventListener('click', event => {
        if (event.target === event.currentTarget) closeProjectGallery();
    });
    document.querySelector('.project-gallery-tabs')?.addEventListener('click', event => {
        const tab = event.target.closest('[data-gallery-category]');
        if (tab) setProjectGalleryCategory(tab.dataset.galleryCategory);
    });
    document.querySelector('.project-gallery-tabs')?.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        const tabs = [...document.querySelectorAll('.project-gallery-tab:not([hidden])')];
        const index = tabs.indexOf(event.target);
        if (index < 0 || tabs.length < 2) return;
        event.preventDefault();
        event.stopPropagation();
        const nextTab = tabs[(index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
        setProjectGalleryCategory(nextTab.dataset.galleryCategory);
        nextTab.focus();
    });
    document.getElementById('projectGalleryThumbnails')?.addEventListener('click', event => {
        const thumbnail = event.target.closest('[data-gallery-index]');
        if (thumbnail) selectProjectGalleryImage(Number(thumbnail.dataset.galleryIndex));
    });
    document.getElementById('projectGalleryPrevious')?.addEventListener('click', () => changeProjectGalleryImage(-1));
    document.getElementById('projectGalleryNext')?.addEventListener('click', () => changeProjectGalleryImage(1));
    document.getElementById('projectGalleryDialog')?.addEventListener('close', () => {
        document.getElementById('projectGalleryCurrentImage').removeAttribute('src');
        document.getElementById('projectGalleryThumbnails').replaceChildren();
        if (projectGalleryTrigger?.isConnected) projectGalleryTrigger.focus();
        projectGalleryTrigger = null;
    });
    document.addEventListener('copy', event => {
        if (document.getElementById('projectGalleryDialog')?.open) event.preventDefault();
    });
    const connectivityPreview = document.getElementById('connectivity-map-preview-canvas');
    if (connectivityPreview && 'IntersectionObserver' in window) {
        connectivityPreviewObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting) && activeProperty) {
                initializeConnectivityPreview(activeProperty);
                connectivityPreviewObserver.disconnect();
            }
        }, { rootMargin: '160px' });
        connectivityPreviewObserver.observe(connectivityPreview);
    }
    document.getElementById('connectivity-map-close')?.addEventListener('click', () => closeConnectivityMap());
    document.getElementById('connectivity-map-search-input')?.addEventListener('input', event => {
        clearTimeout(connectivitySearchTimer);
        connectivitySearchTimer = setTimeout(() => renderConnectivityMapPlaces(event.target.value), 250);
    });
    document.getElementById('connectivity-map-list')?.addEventListener('click', event => {
        const placeButton = event.target.closest('[data-connectivity-place]');
        if (!placeButton) return;
        event.preventDefault();
        event.stopPropagation();
        selectConnectivityMapPlace(placeButton.dataset.connectivityPlace);
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !document.getElementById('connectivity-map')?.hidden) {
            closeConnectivityMap();
        }
        const galleryDialog = document.getElementById('projectGalleryDialog');
        if (!galleryDialog?.open) return;
        if (event.key === 'Escape') {
            event.preventDefault();
            closeProjectGallery();
        } else if (event.key === 'ArrowLeft') changeProjectGalleryImage(-1);
        else if (event.key === 'ArrowRight') changeProjectGalleryImage(1);
    });
    document.getElementById('primaryNavigation')?.addEventListener('click', event => {
        const clickedLink = event.target.closest('.nav-link');
        if (!clickedLink) return;

        setActiveNavigation(clickedLink.getAttribute('href'));
    });

    const propertyGrid = document.getElementById('propertyGrid');
    propertyGrid?.addEventListener('scroll', updatePropertyCarouselControls, { passive: true });
    window.addEventListener('resize', updatePropertyCarouselControls);

    const builder = document.body.getAttribute('data-builder');

    if (!builder) {
        console.error('Missing data-builder attribute on body tag.');
        return;
    }

    try {
        // Dynamically import data based on HTML data-builder attribute
        const module = await import(`../data/${builder}.js`);
        propertiesData = module.propertiesData;
        activeProperty = propertiesData[0];
        renderDeveloperHero(module.developerInfo?.hero);
        renderBuilderFaqs(module.faqData || []);
        populateHomeProjectDropdown(propertiesData);
        restoreEnquiryProjectFromUrl();
        renderBuilderFooter(module.developerInfo?.hero, propertiesData);

        renderPropertyCards(propertiesData);
        initEmiCalculator();
        initDetailSubnav();
        syncDetailSubnavTabs();
        restorePropertyRoute();
    } catch (err) {
        console.error(`Failed to load data for builder "${builder}":`, err);
    }

    // Keep the engagement modal away from the initial page render and Lighthouse's load window.
    setTimeout(() => {
        const showPopup = () => {
            const modal = document.getElementById('waPopModal');
            if (modal && !sessionStorage.getItem('waPopupShown')) {
                modal.classList.add('active');
                sessionStorage.setItem('waPopupShown', 'true');
            }
        };

        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(showPopup, { timeout: 15000 });
        } else {
            showPopup();
        }
    }, 10000);
});

function renderDeveloperHero(hero) {
    if (!hero) return;

    const subtitle = document.getElementById('developer-hero-subtitle');
    const title = document.getElementById('developer-hero-title');
    const description = document.getElementById('developer-hero-description');
    const image = document.getElementById('developer-hero-image');

    if (subtitle) subtitle.textContent = hero.subtitle || '';
    if (title) title.textContent = hero.title || '';
    if (description) description.textContent = hero.description || '';
    if (image && hero.image) {
        image.loading = 'eager';
        image.fetchPriority = 'high';
        image.decoding = 'async';
        image.src = hero.image;
    }
}

function setImageSource(image, src, { loading = 'lazy', priority = 'auto' } = {}) {
    if (!image || !src) return;
    image.loading = loading;
    image.fetchPriority = priority;
    image.decoding = 'async';
    image.src = src;
}

function getCardImageUrl(src) {
    try {
        const url = new URL(src);
        if (url.hostname === 'images.unsplash.com') {
            url.searchParams.set('w', '640');
            url.searchParams.set('q', '72');
        }
        return url.href;
    } catch {
        return src;
    }
}

function renderBuilderFooter(hero, properties) {
    const builder = hero?.subtitle?.split('|')[0].trim() || 'Property Developer';
    const builderName = document.getElementById('footer-builder-name');
    const location = document.getElementById('footer-builder-location');
    const summary = document.getElementById('footer-brand-summary');
    const attribution = document.getElementById('footer-builder-attribution');
    if (!builderName || !location || !summary || !attribution) return;

    builderName.textContent = builder;
    location.textContent = hero?.subtitle?.split('|').slice(1).join('|').trim() || 'Residential Developments';
    const propertyCount = properties.length;
    summary.textContent = `Explore ${propertyCount} ${propertyCount === 1 ? 'property' : 'properties'} by ${builder} featured on this page.`;
    document.getElementById('footer-year').textContent = new Date().getFullYear();
    attribution.textContent = `Residential properties by ${builder}`;
    const policyLink = document.querySelector('.footer-policy-link');
    if (policyLink) policyLink.href = '/privacy-policy';
}

function populateHomeProjectDropdown(projects) {
    const select = document.getElementById('homeProjectSelect');
    if (!select) return;
    const listbox = select.querySelector('.project-select-options');
    listbox.replaceChildren();

    projects.forEach(project => {
        const option = document.createElement('button');
        option.type = 'button';
        option.className = 'project-select-option';
        option.setAttribute('role', 'option');
        option.setAttribute('aria-selected', 'false');
        option.dataset.value = project.name;
        option.textContent = project.name;
        listbox.appendChild(option);
    });
    select.hidden = projects.length === 0;
}

function selectEnquiryProject(projectId) {
    const project = propertiesData.find(candidate => candidate.id === projectId);
    const select = document.getElementById('homeProjectSelect');
    if (!project || !select) return false;

    const option = [...select.querySelectorAll('.project-select-option')]
        .find(candidate => candidate.dataset.value === project.name);
    if (!option) return false;

    select.querySelector('.project-select-trigger span').textContent = project.name;
    select.querySelector('input[type="hidden"]').value = project.name;
    select.querySelectorAll('.project-select-option').forEach(candidate => {
        candidate.setAttribute('aria-selected', String(candidate === option));
    });
    return true;
}

function restoreEnquiryProjectFromUrl() {
    const projectId = new URL(window.location.href).searchParams.get('project');
    if (projectId) selectEnquiryProject(projectId);
}

function handleProjectDropdownClick(event) {
    const select = event.target.closest('.project-select');
    const trigger = event.target.closest('.project-select-trigger');

    if (trigger && select?.contains(trigger)) {
        const listbox = select.querySelector('.project-select-options');
        const open = trigger.getAttribute('aria-expanded') === 'true';
        listbox.hidden = open;
        trigger.setAttribute('aria-expanded', String(!open));
        if (!open) {
            const rect = trigger.getBoundingClientRect();
            const menuHeight = Math.min(listbox.children.length * 44 + 14, window.innerHeight * 0.4, 240);
            listbox.classList.toggle('opens-up', window.innerHeight - rect.bottom < menuHeight && rect.top > window.innerHeight - rect.bottom);
            listbox.querySelector('.project-select-option')?.focus();
        }
        return;
    }

    const option = event.target.closest('.project-select-option');
    if (option && select?.contains(option)) {
        const listbox = select.querySelector('.project-select-options');
        select.querySelector('.project-select-trigger span').textContent = option.dataset.value;
        select.querySelector('input[type="hidden"]').value = option.dataset.value;
        listbox.querySelectorAll('.project-select-option').forEach(candidate => {
            candidate.setAttribute('aria-selected', String(candidate === option));
        });
        listbox.hidden = true;
        select.querySelector('.project-select-trigger').setAttribute('aria-expanded', 'false');
        select.querySelector('.project-select-trigger').focus();
        return;
    }

    document.querySelectorAll('.project-select').forEach(dropdown => {
        dropdown.querySelector('.project-select-options').hidden = true;
        dropdown.querySelector('.project-select-options').classList.remove('opens-up');
        dropdown.querySelector('.project-select-trigger').setAttribute('aria-expanded', 'false');
    });
}

function handleProjectDropdownKeydown(event) {
    const select = event.target.closest('.project-select');
    if (!select) return;
    const trigger = select.querySelector('.project-select-trigger');
    if (event.target === trigger && ['ArrowDown', 'Enter', ' '].includes(event.key) && trigger.getAttribute('aria-expanded') !== 'true') {
        event.preventDefault();
        trigger.click();
        return;
    }
    if (event.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') {
        select.querySelector('.project-select-options').hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
    }
}

function renderBuilderFaqs(faqs) {
    const container = document.querySelector('#faq .faq-container');
    if (!container) return;

    container.parentElement.querySelector('.faq-view-more')?.remove();
    container.classList.toggle('has-two-columns', faqs.length > 5);
    container.replaceChildren();
    const columns = faqs.length > 5 ? [document.createElement('div'), document.createElement('div')] : [container];
    if (faqs.length > 5) {
        columns.forEach(column => column.className = 'faq-column');
        container.append(...columns);
    }

    faqs.forEach(({ question, answer }, index) => {
        const item = document.createElement('div');
        item.className = 'faq-item';
        item.dataset.faqIndex = String(index);
        item.hidden = faqs.length > 10 && index >= 10;
        item.addEventListener('click', () => toggleFaq(item));

        const questionRow = document.createElement('div');
        questionRow.className = 'faq-question';
        const questionText = document.createElement('span');
        questionText.textContent = question;
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-chevron-down';
        questionRow.append(questionText, icon);

        const answerText = document.createElement('div');
        answerText.className = 'faq-answer';
        answerText.textContent = answer;
        item.append(questionRow, answerText);
        columns[index % columns.length].appendChild(item);
    });

    if (faqs.length > 10) {
        const viewMoreButton = document.createElement('button');
        viewMoreButton.type = 'button';
        viewMoreButton.className = 'faq-view-more';
        viewMoreButton.textContent = 'View more';
        viewMoreButton.setAttribute('aria-expanded', 'false');
        viewMoreButton.addEventListener('click', () => {
            const expanded = viewMoreButton.getAttribute('aria-expanded') === 'true';
            container.classList.toggle('has-two-columns', faqs.length > 5);
            container.querySelectorAll('.faq-item').forEach(item => {
                item.hidden = !expanded && Number(item.dataset.faqIndex) >= 10;
            });
            viewMoreButton.setAttribute('aria-expanded', String(!expanded));
            viewMoreButton.textContent = expanded ? 'View less' : 'View more';
        });
        container.after(viewMoreButton);
    }
}

// RENDER PROPERTY CARDS
function renderPropertyCards(data) {
    const grid = document.getElementById('propertyGrid');
    const countEl = document.getElementById('resultsCount');
    grid.innerHTML = '';
    grid.scrollTo({ left: 0, behavior: 'auto' });

    countEl.textContent = `Showing ${data.length} Exclusive ${data.length === 1 ? 'Residence' : 'Residences'}`;

    if (data.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-building-circle-exclamation"></i>
                <h3>No Properties Match Your Search</h3>
                <p style="color: var(--text-muted); margin-top: 5px;">Try tweaking your search keywords or clear filters.</p>
            </div>
        `;
        updatePropertyCarouselControls();
        return;
    }

    const cards = document.createDocumentFragment();
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.tabIndex = 0;
        card.setAttribute('role', 'link');
        card.setAttribute('aria-label', `View details for ${item.name}`);
        card.addEventListener('click', event => {
            if (event.target.closest('button')) return;
            openPropertyDetails(item.id);
        });
        card.addEventListener('keydown', event => {
            if (event.target !== card) return;
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openPropertyDetails(item.id);
            }
        });
        card.innerHTML = `
            <div class="card-image-wrap">
                <img src="${getCardImageUrl(item.thumbnail || item.images[0])}" alt="${item.name}" class="card-img" loading="lazy" decoding="async">
                <span class="card-badge ${item.badgeClass}">${item.statusText}</span>
                ${item.rera?.trim() ? '<span class="rera-verified-badge"><i class="fa-solid fa-circle-check" aria-hidden="true"></i> RERA Verified</span>' : ''}
            </div>
            <div class="card-content">
                <div class="card-location"><i class="fa-solid fa-location-dot"></i> ${item.shortAddress || item.location}</div>
                <h3 class="card-title">${item.name}</h3>
                <div class="card-specs-row">
                    <div class="spec-item"><i class="fa-solid fa-bed"></i> ${item.bhk}</div>
                    <div class="spec-item spec-item-area"><i class="fa-solid fa-vector-square"></i> ${item.area}</div>
                </div>
                <div class="card-footer-price">
                    <div>
                        <span class="price-label">Starting From</span>
                        <div class="price-value">${item.price}</div>
                    </div>
                </div>
                <div class="card-actions">
                    <button class="btn-view-details" onclick="openPropertyDetails('${item.id}')">View Details</button>
                </div>
            </div>
        `;

        const cardImage = card.querySelector('.card-img');
        cardImage.addEventListener('error', () => {
            const imageWrap = cardImage.closest('.card-image-wrap');
            imageWrap?.classList.add('image-unavailable');
        }, { once: true });

        cards.appendChild(card);
    });
    grid.appendChild(cards);
    updatePropertyCarouselControls();
}
function updatePropertyCarouselControls() {
    const grid = document.getElementById('propertyGrid');
    const controls = document.querySelector('.carousel-controls');
    if (!grid || !controls) return;

    const arrows = controls.querySelectorAll('.carousel-arrow');
    const hasOverflow = grid.scrollWidth > grid.clientWidth + 1;
    controls.hidden = !hasOverflow;
    arrows[0].disabled = grid.scrollLeft <= 1;
    arrows[1].disabled = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 1;
}

function movePropertyCarousel(direction) {
    const grid = document.getElementById('propertyGrid');
    const card = grid?.querySelector('.property-card');
    if (!grid || !card) return;

    const gap = parseFloat(getComputedStyle(grid).columnGap) || 0;
    grid.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: 'smooth' });
}

function getConnectivityDestination(place) {
    return place.destination || `${place.label}, Bengaluru, Karnataka`;
}

function initializeConnectivityMap(item) {
    const status = document.getElementById('connectivity-map-route-status');
    if (!window.L) {
        status.textContent = 'The interactive map could not be loaded. Use Google Maps directions instead.';
        return false;
    }

    const mapElement = document.getElementById('connectivity-map-canvas');
    const themeColor = getComputedStyle(document.body).getPropertyValue('--theme-primary').trim() || '#7b263a';
    const propertyPlaces = [
        [item.coordinates.lat, item.coordinates.lon],
        ...connectivityMapPlaces
            .filter(place => place.coordinates)
            .map(place => [place.coordinates.lat, place.coordinates.lon])
    ];
    const projectBounds = window.L.latLngBounds(propertyPlaces);
    if (!connectivityLeafletMap) {
        connectivityLeafletMap = window.L.map(mapElement, { scrollWheelZoom: false }).fitBounds(
            projectBounds,
            { padding: [30, 30], maxZoom: 12 }
        );
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a> | Routing: <a href="https://project-osrm.org/" target="_blank" rel="noopener noreferrer">OSRM</a>'
        }).addTo(connectivityLeafletMap);
        connectivityRouteLayer = window.L.layerGroup().addTo(connectivityLeafletMap);
    } else if (connectivityMapPropertyId !== item.id) {
        connectivityRouteLayer.clearLayers();
        connectivityOriginMarker?.remove();
        connectivityLeafletMap.fitBounds(projectBounds, { padding: [30, 30], maxZoom: 12 });
    }

    if (connectivityMapPropertyId !== item.id || !connectivityOriginMarker) {
        connectivityOriginMarker = window.L.circleMarker([item.coordinates.lat, item.coordinates.lon], {
            radius: 8,
            color: '#fff',
            weight: 3,
            fillColor: themeColor,
            fillOpacity: 1
        }).addTo(connectivityLeafletMap);
        connectivityOriginMarker.bindTooltip(`${item.name} (Property)`);
    }
    connectivityMapPropertyId = item.id;
    requestAnimationFrame(() => connectivityLeafletMap.invalidateSize());
    return true;
}

function initializeConnectivityPreview(item) {
    if (!window.L || !item?.coordinates) return;

    const previewElement = document.getElementById('connectivity-map-preview-canvas');
    const themeColor = getComputedStyle(document.body).getPropertyValue('--theme-primary').trim() || '#7b263a';
    if (!connectivityPreviewMap) {
        connectivityPreviewMap = window.L.map(previewElement, {
            attributionControl: true,
            boxZoom: false,
            dragging: false,
            doubleClickZoom: false,
            keyboard: false,
            scrollWheelZoom: false,
            touchZoom: false,
            zoomControl: false
        }).setView([item.coordinates.lat, item.coordinates.lon], 14);
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>'
        }).addTo(connectivityPreviewMap);
    } else {
        connectivityPreviewMap.setView([item.coordinates.lat, item.coordinates.lon], 14);
        connectivityPreviewMarker?.remove();
    }

    connectivityPreviewMarker = window.L.circleMarker([item.coordinates.lat, item.coordinates.lon], {
        radius: 9,
        color: '#fff',
        weight: 3,
        fillColor: themeColor,
        fillOpacity: 1
    }).addTo(connectivityPreviewMap);
    connectivityPreviewMarker.bindTooltip(item.name);
    requestAnimationFrame(() => connectivityPreviewMap.invalidateSize());
}

function renderConnectivityDestinationMarker(place) {
    const themeColor = getComputedStyle(document.body).getPropertyValue('--theme-primary').trim() || '#7b263a';
    const destinationMarker = window.L.circleMarker([place.coordinates.lat, place.coordinates.lon], {
        radius: 7,
        color: '#fff',
        weight: 3,
        fillColor: themeColor,
        fillOpacity: 1
    }).addTo(connectivityRouteLayer);
    destinationMarker.bindTooltip(place.label);
}

function renderConnectivityRoute(item, place, route) {
    connectivityRouteLayer.clearLayers();
    const routeCoordinates = route.geometry.coordinates.slice();
    const originCoordinate = [item.coordinates.lon, item.coordinates.lat];
    const destinationCoordinate = [place.coordinates.lon, place.coordinates.lat];
    const firstRouteCoordinate = routeCoordinates[0];
    const lastRouteCoordinate = routeCoordinates[routeCoordinates.length - 1];

    if (firstRouteCoordinate[0] !== originCoordinate[0] || firstRouteCoordinate[1] !== originCoordinate[1]) {
        routeCoordinates.unshift(originCoordinate);
    }
    if (lastRouteCoordinate[0] !== destinationCoordinate[0] || lastRouteCoordinate[1] !== destinationCoordinate[1]) {
        routeCoordinates.push(destinationCoordinate);
    }

    const routeLine = window.L.geoJSON({
        ...route.geometry,
        coordinates: routeCoordinates
    }, {
        style: {
            color: getComputedStyle(document.body).getPropertyValue('--theme-primary').trim() || '#7b263a',
            weight: 5,
            opacity: 0.85
        }
    }).addTo(connectivityRouteLayer);
    renderConnectivityDestinationMarker(place);
    const routeBounds = routeLine.getBounds();
    if (routeBounds.isValid()) {
        connectivityLeafletMap.fitBounds(routeBounds, { padding: [48, 48], maxZoom: 16 });
    }
}

async function updateConnectivityRoute(item, place) {
    const status = document.getElementById('connectivity-map-route-status');
    if (!place.coordinates || !initializeConnectivityMap(item)) {
        if (!place.coordinates) status.textContent = `A map location is not available for ${place.label}. Open Google Maps for directions.`;
        return;
    }

    connectivityRouteController?.abort();
    connectivityRouteController = new AbortController();
    const requestId = ++connectivityRouteRequestId;
    connectivityRouteLayer.clearLayers();
    renderConnectivityDestinationMarker(place);
    const routeKey = `${item.id}:${place.id}`;
    const cachedRoute = connectivityRouteCache.get(routeKey);
    if (cachedRoute) {
        renderConnectivityRoute(item, place, cachedRoute);
        status.textContent = `Route to ${place.label}`;
        return;
    }

    status.textContent = `Loading route to ${place.label}…`;
    const origin = item.coordinates;
    const destination = place.coordinates;
    const routeUrl = `https://router.project-osrm.org/route/v1/driving/${origin.lon},${origin.lat};${destination.lon},${destination.lat}?overview=full&geometries=geojson&steps=false`;

    try {
        const response = await fetch(routeUrl, { signal: connectivityRouteController.signal });
        if (!response.ok) throw new Error(`Routing service returned HTTP ${response.status}.`);
        const result = await response.json();
        const route = result.routes?.[0];
        if (result.code !== 'Ok' || !route?.geometry?.coordinates?.length) {
            throw new Error(result.message || 'No road route is available for this destination.');
        }
        connectivityRouteCache.set(routeKey, route);
        if (requestId !== connectivityRouteRequestId) return;
        renderConnectivityRoute(item, place, route);
        status.textContent = `Route to ${place.label}`;
    } catch (error) {
        if (error.name === 'AbortError' || requestId !== connectivityRouteRequestId) return;
        status.textContent = `Could not load the route to ${place.label}. Open Google Maps for directions.`;
    }
}

function getConnectivityDirectionsUrl(item, place) {
    const url = new URL('https://www.google.com/maps/dir/');
    url.searchParams.set('api', '1');
    url.searchParams.set('origin', `${item.coordinates.lat},${item.coordinates.lon}`);
    url.searchParams.set('destination', getConnectivityDestination(place));
    url.searchParams.set('travelmode', 'driving');
    return url.href;
}

function updateConnectivityMapUrl(placeId) {
    const url = new URL(window.location.href);
    url.searchParams.set('map', 'location');
    if (placeId) url.searchParams.set('destination', placeId);
    else url.searchParams.delete('destination');
    window.history.replaceState({ ...window.history.state, locationMap: true }, '', `${url.pathname}${url.search}${url.hash}`);
}

function selectConnectivityMapPlace(placeId) {
    const place = connectivityMapPlaces.find(candidate => candidate.id === placeId);
    if (!activeProperty?.coordinates || !place) return;

    const directionsLink = document.getElementById('connectivity-map-directions-link');
    directionsLink.href = getConnectivityDirectionsUrl(activeProperty, place);
    directionsLink.firstChild.textContent = `Directions to ${place.label} in Google Maps `;

    document.querySelectorAll('.connectivity-map-place').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.connectivityPlace === placeId));
    });
    updateConnectivityMapUrl(placeId);
    updateConnectivityRoute(activeProperty, place);
}

function renderConnectivityMapPlaces(query = '') {
    const list = document.getElementById('connectivity-map-list');
    if (!list) return;
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const places = connectivityMapPlaces.filter(place =>
        `${place.label} ${place.distance}`.toLocaleLowerCase().includes(normalizedQuery)
    );
    list.replaceChildren();
    document.getElementById('connectivity-map-count').textContent = `${places.length} places`;

    if (!places.length) {
        const empty = document.createElement('p');
        empty.className = 'connectivity-map-no-results';
        empty.textContent = 'No listed destinations match your search.';
        list.appendChild(empty);
        return;
    }

    places.forEach(place => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'connectivity-map-place';
        button.dataset.connectivityPlace = place.id;
        button.setAttribute('aria-pressed', String(place.id === new URL(window.location.href).searchParams.get('destination')));

        const icon = document.createElement('span');
        icon.className = 'connectivity-map-place-icon';
        const iconElement = document.createElement('i');
        iconElement.className = place.icon || 'fa-solid fa-location-dot';
        iconElement.setAttribute('aria-hidden', 'true');
        icon.appendChild(iconElement);

        const details = document.createElement('span');
        details.className = 'connectivity-map-place-details';
        const name = document.createElement('span');
        name.textContent = place.label;
        const distance = document.createElement('span');
        distance.textContent = place.distance;
        details.append(name, distance);
        button.append(icon, details);
        list.appendChild(button);
    });

}

function openConnectivityMap({ updateUrl = true } = {}) {
    if (!activeProperty?.coordinates) return;
    const map = document.getElementById('connectivity-map');
    const search = document.getElementById('connectivity-map-search-input');
    document.getElementById('connectivity-map-project').textContent = `${activeProperty.name} · ${activeProperty.location}`;
    connectivityMapPlaces = (activeProperty.connectivity || []).map((place, index) => ({
        ...place,
        id: `${activeProperty.id}-connectivity-${index + 1}`
    }));
    search.value = '';
    map.hidden = false;
    document.body.classList.add('connectivity-map-open');
    initializeConnectivityMap(activeProperty);
    renderConnectivityMapPlaces(search.value);
    const directionsLink = document.getElementById('connectivity-map-directions-link');
    directionsLink.href = `https://www.google.com/maps/search/?api=1&query=${activeProperty.coordinates.lat},${activeProperty.coordinates.lon}`;
    directionsLink.firstChild.textContent = 'Open property location in Google Maps ';

    const url = new URL(window.location.href);
    if (updateUrl) {
        url.searchParams.set('map', 'location');
        url.searchParams.delete('destination');
        window.history.replaceState({ ...window.history.state, locationMap: true }, '', `${url.pathname}${url.search}${url.hash}`);
    }
    const requestedDestination = new URL(window.location.href).searchParams.get('destination');
    const selectedPlace = connectivityMapPlaces.find(place => place.id === requestedDestination)
        || connectivityMapPlaces[0];
    if (selectedPlace) selectConnectivityMapPlace(selectedPlace.id);
    document.getElementById('connectivity-map-close').focus();
}

function closeConnectivityMap({ updateUrl = true, restoreFocus = true } = {}) {
    const map = document.getElementById('connectivity-map');
    if (!map || map.hidden) return;

    map.hidden = true;
    document.body.classList.remove('connectivity-map-open');
    connectivityRouteRequestId++;
    connectivityRouteController?.abort();
    clearTimeout(connectivitySearchTimer);
    if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.delete('map');
        url.searchParams.delete('destination');
        window.history.replaceState({ ...window.history.state, locationMap: false }, '', `${url.pathname}${url.search}${url.hash}`);
    }
    if (restoreFocus) document.getElementById('connectivity-map-open')?.focus();
}

// CATEGORY FILTERING
function filterCategory(cat, btn) {
    currentActiveCategory = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
}

// LIVE SEARCH
function handleSearch() {
    const clearBtn = document.getElementById('searchClearBtn');
    const val = document.getElementById('searchInput').value.trim();
    clearBtn.style.display = val.length > 0 ? 'block' : 'none';
    applyFilters();
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchClearBtn').style.display = 'none';
    applyFilters();
}

function submitSearch() {
    handleSearch();
    document.querySelectorAll('#primaryNavigation .nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '/residences');
    });
    goToResidences();
}

function applyFilters() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    const filtered = propertiesData.filter(item => {
        const matchCategory = (currentActiveCategory === 'ALL') || (item.category === currentActiveCategory);
        const matchQuery = item.name.toLowerCase().includes(query) ||
                           item.location.toLowerCase().includes(query) ||
                           item.bhk.toLowerCase().includes(query);
        return matchCategory && matchQuery;
    });

    renderPropertyCards(filtered);
}

// QUICK VIEW MODAL
function openQuickView(id) {
    const item = propertiesData.find(p => p.id === id);
    if (!item) return;

    setImageSource(document.getElementById('qv-img'), item.images[0], { loading: 'eager' });
    document.getElementById('qv-title').textContent = item.name;
    document.getElementById('qv-location').textContent = item.location;
    document.getElementById('qv-price').textContent = `Starting ${item.price}`;
    document.getElementById('qv-desc').textContent = item.description;
    document.getElementById('qv-rera').textContent = item.rera;

    document.getElementById('qv-go-details').onclick = () => {
        closeModal('quickViewModal');
        openPropertyDetails(id);
    };

    document.getElementById('quickViewModal').classList.add('active');
}

function getConfigurationTokens(item) {
    return new Set((item.bhk.match(/\d+(?:\.\d+)?/g) || []).map(Number));
}

function getProjectDistance(first, second) {
    if (!first.coordinates || !second.coordinates) return Number.POSITIVE_INFINITY;
    const radians = degrees => degrees * Math.PI / 180;
    const latitudeDelta = radians(second.coordinates.lat - first.coordinates.lat);
    const longitudeDelta = radians(second.coordinates.lon - first.coordinates.lon);
    const latitudeOne = radians(first.coordinates.lat);
    const latitudeTwo = radians(second.coordinates.lat);
    const haversine = Math.sin(latitudeDelta / 2) ** 2
        + Math.cos(latitudeOne) * Math.cos(latitudeTwo) * Math.sin(longitudeDelta / 2) ** 2;
    return 6371 * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

function getSimilarProjects(item) {
    const configurations = getConfigurationTokens(item);
    return propertiesData
        .filter(candidate => candidate.id !== item.id)
        .map(candidate => ({
            property: candidate,
            sharedConfigurations: [...getConfigurationTokens(candidate)].filter(value => configurations.has(value)).length,
            distance: getProjectDistance(item, candidate)
        }))
        .sort((first, second) =>
            second.sharedConfigurations - first.sharedConfigurations
            || first.distance - second.distance
            || first.property.name.localeCompare(second.property.name)
        )
        .slice(0, 2)
        .map(({ property }) => property);
}

function renderProjectComparison(item) {
    const section = document.getElementById('dt-project-comparison');
    const grid = document.getElementById('dt-project-comparison-grid');
    const projects = [item, ...getSimilarProjects(item)];
    grid.replaceChildren();

    projects.forEach((project, index) => {
        const projectCard = document.createElement('article');
        projectCard.className = `project-comparison-card${index === 0 ? ' is-current' : ''}`;
        const card = document.createElement('div');
        card.className = 'comparison-project-card';
        const imageWrap = document.createElement('div');
        imageWrap.className = 'comparison-project-image-wrap';
        const image = document.createElement('img');
        image.className = 'comparison-project-image';
        image.src = project.thumbnail || project.images[0];
        image.alt = `${project.name} project`;
        image.loading = 'lazy';
        image.decoding = 'async';
        image.fetchPriority = 'low';
        imageWrap.appendChild(image);

        if (index === 0) {
            const currentLabel = document.createElement('span');
            currentLabel.className = 'comparison-current-label';
            currentLabel.textContent = 'Current Project';
            imageWrap.appendChild(currentLabel);
        }
        card.appendChild(imageWrap);
        const name = document.createElement('span');
        name.className = 'comparison-project-name';
        name.className = 'comparison-project-name';
        const projectName = document.createElement('span');
        projectName.textContent = project.name;
        const location = document.createElement('span');
        location.className = 'comparison-project-location';
        location.textContent = project.shortAddress || project.location;
        name.append(projectName, location);
        card.appendChild(name);

        const projectAction = document.createElement('button');
        projectAction.type = 'button';
        projectAction.className = 'comparison-project-link';
        if (index === 0) {
            projectAction.dataset.enquiryProject = project.id;
            projectAction.innerHTML = '<i class="fa-solid fa-phone" aria-hidden="true"></i> Enquire Now';
            projectAction.setAttribute('aria-label', `Enquire about ${project.name}`);
        } else {
            projectAction.dataset.detailsProject = project.id;
            projectAction.innerHTML = '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i> View Details';
            projectAction.setAttribute('aria-label', `View ${project.name} details`);
        }
        card.appendChild(projectAction);

        const specs = document.createElement('div');
        specs.className = 'comparison-project-specs';
        const rows = [
            ['Price', project.price],
            ['Configuration', project.bhk],
            ['Project Area', project.area],
            ['Status', project.statusText],
            ['Possession', project.possession]
        ];

        rows.forEach(([label, value]) => {
            const row = document.createElement('div');
            row.className = 'comparison-project-spec';
            const specLabel = document.createElement('span');
            specLabel.className = 'comparison-project-spec-label';
            specLabel.textContent = label;
            const specValue = document.createElement('span');
            specValue.className = 'comparison-project-spec-value';
            specValue.textContent = value || 'Not listed';
            row.append(specLabel, specValue);
            specs.appendChild(row);
        });
        card.appendChild(specs);
        projectCard.appendChild(card);
        grid.appendChild(projectCard);
    });
    section.hidden = projects.length < 2;
}

function getProjectGalleryImages(item) {
    const galleryImages = (item.images || [])
        .filter(image => typeof image === 'string' && image.trim())
        .map((src, index) => ({ src, alt: `${item.name} project image ${index + 1}`, type: 'photo' }));
    const thumbnail = item.thumbnail && !galleryImages.some(image => image.src === item.thumbnail)
        ? [{ src: item.thumbnail, alt: `${item.name} project thumbnail`, type: 'photo' }]
        : [];
    const floorPlanImages = (item.floorPlans || [])
        .filter(plan => typeof plan.image === 'string' && plan.image.trim())
        .map(plan => ({ src: plan.image, alt: `${item.name} ${plan.bhk} floor plan`, type: 'floor-plan' }));
    return [...thumbnail, ...galleryImages, ...floorPlanImages];
}

function getHighlightIcon(text, defaultIcon = 'fa-solid fa-circle-check') {
    if (!text || typeof text !== 'string') return defaultIcon;
    const lower = text.toLowerCase();
    if (lower.includes('rera') || lower.includes('approv') || lower.includes('certif') || lower.includes('legal') || lower.includes('bda') || lower.includes('bmrda')) return 'fa-solid fa-certificate';
    if (lower.includes('wall') || lower.includes('privacy')) return 'fa-solid fa-shield-halved';
    if (lower.includes('road') || lower.includes('location') || lower.includes('connect') || lower.includes('metro') || lower.includes('highway') || lower.includes('expressway') || lower.includes('station') || lower.includes('airport') || lower.includes('tech park')) return 'fa-solid fa-location-dot';
    if (lower.includes('acre') || lower.includes('land') || lower.includes('garden') || lower.includes('open space') || lower.includes('landscape') || /\bpark\b/.test(lower) || lower.includes('green')) return 'fa-solid fa-tree';
    if (lower.includes('pool') || lower.includes('swim')) return 'fa-solid fa-person-swimming';
    if (lower.includes('gym') || lower.includes('fit') || lower.includes('sport') || lower.includes('court') || lower.includes('jog')) return 'fa-solid fa-dumbbell';
    if (lower.includes('club') || lower.includes('amenit') || lower.includes('lifestyle') || lower.includes('resort') || lower.includes('luxury')) return 'fa-solid fa-hotel';
    if (lower.includes('tower') || lower.includes('floor') || lower.includes('high-rise') || lower.includes('architecture') || /\bunits?\b/.test(lower) || lower.includes('structure')) return 'fa-solid fa-building';
    if (lower.includes('ready') || lower.includes('possession') || lower.includes('move-in') || lower.includes('keys') || lower.includes('oc ')) return 'fa-solid fa-key';
    if (lower.includes('vastu') || lower.includes('vaastu') || lower.includes('facing')) return 'fa-solid fa-compass';
    if (lower.includes('lake') || lower.includes('water') || lower.includes('view') || lower.includes('scenic')) return 'fa-solid fa-water';
    if (lower.includes('price') || lower.includes('offer') || lower.includes('crore') || lower.includes('lakh') || lower.includes('payment') || lower.includes('emi')) return 'fa-solid fa-indian-rupee-sign';
    return defaultIcon;
}

function renderProjectHighlights(highlights = []) {
    const section = document.getElementById('dt-project-highlights');
    const container = document.getElementById('dt-highlights');
    if (!section || !container) return;

    if (!Array.isArray(highlights) || highlights.length === 0) {
        section.hidden = true;
        container.replaceChildren();
        return;
    }

    section.hidden = false;
    const fragment = document.createDocumentFragment();

    highlights.forEach(highlight => {
        const card = document.createElement('div');
        card.className = 'highlight-card';

        let iconClass = 'fa-solid fa-circle-check';
        let titleText = '';
        let bodyText = '';

        if (typeof highlight === 'string') {
            bodyText = highlight;
            iconClass = getHighlightIcon(highlight);
        } else if (typeof highlight === 'object' && highlight !== null) {
            bodyText = highlight.text || highlight.description || highlight.value || '';
            titleText = highlight.title || highlight.heading || highlight.label || '';
            iconClass = highlight.icon || getHighlightIcon(`${titleText} ${bodyText}`);
        }

        const iconWrap = document.createElement('div');
        iconWrap.className = 'highlight-icon-wrap';
        const iconEl = document.createElement('i');
        iconEl.className = iconClass;
        iconEl.setAttribute('aria-hidden', 'true');
        iconWrap.appendChild(iconEl);

        const textWrap = document.createElement('div');
        textWrap.className = 'highlight-text-wrap';

        if (titleText) {
            const titleEl = document.createElement('strong');
            titleEl.className = 'highlight-title';
            titleEl.textContent = titleText;
            textWrap.appendChild(titleEl);
        }

        if (bodyText) {
            const bodyEl = document.createElement('span');
            bodyEl.className = 'highlight-text';
            bodyEl.textContent = bodyText;
            textWrap.appendChild(bodyEl);
        }

        card.append(iconWrap, textWrap);
        fragment.appendChild(card);
    });

    container.replaceChildren(fragment);
}

function renderProjectGallery(item) {
    const section = document.getElementById('dt-project-gallery');
    projectGalleryImages = getProjectGalleryImages(item);
    const preview = projectGalleryImages.find(image => image.type === 'photo') || projectGalleryImages[0];
    const previewImage = document.getElementById('projectGalleryPreviewImage');
    previewImage.src = preview?.src || '';
    previewImage.alt = preview?.alt || '';
    document.getElementById('projectGalleryImageCount').textContent =
        `${projectGalleryImages.length} ${projectGalleryImages.length === 1 ? 'image' : 'images'} · Project photos and floor plans`;
    section.hidden = projectGalleryImages.length === 0;
    syncDetailSubnavTabs();
}

function getGalleryCategoryImages(category = currentGalleryCategory) {
    return projectGalleryImages.filter(image => image.type === category);
}

function openProjectGallery(trigger) {
    const dialog = document.getElementById('projectGalleryDialog');
    if (!dialog || dialog.open || !projectGalleryImages.length) return;
    projectGalleryTrigger = trigger;
    document.getElementById('projectGalleryTitle').textContent = activeProperty?.name || 'Project Gallery';
    dialog.showModal();
    const initialCategory = projectGalleryImages.some(image => image.type === 'photo') ? 'photo' : 'floor-plan';
    setProjectGalleryCategory(initialCategory);
    document.getElementById('projectGalleryClose').focus();
}

function setProjectGalleryCategory(category) {
    const selectedCategory = category === 'floor-plan' ? 'floor-plan' : 'photo';
    const images = getGalleryCategoryImages(selectedCategory);
    if (!images.length) return;
    currentGalleryCategory = selectedCategory;
    currentGalleryIndex = 0;
    document.getElementById('projectGalleryDialog').classList.toggle('is-floor-plan', selectedCategory === 'floor-plan');

    const projectTab = document.getElementById('projectGalleryProjectTab');
    const floorPlanTab = document.getElementById('projectGalleryFloorPlanTab');
    projectTab.hidden = !getGalleryCategoryImages('photo').length;
    floorPlanTab.hidden = !getGalleryCategoryImages('floor-plan').length;
    [projectTab, floorPlanTab].forEach(tab => {
        const selected = tab.dataset.galleryCategory === selectedCategory;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
    });
    document.getElementById('projectGalleryViewer').setAttribute(
        'aria-labelledby',
        selectedCategory === 'photo' ? projectTab.id : floorPlanTab.id
    );

    const thumbnails = document.getElementById('projectGalleryThumbnails');
    thumbnails.replaceChildren();
    images.forEach((image, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `project-gallery-thumbnail${selectedCategory === 'floor-plan' ? ' is-floor-plan' : ''}`;
        button.dataset.galleryIndex = String(index);
        button.setAttribute('aria-label', `Show ${image.alt}`);
        button.setAttribute('aria-pressed', String(index === 0));
        const thumbnailImage = document.createElement('img');
        thumbnailImage.src = image.src;
        thumbnailImage.alt = '';
        thumbnailImage.loading = 'lazy';
        thumbnailImage.decoding = 'async';
        thumbnailImage.fetchPriority = 'low';
        thumbnailImage.draggable = false;
        button.appendChild(thumbnailImage);
        thumbnails.appendChild(button);
    });
    updateProjectGalleryImage();
}

function selectProjectGalleryImage(index) {
    const images = getGalleryCategoryImages();
    if (!images[index]) return;
    currentGalleryIndex = index;
    updateProjectGalleryImage();
}

function updateProjectGalleryImage() {
    const images = getGalleryCategoryImages();
    const image = images[currentGalleryIndex];
    if (!image) return;
    const currentImage = document.getElementById('projectGalleryCurrentImage');
    currentImage.src = image.src;
    currentImage.alt = image.alt;
    currentImage.loading = 'eager';
    currentImage.decoding = 'async';
    currentImage.fetchPriority = 'high';
    currentImage.classList.toggle('is-floor-plan', currentGalleryCategory === 'floor-plan');
    document.getElementById('projectGalleryCounter').textContent = `${currentGalleryIndex + 1} / ${images.length}`;
    document.querySelectorAll('.project-gallery-thumbnail').forEach((thumbnail, index) => {
        thumbnail.setAttribute('aria-pressed', String(index === currentGalleryIndex));
        if (index === currentGalleryIndex) thumbnail.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
}

function changeProjectGalleryImage(direction) {
    const images = getGalleryCategoryImages();
    if (!images.length) return;
    currentGalleryIndex = (currentGalleryIndex + direction + images.length) % images.length;
    updateProjectGalleryImage();
}

function closeProjectGallery() {
    const dialog = document.getElementById('projectGalleryDialog');
    if (dialog?.open) dialog.close();
}

function goToProjectEnquiry(projectId) {
    if (!selectEnquiryProject(projectId)) return;
    navigateToCatalogSection('contact');
    const url = new URL(window.location.href);
    url.searchParams.set('project', projectId);
    window.history.replaceState({ ...window.history.state, enquiryProjectId: projectId }, '', `${url.pathname}${url.search}${url.hash}`);
}

// FULL SPA PROPERTY DETAILS VIEW SWITCHING
function openPropertyDetails(id, { updateUrl = true } = {}) {
    const item = propertiesData.find(p => p.id === id);
    if (!item) return;

    if (updateUrl) setPropertyRoute(item);
    activeProperty = item;
    setActiveNavigation(item.id);
    const builderName = document.body.dataset.homeBuilder || document.body.dataset.builder;
    const projectRegion = item.location.includes('Bengaluru') ? 'Bengaluru' : 'Karnataka';
    updatePageMetadata(`${item.name} | ${builderName} ${projectRegion}`, getPropertyMetaDescription(item));

    document.getElementById('dt-title').textContent = item.name;
    const reraDetails = document.getElementById('dt-rera-details');
    const hasRera = Boolean(item.rera?.trim());
    reraDetails.hidden = !hasRera;
    document.getElementById('dt-location').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${item.location}`;
    document.getElementById('dt-price').textContent = item.price;
    document.getElementById('dt-status').textContent = item.statusText;
    document.getElementById('dt-possession').textContent = item.possession;
    document.getElementById('dt-area').textContent = item.area;
    document.getElementById('dt-config').textContent = item.bhk;
    const overview = document.getElementById('dt-description');
    overview.replaceChildren(...item.overview.map(paragraph => {
        const element = document.createElement('p');
        element.className = 'overview-text';
        const registration = paragraph.match(/^(.*) RERA registration number: (.+)\.$/);
        if (!registration) {
            element.textContent = paragraph;
            return element;
        }

        element.append(document.createTextNode(`${registration[1]} `));
        const badge = document.createElement('span');
        badge.className = 'overview-rera';
        const label = document.createElement('strong');
        label.textContent = 'RERA Registration No.';
        const number = document.createElement('span');
        number.textContent = registration[2];
        badge.append(label, number);
        element.append(badge);
        return element;
    }));
    renderProjectHighlights(item.highlights);
    renderProjectGallery(item);

    setImageSource(document.getElementById('dt-img-1'), item.images[0], { loading: 'eager', priority: 'high' });
    setImageSource(document.getElementById('dt-img-2'), item.images[1], { loading: 'eager' });
    setImageSource(document.getElementById('dt-img-3'), item.images[2], { loading: 'lazy' });

    const fpTabs = document.getElementById('fp-tabs');
    fpTabs.innerHTML = '';
    item.floorPlans.forEach((fp, index) => {
        const btn = document.createElement('button');
        btn.className = `fp-tab-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = fp.bhk;
        btn.onclick = () => switchFloorplan(fp, btn);
        fpTabs.appendChild(btn);
    });
    populatePreferredBhk(item.floorPlans || []);
    switchFloorplan(item.floorPlans[0], fpTabs.firstChild);
    syncEmiCalculatorWithProperty(item);

    const amenGrid = document.getElementById('dt-amenities');
    amenGrid.innerHTML = '';
    item.amenities.forEach(a => {
        const box = document.createElement('div');
        box.className = 'amenity-card';
        box.innerHTML = `<i class="${a.icon}"></i><span>${a.name}</span>`;
        amenGrid.appendChild(box);
    });
    addFeatureExpansion(amenGrid, 6, 'amenities');

    const connectivitySection = document.getElementById('dt-connectivity-section');
    const connectivityGrid = document.getElementById('dt-connectivity');
    const nearbyPlaces = (item.connectivity || []).slice(0, 4);
    connectivityGrid.innerHTML = '';
    const oldConnLink = connectivityGrid.nextElementSibling;
    if (oldConnLink?.classList.contains('feature-expansion-link')) oldConnLink.remove();
    nearbyPlaces.forEach(place => {
        const row = document.createElement('div');
        row.className = 'loc-item';

        if (place.icon) {
            const icon = document.createElement('i');
            icon.className = place.icon;
            icon.setAttribute('aria-hidden', 'true');
            row.appendChild(icon);
        }

        const text = document.createElement('div');
        const label = document.createElement('strong');
        label.textContent = `${place.label}:`;
        text.append(label, document.createTextNode(` ${place.distance}`));
        row.appendChild(text);
        connectivityGrid.appendChild(row);
    });
    connectivitySection.hidden = (item.connectivity || []).length === 0;
    renderProjectComparison(item);

    document.getElementById('catalog-view').style.display = 'none';
    document.getElementById('property-detail-view').style.display = 'block';
    document.getElementById('detailSubnavBar')?.classList.remove('is-visible');
    document.body.removeAttribute('data-property-route-loading');
    if (connectivityPreviewMap) initializeConnectivityPreview(item);
    else if (!connectivityPreviewObserver) initializeConnectivityPreview(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    syncDetailSubnavTabs();
}

function addFeatureExpansion(list, limit, label) {
    list.classList.toggle('feature-list-collapsed', list.children.length > limit);
    const oldLink = list.nextElementSibling;
    if (oldLink?.classList.contains('feature-expansion-link')) oldLink.remove();
    if (list.children.length <= limit) return;
    const link = document.createElement('button');
    link.type = 'button';
    link.className = 'feature-expansion-link';
    link.setAttribute('aria-expanded', 'false');
    const expandedLabel = label === 'amenities' ? 'View all amenities \u2192' : 'Explore connectivity details \u2192';
    const collapsedLabel = label === 'amenities' ? 'Show fewer amenities \u2192' : 'Show fewer connectivity details \u2192';
    link.textContent = expandedLabel;
    link.addEventListener('click', () => {
        const expanded = link.getAttribute('aria-expanded') === 'true';
        link.setAttribute('aria-expanded', String(!expanded));
        list.classList.toggle('feature-list-collapsed', expanded);
        link.textContent = expanded ? expandedLabel : collapsedLabel;
    });
    list.insertAdjacentElement('afterend', link);
}

// DETAIL SUB-NAVIGATION TABS & SCROLLSPY
let isProgrammaticScroll = false;
let programmaticScrollTimer = null;
let subnavRafId = null;

function initDetailSubnav() {
    const subnavBar = document.getElementById('detailSubnavBar');
    const subnavTrack = document.getElementById('subnavTrack');
    const subnavArrowLeft = document.getElementById('subnavArrowLeft');
    const subnavArrowRight = document.getElementById('subnavArrowRight');

    if (!subnavBar || !subnavTrack) return;

    const syncHeaderHeight = () => {
        const header = document.querySelector('.main-header');
        if (header) {
            document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
        }
    };
    syncHeaderHeight();
    window.addEventListener('resize', syncHeaderHeight, { passive: true });
    window.addEventListener('orientationchange', syncHeaderHeight, { passive: true });

    // Click handler for subnav tabs
    subnavTrack.addEventListener('click', event => {
        const tab = event.target.closest('.subnav-tab');
        if (!tab) return;
        const targetId = tab.dataset.target;
        if (!targetId) return;
        const targetSection = document.getElementById(targetId);
        if (!targetSection || targetSection.hidden) return;

        event.preventDefault();

        // Lock scrollspy during programmatic smooth scroll
        isProgrammaticScroll = true;
        clearTimeout(programmaticScrollTimer);
        programmaticScrollTimer = setTimeout(() => {
            isProgrammaticScroll = false;
        }, 850);

        // Update active tab UI immediately
        setActiveSubnavTab(tab);

        // Smooth scroll to target section
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Keyboard navigation (ArrowLeft / ArrowRight) for tabs
    subnavTrack.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        const visibleTabs = [...subnavTrack.querySelectorAll('.subnav-tab:not([hidden])')];
        const currentIndex = visibleTabs.indexOf(document.activeElement);
        if (currentIndex < 0) return;
        event.preventDefault();
        const nextIndex = event.key === 'ArrowRight'
            ? (currentIndex + 1) % visibleTabs.length
            : (currentIndex - 1 + visibleTabs.length) % visibleTabs.length;
        visibleTabs[nextIndex].focus();
        visibleTabs[nextIndex].click();
    });

    // Arrow navigation buttons
    subnavArrowLeft?.addEventListener('click', () => {
        subnavTrack.scrollBy({ left: -220, behavior: 'smooth' });
    });

    subnavArrowRight?.addEventListener('click', () => {
        subnavTrack.scrollBy({ left: 220, behavior: 'smooth' });
    });

    // Update arrows on track scroll
    subnavTrack.addEventListener('scroll', updateSubnavArrows, { passive: true });

    // Window scroll handler for visibility & scrollspy
    window.addEventListener('scroll', onWindowScrollForSubnav, { passive: true });
    window.addEventListener('resize', onWindowResizeForSubnav, { passive: true });

    // Initial arrow state
    updateSubnavArrows();
}

function updateSubnavArrows() {
    const track = document.getElementById('subnavTrack');
    const leftBtn = document.getElementById('subnavArrowLeft');
    const rightBtn = document.getElementById('subnavArrowRight');
    if (!track || !leftBtn || !rightBtn) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const hasOverflow = maxScroll > 8;

    if (!hasOverflow) {
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
        leftBtn.disabled = true;
        rightBtn.disabled = true;
        return;
    }

    const currentScroll = track.scrollLeft;
    const canScrollLeft = currentScroll > 8;
    const canScrollRight = currentScroll < maxScroll - 8;

    leftBtn.style.display = canScrollLeft ? 'inline-flex' : 'none';
    leftBtn.disabled = !canScrollLeft;

    rightBtn.style.display = canScrollRight ? 'inline-flex' : 'none';
    rightBtn.disabled = !canScrollRight;
}

function setActiveSubnavTab(targetTab) {
    if (!targetTab) return;
    const track = document.getElementById('subnavTrack');
    if (!track) return;

    const allTabs = track.querySelectorAll('.subnav-tab');
    allTabs.forEach(tab => {
        const isActive = tab === targetTab;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        tab.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    // Auto-scroll track to keep active tab centered
    targetTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    updateSubnavArrows();
}

function onWindowScrollForSubnav() {
    if (subnavRafId) return;
    subnavRafId = requestAnimationFrame(() => {
        subnavRafId = null;
        handleSubnavScrollspy();
    });
}

function onWindowResizeForSubnav() {
    updateSubnavArrows();
    onWindowScrollForSubnav();
}

function handleSubnavScrollspy() {
    const detailView = document.getElementById('property-detail-view');
    const subnavBar = document.getElementById('detailSubnavBar');
    if (!detailView || !subnavBar) return;

    // Check if property detail view is currently visible
    if (detailView.style.display === 'none' || detailView.offsetParent === null) {
        subnavBar.classList.remove('is-visible');
        return;
    }

    // Visibility toggle: reveal only when scrolled down past hero
    const revealThreshold = 260;
    const isPastHero = window.scrollY > revealThreshold;
    subnavBar.classList.toggle('is-visible', isPastHero);

    if (!isPastHero) {
        // Reset to first tab when at the top
        const firstTab = document.querySelector('.subnav-tab[data-target="dt-overview-section"]');
        if (firstTab && !firstTab.classList.contains('active')) {
            setActiveSubnavTab(firstTab);
        }
        return;
    }

    if (isProgrammaticScroll) return;

    // Scrollspy section detection
    const sectionTargets = [
        'dt-overview-section',
        'dt-project-highlights',
        'dt-project-gallery',
        'dt-floorplans-section',
        'dt-emi-calculator',
        'dt-amenities-section',
        'dt-connectivity-section',
        'dt-project-comparison'
    ];

    const isNearBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60);

    const visibleSections = sectionTargets
        .map(id => document.getElementById(id))
        .filter(el => el && !el.hidden && el.offsetParent !== null);

    if (!visibleSections.length) return;

    let currentSection = null;

    if (isNearBottom) {
        currentSection = visibleSections[visibleSections.length - 1];
    } else {
        const triggerLine = (window.innerWidth <= 768 ? 120 : 140) + 40;
        for (let i = 0; i < visibleSections.length; i++) {
            const rect = visibleSections[i].getBoundingClientRect();
            if (rect.top <= triggerLine) {
                currentSection = visibleSections[i];
            } else {
                break;
            }
        }
        if (!currentSection) currentSection = visibleSections[0];
    }

    if (currentSection) {
        const matchingTab = document.querySelector(`.subnav-tab[data-target="${currentSection.id}"]`);
        if (matchingTab && !matchingTab.classList.contains('active')) {
            setActiveSubnavTab(matchingTab);
        }
    }
}

function syncDetailSubnavTabs() {
    const header = document.querySelector('.main-header');
    if (header) document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    const subnavBar = document.getElementById('detailSubnavBar');
    const track = document.getElementById('subnavTrack');
    if (!subnavBar || !track) return;

    const hlSection = document.getElementById('dt-project-highlights');
    const gallerySection = document.getElementById('dt-project-gallery');
    const connSection = document.getElementById('dt-connectivity-section');
    const compSection = document.getElementById('dt-project-comparison');

    const hlTab = document.getElementById('subnav-tab-highlights');
    const galleryTab = document.getElementById('subnav-tab-gallery');
    const connTab = document.getElementById('subnav-tab-connectivity');
    const compTab = document.getElementById('subnav-tab-comparison');

    if (hlTab) hlTab.hidden = !hlSection || hlSection.hidden || hlSection.offsetParent === null;
    if (galleryTab) galleryTab.hidden = !gallerySection || gallerySection.hidden || gallerySection.offsetParent === null;
    if (connTab) connTab.hidden = !connSection || connSection.hidden || connSection.offsetParent === null;
    if (compTab) compTab.hidden = !compSection || compSection.hidden || compSection.offsetParent === null;

    // Reset to first visible tab if no active tab or active tab is hidden
    const currentActive = track.querySelector('.subnav-tab.active:not([hidden])');
    if (!currentActive) {
        const firstTab = track.querySelector('.subnav-tab:not([hidden])');
        if (firstTab) setActiveSubnavTab(firstTab);
    }

    updateSubnavArrows();
}
function populatePreferredBhk(floorPlans) {
    const select = document.getElementById('preferredBhkSelect');
    if (!select) return;

    const listbox = select.querySelector('.bhk-select-options');
    const trigger = select.querySelector('.bhk-select-trigger');
    const valueInput = select.querySelector('input[name="preferredBhk"]');
    const label = trigger.querySelector('span');
    listbox.replaceChildren();
    valueInput.value = floorPlans[0]?.bhk || '';
    label.textContent = valueInput.value || 'Select Preferred BHK';

    floorPlans.forEach((floorPlan, index) => {
        const option = document.createElement('button');
        option.type = 'button';
        option.className = 'bhk-select-option';
        option.setAttribute('role', 'option');
        option.setAttribute('aria-selected', String(index === 0));
        option.classList.toggle('active', index === 0);
        option.dataset.value = floorPlan.bhk;
        option.textContent = floorPlan.bhk;
        option.id = `preferred-bhk-option-${index}`;
        listbox.appendChild(option);
    });
    select.hidden = floorPlans.length === 0;
}

function handleBhkDropdownClick(event) {
    const select = document.getElementById('preferredBhkSelect');
    if (!select) return;

    const trigger = event.target.closest('.bhk-select-trigger');
    if (trigger && select.contains(trigger)) {
        const listbox = select.querySelector('.bhk-select-options');
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        listbox.hidden = isOpen;
        trigger.setAttribute('aria-expanded', String(!isOpen));
        if (!isOpen) {
            const rect = trigger.getBoundingClientRect();
            const estimatedHeight = Math.min(listbox.children.length * 44 + 14, window.innerHeight * 0.4, 240);
            const spaceBelow = window.innerHeight - rect.bottom;
            const spaceAbove = rect.top;
            listbox.classList.toggle('opens-up', spaceBelow < estimatedHeight && spaceAbove > spaceBelow);
            select.querySelector('.bhk-select-option')?.focus();
        }
        return;
    }

    const option = event.target.closest('.bhk-select-option');
    if (option && select.contains(option)) {
        const floorPlanIndex = activeProperty?.floorPlans?.findIndex(plan => plan.bhk === option.dataset.value) ?? -1;
        const floorPlanTab = document.querySelectorAll('#fp-tabs .fp-tab-btn')[floorPlanIndex];
        if (floorPlanIndex >= 0 && floorPlanTab) {
            switchFloorplan(activeProperty.floorPlans[floorPlanIndex], floorPlanTab);
        } else {
            setPreferredBhk(option.dataset.value);
        }
        select.querySelector('.bhk-select-options').hidden = true;
        select.querySelector('.bhk-select-trigger').setAttribute('aria-expanded', 'false');
        select.querySelector('.bhk-select-trigger').focus();
        return;
    }

    select.querySelector('.bhk-select-options').hidden = true;
    select.querySelector('.bhk-select-trigger').setAttribute('aria-expanded', 'false');
}

function handleBhkDropdownKeydown(event) {
    const select = document.getElementById('preferredBhkSelect');
    if (!select) return;
    const trigger = select.querySelector('.bhk-select-trigger');
    if (event.target === trigger && (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ')) {
        if (trigger.getAttribute('aria-expanded') !== 'true') {
            event.preventDefault();
            trigger.click();
        }
        return;
    }
    if (event.key !== 'Escape' || trigger.getAttribute('aria-expanded') !== 'true') return;
    select.querySelector('.bhk-select-options').hidden = true;
    select.querySelector('.bhk-select-options').classList.remove('opens-up');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
}

function showCatalogView({ updateUrl = true } = {}) {
    if (updateUrl) {
        navigateToCatalogSection('residences');
        return;
    }
    document.getElementById('property-detail-view').style.display = 'none';
    document.getElementById('detailSubnavBar')?.classList.remove('is-visible');
    document.getElementById('catalog-view').style.display = 'block';
    updatePageMetadata(initialDocumentTitle, initialMetaDescription);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setPropertyRoute(item, { replace = false } = {}) {
    const url = new URL(window.location.href);
    const basePath = getSiteBasePath();
    url.pathname = item ? `${basePath}${encodeURIComponent(item.id)}` : basePath;
    if (item) {
        url.search = '';
        url.hash = '';
    } else {
        url.searchParams.delete('property');
    }

    const state = { ...window.history.state, propertyId: item?.id || null };
    const method = replace ? 'replaceState' : 'pushState';
    window.history[method](state, '', `${url.pathname}${url.search}${url.hash}`);
}

function restorePropertyRoute(event) {
    if (!propertiesData.length) return;
    const route = getPropertyIdFromPath();
    const item = propertiesData.find(property => property.id === route);

    if (item) {
        setActiveNavigation(item.id);
        openPropertyDetails(item.id, { updateUrl: false });
        if (new URL(window.location.href).searchParams.get('map') === 'location') {
            openConnectivityMap({ updateUrl: false });
        }
        return;
    }

    const sectionTargets = {
        residences: 'residences',
        about: 'about',
        faq: 'faq',
        contact: 'contact'
    };
    if (sectionTargets[route]) {
        setActiveNavigation(route);
        document.getElementById('property-detail-view').style.display = 'none';
        document.getElementById('detailSubnavBar')?.classList.remove('is-visible');
        document.getElementById('catalog-view').style.display = 'block';
        updatePageMetadata(initialDocumentTitle, initialMetaDescription);
        if (route === 'contact') restoreEnquiryProjectFromUrl();
        requestAnimationFrame(() => {
            document.getElementById(sectionTargets[route])?.scrollIntoView({ block: 'start' });
        });
        return;
    }

    if (route) setPropertyRoute(null, { replace: true });
    setActiveNavigation('');
    showCatalogView({ updateUrl: false });
}

function setActiveNavigation(route) {
    const basePath = getSiteBasePath();
    const targetPath = route?.startsWith('/') ? new URL(route, window.location.href).pathname : route ? `${basePath}${route}` : basePath;
    document.querySelectorAll('#primaryNavigation .nav-link').forEach(link => {
        const linkPath = new URL(link.getAttribute('href'), window.location.href).pathname;
        link.classList.toggle('active', linkPath.replace(/\/$/, '') === targetPath.replace(/\/$/, ''));
    });
}

function getPropertyIdFromPath() {
    const basePath = getSiteBasePath();
    const relativePath = window.location.pathname.startsWith(basePath)
        ? window.location.pathname.slice(basePath.length).replace(/\/$/, '')
        : '';
    if (!relativePath || relativePath === 'index.html') return '';
    return decodeURIComponent(relativePath.split('/').filter(Boolean).at(-1) || '');
}

function getSiteBasePath() {
    const configuredBase = document.querySelector('base')?.href || window.location.origin + '/';
    const basePath = new URL(configuredBase, window.location.href).pathname;
    return basePath.endsWith('/') ? basePath : `${basePath}/`;
}

function clearPropertyRoute() {
    if (getPropertyIdFromPath()) {
        setPropertyRoute(null, { replace: true });
    }
    updatePageMetadata(initialDocumentTitle, initialMetaDescription);
}

function navigateToCatalogSection(sectionId, route = sectionId, { scrollToTop = false } = {}) {
    const detailView = document.getElementById('property-detail-view');
    if (detailView && detailView.style.display !== 'none') {
        detailView.style.display = 'none';
        document.getElementById('catalog-view').style.display = 'block';
    }

    const menu = document.getElementById('primaryNavigation');
    const toggle = document.querySelector('.mobile-menu-toggle');
    if (menu?.classList.contains('active')) {
        menu.classList.remove('active');
        toggle?.setAttribute('aria-expanded', 'false');
        toggle?.setAttribute('aria-label', 'Open navigation menu');
        if (toggle) toggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    }

    const basePath = getSiteBasePath();
    const targetPath = route ? `${basePath}${route}` : basePath;
    setActiveNavigation(route || '');
    if (window.location.pathname !== targetPath || window.location.search || window.location.hash) {
        window.history.pushState({ section: route || 'home' }, '', targetPath);
    }

    requestAnimationFrame(() => {
        if (scrollToTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

function goToOverview() {
    navigateToCatalogSection('developer-hero', '', { scrollToTop: true });
}

function goToResidences() {
    navigateToCatalogSection('residences');
}

function goToAbout() {
    navigateToCatalogSection('about');
}

function goToFaq() {
    navigateToCatalogSection('faq');
}

function goToContact() {
    navigateToCatalogSection('contact');
}

function goToSiteVisitForm() {
    navigateToCatalogSection('contact');
}

function goToDetailEnquiry() {
    document.getElementById('detail-site-visit')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('primaryNavigation');
    const toggle = document.querySelector('.mobile-menu-toggle');
    if (!menu || !toggle) return;

    const isOpen = menu.classList.toggle('active');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    toggle.innerHTML = `<i class="fa-solid fa-${isOpen ? 'xmark' : 'bars'}" aria-hidden="true"></i>`;
}

function switchFloorplan(fp, btn) {
    document.querySelectorAll('.fp-tab-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    document.getElementById('fp-type').textContent = `${fp.bhk} Layout`;
    document.getElementById('fp-sqft').textContent = fp.sqft;
    document.getElementById('fp-price').textContent = fp.price;
    const display = document.getElementById('fp-display');
    const imageBox = display.querySelector('.fp-img-placeholder');
    imageBox?.classList.toggle('has-plan-image', Boolean(fp.image));
    let planImage = display.querySelector('.fp-plan-image');
    if (fp.image) {
        if (!planImage) {
            planImage = document.createElement('img');
            planImage.className = 'fp-plan-image';
            planImage.alt = `${fp.bhk} floor plan`;
            display.querySelector('.fp-img-placeholder')?.replaceChildren(planImage);
        }
        setImageSource(planImage, fp.image);
    } else if (planImage) {
        planImage.remove();
        const placeholder = display.querySelector('.fp-img-placeholder');
        if (placeholder) placeholder.innerHTML = '<i class="fa-solid fa-map" style="font-size: 2.5rem; margin-bottom: 8px;"></i><span>Master Floor Layout Blueprint</span>';
    }
    setPreferredBhk(fp.bhk);
    syncEmiCalculatorWithFloorPlan(fp);
}

function setPreferredBhk(bhk) {
    const select = document.getElementById('preferredBhkSelect');
    if (!select) return;

    const option = [...select.querySelectorAll('.bhk-select-option')]
        .find(candidate => candidate.dataset.value === bhk);
    if (!option) return;

    select.querySelector('.bhk-select-trigger span').textContent = bhk;
    select.querySelector('input[name="preferredBhk"]').value = bhk;
    select.querySelectorAll('.bhk-select-option').forEach(candidate => {
        const isSelected = candidate === option;
        candidate.setAttribute('aria-selected', String(isSelected));
        candidate.classList.toggle('active', isSelected);
    });
}

// FAQ TOGGLE ACCORDION
function toggleFaq(element) {
    element.classList.toggle('active');
}

// MODAL HELPERS
function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

function openWhatsAppModal() {
    document.getElementById('waPopModal').classList.add('active');
}

function sendWhatsAppLead() {
    const phone = document.getElementById('waPhoneInput').value.trim();
    if (!phone) {
        alert('Please enter a valid phone number');
        return;
    }
    alert('Thank you! The E-Brochure and pricing sheet have been dispatched via WhatsApp.');
    closeModal('waPopModal');
}

function handleFormSubmit(e) {
    e.preventDefault();
    alert('Your request has been registered. Our sales representative will contact you within 15 minutes.');
}

// ==================== HOME LOAN EMI CALCULATOR ====================
let emiBasePrice = 9025000;
let emiCurrentPropertyName = 'Kolte Patil Raaga';
let emiUserModifiedPrice = false;

function parseIndianPrice(priceStr) {
    if (!priceStr || typeof priceStr !== 'string') return null;
    const clean = priceStr.replace(/,/g, '').trim();
    const crMatch = clean.match(/([\d.]+)\s*(?:cr|crore)/i);
    if (crMatch) {
        const val = parseFloat(crMatch[1]);
        if (!isNaN(val) && val > 0) return Math.round(val * 10000000);
    }
    const lMatch = clean.match(/([\d.]+)\s*(?:l|lac|lakh|lakhs)/i);
    if (lMatch) {
        const val = parseFloat(lMatch[1]);
        if (!isNaN(val) && val > 0) return Math.round(val * 100000);
    }
    const numMatch = clean.match(/(\d+)/);
    if (numMatch) {
        const val = parseInt(numMatch[1], 10);
        if (!isNaN(val) && val > 0) return val;
    }
    return null;
}

function formatINR(val) {
    if (isNaN(val) || val === null || val === undefined) return '₹0';
    return '₹' + Math.round(val).toLocaleString('en-IN');
}

function formatINRShort(val) {
    if (isNaN(val) || val <= 0) return '₹0';
    if (val >= 10000000) {
        const cr = (val / 10000000).toFixed(2).replace(/\.00$/, '').replace(/(\.[1-9])0$/, '$1');
        return `₹${cr} Cr`;
    }
    if (val >= 100000) {
        const l = (val / 100000).toFixed(2).replace(/\.00$/, '').replace(/(\.[1-9])0$/, '$1');
        return `₹${l} Lakh`;
    }
    return '₹' + Math.round(val).toLocaleString('en-IN');
}

function calculateEmi(principal, annualRate, tenureYears) {
    if (principal <= 0 || tenureYears <= 0) {
        return { emi: 0, totalPayment: 0, totalInterest: 0, principalPct: 50, interestPct: 50 };
    }
    const r = (annualRate / 12) / 100;
    const n = tenureYears * 12;
    if (r === 0) {
        const emi = Math.round(principal / n);
        return { emi, totalPayment: principal, totalInterest: 0, principalPct: 100, interestPct: 0 };
    }
    const factor = Math.pow(1 + r, n);
    const emi = Math.round(principal * r * (factor / (factor - 1)));
    const totalPayment = emi * n;
    const totalInterest = Math.max(0, totalPayment - principal);
    const principalPct = totalPayment > 0 ? (principal / totalPayment) * 100 : 50;
    const interestPct = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 50;
    return { emi, totalPayment, totalInterest, principalPct, interestPct };
}

function getPropertySliderLimits(price) {
    if (!price || price <= 0) return { min: 2500000, max: 250000000, step: 100000 };
    let min, max, step;
    if (price < 15000000) {
        min = Math.max(2500000, Math.floor((price * 0.4) / 500000) * 500000);
        max = Math.ceil((price * 2.5) / 2500000) * 2500000;
        step = 100000;
    } else if (price < 50000000) {
        min = Math.floor((price * 0.4) / 1000000) * 1000000;
        max = Math.ceil((price * 2.2) / 5000000) * 5000000;
        step = 100000;
    } else {
        min = Math.floor((price * 0.4) / 2500000) * 2500000;
        max = Math.ceil((price * 2.0) / 10000000) * 10000000;
        step = 500000;
    }
    return { min, max, step };
}

function updateSliderTrack(slider) {
    if (!slider) return;
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 100;
    const val = parseFloat(slider.value) || 0;
    const percentage = Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
    slider.style.background = `linear-gradient(to right, var(--brand-gold) 0%, var(--brand-gold) ${percentage}%, var(--border-light) ${percentage}%, var(--border-light) 100%)`;
}

function updateEmiCalculator() {
    const propSlider = document.getElementById('emi-prop-slider');
    const downSlider = document.getElementById('emi-down-slider');
    const tenureSlider = document.getElementById('emi-tenure-slider');
    const rateSlider = document.getElementById('emi-rate-slider');
    if (!propSlider || !downSlider || !tenureSlider || !rateSlider) return;

    const propVal = parseFloat(propSlider.value) || 0;
    const downPct = parseFloat(downSlider.value) || 20;
    const tenureYears = parseInt(tenureSlider.value, 10) || 20;
    const rate = parseFloat(rateSlider.value) || 8.5;

    const downPaymentAmt = Math.round(propVal * (downPct / 100));
    const loanAmount = Math.max(0, propVal - downPaymentAmt);
    const result = calculateEmi(loanAmount, rate, tenureYears);

    const propDisplay = document.getElementById('emi-prop-display');
    const propSub = document.getElementById('emi-prop-sub');
    if (propDisplay) propDisplay.textContent = formatINR(propVal);
    if (propSub) propSub.textContent = `(${formatINRShort(propVal)})`;

    const downPctDisplay = document.getElementById('emi-down-pct-display');
    const downAmtDisplay = document.getElementById('emi-down-amount-display');
    if (downPctDisplay) downPctDisplay.textContent = `${Math.round(downPct)}%`;
    if (downAmtDisplay) downAmtDisplay.textContent = formatINR(downPaymentAmt);

    const loanAmountDisplay = document.getElementById('emi-loan-amount');
    if (loanAmountDisplay) loanAmountDisplay.textContent = formatINR(loanAmount);

    const tenureDisplay = document.getElementById('emi-tenure-display');
    const tenureMonths = document.getElementById('emi-tenure-months');
    if (tenureDisplay) tenureDisplay.textContent = `${tenureYears} Years`;
    if (tenureMonths) tenureMonths.textContent = `(${tenureYears * 12} Months)`;

    const rateDisplay = document.getElementById('emi-rate-display');
    if (rateDisplay) rateDisplay.textContent = `${rate.toFixed(2)}%`;

    const monthlyOutput = document.getElementById('emi-monthly-output');
    if (monthlyOutput) monthlyOutput.textContent = formatINR(result.emi);

    const heroFootnote = document.getElementById('emi-hero-footnote');
    if (heroFootnote) {
        heroFootnote.textContent = `*For ${formatINRShort(loanAmount)} loan at ${rate.toFixed(2)}% for ${tenureYears} yrs`;
    }

    const tableDown = document.getElementById('emi-table-down');
    const tableDownPct = document.getElementById('emi-table-down-pct');
    if (tableDown) tableDown.textContent = formatINR(downPaymentAmt);
    if (tableDownPct) tableDownPct.textContent = `(${Math.round(downPct)}%)`;

    const tablePrincipal = document.getElementById('emi-table-principal');
    const tableInterest = document.getElementById('emi-table-interest');
    const tableTotal = document.getElementById('emi-table-total');
    if (tablePrincipal) tablePrincipal.textContent = formatINR(loanAmount);
    if (tableInterest) tableInterest.textContent = formatINR(result.totalInterest);
    if (tableTotal) tableTotal.textContent = formatINR(result.totalPayment);

    const donutCenterVal = document.getElementById('emi-donut-center-val');
    if (donutCenterVal) donutCenterVal.textContent = formatINRShort(result.totalPayment);

    const legendPrincipalVal = document.getElementById('emi-legend-principal-val');
    const legendPrincipalPct = document.getElementById('emi-legend-principal-pct');
    const legendInterestVal = document.getElementById('emi-legend-interest-val');
    const legendInterestPct = document.getElementById('emi-legend-interest-pct');
    if (legendPrincipalVal) legendPrincipalVal.textContent = formatINR(loanAmount);
    if (legendPrincipalPct) legendPrincipalPct.textContent = `(${Math.round(result.principalPct)}%)`;
    if (legendInterestVal) legendInterestVal.textContent = formatINR(result.totalInterest);
    if (legendInterestPct) legendInterestPct.textContent = `(${Math.round(result.interestPct)}%)`;

    const C = 238.761;
    const principalDash = (result.principalPct / 100) * C;
    const interestDash = (result.interestPct / 100) * C;

    const donutPrincipal = document.getElementById('emi-donut-principal');
    const donutInterest = document.getElementById('emi-donut-interest');
    if (donutPrincipal) {
        donutPrincipal.style.strokeDasharray = `${principalDash.toFixed(2)} ${C}`;
        donutPrincipal.style.strokeDashoffset = '0';
    }
    if (donutInterest) {
        donutInterest.style.strokeDasharray = `${interestDash.toFixed(2)} ${C}`;
        donutInterest.style.strokeDashoffset = `-${principalDash.toFixed(2)}`;
    }

    updateSliderTrack(propSlider);
    updateSliderTrack(downSlider);
    updateSliderTrack(tenureSlider);
    updateSliderTrack(rateSlider);
}

function syncEmiCalculatorWithProperty(property) {
    if (!property) return;
    emiCurrentPropertyName = property.name;
    const parsed = parseIndianPrice(property.price);
    if (parsed) {
        emiBasePrice = parsed;
    }
    emiUserModifiedPrice = false;

    const propSlider = document.getElementById('emi-prop-slider');
    if (propSlider && parsed) {
        const limits = getPropertySliderLimits(parsed);
        propSlider.min = String(limits.min);
        propSlider.max = String(limits.max);
        propSlider.step = String(limits.step);
        propSlider.value = String(parsed);

        const minLbl = document.getElementById('emi-prop-min-lbl');
        const maxLbl = document.getElementById('emi-prop-max-lbl');
        if (minLbl) minLbl.textContent = formatINRShort(limits.min);
        if (maxLbl) maxLbl.textContent = formatINRShort(limits.max);
    }

    const syncLabel = document.getElementById('emi-sync-property');
    if (syncLabel) {
        syncLabel.textContent = property.name;
    }

    updateEmiCalculator();
}

function syncEmiCalculatorWithFloorPlan(fp) {
    if (!fp || emiUserModifiedPrice) return;
    const parsed = parseIndianPrice(fp.price);
    if (parsed) {
        emiBasePrice = parsed;
        const propSlider = document.getElementById('emi-prop-slider');
        if (propSlider) {
            const limits = getPropertySliderLimits(parsed);
            propSlider.min = String(limits.min);
            propSlider.max = String(limits.max);
            propSlider.step = String(limits.step);
            propSlider.value = String(parsed);

            const minLbl = document.getElementById('emi-prop-min-lbl');
            const maxLbl = document.getElementById('emi-prop-max-lbl');
            if (minLbl) minLbl.textContent = formatINRShort(limits.min);
            if (maxLbl) maxLbl.textContent = formatINRShort(limits.max);
        }
        const syncLabel = document.getElementById('emi-sync-property');
        if (syncLabel && activeProperty) {
            syncLabel.textContent = `${activeProperty.name} (${fp.bhk})`;
        }
        updateEmiCalculator();
    }
}

function initEmiCalculator() {
    const calcSection = document.getElementById('dt-emi-calculator');
    if (!calcSection) return;

    const propSlider = document.getElementById('emi-prop-slider');
    const downSlider = document.getElementById('emi-down-slider');
    const tenureSlider = document.getElementById('emi-tenure-slider');
    const rateSlider = document.getElementById('emi-rate-slider');
    const resetBtn = document.getElementById('emi-reset-price-btn');

    if (propSlider) {
        propSlider.addEventListener('input', () => {
            emiUserModifiedPrice = true;
            const syncLabel = document.getElementById('emi-sync-property');
            if (syncLabel) {
                syncLabel.textContent = `${emiCurrentPropertyName} (Custom Value)`;
            }
            updateEmiCalculator();
        });
    }

    if (downSlider) {
        downSlider.addEventListener('input', updateEmiCalculator);
    }

    if (tenureSlider) {
        tenureSlider.addEventListener('input', () => {
            const years = parseInt(tenureSlider.value, 10);
            document.querySelectorAll('.emi-chip').forEach(chip => {
                chip.classList.toggle('active', parseInt(chip.dataset.years, 10) === years);
            });
            updateEmiCalculator();
        });
    }

    if (rateSlider) {
        rateSlider.addEventListener('input', updateEmiCalculator);
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            emiUserModifiedPrice = false;
            if (propSlider) {
                const limits = getPropertySliderLimits(emiBasePrice);
                propSlider.min = String(limits.min);
                propSlider.max = String(limits.max);
                propSlider.step = String(limits.step);
                propSlider.value = String(emiBasePrice);

                const minLbl = document.getElementById('emi-prop-min-lbl');
                const maxLbl = document.getElementById('emi-prop-max-lbl');
                if (minLbl) minLbl.textContent = formatINRShort(limits.min);
                if (maxLbl) maxLbl.textContent = formatINRShort(limits.max);
            }
            const syncLabel = document.getElementById('emi-sync-property');
            if (syncLabel) {
                syncLabel.textContent = emiCurrentPropertyName;
            }
            updateEmiCalculator();
        });
    }

    document.querySelectorAll('.emi-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.emi-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const years = parseInt(chip.dataset.years, 10);
            if (tenureSlider) {
                tenureSlider.value = String(years);
            }
            updateEmiCalculator();
        });
    });

    updateEmiCalculator();
}

// EXPOSE FUNCTIONS TO GLOBAL SCOPE FOR HTML INLINE ONCLICK HANDLERS
Object.assign(window, {
    movePropertyCarousel,
    filterCategory,
    handleSearch,
    clearSearch,
    submitSearch,
    openQuickView,
    openPropertyDetails,
    showCatalogView,
    goToOverview,
    goToResidences,
    goToAbout,
    goToFaq,
    goToContact,
    goToSiteVisitForm,
    goToDetailEnquiry,
    toggleMobileMenu,
    switchFloorplan,
    toggleFaq,
    closeModal,
    openWhatsAppModal,
    sendWhatsAppLead,
    handleFormSubmit,
    updateEmiCalculator,
    initDetailSubnav,
    syncDetailSubnavTabs
});
