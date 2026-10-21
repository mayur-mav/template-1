const builderSlug = document.body.dataset.builder;

try {
    const { developerInfo } = await import(`../data/${builderSlug}.js`);
    const subtitle = developerInfo?.hero?.subtitle || 'Property Developer | Residential Developments';
    const [builder, ...locationParts] = subtitle.split('|').map(part => part.trim());
    const location = locationParts.join(' | ') || 'Residential Developments';

    document.title = `Privacy Policy | ${builder}`;
    document.getElementById('policy-builder').textContent = builder;
    document.getElementById('policy-mark').textContent = builder.trim().charAt(0).toUpperCase();
    document.getElementById('policy-location').textContent = location;
    document.getElementById('policy-attribution').textContent = `${builder.toUpperCase()} PROPERTY ENQUIRY PAGE \u00b7 PUBLISHED BY M&A VENTURES, AUTHORISED CHANNEL PARTNER`;
    document.getElementById('policy-back').href = '/';
    document.querySelector('.privacy-brand').href = '/';
} catch (error) {
    console.error(`Could not load builder details for "${builderSlug}".`, error);
}

document.getElementById('policy-year').textContent = new Date().getFullYear();
