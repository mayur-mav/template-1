const imageCdnPrefix = 'https://media.justflip.in/builder-brand-pages/';
const builderImage = suffix => `${imageCdnPrefix}${suffix.replace(/^\/+/, '')}`;

export const developerInfo = {
    hero: {
        subtitle: 'Lodha Developers | Bengaluru',
        title: 'Lodha Group Projects in Bangalore',
        description: 'Explore Lodha Group projects in Bangalore, including new launches and ongoing projects in Thanisandra, HSR Extension, Bannerghatta Road, Sarjapur, and Devanahalli.',
        image: builderImage('lodha-group/banner.webp')
    }
};

export const faqData = [
  {
    "question": "Who is the owner of Lodha?",
    "answer": "The Lodha Group, now officially known as Macrotech Developers, was founded by the billionaire politician and property magnate Mangal Prabhat Lodha, and it is run and led by his elder son, Abhishek Lodha, who serves as the Managing Director and CEO."
  },
  {
    "question": "What is Lodha famous for?",
    "answer": "Lodha is famous as India's leading real estate developer, known for constructing massive luxury skyscrapers, smart cities, and high-end residential towers."
  },
  {
    "question": "Is Lodha a good builder?",
    "answer": "Lodha (Macrotech Developers) is one of India's largest and most established real estate developers, widely considered a reputable and \"legit\" builder with massive scale, but customer experiences and reviews can vary by project."
  },
  {
    "question": "What is the most expensive flat in Lodha?",
    "answer": "The most expensive flat sold by the Lodha Group is a luxury triplex in Lodha Malabar on Malabar Hill, Mumbai, which was purchased by the Taparia family for ₹369 crore."
  },
  {
    "question": "Which Indian cities does Lodha operate in?",
    "answer": "Lodha has an established footprint across the Mumbai Metropolitan Region (MMR), Pune, and Bengaluru."
  },
  {
    "question": "Are there any upcoming locations inside India?",
    "answer": "Yes. The group is actively launching upcoming residential projects in the Delhi NCR region."
  },
  {
    "question": "Does Lodha have an international presence?",
    "answer": "Yes. Outside India, Lodha has premier developments in London, featuring ultra-luxury properties like No.1 Grosvenor Square in Mayfair, Holland Park Gate in Kensington, and Lincoln Square in central London."
  }
];

const overviewSearchTerms = [
    'Lodha Group projects in Bangalore',
    'Lodha projects in Bangalore',
    'Lodha developers in Bangalore',
    'Lodha properties in Bangalore',
    'Lodha Group projects'
];

function formatOverviewList(values) {
    if (values.length < 2) return values[0] || '';
    return `${values.slice(0, -1).join(', ')} and ${values[values.length - 1]}`;
}

export function createPropertyOverview(property) {
    const projectIndex = propertiesData.findIndex(({ id }) => id === property.id);
    const searchTerm = overviewSearchTerms[projectIndex % overviewSearchTerms.length];
    const floorPlans = formatOverviewList((property.floorPlans || []).slice(0, 3).map(({ bhk }) => bhk));
    const amenities = formatOverviewList((property.amenities || []).slice(0, 4).map(({ name }) => name));
    const nearbyPlaces = formatOverviewList((property.connectivity || []).slice(0, 3).map(({ label, distance }) => `${label} (${distance})`));

    return [
        `${property.description} Homebuyers comparing ${searchTerm} can explore this Lodha residence in ${property.shortAddress}, including its project status, location, and listed home configurations.`,
        `${property.name} is listed with ${property.bhk} across ${property.area}, with ${property.statusText.toLowerCase()} status and possession shown as ${property.possession}. Listed floor plan options include ${floorPlans || property.bhk}. Residents can explore amenities such as ${amenities || 'the community’s listed lifestyle facilities'}, with nearby destinations including ${nearbyPlaces || property.shortAddress}. Review Lodha floor plans, amenities, and connectivity when comparing homes and projects in Bengaluru.${property.rera ? ` RERA registration number: ${property.rera.replace(/\.$/, '')}.` : ''}`
    ];
}

