let propertiesData = [];
let currentActiveCategory = 'ALL';
let activeProperty = null;

// INITIALIZATION
document.addEventListener('DOMContentLoaded', async () => {
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

        renderPropertyCards(propertiesData);
    } catch (err) {
        console.error(`Failed to load data for builder "${builder}":`, err);
    }

    // Timed Pop-up Engagement trigger after 3.5 seconds
    setTimeout(() => {
        const modal = document.getElementById('waPopModal');
        if (modal && !sessionStorage.getItem('waPopupShown')) {
            modal.classList.add('active');
            sessionStorage.setItem('waPopupShown', 'true');
        }
    }, 3500);
});

// RENDER PROPERTY CARDS
function renderPropertyCards(data) {
    const grid = document.getElementById('propertyGrid');
    const countEl = document.getElementById('resultsCount');
    grid.innerHTML = '';

    countEl.textContent = `Showing ${data.length} Exclusive ${data.length === 1 ? 'Residence' : 'Residences'}`;

    if (data.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-building-circle-exclamation"></i>
                <h3>No Properties Match Your Search</h3>
                <p style="color: var(--text-muted); margin-top: 5px;">Try tweaking your search keywords or clear filters.</p>
            </div>
        `;
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <div class="card-image-wrap">
                <img src="${item.images[0]}" alt="${item.name}" class="card-img">
                <span class="card-badge ${item.badgeClass}">${item.statusText}</span>
            </div>
            <div class="card-content">
                <div class="card-location"><i class="fa-solid fa-location-dot"></i> ${item.location}</div>
                <h3 class="card-title">${item.name}</h3>
                <div class="card-specs-row">
                    <div class="spec-item"><i class="fa-solid fa-bed"></i> ${item.bhk}</div>
                    <div class="spec-item"><i class="fa-solid fa-vector-square"></i> ${item.area}</div>
                </div>
                <div class="card-footer-price">
                    <div>
                        <span class="price-label">Starting From</span>
                        <div class="price-value">${item.price}</div>
                    </div>
                </div>
                <div class="card-actions">
                    <button class="btn-quick-view" onclick="openQuickView('${item.id}')">Quick View</button>
                    <button class="btn-view-details" onclick="openPropertyDetails('${item.id}')">View Details</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
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

    document.getElementById('qv-img').src = item.images[0];
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
    document.getElementById('dt-location').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${item.location}`;
    document.getElementById('dt-price').textContent = item.price;
    document.getElementById('dt-status').textContent = item.statusText;
    document.getElementById('dt-possession').textContent = item.possession;
    document.getElementById('dt-area').textContent = item.area;
    document.getElementById('dt-config').textContent = item.bhk;
    document.getElementById('dt-description').textContent = item.description;

    document.getElementById('dt-img-1').src = item.images[0];
    document.getElementById('dt-img-2').src = item.images[1];
    document.getElementById('dt-img-3').src = item.images[2];

    const fpTabs = document.getElementById('fp-tabs');
    fpTabs.innerHTML = '';
    item.floorPlans.forEach((fp, index) => {
        const btn = document.createElement('button');
        btn.className = `fp-tab-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = fp.bhk;
        btn.onclick = () => switchFloorplan(fp, btn);
        fpTabs.appendChild(btn);
    });
    switchFloorplan(item.floorPlans[0], fpTabs.firstChild);

    const amenGrid = document.getElementById('dt-amenities');
    amenGrid.innerHTML = '';
    item.amenities.forEach(a => {
        const box = document.createElement('div');
        box.className = 'amenity-card';
        box.innerHTML = `<i class="${a.icon}"></i><span>${a.name}</span>`;
        amenGrid.appendChild(box);
    });

    document.getElementById('catalog-view').style.display = 'none';
    document.getElementById('property-detail-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCatalogView() {
    document.getElementById('property-detail-view').style.display = 'none';
    document.getElementById('catalog-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchFloorplan(fp, btn) {
    document.querySelectorAll('.fp-tab-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    document.getElementById('fp-type').textContent = `${fp.bhk} Layout`;
    document.getElementById('fp-sqft').textContent = fp.sqft;
    document.getElementById('fp-price').textContent = fp.price;
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
    document.getElementById('lightboxImg').src = activeProperty.images[index];
    document.getElementById('lightboxModal').classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightboxModal').classList.remove('active');
}

// EXPOSE FUNCTIONS TO GLOBAL SCOPE FOR HTML INLINE ONCLICK HANDLERS
Object.assign(window, {
    filterCategory,
    handleSearch,
    clearSearch,
    openQuickView,
    openPropertyDetails,
    showCatalogView,
    switchFloorplan,
    toggleFaq,
    closeModal,
    openWhatsAppModal,
    sendWhatsAppLead,
    handleFormSubmit,
    openLightbox,
    closeLightbox
});