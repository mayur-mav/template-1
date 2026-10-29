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
        location: 'Kannuru, Off Hennur Main Road, North Bengaluru, Karnataka 562149',
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
        highlights: [
            'Spread across 6 expansive acres with lush green landscaped open spaces',
            'Low-density living with 12 towers and 590 thoughtfully planned homes',
            'Zero common walls design ensuring enhanced privacy and cross-ventilation',
            'Full-fledged clubhouse featuring swimming pool with deck, gym & indoor games',
            'Prime Kannuru location off Hennur Main Road with direct access to Manyata Tech Park',
            'Ready to move residential community with RERA: PRM/KA/RERA/1251/446/PR/171014/000856'
        ],
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
            { label: 'Outer Ring Road (ORR)', destination: 'Outer Ring Road, Nagavara Junction, Bengaluru, Karnataka 560045', coordinates: { lat: 13.041023, lon: 77.619483 }, distance: '8.5 Kms', icon: 'fa-solid fa-road' },
            { label: 'Manyata Tech Park', destination: 'Manyata Embassy Business Park, Outer Ring Road, Nagavara, Bengaluru, Karnataka 560045', coordinates: { lat: 13.045635, lon: 77.621195 }, distance: '9.8 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'Elements Mall', destination: 'Elements Mall, Thanisandra Main Road, Nagavara, Bengaluru, Karnataka 560077', coordinates: { lat: 13.044835, lon: 77.626455 }, distance: '9.2 Kms', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Yelahanka Railway Station', destination: 'Yelahanka Junction Railway Station, Railway Station Road, Gandhi Nagar, Yelahanka, Bengaluru, Karnataka 560064', coordinates: { lat: 13.105007, lon: 77.591894 }, distance: '7.8 Kms', icon: 'fa-solid fa-train' },
            { label: 'Hebbal Flyover', destination: 'Hebbal Flyover, Bellary Road, Hebbal, Bengaluru, Karnataka 560024', coordinates: { lat: 13.041662, lon: 77.589944 }, distance: '12.0 Kms', icon: 'fa-solid fa-road' },
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, KIAL Road, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.197605, lon: 77.707486 }, distance: '19.5 Kms', icon: 'fa-solid fa-plane' }
        ]
    },
    {
        id: 'itowers-exente',
        name: 'I-Towers Exente',
        shortAddress: 'Electronic City, Bengaluru',
        location: 'Kamadhenu Layout, Konappana Agrahara, Hosur Road, Electronic City Phase 1, Bengaluru, Karnataka 560100',
        coordinates: { lat: 12.844773, lon: 77.669660 },
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
        highlights: [
            'Iconic 4.4-acre high-rise development at the gateway of Electronic City Phase 1',
            '5 elegant residential towers rising 22 storeys with open skyline vistas',
            'Over 70% open landscape area featuring 4 themed serene gardens',
            'Rooftop swimming pool and luxury sky clubhouse with yoga fitness deck',
            'Aristotle digital library, modern fitness pavilion, squash & badminton courts',
            'Walking distance to Infosys (750m) and Electronic City Metro Station (500m)'
        ],
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
            { label: 'Infosys Main Campus', destination: 'Infosys Main Campus, Plot 44/97A, 3rd Cross, Electronics City Phase 1, Bengaluru, Karnataka 560100', coordinates: { lat: 12.850212, lon: 77.664038 }, distance: '750 Meters', icon: 'fa-solid fa-building' },
            { label: 'D-Mart Electronic City', destination: 'DMart, Survey 21, Plot 112, Hosur Road, Electronic City Phase 1, Bengaluru, Karnataka 560100', coordinates: { lat: 12.849678, lon: 77.664975 }, distance: '850 Meters', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Elevated Expressway / Hosur Road', destination: 'Electronic City Elevated Expressway Toll Plaza, Hosur Road, Electronic City, Bengaluru, Karnataka 560100', coordinates: { lat: 12.846124, lon: 77.668815 }, distance: '500 Meters', icon: 'fa-solid fa-road' },
            { label: 'IIIT Bangalore', destination: 'IIIT Bangalore, 26/C, Hosur Road, Electronics City Phase 1, Bengaluru, Karnataka 560100', coordinates: { lat: 12.844799, lon: 77.663239 }, distance: '2.9 Kms', icon: 'fa-solid fa-school' },
            { label: 'Vimalalaya Hospital', destination: 'Vimalalaya Hospital, Huskur Gate, Hosur Road, Hebbagodi, Bengaluru, Karnataka 560100', coordinates: { lat: 12.839939, lon: 77.677003 }, distance: '3.9 Kms', icon: 'fa-solid fa-hospital' },
            { label: 'Electronic City Metro Station', destination: 'Electronic City Metro Station (Yellow Line), Hosur Road, Konappana Agrahara, Electronic City, Bengaluru, Karnataka 560100', coordinates: { lat: 12.846490, lon: 77.671120 }, distance: '500 Meters', icon: 'fa-solid fa-train-subway' },
            { label: 'Cantonment Railway Station', destination: 'Bangalore Cantonment Railway Station, Station Road, Vasanth Nagar, Bengaluru, Karnataka 560052', coordinates: { lat: 12.993687, lon: 77.598000 }, distance: '18.9 Kms', icon: 'fa-solid fa-train' }
        ]
    },
    {
        id: 'kolte-patil-mirabilis',
        name: 'Kolte Patil Mirabilis',
        shortAddress: 'Horamavu, Bengaluru',
        location: 'Survey No. 71, Horamavu Agara Village, K R Puram Hobli, Horamavu, Bengaluru, Karnataka 560113',
        coordinates: { lat: 13.032151, lon: 77.660938 },
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
        highlights: [
            'Sprawling 7-acre residential enclave in Horamavu with 7 high-rise towers',
            'Unique 4-storey high indoor tree atriums and lush garden landscapes',
            'Comprehensive sports facilities: basketball, volleyball, cricket pitch & skating rink',
            'Expansive clubhouse with lap swimming pool, kids pool & modern gymnasium',
            'Seamless road connectivity to Outer Ring Road (1.5 km) & Manyata Tech Park (5.1 km)',
            'Ready to move residences with Karnataka RERA: PRM/KA/RERA/1251/446/PR/170922/000838'
        ],
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
            { label: 'Outer Ring Road (ORR)', destination: 'Outer Ring Road, Babusapalya / Horamavu Junction, Bengaluru, Karnataka 560043', coordinates: { lat: 13.022510, lon: 77.647420 }, distance: '1.5 Kms', icon: 'fa-solid fa-road' },
            { label: 'Bangalore International School', destination: 'Bangalore International School, Geddalahalli, Hennur Bagalur Road, Kothanur, Bengaluru, Karnataka 560077', coordinates: { lat: 13.047216, lon: 77.646701 }, distance: '4.1 Kms', icon: 'fa-solid fa-school' },
            { label: 'Manyata Tech Park', destination: 'Manyata Embassy Business Park, Outer Ring Road, Nagavara, Bengaluru, Karnataka 560045', coordinates: { lat: 13.045635, lon: 77.621195 }, distance: '5.1 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'K.R. Puram Railway Station', destination: 'Krishnarajapuram Railway Station, Old Madras Road, Krishnarajapura, Bengaluru, Karnataka 560016', coordinates: { lat: 13.000546, lon: 77.675456 }, distance: '5.7 Kms', icon: 'fa-solid fa-train' },
            { label: 'Gopalan Signature Mall', destination: 'Gopalan Signature Mall, Old Madras Road, Nagavarapalya, Bennigana Halli, Bengaluru, Karnataka 560093', coordinates: { lat: 12.992959, lon: 77.661885 }, distance: '6.1 Kms', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, KIAL Road, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.197605, lon: 77.707486 }, distance: '29.0 Kms', icon: 'fa-solid fa-plane' }
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
        highlights: [
            'Exclusive low-density boutique community with only 131 premium residences on 1.86 acres',
            'Over 80% open landscape offering tranquil lakeside views and green scenery',
            'Rooftop swimming pool & sun deck overlooking serene water bodies',
            'Dedicated pet park, reflexology walkway, yoga lawn & lakeside viewing deck',
            'Well-ventilated 2, 2.5, 3 & 4 BHK duplex configurations designed for modern families',
            'Strategic Kannuru location off Hennur-Thanisandra Road with quick airport connectivity'
        ],
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
            { label: 'Kannuru Main Road', destination: 'Kannuru Main Road, Mitaganahalli, Kannuru, Bengaluru, Karnataka 562149', coordinates: { lat: 13.097881, lon: 77.644626 }, distance: '400 Meters', icon: 'fa-solid fa-road' },
            { label: 'Decathlon Hennur Road', destination: 'Decathlon Hennur Road, Survey No. 12/2, Hennur Main Road, Kothanur, Bengaluru, Karnataka 560077', coordinates: { lat: 13.065830, lon: 77.643210 }, distance: '4.8 Kms', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Elements Mall', destination: 'Elements Mall, Thanisandra Main Road, Nagavara, Bengaluru, Karnataka 560077', coordinates: { lat: 13.044835, lon: 77.626455 }, distance: '9.2 Kms', icon: 'fa-solid fa-bag-shopping' },
            { label: 'Manyata Tech Park', destination: 'Manyata Embassy Business Park, Outer Ring Road, Nagavara, Bengaluru, Karnataka 560045', coordinates: { lat: 13.045635, lon: 77.621195 }, distance: '9.8 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'Upcoming Kogilu Cross Metro Station', destination: 'Kogilu Cross Metro Station (Blue Line), Bellary Road, Yelahanka, Bengaluru, Karnataka 560064', coordinates: { lat: 13.102100, lon: 77.600350 }, distance: '7.2 Kms', icon: 'fa-solid fa-train-subway' },
            { label: 'Hebbal Flyover', destination: 'Hebbal Flyover, Bellary Road, Hebbal, Bengaluru, Karnataka 560024', coordinates: { lat: 13.041662, lon: 77.589944 }, distance: '12.0 Kms', icon: 'fa-solid fa-road' },
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, KIAL Road, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.197605, lon: 77.707486 }, distance: '19.5 Kms', icon: 'fa-solid fa-plane' }
        ]
    }
];

export function createPropertyHighlights(property) {
    const list = [];
    if (property.area) list.push(`Expansive ${property.area} development with landscaped open spaces`);
    if (property.bhk) list.push(`Thoughtfully planned ${property.bhk} layouts designed for optimal ventilation`);
    if (property.possession) list.push(`${property.statusText || 'Possession'} timeline: ${property.possession}`);
    if (property.amenities && property.amenities.length > 0) {
        const topAmenities = property.amenities.slice(0, 3).map(a => a.name).join(', ');
        list.push(`Premium lifestyle amenities including ${topAmenities}`);
    }
    if (property.connectivity && property.connectivity.length > 0) {
        const topPlace = property.connectivity[0];
        list.push(`Prime connectivity with proximity to ${topPlace.label} (${topPlace.distance})`);
    }
    if (property.rera) list.push(`RERA Approved Project: ${property.rera.replace(/\.$/, '')}`);
    return list;
}

propertiesData.forEach(property => {
    property.overview = property.overview || createPropertyOverview(property);
    property.highlights = property.highlights || createPropertyHighlights(property);
});