export const propertiesData = [
  {
    id: 'lodha-mirabelle',
    name: 'Lodha Mirabelle',
    shortAddress: 'Nagavara, Bengaluru',
    location: 'Manyata Tech Park, Thanisandra Main Road, Nagavara, Bengaluru, Karnataka 560045',
    coordinates: { lat: 13.0494, lon: 77.6206 },
    mapsQuery: 'Lodha Mirabelle, Thanisandra Main Road, Bengaluru',
    category: 'ONGOING',
    statusText: 'Ongoing',
    badgeClass: 'badge-ongoing',
    price: '₹3.15 Crore Onwards',
    bhk: '3.5 & 4 Bed Luxury Residences',
    area: '1.05 Acres',
    possession: 'May 2030',
    rera: 'PRM/KA/RERA/1251/309/PR/131023/006321',
    highlights: [
        'Prime 19-acre development inside Manyata Tech Park campus',
        'Lavish 45,000 sq. ft. club resort (Club Luxuria) with indoor & outdoor pools',
        'Low-density high-rise towers rising up to 28 floors with panoramic city views',
        '3.2-acre central landscaped greens & tranquil water cascades',
        'IGBC Gold-certified eco-friendly architectural design',
        'Grand master bedroom suites featuring private outdoor sundecks',
        '2 minutes to upcoming Nagavara Metro Station & Outer Ring Road'
    ],
    description: 'Lodha Mirabelle by Lodha Group is an urban luxury residential ecosystem spread over 19 acres situated right inside Manyata Tech Park, Nagavara. The development features a 3.2-acre central green landscape, low-density high-rise towers rising up to 28 floors, an IGBC Gold-certified design, and a lavish 45,000 sq. ft. club resort. Homes feature grand master bedroom suites with private decks and premium interior specifications.',
    thumbnail: builderImage('lodha-group/lodha-mirabelle/thumbnail.webp'),
    images: [
        builderImage('lodha-group/lodha-mirabelle/gallery/exterior-view.webp'),
        builderImage('lodha-group/lodha-mirabelle/gallery/interior-view.webp'),
        builderImage('lodha-group/lodha-mirabelle/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '3.5-BED RESIDENCES WITH STUDY', sqft: '1,308 sq. ft.', price: '₹3.15 Cr Onwards', image: builderImage('lodha-group/lodha-mirabelle/floor-plans/3.5bhk-floor-plans.webp') },
        { bhk: '4-BED RESIDENCES', sqft: '1,694 sq. ft.', price: '₹3.69 Cr Onwards', image: builderImage('lodha-group/lodha-mirabelle/floor-plans/4bhk-floor-plans.webp') }
    ],
    amenities: [
        { name: '45,000 sq. ft. Grand Clubhouse (Club Luxuria)', icon: 'fa-solid fa-hotel' },
        { name: 'Indoor & Outdoor Swimming Pools', icon: 'fa-solid fa-person-swimming' },
        { name: 'Fully Equipped Modern Gymnasium', icon: 'fa-solid fa-dumbbell' },
        { name: 'Yoga Studio & Wellness Spa', icon: 'fa-solid fa-mattress-pillow' },
        { name: 'Badminton & Squash Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: 'Mini Golf & Sports Arena', icon: 'fa-solid fa-flag-golf' },
        { name: 'Private Screening Room / Mini Theatre', icon: 'fa-solid fa-film' },
        { name: 'Café Luxe & Banquet Hall', icon: 'fa-solid fa-mug-hot' },
        { name: '3.2-Acre Central Green with Jogging Tracks', icon: 'fa-solid fa-tree' }
    ],
    connectivity: [
        { label: 'Manyata Tech Park Campus', destination: 'Manyata Embassy Business Park, Outer Ring Road, Nagavara, Bengaluru, Karnataka 560045', coordinates: { lat: 13.0494, lon: 77.6206 }, distance: '100 Meters', icon: 'fa-solid fa-building' },
        { label: 'Upcoming Nagavara Metro Station', destination: 'Nagavara Metro Station, Bengaluru', coordinates: { lat: 13.0428, lon: 77.6225 }, distance: '1.2 Kms', icon: 'fa-solid fa-train-subway' },
        { label: 'Elements Mall', destination: 'Elements Mall, Thanisandra Main Road, Nagavara, Bengaluru, Karnataka 560077', coordinates: { lat: 13.0442, lon: 77.6334 }, distance: '1.8 Kms', icon: 'fa-solid fa-cart-shopping' },
        { label: 'Kirloskar Business Park', destination: 'Kirloskar Business Park, Bellary Road, Hebbal, Bengaluru, Karnataka 560024', coordinates: { lat: 13.0512, lon: 77.5925 }, distance: '4.2 Kms', icon: 'fa-solid fa-laptop-code' },
        { label: 'Phoenix Mall of Asia', destination: 'Phoenix Mall of Asia, Bellary Road, Byatarayanapura, Yelahanka, Bengaluru, Karnataka 560092', coordinates: { lat: 13.0585, lon: 77.5910 }, distance: '4.6 Kms', icon: 'fa-solid fa-bag-shopping' },
        { label: 'Aster CMI & Manipal Hospitals', destination: 'Aster CMI Hospital, Bellary Road, Hebbal, Bengaluru, Karnataka 560092', coordinates: { lat: 13.0558, lon: 77.5907 }, distance: '4.5 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, KIAL Road, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.197605, lon: 77.707486 }, distance: '25.5 Kms', icon: 'fa-solid fa-plane' }
    ]
  },
  {
    id: 'lodha-haven',
    name: 'Lodha Haven',
    shortAddress: 'HSR Extension, Bengaluru',
    location: 'Choodasandra Circle, Off Hosa Road & Haralur Road, HSR Extension, Bengaluru, Karnataka 560099',
    coordinates: { lat: 12.8835, lon: 77.6742 },
    mapsQuery: 'Lodha Haven, HSR Extension, Bengaluru',
    category: 'ONGOING',
    statusText: 'Ongoing',
    badgeClass: 'badge-ongoing',
    price: '₹2.30 Crore Onwards',
    bhk: '3, 3.5 & 4 Bed Luxury Residences',
    area: '10 Acres',
    possession: 'March 2029',
    rera: 'PRM/KA/RERA/1251/308/PR/280525/007785',
    highlights: [
        'Forest-inspired luxury living across 9.3 acres near HSR Extension',
        'Over 80% open landscaped spaces including 1.5-acre Garden of Eden forest',
        'Expansive 20,000+ sq. ft. Club Haven with heated indoor pool & wellness spa',
        '6 high-rise towers (G+22 floors) with large 3, 3.5 & 4-bed residences',
        'Pickleball, badminton & table tennis courts with outdoor fitness trails',
        'Seamless connectivity to HSR Layout, Sarjapur Road and Electronic City',
        'Under 15 minutes to Hosa Road Metro Station on Hosur Road'
    ],
    description: 'Lodha Haven by Lodha Group is a forest-inspired urban luxury ecosystem situated at Choodasandra Circle, near HSR Extension. Spread across 9.3 acres with over 80% dedicated to open green landscapes and a 1.5-acre "Garden of Eden" forest, the development features 6 high-rise towers (G+22 floors) comprising premium 3, 3.5, and 4-bed residences. The community centers around a 20,000+ sq. ft. club resort and offers seamless connectivity to HSR Layout, Sarjapur Road, and Electronic City.',
    thumbnail: builderImage('lodha-group/lodha-haven/thumbnail.webp'),
    images: [
        builderImage('lodha-group/lodha-haven/gallery/exterior-view.webp'),
        builderImage('lodha-group/lodha-haven/gallery/interior-view.webp'),
        builderImage('lodha-group/lodha-haven/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '3-BED RESIDENCES', sqft: '1,050 - 1,100 sq. ft.', price: '₹2.30 Cr Onwards', image: builderImage('lodha-group/lodha-haven/floor-plans/3bhk-floors-plans.webp') },
        { bhk: '3.5-BED RESIDENCES WITH STUDY', sqft: '1,300 - 1,650 sq. ft.', price: '₹2.90 Cr Onwards', image: builderImage('lodha-group/lodha-haven/floor-plans/3.5bhk-floors-plans.webp') },
        { bhk: '4-BED GRAND RESIDENCES', sqft: '2,150 - 2,250 sq. ft.', price: '₹4.79 Cr Onwards', image: builderImage('lodha-group/lodha-haven/floor-plans/4bhk-floors-plans.webp') },
    ],
    amenities: [
        { name: '20,000+ sq. ft. Club Haven', icon: 'fa-solid fa-hotel' },
        { name: 'Heated Indoor Swimming Pool & Pool Deck', icon: 'fa-solid fa-person-swimming' },
        { name: 'Fully Equipped Sprawling Gym', icon: 'fa-solid fa-dumbbell' },
        { name: 'Pickleball & Table Tennis Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: '1.5-Acre "Garden of Eden" Forest Landscape', icon: 'fa-solid fa-tree' },
        { name: 'Café Haven & Lounge', icon: 'fa-solid fa-mug-hot' },
        { name: 'Children\'s Play Areas & Activity Zone', icon: 'fa-solid fa-child-reaching' },
        { name: 'Temple & Spiritual Corner', icon: 'fa-solid fa-gopuram' }
    ],
    connectivity: [
        { label: 'Hosa Road Metro Station', destination: 'Hosa Road Metro Station, Hosur Road, Bengaluru, Karnataka 560100', coordinates: { lat: 12.8718, lon: 77.6528 }, distance: '3.6 Kms', icon: 'fa-solid fa-train-subway' },
        { label: 'Electronic City IT Hub', destination: 'Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100', coordinates: { lat: 12.8452, lon: 77.6602 }, distance: '6.1 Kms', icon: 'fa-solid fa-laptop-code' },
        { label: 'RGA Tech Park (Sarjapur Road)', destination: 'RGA Tech Park, Sarjapur Main Road, Carmelaram, Hadosiddapura, Bengaluru, Karnataka 560035', coordinates: { lat: 12.9056, lon: 77.7029 }, distance: '5.4 Kms', icon: 'fa-solid fa-building' },
        { label: 'Market Square Mall (Sarjapur Road)', destination: 'Market Square Mall, Sarjapur Road, Bengaluru, Karnataka 560102', coordinates: { lat: 12.9238, lon: 77.6738 }, distance: '6.0 Kms', icon: 'fa-solid fa-cart-shopping' },
        { label: 'Narayana Multi-Speciality Hospital', destination: 'Narayana Multispeciality Hospital, HSR Layout, Bengaluru, Karnataka 560102', coordinates: { lat: 12.9110, lon: 77.6430 }, distance: '6.2 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'RMZ Ecoworld & Outer Ring Road', destination: 'RMZ Ecoworld, Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103', coordinates: { lat: 12.9232, lon: 77.6842 }, distance: '6.1 Kms', icon: 'fa-solid fa-building-columns' }
    ]
  },
  {
    id: 'lodha-azur',
    name: 'Lodha Azur',
    shortAddress: 'Akshayanagar, Bengaluru',
    location: 'DLF Road, Akshayanagar West, Opposite Hulimavu Lake, Off Bannerghatta Road, Bengaluru, Karnataka 560076',
    coordinates: { lat: 12.8778, lon: 77.6085 },
    mapsQuery: 'Lodha Azur, Akshayanagar, Bengaluru',
    category: 'ONGOING',
    statusText: 'Ongoing',
    badgeClass: 'badge-ongoing',
    price: '₹2.47 Crore Onwards',
    bhk: '3, 3.5 & 4 Bed Luxury Waterfront Residences',
    area: '0.64 Acres',
    possession: 'October 2029',
    rera: 'PRM/KA/RERA/1251/310/PR/220324/006728',
    highlights: [
        'Exclusive 10-acre waterfront community facing serene Hulimavu Lake',
        '6 to 8 ft deep private sundecks offering panoramic lakeside vistas',
        '4 high-rise towers (B+G+28 floors) designed with over 80% open spaces',
        'Lavish Club Palladio featuring temperature-controlled pool & Cafe Azur',
        'Dense woodland pockets, jogging trails, and outdoor yoga pavilion',
        'Prime location off Bannerghatta Road near NICE Ring Road junction',
        'Close proximity to Royal Meenakshi Mall, IIMB and top tech hubs'
    ],
    description: 'Lodha Azur by Lodha Group is a luxury waterfront residential development spread across 10 acres directly adjacent to Hulimavu Lake in Akshayanagar, off Bannerghatta Road. The project features 4 high-rise towers rising up to B+G+28 floors with over 80% open spaces. Every residence features 6 to 8 ft deep sundecks overlooking lakeside vistas, centered around the grand Club Palladio clubhouse, private Cafe Azur, and dense woodland pockets.',
    thumbnail: builderImage('lodha-group/lodha-azur/thumbnail.webp'),
    images: [
        builderImage('lodha-group/lodha-azur/gallery/exterior-view.webp'),
        builderImage('lodha-group/lodha-azur/gallery/Interior-view.webp'),
        builderImage('lodha-group/lodha-azur/gallery/amenities-page.webp')
    ],
    floorPlans: [
        { bhk: '3-BED LUXURY RESIDENCES', sqft: '1,950 sq.ft.', price: '₹2.47 Cr Onwards', image: builderImage('lodha-group/lodha-azur/floor-plans/3bhk-floor-plan.webp') },
        { bhk: '3.5-BED RESIDENCES WITH STUDY', sqft: '2,450 sq.ft.', price: '₹3.1 Cr Onwards', image: builderImage('lodha-group/lodha-azur/floor-plans/3.5bhk-floor-plan.webp') },
        { bhk: '4-BED GRAND RESIDENCES', sqft: '3,060 sq.ft.', price: '₹3.86 Cr Onwards', image: builderImage('lodha-group/lodha-azur/floor-plans/4bhk-floor-plan.webp') }
    ],
    amenities: [
        { name: 'Grand Club Palladio Resort', icon: 'fa-solid fa-hotel' },
        { name: 'Temperature-Controlled Indoor Pool & Lap Pool', icon: 'fa-solid fa-person-swimming' },
        { name: 'State-of-the-Art Fitness Center & Gym', icon: 'fa-solid fa-dumbbell' },
        { name: 'Outdoor Yoga & Activity Pavilion', icon: 'fa-solid fa-mattress-pillow' },
        { name: 'Exclusive Café Azur & Banquet Lawn', icon: 'fa-solid fa-mug-hot' },
        { name: 'Lakeside Woodland Promenade & Picnic Zone', icon: 'fa-solid fa-tree' },
        { name: 'Dedicated Pet Park & Grooming Area', icon: 'fa-solid fa-dog' },
        { name: 'Multi-Sport Courts & Children\'s Play Zone', icon: 'fa-solid fa-table-tennis-paddle-ball' }
    ],
    connectivity: [
        { label: 'Royal Meenakshi Mall', destination: 'Royal Meenakshi Mall, Bannerghatta Road, Hulimavu, Bengaluru, Karnataka 560076', coordinates: { lat: 12.8752, lon: 77.5960 }, distance: '1.9 Kms', icon: 'fa-solid fa-bag-shopping' },
        { label: 'NICE Ring Road Junction', destination: 'NICE Road Bannerghatta Interchange, Bengaluru, Karnataka 560083', coordinates: { lat: 12.8465, lon: 77.5852 }, distance: '5.8 Kms', icon: 'fa-solid fa-road' },
        { label: 'Kalyani Magnum Tech Park', destination: 'Kalyani Magnum Tech Park, JP Nagar 7th Phase, Bengaluru, Karnataka 560076', coordinates: { lat: 12.8988, lon: 77.6015 }, distance: '3.3 Kms', icon: 'fa-solid fa-building' },
        { label: 'IIM Bangalore Campus', destination: 'Indian Institute of Management Bangalore (IIMB), Bannerghatta Road, Bengaluru, Karnataka 560076', coordinates: { lat: 12.8962, lon: 77.6010 }, distance: '3.0 Kms', icon: 'fa-solid fa-graduation-cap' },
        { label: 'Apollo & Fortis Hospitals (Bannerghatta Rd)', destination: 'Fortis Hospital & Apollo Hospitals, Bannerghatta Road, Bengaluru, Karnataka 560076', coordinates: { lat: 12.8935, lon: 77.5982 }, distance: '2.8 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'Electronic City IT Corridor', destination: 'Electronic City Toll Plaza, Hosur Road, Bengaluru, Karnataka 560100', coordinates: { lat: 12.8452, lon: 77.6602 }, distance: '9.0 Kms', icon: 'fa-solid fa-laptop-code' }
    ]
  },
  {
    id: 'lodha-elanza',
    name: 'Lodha Élanza',
    shortAddress: 'Dommasandra, Bengaluru',
    location: 'Off Sarjapur Main Road, Near Sompura & Yamare, Dommasandra, Bengaluru, Karnataka 562125',
    coordinates: { lat: 12.8682, lon: 77.7610 },
    mapsQuery: 'Lodha Elanza, Dommasandra, Bengaluru',
    category: 'NEW',
    statusText: 'New Launch',
    badgeClass: 'badge-new',
    price: '₹1.92 Crore Onwards',
    bhk: '3 Bed Luxury Residences',
    area: '6.75 Acres',
    possession: 'September 2031',
    rera: 'PRM/KA/RERA/1251/308/PR/191225/008353',
    highlights: [
        'Art Deco-inspired luxury development spanning 19 acres off Sarjapur Road',
        '8 high-rise towers up to 33 floors with over 80% lush green open spaces',
        'Expansive horizontal living layouts with private curved balconies',
        'Resort-style clubhouse with temperature-controlled lap pool & fitness center',
        'Vast cascading gardens, sports arenas, and tranquil stargazing decks',
        'Adjacent to top international schools including TISB, Greenwood High & Oakridge',
        'Rapid connectivity to Wipro Kodathi SEZ, Carmelaram, and Outer Ring Road'
    ],
    description: 'Lodha Élanza by Lodha Group is an Art Deco-inspired luxury residential project spread across 19 acres off Sarjapur Road in East Bengaluru. The development features 8 high-rise towers (rising up to 33 floors) with over 80% open spaces, vast horizontal living rooms, and private curved balconies with lake views. Centered around a resort-style clubhouse, cascading gardens, and sports arenas, it offers quiet grace and rapid connectivity to Wipro SEZ, ORR, and top international schools.',
    thumbnail: builderImage('lodha-group/lodha-elanza/thumbnail.webp'),
    images: [
        builderImage('lodha-group/lodha-elanza/gallery/exterior-view.webp'),
        builderImage('lodha-group/lodha-elanza/gallery/interior-view.webp'),
        builderImage('lodha-group/lodha-elanza/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '3-BED RESIDENCES', sqft: '976 - 1,499 sq.ft.', price: '₹1.92 Cr Onwards', image: builderImage('lodha-group/lodha-elanza/floor-plans/3bhk-floor-plans.webp') }
    ],
    amenities: [
        { name: 'Grand Resort-Style Clubhouse', icon: 'fa-solid fa-hotel' },
        { name: 'Temperature-Controlled Indoor Pool & Lap Pool', icon: 'fa-solid fa-person-swimming' },
        { name: 'Fully Equipped Modern Gymnasium', icon: 'fa-solid fa-dumbbell' },
        { name: 'Yoga Deck & Stargazing Platform', icon: 'fa-solid fa-mattress-pillow' },
        { name: 'Full-Size American College Basketball Court', icon: 'fa-solid fa-basketball' },
        { name: 'Professional Padel Court', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: 'Hydration Bar & Exclusive Resident Cafe', icon: 'fa-solid fa-mug-hot' },
        { name: 'Cascading Greens & Terraced Promenades', icon: 'fa-solid fa-tree' },
        { name: 'Children\'s Play Park & Banquet Hall', icon: 'fa-solid fa-child-reaching' }
    ],
    connectivity: [
        { label: 'Sarjapur Main Road', destination: 'Sarjapur Main Road, Bengaluru, Karnataka 562125', coordinates: { lat: 12.8615, lon: 77.7550 }, distance: '1.3 Kms', icon: 'fa-solid fa-road' },
        { label: 'Oakridge & TISB International Schools', destination: 'The International School Bangalore (TISB) & Oakridge International, Dommasandra, Bengaluru, Karnataka 562125', coordinates: { lat: 12.8795, lon: 77.7615 }, distance: '1.7 Kms', icon: 'fa-solid fa-school' },
        { label: 'Greenwood High & Inventure Academy', destination: 'Greenwood High International School, Sarjapur Road, Bengaluru, Karnataka 560087', coordinates: { lat: 12.8920, lon: 77.7460 }, distance: '4.2 Kms', icon: 'fa-solid fa-school' },
        { label: 'Wipro Kodathi SEZ Campus', destination: 'Wipro Technologies Kodathi Campus, Sarjapur Road, Bengaluru, Karnataka 560035', coordinates: { lat: 12.9035, lon: 77.7085 }, distance: '9.3 Kms', icon: 'fa-solid fa-laptop-code' },
        { label: 'RGA Tech Park', destination: 'RGA Tech Park, Sarjapur Main Road, Carmelaram, Hadosiddapura, Bengaluru, Karnataka 560035', coordinates: { lat: 12.9056, lon: 77.7029 }, distance: '10.2 Kms', icon: 'fa-solid fa-building' },
        { label: 'Outer Ring Road (ORR) / Bellandur', destination: 'Outer Ring Road (ORR) Junction, Bellandur, Bengaluru, Karnataka 560103', coordinates: { lat: 12.9260, lon: 77.6762 }, distance: '15.1 Kms', icon: 'fa-solid fa-road' },
        { label: 'Embassy Tech Village', destination: 'Embassy TechVillage, Outer Ring Road, Devarabisanahalli, Bellandur, Bengaluru, Karnataka 560103', coordinates: { lat: 12.9305, lon: 77.6930 }, distance: '13.7 Kms', icon: 'fa-solid fa-building-columns' }
    ]
  },
  {
    id: 'lodha-beaumont-estate',
    name: 'Lodha Beaumont Estate (Fiorana @ Lodha Beaumont Estate)',
    shortAddress: 'Devanahalli, Bengaluru',
    location: 'Behind Prestige Tech Cloud, Near ITC Factory, Sadahalli, Off Airport Road (NH-44), Devanahalli, North Bengaluru, Karnataka 562110',
    coordinates: { lat: 13.2085, lon: 77.6890 },
    mapsQuery: 'Lodha Beaumont Estate, Devanahalli, Bengaluru',
    category: 'NEW',
    statusText: 'New Launch',
    badgeClass: 'badge-new',
    price: '₹2.49 Crore Onwards',
    bhk: '2, 3 & 4 Bed Ultra-Luxury Residences & Duplexes',
    area: '70 Acres (Phase 1 / Cluster 1: 11.6 Acres)',
    possession: 'March 2032',
    rera: 'PRM/KA/RERA/1251/472/PR/200726/008829',
    highlights: [
        'Grand 70+ acre neo-classical garden estate along NH-44 Airport Corridor',
        'Phase 1 Fiorana featuring 5 low-density towers (2B+G+27 floors) over 11.6 acres',
        'Ultra-luxury 3 & 4-bed residences with private elevators & double-height decks',
        'Proposed grand clubhouse with 50+ world-class lifestyle and wellness amenities',
        'Anchored by an 18-acre natural lake and seasonal botanical landscapes',
        'Just 10 minutes to Kempegowda International Airport (KIAL)',
        'Immediate proximity to Prestige Tech Cloud, KIADB Aerospace SEZ & Doddajala Metro'
    ],
    description: 'Lodha Beaumont Estate (Fiorana) by Lodha Group is a grand 70+ acre neo-classical garden township situated in Sadahalli along the Airport Corridor (NH-44). Phase 1 features 5 high-rise towers (2B+G+27 floors) set across 11.6 acres, comprising 540 ultra-luxury, low-density residences with private elevators and vast sundecks. The estate is anchored by an 18-acre natural lake, seasonal botanical landscapes, and a proposed grand clubhouse offering 50+ lifestyle amenities.',
    thumbnail: builderImage('lodha-group/lodha-beaumont-estate/thumbnail.webp'),
    images: [
        builderImage('lodha-group/lodha-beaumont-estate/gallery/exterior-view.webp'),
        builderImage('lodha-group/lodha-beaumont-estate/gallery/Interior-view.webp'),
        builderImage('lodha-group/lodha-beaumont-estate/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '2-BED LUXURY RESIDENCES', sqft: '1,080 sq. ft.', price: '₹2.49 Cr Onwards', image: builderImage('lodha-group/lodha-beaumont-estate/floor-plans/2bhk-floor-plan.webp') },
        { bhk: '3-BED LUXURY RESIDENCES', sqft: '1,324 - 1,879 sq. ft.', price: '₹3.05 Cr Onwards', image: builderImage('lodha-group/lodha-beaumont-estate/floor-plans/3bhk-floor-plan.webp') },
        { bhk: '4-BED LUXURY RESIDENCES', sqft: '2,125 - 2,180 sq. ft.', price: '₹4.89 Cr Onwards', image: builderImage('lodha-group/lodha-beaumont-estate/floor-plans/4bhk-floor-plan.webp') }
    ],
    amenities: [
        { name: 'Proposed Grand Clubhouse with 50+ Lifestyle Amenities', icon: 'fa-solid fa-hotel' },
        { name: 'Temperature-Controlled Swimming Pool & Poolside Pavilion', icon: 'fa-solid fa-person-swimming' },
        { name: 'State-of-the-Art Modern Gymnasium', icon: 'fa-solid fa-dumbbell' },
        { name: '18-Acre Natural Lake & Lakeside Promenade', icon: 'fa-solid fa-water' },
        { name: 'Tennis, Badminton & Multiple Sports Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: 'Private Elevators & Double Height Lobbies', icon: 'fa-solid fa-elevator' },
        { name: '24/7 Lodha Hospitality & Concierge Service', icon: 'fa-solid fa-user-tie' },
        { name: 'Seasonal Botanical Gardens & Multipurpose Lawns', icon: 'fa-solid fa-tree' }
    ],
    connectivity: [
        { label: 'Prestige Tech Cloud', destination: 'Prestige Tech Cloud, Sadahalli, Devanahalli, Bengaluru, Karnataka 562110', coordinates: { lat: 13.2045, lon: 77.6780 }, distance: '1.7 Kms', icon: 'fa-solid fa-building' },
        { label: 'Upcoming Doddajala Metro Station (Blue Line)', destination: 'Doddajala Metro Station, Airport Road, Bengaluru, Karnataka 562157', coordinates: { lat: 13.1895, lon: 77.6410 }, distance: '7.6 Kms', icon: 'fa-solid fa-train-subway' },
        { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, KIAL Road, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.197605, lon: 77.707486 }, distance: '3.0 Kms', icon: 'fa-solid fa-plane' },
        { label: 'KIADB Aerospace & Hardware Park', destination: 'KIADB Defence and Aerospace Park, Devanahalli, Bengaluru, Karnataka 562149', coordinates: { lat: 13.1965, lon: 77.6822 }, distance: '2.1 Kms', icon: 'fa-solid fa-plane-departure' },
        { label: 'Stonehill International School', destination: 'Stonehill International School, Jalahobli, Tarahunise, Bengaluru, Karnataka 562157', coordinates: { lat: 13.1670, lon: 77.6275 }, distance: '10.9 Kms', icon: 'fa-solid fa-school' },
        { label: 'Manyata Tech Park', destination: 'Manyata Embassy Business Park, Outer Ring Road, Nagavara, Bengaluru, Karnataka 560045', coordinates: { lat: 13.045635, lon: 77.621195 }, distance: '25.9 Kms', icon: 'fa-solid fa-laptop-code' },
        { label: 'Hebbal Flyover', destination: 'Hebbal Flyover, Bellary Road, Hebbal, Bengaluru, Karnataka 560024', coordinates: { lat: 13.041662, lon: 77.589944 }, distance: '29.2 Kms', icon: 'fa-solid fa-road' }
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
