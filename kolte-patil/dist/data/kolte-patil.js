const imageCdnPrefix = 'https://media.justflip.in/builder-brand-pages/';
const builderImage = suffix => `${imageCdnPrefix}${suffix.replace(/^\/+/, '')}`;

export const developerInfo = {
    hero: {
        subtitle: 'Kolte-Patil | Bengaluru',
        title: 'Kolte Patil Builders & Developers in Bangalore',
        description: 'Explore Kolte Patil projects in Bangalore, including apartments in Electronic City and North Bengaluru. Compare locations, configurations, prices, and floor plans.',
        image: builderImage('kolte-patil/banner.webp')
    }
};

export const faqData = [
    {
        question: "Who is the owner of Kolte Patil?",
        answer: "Rajesh Patil is the Chairman and Managing Director of Kolte-Patil Developers Limited, serving as the key leader of the company founded by his late father, Aniruddha Patil."
    },
    {
        question: "How long has the Kolte Patil been operating?",
        answer: "Incorporated in 1991, Kolte-Patil has been operating for over 35 years in the Indian real estate market, transitioning from a family business in Jalgaon to a publicly traded corporation."
    },
    {
        question: "Are Kolte-Patil projects RERA registered?",
        answer: "Yes, all ongoing residential and commercial developments across Pune, Bengaluru, and Mumbai are strictly registered under their respective state RERA authorities."
    },
    {
        question: "Can Non-Resident Indians (NRIs) buy their properties Kolte Patil ?",
        answer: "Yes. Under Reserve Bank of India (RBI) guidelines, NRIs can own residential and commercial property. A declaration must be filed using Form IPI 7 with the RBI within 90 days of final payment."
    },
    {
        question: "What are their specific projects in Mumbai?",
        answer: "Kolte-Patil expands heavily via society redevelopments here. Active projects include Vivere, Serenova (Andheri West), Alora (Santacruz East), and Vaayu."
    }
];

const overviewSearchTerms = [
    'Kolte Patil developers in Bangalore',
    'Kolte Patil Bangalore Electronic City',
    'Kolte Patil builders in Bangalore',
    'Kolte Patil in Bangalore'
];

function formatOverviewList(values) {
    if (values.length < 2) return values[0] || '';
    return `${values.slice(0, -1).join(', ')} and ${values[values.length - 1]}`;
}

export function createPropertyOverview(property) {
    const projectIndex = propertiesData.findIndex(({ id }) => id === property.id);
    const isElectronicCity = /electronic city/i.test(property.shortAddress || property.location);
    const searchTerm = isElectronicCity
        ? 'Kolte Patil Bangalore Electronic City'
        : overviewSearchTerms[(projectIndex >= 0 ? projectIndex : 0) % overviewSearchTerms.length];
    const floorPlans = formatOverviewList((property.floorPlans || []).slice(0, 3).map(({ bhk }) => bhk));
    const amenities = formatOverviewList((property.amenities || []).slice(0, 4).map(({ name }) => name));
    const nearbyPlaces = formatOverviewList((property.connectivity || []).slice(0, 3).map(({ label, distance }) => `${label} (${distance})`));

    return [
        `${property.description} Buyers researching ${searchTerm} can explore Kolte-Patil Developers homes in ${property.shortAddress}, with project status, location, and configuration details available to compare.`,
        `${property.name} is listed with ${property.bhk} across ${property.area}, with ${property.statusText.toLowerCase()} status and possession shown as ${property.possession}. Listed floor plan options include ${floorPlans || property.bhk}. Residents can explore amenities such as ${amenities || 'the community’s listed lifestyle facilities'}, with nearby destinations including ${nearbyPlaces || property.shortAddress}. Review Kolte-Patil Developers floor plans, amenities, and connectivity when comparing homes in Bengaluru.${property.rera ? ` RERA registration number: ${property.rera.replace(/\.$/, '')}.` : ''}`
    ];
}

