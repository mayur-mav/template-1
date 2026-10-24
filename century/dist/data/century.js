const imageCdnPrefix = 'https://media.justflip.in/builder-brand-pages/';
const centuryImage = suffix => `${imageCdnPrefix}${suffix.replace(/^\/+/, '')}`;

export const developerInfo = {
    hero: {
        subtitle: 'Century Real Estate | Bengaluru',
        title: 'Century Real Estate Projects in Bengaluru',
        description: 'Explore Century Real Estate apartments and homes in Bengaluru. Compare ongoing and ready-to-move projects, locations, floor plans, prices, and amenities.',
        image: centuryImage('century/banner.webp')
    }
};

export const faqData = [
  {
    "question": "Who is the owner of Century Group?",
    "answer": "Century Group (UAE): Led and chaired by Bal Krishen, who serves as the Chairman of the The Century Group spanning financial services, wealth management, and real estate. Century Group (Nigeria - Oil & Gas/Energy): Founded and led by Group CEO Ken Etete, an indigenous energy and maritime group. Century Real Estate Holdings (India): Co-founded in 1973 by Dr. P. Dayananda Pai and P. Satish Pai, with Ravindra Pai serving as the Managing Director. Century Plyboards / Century Group (India - Wood Products): Founded by Sajjan Bhajanka, Sanjay Agarwal, and Hari Prasad Agarwal. Century Group (Madhya Pradesh, India - Real Estate): Established in 2008 by Sandesh Kumar Jain."
  },
  {
    "question": "Who is the CEO of Century Properties Group?",
    "answer": "Jose Marco R. Antonio is the President and Chief Executive Officer of Century Properties Group."
  },
  {
    "question": "How many employees does Century Group have?",
    "answer": "Century Group has approximately 51 to 200 official employees listed on its Century Group LinkedIn profile, though third-party tracking databases estimate their active network and total personnel between 511 and 587 people."
  },
  {
    "question": "What kinds of projects does Century Group offer?",
    "answer": "They develop full-spectrum properties including high-end luxury apartments, premium villas, mixed-use commercial developments, and large-scale integrated plotted townships. Major recent highlights include Century Regalia (Indiranagar), Century Trails (Devanahalli), and Century Kindle (Yelahanka)."
  },
  {
    "question": "Are Century Group projects RERA-approved?",
    "answer": "Yes. Every modern project is strictly launched following state regulatory guidelines. For example, Century Trails, Century OneWorld Seraya, and Century Bliss all feature valid, verifiable RERA registration numbers available on the Karnataka RERA portal."
  },
  {
    "question": "Which banks provide home loans for Century properties?",
    "answer": "Century properties are widely pre-approved by primary public and private financial institutions across India, including State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, and LIC Housing Finance."
  },
  {
    "question": "How large is Century Group’s land footprint?",
    "answer": "Century Group maintains a massive 3,000+ acre land bank across Karnataka, valued at over USD $2 billion. This makes them the largest private landowner in the state."
  },
  {
    "question": "Who currently manages Century Group's operations?",
    "answer": "While founded by the Pai family, day-to-day operations are professionally driven under the Managing Director's office by Ravindra Pai (an alumnus of IIM Bangalore) alongside Executive Director Ashwin Pai and CEO Mahesh Prabhu."
  },
  {
    "question": "Where is Century Group’s main corporate headquarters?",
    "answer": "The company operates from its flagship corporate campus: Century Real Estate - HQ, Opposite Jakkur Aerodrome, Airport Road (Bellary Road), Yashoda Nagar, Yelahanka, Bengaluru – 560065."
  },
  {
    "question": "What are Century Group’s sales and revenue targets?",
    "answer": "Driven by a massive expansion in luxury housing and high-end plotted layouts, Century Group is pacing toward a gross sales target of ₹3,000 crore for the FY26 financial cycle, climbing up from a revenue profile of ₹1,800 crore in the previous fiscal year."
  },
  {
    "question": "What construction technology does Century Group use?",
    "answer": "To ensure structural durability, seamless concrete finishes, and faster handovers, Century Group utilizes modern MIVAN aluminum formwork technology instead of traditional brick-and-mortar masonry for all its high-rise developments (such as Century Regalia and Century Mirai)."
  }
];

