let propertiesData = [];
let currentActiveCategory = 'ALL';
let activeProperty = null;

// INITIALIZATION
document.addEventListener('DOMContentLoaded', async () => {
    document.addEventListener('click', handleBhkDropdownClick);
    document.addEventListener('click', handleProjectDropdownClick);
    document.addEventListener('keydown', handleBhkDropdownKeydown);
    document.addEventListener('keydown', handleProjectDropdownKeydown);
    document.getElementById('primaryNavigation')?.addEventListener('click', event => {
        const clickedLink = event.target.closest('.nav-link');
        if (!clickedLink) return;

        document.querySelectorAll('#primaryNavigation .nav-link').forEach(link => {
            link.classList.toggle('active', link === clickedLink);
        });
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
        renderBuilderFooter(module.developerInfo?.hero, propertiesData);

        renderPropertyCards(propertiesData);
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
    if (policyLink) policyLink.href = `privacy-policy.html?builder=${encodeURIComponent(document.body.dataset.builder)}`;
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
                <img src="${getCardImageUrl(item.images[0])}" alt="${item.name}" class="card-img" loading="lazy" decoding="async">
                <span class="card-badge ${item.badgeClass}">${item.statusText}</span>
                ${item.rera?.trim() ? '<span class="rera-verified-badge"><i class="fa-solid fa-circle-check" aria-hidden="true"></i> RERA Verified</span>' : ''}
            </div>
            <div class="card-content">
                <div class="card-location"><i class="fa-solid fa-location-dot"></i> ${item.location}</div>
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

        grid.appendChild(card);
    });
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
        link.classList.toggle('active', link.getAttribute('href') === '#residences');
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

// FULL SPA PROPERTY DETAILS VIEW SWITCHING
function openPropertyDetails(id) {
    const item = propertiesData.find(p => p.id === id);
    if (!item) return;

    activeProperty = item;

    document.getElementById('dt-title').textContent = item.name;
    const reraDetails = document.getElementById('dt-rera-details');
    const reraValue = document.getElementById('dt-rera-value');
    const hasRera = Boolean(item.rera?.trim());
    reraDetails.hidden = !hasRera;
    reraDetails.open = false;
    reraValue.textContent = hasRera ? `RERA No: ${item.rera}` : '';
    document.getElementById('dt-location').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${item.location}`;
    document.getElementById('dt-price').textContent = item.price;
    document.getElementById('dt-status').textContent = item.statusText;
    document.getElementById('dt-possession').textContent = item.possession;
    document.getElementById('dt-area').textContent = item.area;
    document.getElementById('dt-config').textContent = item.bhk;
    document.getElementById('dt-description').textContent = item.description;

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
    const nearbyPlaces = item.connectivity || [];
    connectivityGrid.innerHTML = '';
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
    addFeatureExpansion(connectivityGrid, 4, 'connectivity');
    connectivitySection.hidden = nearbyPlaces.length === 0;

    document.getElementById('catalog-view').style.display = 'none';
    document.getElementById('property-detail-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

function showCatalogView() {
    document.getElementById('property-detail-view').style.display = 'none';
    document.getElementById('catalog-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToCatalogSection(sectionId) {
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

    requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

function goToOverview() {
    navigateToCatalogSection('developer-hero');
}

function goToResidences() {
    navigateToCatalogSection('residences');
}

function goToSiteVisitForm() {
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

    requestAnimationFrame(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
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

// LIGHTBOX GALLERY
function openLightbox(index) {
    if (!activeProperty || !activeProperty.images[index]) return;
    setImageSource(document.getElementById('lightboxImg'), activeProperty.images[index], { loading: 'eager' });
    document.getElementById('lightboxModal').classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightboxModal').classList.remove('active');
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
    goToSiteVisitForm,
    goToDetailEnquiry,
    toggleMobileMenu,
    switchFloorplan,
    toggleFaq,
    closeModal,
    openWhatsAppModal,
    sendWhatsAppLead,
    handleFormSubmit,
    openLightbox,
    closeLightbox
});