export const propertiesData = [
    {
        id: 'kolte-patil-raaga',
        name: 'Kolte Patil Raaga',
        shortAddress: 'Kannuru, Bengaluru',
        location: 'Kannuru, Off Hennur Main Road, North Bengaluru, Karnataka 560077',
        coordinates: { lat: 13.095736, lon: 77.6477063 },
        category: 'READY',
        statusText: 'Ready to Move',
        badgeClass: 'badge-ready',
        price: '₹90.25 Lakh Onwards',
        bhk: '2 & 3 Bed Homes',
        area: '6 Acres',
        possession: 'Ready to Move',
        rera: 'PRM/KA/RERA/1251/446/PR/171014/000856',
        description: 'Kolte Patil Raaga is a ready-to-move residential community in Kannuru, off Hennur Main Road in North Bengaluru. The project offers thoughtfully planned 2 and 3 BHK apartments across 12 towers, with 590 homes, landscaped open spaces, and layouts designed for ventilation and privacy with no common walls. Residents can enjoy a clubhouse, swimming pool, gym, indoor games room, sports courts, and children’s play area. Its location connects residents to Manyata Tech Park, Outer Ring Road, Hebbal, and Kempegowda International Airport. Explore Kolte Patil Raaga apartments, floor plans, amenities, and current pricing.',
        thumbnail: builderImage('kolte-patil/kolte-patil-raaga/thumbnail.webp'),
        images: [
            builderImage('kolte-patil/kolte-patil-raaga/gallery/exterior-view.webp'),
            builderImage('kolte-patil/kolte-patil-raaga/gallery/interior-view.webp'),
            builderImage('kolte-patil/kolte-patil-raaga/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '2-BED RESIDENCES', sqft: '938 - 1,078 sq. ft.', price: '₹90 Lakh Onwards', image: builderImage('kolte-patil/kolte-patil-raaga/floor-plans/2bhk-floor-plan.webp') },
            { bhk: '3-BED RESIDENCES', sqft: '1,111 sq. ft.', price: '₹1.2 Crore Onwards', image: builderImage('kolte-patil/kolte-patil-raaga/floor-plans/3bhk-floor-plan.webp') }
        ],
        amenities: [
            { name: 'Full-Fledged Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: 'Swimming Pool with Deck', icon: 'fa-solid fa-person-swimming' },
            { name: 'Health Club & Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Indoor Games Room (Billiards, Table Tennis, Chess)', icon: 'fa-solid fa-gamepad' },
            { name: 'Badminton & Basketball Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Children\'s Play Area', icon: 'fa-solid fa-child-reaching' },
            { name: 'Convenience Retail / Supermarket Space', icon: 'fa-solid fa-cart-shopping' },
            { name: 'Landscaped Courtyards & Seating Decks', icon: 'fa-solid fa-tree' }
        ],
        connectivity: [
            { label: 'Outer Ring Road (ORR)', destination: 'Outer Ring Road, Bengaluru, Karnataka', coordinates: { lat: 13.0410232, lon: 77.6194834 }, distance: '10 mins', icon: 'fa-solid fa-road' },
            { label: 'Manyata Tech Park', destination: 'Manyata Tech Park, Nagavara, Bengaluru, Karnataka', coordinates: { lat: 13.0456346, lon: 77.621195 }, distance: '15 mins', icon: 'fa-solid fa-laptop-code' },
            { label: 'Elements Mall', destination: 'Elements Mall, Thanisandra Main Road, Bengaluru, Karnataka', coordinates: { lat: 13.0448351, lon: 77.626455 }, distance: '15 mins', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Yelahanka Railway Station', destination: 'Yelahanka Junction railway station, Bengaluru, Karnataka', coordinates: { lat: 13.1050067, lon: 77.5918938 }, distance: '20 mins', icon: 'fa-solid fa-train' },
            { label: 'Hebbal Flyover', destination: 'Hebbal Flyover, Bengaluru, Karnataka', coordinates: { lat: 13.041662, lon: 77.5899438 }, distance: '25 mins', icon: 'fa-solid fa-road' },
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, Devanahalli, Bengaluru, Karnataka', coordinates: { lat: 13.1976048, lon: 77.7074856 }, distance: '35 mins', icon: 'fa-solid fa-plane' }
        ]
    },
    {
        id: 'itowers-exente',
        name: 'I-Towers Exente',
        shortAddress: 'Electronic City, Bengaluru',
        location: 'Kamadhenu Layout, Konappana Agrahara, Hosur Road, Electronic City Phase 1, Bengaluru, Karnataka 560100',
        coordinates: { lat: 12.8447729, lon: 77.6696603 },
        category: 'READY',
        statusText: 'Ready to Move',
        badgeClass: 'badge-ready',
        price: '₹1.37 Crore Onwards',
        bhk: '2 & 3 Bed High-Rise Residences',
        area: '4.4 Acres',
        possession: 'Ready to Move',
        rera: 'PRM/KA/RERA/1251/310/PR/171026/000862',
        description: 'I-Towers Exente by Kolte-Patil Developers is a ready-to-move high-rise residential project at the entrance to Electronic City Phase 1, Bengaluru. The development comprises five towers with 438 2 and 3 BHK residences, designed to capture open city views; more than 70% of the site is open space. Residents have access to a rooftop swimming pool and clubhouse, gym, yoga deck, sports courts, themed gardens, and the Aristotle digital library and study zone. Infosys, D-Mart, Hosur Road, and the Electronic City Metro Station are among the nearby destinations. Explore I-Towers Exente apartments, floor plans, amenities, and pricing.',
        thumbnail: builderImage('kolte-patil/kolte-patil-i-towers-exente/thumbnail.webp'),
        images: [
            builderImage('kolte-patil/kolte-patil-i-towers-exente/gallery/exterior-view.webp'),
            builderImage('kolte-patil/kolte-patil-i-towers-exente/gallery/interior-view.webp'),
            builderImage('kolte-patil/kolte-patil-i-towers-exente/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '2-BED RESIDENCES', sqft: '1,200 - 1,240 sq. ft.', price: '₹1.53 Cr Onwards', image: builderImage('kolte-patil/kolte-patil-i-towers-exente/floor-plans/2bhk-floor-plan.webp') },
            { bhk: '3-BED RESIDENCES', sqft: '1,686 - 1,705 sq. ft.', price: '₹2.10 Cr Onwards', image: builderImage('kolte-patil/kolte-patil-i-towers-exente/floor-plans/3bhk-floor-plan.webp') }
        ],
        amenities: [
            { name: 'Grand Clubhouse with Rooftop Pool', icon: 'fa-solid fa-hotel' },
            { name: 'Aristotle Digital Library & Study Zone', icon: 'fa-solid fa-book-open' },
            { name: 'Fully Equipped Modern Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Yoga Deck & Fitness Pavilion', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Squash & Badminton Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Indoor Games Room & Table Tennis', icon: 'fa-solid fa-gamepad' },
            { name: '4 Themed Landscaped Gardens', icon: 'fa-solid fa-tree' },
            { name: 'Children\'s Play Area & Creche', icon: 'fa-solid fa-child-reaching' }
        ],
        connectivity: [
            { label: 'Infosys Main Campus', destination: 'Infosys Main Campus, Electronic City, Bengaluru, Karnataka', coordinates: { lat: 12.8489439, lon: 77.6666804 }, distance: '750 Meters', icon: 'fa-solid fa-building' },
            { label: 'D-Mart Electronic City', destination: 'DMart, Electronic City Phase 1, Bengaluru, Karnataka', coordinates: { lat: 12.8496783, lon: 77.6649749 }, distance: '850 Meters', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Elevated Expressway / Hosur Road', destination: 'Electronic City Elevated Expressway, Hosur Road, Bengaluru, Karnataka', coordinates: { lat: 12.8479, lon: 77.6677 }, distance: '2 mins', icon: 'fa-solid fa-road' },
            { label: 'IIIT Bangalore', destination: 'IIIT Bangalore, Electronics City, Bengaluru, Karnataka', coordinates: { lat: 12.8447999, lon: 77.663239 }, distance: '2.9 Kms', icon: 'fa-solid fa-school' },
            { label: 'Vimalalaya Hospital', destination: 'Vimalalaya Hospital, Electronic City, Bengaluru, Karnataka', coordinates: { lat: 12.838, lon: 77.664 }, distance: '3.9 Kms', icon: 'fa-solid fa-hospital' },
            { label: 'Electronic City Metro Station', destination: 'Electronic City Metro Station, Bengaluru, Karnataka', coordinates: { lat: 12.851, lon: 77.670 }, distance: '5 mins', icon: 'fa-solid fa-train-subway' },
            { label: 'Cantonment Railway Station', destination: 'Bangalore Cantonment Railway Station, Bengaluru, Karnataka', coordinates: { lat: 12.9936865, lon: 77.5980003 }, distance: '18.9 Kms', icon: 'fa-solid fa-train' }
        ]
    },
    {
        id: 'kolte-patil-mirabilis',
        name: 'Kolte Patil Mirabilis',
        shortAddress: 'Horamavu, Bengaluru',
        location: 'Survey No. 71, Horamavu Agara Village, K R Puram Hobli, Horamavu, Bengaluru, Karnataka 560113',
        coordinates: { lat: 13.0321507, lon: 77.6609376 },
        category: 'READY',
        statusText: 'Ready to Move',
        badgeClass: 'badge-ready',
        price: '₹27.75 Lakh Onwards',
        bhk: '1, 2, 2.5 , 3 & 4 Bed Homes',
        area: '7 Acres',
        possession: 'October 2021',
        rera: 'PRM/KA/RERA/1251/446/PR/170922/000838',
        description: 'Kolte Patil Mirabilis is a ready-to-move residential community in Horamavu, North-East Bengaluru. Set among landscaped open areas, the project has seven high-rise towers and 640 homes, with 1, 2, 2.5, 3, and 4-bedroom configurations listed. Amenities include a clubhouse, swimming and kids’ pools, gym, basketball and volleyball courts, cricket practice pitch, skating rink, indoor games, and garden atriums. The Horamavu location offers access to Outer Ring Road, Manyata Tech Park, K.R. Puram Railway Station, and Hebbal, with nearby schools and shopping. View Kolte Patil Mirabilis apartments, available floor plan details, amenities, and pricing.',
        thumbnail: builderImage('kolte-patil/kolte-patil-mirabilis/thumbnail.webp'),
        images: [
            builderImage('kolte-patil/kolte-patil-mirabilis/gallery/exterior-view.webp'),
            builderImage('kolte-patil/kolte-patil-mirabilis/gallery/interior-view.webp'),
            builderImage('kolte-patil/kolte-patil-mirabilis/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '3-BED RESIDENCES', sqft: '1,599 sq. ft.', price: '₹2.19 Cr Onwards', image: builderImage('kolte-patil/kolte-patil-mirabilis/floor-plans/3bhk-floor-plan.webp') }
        ],
        amenities: [
            { name: 'Full-Fledged Clubhouse & Party Lawn', icon: 'fa-solid fa-hotel' },
            { name: 'Swimming Pool & Kids Splash Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Full Basketball & Volleyball Courts', icon: 'fa-solid fa-basketball' },
            { name: 'Cricket Practice Pitch & Skating Rink', icon: 'fa-solid fa-baseball-bat-ball' },
            { name: 'Indoor Games & Squash Court', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Outdoor Amphitheatre', icon: 'fa-solid fa-masks-theater' },
            { name: '4-Storey High Indoor Tree Atriums & Gardens', icon: 'fa-solid fa-tree' }
        ],
        connectivity: [
            { label: 'Outer Ring Road (ORR)', destination: 'Outer Ring Road, Horamavu, Bengaluru, Karnataka', coordinates: { lat: 13.036, lon: 77.651 }, distance: '1.5 Kms', icon: 'fa-solid fa-road' },
            { label: 'Bangalore International School', destination: 'Bangalore International School, Hennur Bagalur Road, Bengaluru, Karnataka', coordinates: { lat: 13.0472161, lon: 77.6467009 }, distance: '4.1 Kms', icon: 'fa-solid fa-school' },
            { label: 'Manyata Tech Park', destination: 'Manyata Tech Park, Nagavara, Bengaluru, Karnataka', coordinates: { lat: 13.0456346, lon: 77.621195 }, distance: '5.1 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'K.R. Puram Railway Station', destination: 'Krishnarajapuram railway station, Bengaluru, Karnataka', coordinates: { lat: 13.0005461, lon: 77.6754561 }, distance: '5.7 Kms', icon: 'fa-solid fa-train' },
            { label: 'Gopalan Signature Mall', destination: 'Gopalan Signature Mall, Old Madras Road, Bengaluru, Karnataka', coordinates: { lat: 12.9929592, lon: 77.6618845 }, distance: '6.1 Kms', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, Devanahalli, Bengaluru, Karnataka', coordinates: { lat: 13.1976048, lon: 77.7074856 }, distance: '29 Kms', icon: 'fa-solid fa-plane' }
        ]
    },
    {
        id: 'kolte-patil-lakeside-24',
        name: 'Kolte Patil Lakeside 24',
        shortAddress: 'Kannuru, Bengaluru',
        location: 'Sy No. 33 (Part), Kannuru, Off Hennur - Thanisandra Main Road, North Bengaluru, Karnataka 562149',
        coordinates: { lat: 13.096723, lon: 77.647419 },
        category: 'NEW',
        statusText: 'New Launch',
        badgeClass: 'badge-new',
        price: '₹1.12 Crore Onwards',
        bhk: '2, 2.5, 3 & 4 Bed Residences',
        area: '1.86 Acres',
        possession: 'October 2028',
        rera: 'PRM/KA/RERA/1251/446/PR/060324/006667',
        description: 'Kolte Patil Lakeside 24 is a new-launch residential project in Kannuru, off Hennur–Thanisandra Main Road in North Bengaluru. Planned as a low-density community, it has one high-rise tower with 131 residences and more than 80% open space. Home options include 2, 2.5, 3, and 4 BHK layouts, while the lakeside setting, rooftop pool and sun deck, clubhouse, yoga lawn, reflexology park, pet park, and viewing deck create space for recreation and relaxation. Manyata Tech Park, Elements Mall, Hebbal, and Kempegowda International Airport are among the connected destinations. Explore Lakeside 24 apartments, floor plans, amenities, and possession details.',
        thumbnail: builderImage('kolte-patil/kolte-patil-lakeside-24/thumbnail.webp'),
        images: [
            builderImage('kolte-patil/kolte-patil-lakeside-24/gallery/exterior-view.webp'),
            builderImage('kolte-patil/kolte-patil-lakeside-24/gallery/interior-view.webp'),
            builderImage('kolte-patil/kolte-patil-lakeside-24/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '2-BED RESIDENCES', sqft: '763 - 773 sq. ft.', price: '₹1.12 Cr Onwards', image: builderImage('kolte-patil/kolte-patil-lakeside-24/floor-plans/2bhk-floor-plan.webp') },
            { bhk: '2.5-BED RESIDENCES', sqft: '801 - 848 sq. ft.', price: '₹1.23 Cr Onwards', image: builderImage('kolte-patil/kolte-patil-lakeside-24/floor-plans/2.5bhk-floor-plan.webp') },
            { bhk: '3-BED RESIDENCES', sqft: '940 - 1,470 sq. ft.', price: '₹1.44 Cr Onwards', image: builderImage('kolte-patil/kolte-patil-lakeside-24/floor-plans/3bhk-floor-plan.webp') },
            { bhk: '3.5-BED RESIDENCES', sqft: '1,132 sq. ft.', price: '₹1.75 Cr Onwards', image: builderImage('kolte-patil/kolte-patil-lakeside-24/floor-plans/3.5bhk-floor-plan.webp') },
            { bhk: '4-BED DUPLEX / LARGE RESIDENCES', sqft: '1,422 - 1,659 sq. ft.', price: '₹2.07 Cr Onwards', image: builderImage('kolte-patil/kolte-patil-lakeside-24/floor-plans/4bhk-duplex-floor-plan.webp') }
        ],
        amenities: [
            { name: 'Rooftop Swimming Pool & Sun Deck', icon: 'fa-solid fa-person-swimming' },
            { name: 'State-of-the-Art Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: 'Fully Equipped Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Yoga Lawn & Reflexology Park', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Multi-Sport Court & Indoor Games Room', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Dedicated Pet Park', icon: 'fa-solid fa-dog' },
            { name: 'Lakeside Viewing Deck & Tree-Lined Walkway', icon: 'fa-solid fa-tree' },
            { name: 'Children\'s Play Area', icon: 'fa-solid fa-child-reaching' }
        ],
        connectivity: [
            { label: 'Kannuru Main Road', destination: 'Kannuru Main Road, Bengaluru, Karnataka', coordinates: { lat: 13.0978811, lon: 77.6446264 }, distance: '2 mins', icon: 'fa-solid fa-road' },
            { label: 'Decathlon Thanisandra', destination: 'Decathlon, Thanisandra, Bengaluru, Karnataka', coordinates: { lat: 13.0675, lon: 77.6275 }, distance: '8 mins', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Elements Mall', destination: 'Elements Mall, Thanisandra Main Road, Bengaluru, Karnataka', coordinates: { lat: 13.0448351, lon: 77.626455 }, distance: '12 mins', icon: 'fa-solid fa-bag-shopping' },
            { label: 'Manyata Tech Park', destination: 'Manyata Tech Park, Nagavara, Bengaluru, Karnataka', coordinates: { lat: 13.0456346, lon: 77.621195 }, distance: '15 mins', icon: 'fa-solid fa-laptop-code' },
            { label: 'Upcoming Kogilu Metro Station', destination: 'Kogilu Cross, Bengaluru, Karnataka', coordinates: { lat: 13.103589, lon: 77.6012045 }, distance: '15 mins', icon: 'fa-solid fa-train-subway' },
            { label: 'Hebbal Flyover', destination: 'Hebbal Flyover, Bengaluru, Karnataka', coordinates: { lat: 13.041662, lon: 77.5899438 }, distance: '20 mins', icon: 'fa-solid fa-road' },
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, Devanahalli, Bengaluru, Karnataka', coordinates: { lat: 13.1976048, lon: 77.7074856 }, distance: '30 mins', icon: 'fa-solid fa-plane' }
        ]
    }
];

propertiesData.forEach(property => {
    property.overview = property.overview || createPropertyOverview(property);
});