// Add uploaded gallery paths in each `images` array with centuryImage('century/project-name/image.webp').
export const propertiesData = [
    {
        id: 'century-liva',
        name: 'Century Liva',
        shortAddress: 'Yelahanka, Bengaluru',
        location: 'Doddaballapur Main Road (SH-9), Singanayakanahalli, Yelahanka, North Bengaluru, Karnataka 560064',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹1.48 Crore Onwards',
        bhk: '2BHK 2T, 3BHK 2T, 3BHK 3T, 3BHK 3T Large, 4BHK 4T',
        area: '3 Acres',
        possession: 'December 2028',
        rera: 'PRM/KA/RERA/1251/309/PR/130924/007015',
        description: 'Century Liva is a luxury residential development by Century Real Estate located on Doddaballapur Main Road, Yelahanka. Spread across 3 acres with 80% open green space, the project features 247 exclusive apartments with modern lifestyle amenities and seamless connectivity to Kempegowda International Airport.',
        thumbnail: centuryImage('century/century-liva/thumbnail.webp'),
        images: [
            centuryImage('century/century-liva/gallery/exterior-view.webp'),
            centuryImage('century/century-liva/gallery/interior-view.webp'),
            centuryImage('century/century-liva/gallery/amenities-1.webp'),
        ],
        floorPlans: [
            { bhk: '3 BHK 2T', sqft: '1,650 sq. ft.', price: '₹1.48 Cr Onwards', image: centuryImage('century/century-liva/floor-plans/3bhk-floor-plan-1.webp') },
            { bhk: '3 BHK 3T', sqft: '1,760 sq. ft.', price: '₹1.48 Cr Onwards', image: centuryImage('century/century-liva/floor-plans/floor-plan-1.webp') }
        ],
        amenities: [
            { name: 'Hammock Garden', icon: 'fa-solid fa-tree' },
            { name: 'Lily Pond & Water Cascade', icon: 'fa-solid fa-water' },
            { name: 'Reflexology Pathway', icon: 'fa-solid fa-shoe-prints' },
            { name: 'Tree House', icon: 'fa-solid fa-tree-city' },
            { name: 'Jogging Track', icon: 'fa-solid fa-person-running' },
            { name: 'Basketball Court', icon: 'fa-solid fa-basketball' },
            { name: 'Skating Rink', icon: 'fa-solid fa-person-skating' },
            { name: 'Cricket Pitch', icon: 'fa-solid fa-baseball-bat-ball' },
            { name: 'Volleyball Court', icon: 'fa-solid fa-volleyball' },
            { name: 'Campfire', icon: 'fa-solid fa-fire' },
            { name: 'BBQ Corner', icon: 'fa-solid fa-fire-burner' },
            { name: 'Open Air Theatre', icon: 'fa-solid fa-masks-theater' },
            { name: 'Futsal Court', icon: 'fa-solid fa-futbol' },
            { name: 'Seating Zone', icon: 'fa-solid fa-couch' }
        ],
        connectivity: [
            { label: 'BMS Institute of Technology', distance: '04 mins', icon: 'fa-solid fa-graduation-cap' },
            { label: 'Ramada by Wyndham', distance: '5 mins', icon: 'fa-solid fa-hotel' },
            { label: 'Mallya Aditi International School', distance: '09 mins', icon: 'fa-solid fa-school' },
            { label: 'Angsana Oasis Spa And Resort', distance: '10 mins', icon: 'fa-solid fa-hotel' },
            { label: 'National Public School', distance: '12 mins', icon: 'fa-solid fa-school' },
            { label: 'The Galleria Mall', distance: '14 mins', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Manipal Institute of Technology', distance: '16 mins', icon: 'fa-solid fa-graduation-cap' },
            { label: 'Vidyashilp Academy', distance: '20 mins', icon: 'fa-solid fa-school' },
            { label: 'Manipal Hospital, Doddaballapura', distance: '22 mins', icon: 'fa-solid fa-hospital' },
            { label: 'Philips Innovation Center', distance: '22 mins', icon: 'fa-solid fa-laptop-code' },
            { label: 'Mall of Asia', distance: '22 mins', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Sparsh Multispeciality', distance: '25 mins', icon: 'fa-solid fa-hospital' },
            { label: 'Grover Zampa Vineyards', distance: '30 mins', icon: 'fa-solid fa-wine-glass' },
            { label: 'Information Tech Investment Region (ITIR)', distance: '30 mins', icon: 'fa-solid fa-laptop-code' },
            { label: 'Aster CMI', distance: '33 mins', icon: 'fa-solid fa-hospital' }
        ]
    },
    {
        id: 'century-regalia',
        name: 'Century Regalia',
        shortAddress: 'Indiranagar, Bengaluru',
        location: 'Golf Avenue, next to KGA Road, Indiranagar, Kodihalli, Bengaluru, Karnataka 560008',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹6.65 Crore Onwards',
        bhk: '3 & 4 BHK Luxury Residences, Townhouses & Penthouses',
        area: '8.5 Acres',
        possession: 'Phase 1: April 2029 | Phase 2: December 2030',
        rera: 'Phase 1: PRM/KA/RERA/1251/446/PR/170524/006883 | Phase 2: PRM/KA/RERA/1251/446/PR/150325/007586',
        description: 'Century Regalia by Century Real Estate is an ultra-luxury residential enclave situated off HAL Old Airport Road, adjacent to the 125-acre Karnataka Golf Association (KGA) course in Indiranagar. Developed across two phases on an 8.5-acre land parcel with 80% open space, it features low-density towers, a massive 64,000 sq. ft. clubhouse, and exquisite luxury configurations.',
        thumbnail: centuryImage('century/century-regalia/thumbnail.webp'),
        images: [
            centuryImage('century/century-regalia/gallery/interior-view.webp'),
            centuryImage('century/century-regalia/gallery/amenities-1.webp'),
            centuryImage('century/century-regalia/gallery/amenities-2.webp')
        ],
        floorPlans: [
            { bhk: '3- BED RESIDENCES', sqft: '2,375 sq. ft. onwards', price: '₹6.65 Cr Onwards', image: centuryImage('century/century-regalia/floor-plans/3bhk-floor-plan-1.webp') },
            { bhk: 'TOWNHOUSE RESIDENCES', sqft: '3,830 sq. ft. onwards', price: '₹10 Cr Onwards' },
            { bhk: 'IMPERIAL RESIDENCES', sqft: '4,780 sq. ft. onwards', price: '₹12 Cr Onwards' },
            { bhk: 'CELESTIAL PENTHOUSES', sqft: '4,780 sq. ft. onwards', price: '₹18.5 Cr Onwards' }
        ],
        amenities: [
            { name: 'Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: 'Rooftop Infinity Pool & Sky Café', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Modern Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Yoga & Meditation Zone', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Squash & Pickleball Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Mini Theatre & Lounge', icon: 'fa-solid fa-film' },
            { name: 'Spa, Steam & Sauna', icon: 'fa-solid fa-hot-tub-person' },
            { name: 'Sculpture & Pet Garden', icon: 'fa-solid fa-paw' },
            { name: 'Children\'s Play Area', icon: 'fa-solid fa-child-reaching' }
        ],
        connectivity: [
            { label: 'KGA Golf Course', distance: '0.15 km', icon: 'fa-solid fa-flag' },
            { label: 'Hotel The Leela Palace', distance: '500 m', icon: 'fa-solid fa-hotel' },
            { label: 'Embassy Golf Links (EGL)', distance: '1 km', icon: 'fa-solid fa-laptop-code' },
            { label: 'Indiranagar Club', distance: '2 km', icon: 'fa-solid fa-users' },
            { label: 'Indiranagar 100 Ft. Road', distance: '3 km', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Manipal Hospital, Old Airport Road', distance: '800 m', icon: 'fa-solid fa-hospital' },
            { label: 'Indiranagar Metro Station', distance: '4.3 km', icon: 'fa-solid fa-train' }
        ]
    },
    {
        id: 'century-ethos',
        name: 'Century Ethos',
        shortAddress: 'Hebbal, Bengaluru',
        location: 'Bellary Road, opposite Sahakar Nagar, Hebbal, Bengaluru, Karnataka 560092',
        category: 'READY',
        statusText: 'Ready to Move',
        badgeClass: 'badge-ready',
        price: '₹4.10 Crore Onwards',
        bhk: '3 & 4 BHK Residences',
        area: '7.3 Acres',
        possession: 'Ready Possession',
        rera: 'PRM/KA/RERA/1251/309/PR/171014/000283',
        description: 'Century Ethos is an iconic ultra-luxury residential enclave by Century Real Estate located on Bellary Road, Hebbal. Spread across 7.3 acres with 80% open spaces, the project features 4 low-density towers, a massive 50,000 sq. ft. clubhouse, zero common walls for maximum privacy, and grand uber-sized residences.',
        thumbnail: centuryImage('century/century-ethos/thumbnail.webp'),
        images: [
            centuryImage('century/century-ethos/gallery/exterior-view.webp'),
            centuryImage('century/century-ethos/gallery/interior-view.webp'),
            centuryImage('century/century-ethos/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '3-BED RESIDENCES', sqft: '2,850 - 3,125 sq. ft.', price: 'On Request', image: centuryImage('century/century-ethos/floor-plans/3bhk-floor-plan-1.webp') },
            { bhk: '4-BED RESIDENCES', sqft: '4,235 sq. ft.', price: 'On Request', image: centuryImage('century/century-ethos/floor-plans/4bhk-floor-plan-1.webp') }
        ],
        amenities: [
            { name: 'Luxury Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: 'Temperature-Controlled Indoor Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Oasis Outdoor Pool & Kids Pool', icon: 'fa-solid fa-water-ladder' },
            { name: 'Fully Equipped Modern Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Squash & Multi-Purpose Sports Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Golf-Putting Arenas', icon: 'fa-solid fa-flag' },
            { name: 'Spa, Salon & Sauna', icon: 'fa-solid fa-hot-tub-person' },
            { name: '100-Seater Banquet Hall', icon: 'fa-solid fa-people-roof' },
            { name: 'Indoor & Outdoor Co-Working Spaces', icon: 'fa-solid fa-laptop-code' }
        ],
        connectivity: [
            { label: 'Phoenix Mall of Asia', distance: '850 m', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Aster CMI Hospital', distance: '1.2 km', icon: 'fa-solid fa-hospital' },
            { label: 'Kodigehalli Railway Station', distance: '2.9 km', icon: 'fa-solid fa-train' },
            { label: 'Esteem Mall', distance: '2.5 km', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Manyata Tech Park', distance: '6.5 km', icon: 'fa-solid fa-laptop-code' },
            { label: 'Kempegowda International Airport', distance: '25 km', icon: 'fa-solid fa-plane' }
        ]
    },
    {
        id: 'century-renata',
        name: 'Century Renata',
        shortAddress: 'Richmond Road, Bengaluru',
        location: 'Richmond Road, Central Bengaluru, Karnataka 560025',
        category: 'READY',
        statusText: 'Ready to Move',
        badgeClass: 'badge-ready',
        price: '₹7.54 Crore Onwards',
        bhk: '3 & 4 BHK Bespoke Residences',
        area: '1.14 Acres',
        possession: 'Ready Possession',
        rera: 'PRM/KA/RERA/1251/446/PR/170918/000782',
        description: 'Century Renata is an ultra-luxury boutique residential enclave located on Richmond Road in Central Bengaluru. Spread across 1.14 acres, the low-density property features a single tower comprising just 36 bespoke residences (3 and 4 BHK layouts, including select options with private gardens and wrap-around decks) designed for complete privacy and elegance.',
        thumbnail: centuryImage('century/century-renata/thumbnail.webp'),
        images: [
            centuryImage('century/century-renata/gallery/exterior-view.webp'),
            centuryImage('century/century-renata/gallery/interior-view.webp'),
            centuryImage('century/century-renata/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '3-BED RESIDENCES', sqft: '2,793 - 3,324 sq. ft.', price: '₹7.54 Cr Onwards', image: centuryImage('century/century-renata/floor-plans/floor-plan-1.webp') },
            { bhk: '4-BED RESIDENCES', sqft: '5,338 sq. ft.', price: '₹11.79 Cr Onwards', image: centuryImage('century/century-renata/floor-plans/floor-plan-2.webp') }
        ],
        amenities: [
            { name: '800 sq. ft. Triple-Height Grand Entrance Lounge', icon: 'fa-solid fa-hotel' },
            { name: 'Swimming Pool & Kids Pool with Water Slides', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Modern Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Yoga & Meditation Studio', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Indoor Squash & Badminton Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Spa, Steam & Sauna', icon: 'fa-solid fa-hot-tub-person' },
            { name: 'Party Arena & Media/Games Room', icon: 'fa-solid fa-film' },
            { name: 'Children\'s Play Area', icon: 'fa-solid fa-child-reaching' }
        ],
        connectivity: [
            { label: 'The Bangalore Club', distance: '0.3 km', icon: 'fa-solid fa-users' },
            { label: 'Cubbon Park', distance: '1.5 km', icon: 'fa-solid fa-tree' },
            { label: 'Bangalore Golf Club', distance: '3.4 km', icon: 'fa-solid fa-flag' },
            { label: 'MG Road & Brigade Road', distance: '2 km', icon: 'fa-solid fa-cart-shopping' },
            { label: 'UB City Mall', distance: '1.2 km', icon: 'fa-solid fa-shop' },
            { label: 'MG Road Metro Station', distance: '2 km', icon: 'fa-solid fa-train' }
        ]
    },
    {
        id: 'century-astoria',
        name: 'The Astoria at Century Immencity',
        location: 'Jakkur, International Airport Road, North Bengaluru, Karnataka 560064',
        shortAddress: 'Jakkur, Bengaluru',
        category: 'NEW',
        statusText: 'New Launch',
        badgeClass: 'badge-new',
        price: '₹4.42 Crore Onwards',
        bhk: '3 & 3.5 Bed Residences',
        area: '6.07 Acres',
        possession: 'February 2031',
        rera: 'PRM/KA/RERA/1251/309/PR/160526/008662',
        description: 'The Astoria is a premium residential enclave comprising 334 Neo Luxe residences across 5 low-density towers, situated within Century Immencity—a landmark 50+ acre mixed-use destination on International Airport Road, Jakkur. Developed by Century Real Estate, the enclave features approximately 75% to 70% open spaces, a ~40,000 sq. ft. clubhouse, and a landscape-led amenity ecosystem integrating retail, commercial, and residential luxury.',
        thumbnail: centuryImage('century/century-immencity/thumbnail.webp'),
        images: [
            centuryImage('century/century-immencity/gallery/interior-view.webp'),
            centuryImage('century/century-immencity/gallery/amenities-1.webp'),
            centuryImage('century/century-immencity/gallery/amenities-2.webp')
        ],
        floorPlans: [
            { bhk: '3-BED RESIDENCES', sqft: '2,175 - 2,565 sq. ft.', price: '₹3.85 Cr Onwards', image: centuryImage('century/century-immencity/floor-plans/floor-plan-1.webp') },
            { bhk: '3.5-BED RESIDENCES', sqft: '3,020 sq. ft.', price: '₹5.34 Cr Onwards', image: centuryImage('century/century-immencity/floor-plans/floor-plan-2.webp') }
        ],
        amenities: [
            { name: '~40,000 sq. ft. Grand Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: 'Swimming Pool & Kids Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Modern Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Yoga & Meditation Deck', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Jogging & Cycling Tracks', icon: 'fa-solid fa-person-running' },
            { name: 'Outdoor Sports Courts', icon: 'fa-solid fa-basketball' },
            { name: 'Amphitheatre & Mini Theatre', icon: 'fa-solid fa-film' },
            { name: 'Children\'s Play Area', icon: 'fa-solid fa-child-reaching' },
            { name: 'High-Street Retail & Dining Access', icon: 'fa-solid fa-cart-shopping' }
        ],
        connectivity: [
            { label: 'Jakkur Aerodrome', distance: 'Close Proximity', icon: 'fa-solid fa-plane-up' },
            { label: 'Hebbal', distance: '~6 km / ~12 mins', icon: 'fa-solid fa-road' },
            { label: 'Manyata Tech Park', distance: '~5.1 km - 8 km', icon: 'fa-solid fa-laptop-code' },
            { label: 'Yelahanka', distance: '~5 km / ~10 mins', icon: 'fa-solid fa-train' },
            { label: 'Kempegowda International Airport', distance: '~15 km / ~25 mins', icon: 'fa-solid fa-plane' }
        ]
    },
    {
        id: 'century-kindle',
        name: 'Century Kindle',
        location: 'Attur Village, Attur Layout, Yelahanka New Town, Bengaluru, Karnataka 560064',
        shortAddress: 'Yelahanka New Town, Bengaluru',
        category: 'NEW',
        statusText: 'NEW LAUNCH',
        badgeClass: 'badge-new',
        price: '₹1.18 Crore Onwards',
        bhk: '2 & 3 Bed Residences',
        area: '4.66 Acres',
        possession: 'March 2031',
        rera: 'PRM/KA/RERA/1251/309/PR/200326/008542',
        description: 'Century Kindle by Century Real Estate is a premium residential enclave located in Attur Village, Yelahanka New Town. Spread across 4.6 acres with well-planned towers (2B + G + 19 floors), the project features 458 modern residences emphasizing large balconies, cross-ventilation, and extensive lifestyle amenities in a rapidly developing North Bengaluru corridor.',
        thumbnail: centuryImage('century/century-kindle/thumbnail.webp'),
        images: [
            centuryImage('century/century-kindle/gallery/interior-view.webp'),
            centuryImage('century/century-kindle/gallery/amenities-1.webp'),
            centuryImage('century/century-kindle/gallery/amenities-2.webp')
        ],
        floorPlans: [
            { bhk: '2-BED RESIDENCES', sqft: '723 sq. ft.', price: '₹1.18 Cr Onwards', image: centuryImage('century/century-kindle/floor-plans/floor-plan-1.webp') },
            { bhk: '3-BED RESIDENCES', sqft: '931 sq. ft.', price: '₹1.80 Cr Onwards', image: centuryImage('century/century-kindle/floor-plans/3bhk-floor-plan-1.webp') }
        ],
        amenities: [
            { name: 'Badminton Court', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Cafe', icon: 'fa-solid fa-mug-hot' },
            { name: 'CCTV Surveillance', icon: 'fa-solid fa-video' },
            { name: 'ClubHouse', icon: 'fa-solid fa-hotel' },
            { name: 'Cricket', icon: 'fa-solid fa-baseball-bat-ball' },
            { name: 'Cycling Track', icon: 'fa-solid fa-bicycle' },
            { name: 'Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Indoor Games', icon: 'fa-solid fa-chess' },
            { name: 'Jogging Track', icon: 'fa-solid fa-person-running' },
            { name: 'Kids Play Area', icon: 'fa-solid fa-child-reaching' },
            { name: 'Kids\' Pool', icon: 'fa-solid fa-water-ladder' },
            { name: 'Landscaped Gardens', icon: 'fa-solid fa-tree' },
            { name: 'Library', icon: 'fa-solid fa-book' },
            { name: 'Mini Theater', icon: 'fa-solid fa-film' },
            { name: 'Outdoor Gym', icon: 'fa-solid fa-dumbbell' },
        ],
        connectivity: [
            { label: 'Yelahanka Railway Station', distance: '4 km', icon: 'fa-solid fa-train' },
            { label: 'Doddaballapur Main Road', distance: '2 km', icon: 'fa-solid fa-road' },
            { label: 'RMZ Galleria Mall', distance: '3 km', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Hebbal Flyover', distance: '10 km', icon: 'fa-solid fa-road' },
            { label: 'Manyata Tech Park', distance: '15 km', icon: 'fa-solid fa-laptop-code' },
            { label: 'Kempegowda International Airport', distance: '26 km', icon: 'fa-solid fa-plane' }
        ]
    },
    {
        id: 'century-bliss',
        name: 'Century Bliss',
        location: 'Yelahanka - Doddaballapura Main Road, North Bengaluru, Karnataka 562163',
        shortAddress: 'North Bengaluru',
        category: 'NEW',
        statusText: 'NEW LAUNCH',
        badgeClass: 'badge-new',
        price: '₹99 Lakh Onwards',
        bhk: '2, 2.5 & 3 Bed Homes',
        area: '4.2 Acres',
        possession: 'April 2031',
        rera: 'PRM/KA/RERA/1250/301/PR/210426/008595',
        description: 'Century Bliss by Century Real Estate is a thoughtfully planned residential community located on the Yelahanka-Doddaballapura Main Road. Spread across 4.25 acres with 75% landscaped open spaces, the development features 2 residential towers with 194 thoughtfully designed 2, 2.5, and 3-bed homes, complemented by a 26,000+ sq. ft. multi-level clubhouse and an attached commercial hub.',
        thumbnail: centuryImage('century/century-bliss/thumbnail.webp'),
        images: [
            centuryImage('century/century-bliss/gallery/exterior-view.webp'),
            centuryImage('century/century-bliss/gallery/interior-view.webp'),
            centuryImage('century/century-bliss/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '2-BED RESIDENCES', sqft: '1,235 sq. ft.', price: '₹99 Lakh Onwards', image: centuryImage('century/century-bliss/floor-plans/floor-plan-1.webp') },
            { bhk: '2.5-BED RESIDENCES', sqft: '1,490 sq. ft.', price: '₹1.06 Cr Onwards', image: centuryImage('century/century-bliss/floor-plans/2.5bhk-floor-plan.webp') },
            { bhk: '3-BED RESIDENCES', sqft: '1,835 sq. ft.', price: '₹1.30 Cr Onwards', image: centuryImage('century/century-bliss/floor-plans/3bhk-floor-plan-1.webp') }
        ],
        amenities: [
            { name: '26,000+ sq. ft. Multi-Level Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: 'Swimming Pool & Kids Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Modern Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Yoga & Activity Zone', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Pickleball & Futsal Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Box Cricket Pitch', icon: 'fa-solid fa-baseball-bat-ball' },
            { name: 'Tree Court & Senior Garden', icon: 'fa-solid fa-tree' },
            { name: 'Business Centre & Work Pods', icon: 'fa-solid fa-laptop-code' },
            { name: 'Attached Commercial Hub', icon: 'fa-solid fa-cart-shopping' }
        ],
        connectivity: [
            { label: 'Doddaballapura Industrial Zone', distance: '10 mins', icon: 'fa-solid fa-industry' },
            { label: 'Foxconn Facility', distance: '20 mins', icon: 'fa-solid fa-microchip' },
            { label: 'Satellite Town Ring Road (STRR)', distance: '15 mins', icon: 'fa-solid fa-road' },
            { label: 'RMZ Galleria Mall', distance: '15 mins', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Yelahanka New Town', distance: '10 mins', icon: 'fa-solid fa-train' },
            { label: 'Kempegowda International Airport', distance: '40 mins', icon: 'fa-solid fa-plane' }
        ]
    },
    {
        id: 'century-mirai',
        name: 'Century Mirai',
        location: 'Silver Springs Layout, Munnekollal, Marathahalli, Bengaluru, Karnataka 560037',
        shortAddress: 'Marathahalli, Bengaluru',
        category: 'NEW',
        statusText: 'NEW LAUNCH',
        badgeClass: 'badge-new',
        price: '₹3.12 Crore Onwards',
        bhk: '3 & 4 Bed Residences',
        area: '9.4 Acres (Phase 1), within a 14+ acre mixed-use site',
        possession: 'October 2030',
        rera: 'PRM/KA/RERA/1251/446/PR/181025/008182',
        description: 'Century Mirai by Century Real Estate is a major landmark residential enclave situated in Silver Springs Layout, Marathahalli. Spread across over 14 acres of prime land in East Bengaluru, the project features low-density high-rise towers, expansive open green spaces, a massive ~35,000 sq. ft. clubhouse, and meticulously planned modern residences tailored for tech-corridor professionals.',
        thumbnail: centuryImage('century/century-mirai/thumbnail.webp'),
        images: [
            centuryImage('century/century-mirai/gallery/exterior-view.webp'),
            centuryImage('century/century-mirai/gallery/interior-view.webp'),
            centuryImage('century/century-mirai/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '3-BED RESIDENCES', sqft: '1810 sq. ft.', price: '₹3.12 Cr Onwards', image: centuryImage('century/century-mirai/floor-plans/3bhk-floor-plan-1.webp') },
            { bhk: '4-BED RESIDENCES', sqft: '3115 sq. ft.', price: 'On Request', image: centuryImage('century/century-mirai/floor-plans/4bhk-floor-plan-1.webp') }
        ],
        amenities: [
            { name: '~35,000 sq. ft. Grand Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: 'Swimming Pool & Kids Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Modern Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Yoga & Meditation Pavilion', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Badminton & Squash Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Jogging & Cycling Tracks', icon: 'fa-solid fa-person-running' },
            { name: 'Multipurpose Hall & Games Room', icon: 'fa-solid fa-gamepad' },
            { name: 'Children\'s Play Area', icon: 'fa-solid fa-child-reaching' },
            { name: 'Landscaped Central Gardens', icon: 'fa-solid fa-tree' }
        ],
        connectivity: [
            { label: 'SAP Labs', distance: '3.7 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'Cessna Business Park', distance: '4.2 Kms', icon: 'fa-solid fa-building' },
            { label: 'JP Morgan', distance: '4.9 Kms', icon: 'fa-solid fa-building-columns' },
            { label: 'GE Healthcare', distance: '4.9 Kms', icon: 'fa-solid fa-square-h' },
            { label: 'Embassy Tech Village', distance: '5 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'Ryan International School', distance: '2.1 Kms', icon: 'fa-solid fa-school' },
            { label: 'Euro School', distance: '4.5 Kms', icon: 'fa-solid fa-school' },
            { label: 'Manipal Hospital', distance: '4.2 Kms', icon: 'fa-solid fa-hospital' },
            { label: 'Motherhood Hospital', distance: '4.9 Kms', icon: 'fa-solid fa-hospital-user' },
            { label: 'Seetharam Palya Metro Station', distance: '3.4 Kms', icon: 'fa-solid fa-train-subway' },
            { label: 'Kundalahalli Metro Station', distance: '3.8 Kms', icon: 'fa-solid fa-train-subway' },
            { label: 'Nexus Whitefield', distance: '4.8 Kms', icon: 'fa-solid fa-cart-shopping' },
        ]
    }
];
