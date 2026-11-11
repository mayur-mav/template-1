const builderSlug = document.body.dataset.builder;

const builderMeta = {
    century: {
        name: 'Century Real Estate',
        tagline: 'Thinking Ahead',
        mark: 'C'
    },
    'kolte-patil': {
        name: 'KOLTE-PATIL',
        tagline: 'Creation, Not Construction',
        mark: 'KP'
    },
    lodha: {
        name: 'Lodha Developers',
        tagline: 'Building a Better Life',
        mark: 'LD'
    },
    pride: {
        name: 'Pride Group',
        tagline: 'Building Tomorrow Today',
        mark: 'PG'
    },
    prestige: {
        name: 'Prestige Group',
        tagline: 'Add Prestige to your Life',
        mark: 'P'
    },
    'total-environment': {
        name: 'Total Environment',
        tagline: 'Homes shaped around how you live',
        mark: 'TE'
    }
};

const current = builderMeta[builderSlug] || { name: 'Properties', tagline: '', mark: '' };

document.title = `Privacy Policy | ${current.name}`;

const markEl = document.getElementById('policy-mark');
if (markEl && current.mark) markEl.textContent = current.mark;

const builderEl = document.getElementById('policy-builder');
if (builderEl && current.name) builderEl.textContent = current.name;

const taglineEl = document.getElementById('policy-tagline');
if (taglineEl && current.tagline) taglineEl.textContent = current.tagline;

const attrEl = document.getElementById('policy-attribution');
if (attrEl) {
    attrEl.textContent = `${current.name.toUpperCase()} PROPERTY ENQUIRY PAGE \u00b7 PUBLISHED BY M&A VENTURES, AUTHORISED CHANNEL PARTNER`;
}

const backLink = document.getElementById('policy-back');
if (backLink) backLink.href = '/';

const yearEl = document.getElementById('policy-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
