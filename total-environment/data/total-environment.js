const imageCdnPrefix = 'https://media.justflip.in/builder-brand-pages/';
const totalEnvironmentImage = suffix => `${imageCdnPrefix}${suffix.replace(/^\/+/, '')}`;

export const developerInfo = {
    hero: {
        subtitle: 'Total Environment | Bengaluru',
        title: 'Total Environment Homes & Projects in Bangalore',
        description: 'Explore Total Environment Group homes and projects in Bangalore, including apartments, villas, and plotted developments across Bengaluru and nearby locations.',
        image: totalEnvironmentImage('total-environment/banner.webp')
    }
};

export const faqData = [
  {
    "question": "What makes Total Environment different from other luxury developers?",
    "answer": "Instead of flashy luxury and mass-produced finishes, Total Environment focuses on biophilic design, exposed natural materials, low-density master plans, and extensive greenery. Their communities prioritize warmth, sustainability, and thoughtful living over ornamental architecture."
  },
  {
    "question": "Where are their properties located?",
    "answer": "While headquartered in Bangalore, they have projects across prime micro-markets including Whitefield, Yelahanka, Hennur Road, Jakkur, Sarjapur Road, and Kanakapura Road. They also have a presence in Pune, Hyderabad, and Frisco, Texas."
  },
  {
    "question": "Who is the owner of Total Environment?",
    "answer": "The owner and founder of Total Environment is architect Kamal Sagar, who co-founded the company with Shibanee Sagar in July 1996."
  },
  {
    "question": "What is Total environment Building Systems Pvt Ltd?",
    "answer": "Total Environment Building Systems Pvt Ltd is an Indian architect-led real estate development and design company known for crafting luxury residential properties and nature-integrated living spaces."
  },
  {
    "question": "Is Total Environment a good builder?",
    "answer": "Total Environment is a high-end luxury builder known for gorgeous nature-inspired designs and custom-finished homes, but they are also infamous for long construction delays and very high prices."
  },
  {
    "question": "How much do Total Environment villas cost?",
    "answer": "Villas built by Total Environment Building Systems generally cost between ₹3 crore and ₹25 crore, heavily depending on the specific project, villa configuration, unit size, and whether you are purchasing directly from the developer or through the resale market."
  },
  {
    "question": "What is the price range for flats in Total Environment Bangalore?",
    "answer": "The overall price range for flats in Total Environment Bangalore projects spans from roughly ₹2.34 crore to over ₹18 crore, depending on the specific property, size, and configuration."
  },
  {
    "question": "Where is Kamal Sagar from?",
    "answer": "Kamal Sagar is an Indian architect and designer who is based in Bengaluru (Bangalore), India, where he is the founder and chairman of Total Environment Building Systems."
  }
];

export const propertiesData = [
    {
        id: 'total-environment-down-by-the-water',
        name: 'Total Environment Down by the Water',
        location: 'Agrahara, Jakkur, Yelahanka, Bengaluru, Karnataka 560064',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹5.62 Crore Onwards',
        bhk: '3 & 4 BHK Apartments',
        area: '17.5 Acres',
        possession: 'June 2029',
        rera: 'PRM/KA/RERA/1251/472/PR/090824/006967',
        description: 'Down by the Water is a 17.5-acre lakeside community by Total Environment, located adjacent to Jakkur Lake in North Bengaluru. The project offers luxury 3 and 4-bedroom apartments with private terrace gardens, custom cabinetry, and natural landscaping designed for calm lakeside living.',
        thumbnail: totalEnvironmentImage('total-environment/total-environment-down-by-the-water/thumbnail.webp'),
        images: [
            totalEnvironmentImage('total-environment/total-environment-down-by-the-water/gallery/exterior-view.webp'),
            totalEnvironmentImage('total-environment/total-environment-down-by-the-water/gallery/interior-view.webp'),
            totalEnvironmentImage('total-environment/total-environment-down-by-the-water/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '3 BHK + Study (I20)', sqft: '2,490 sq. ft.', price: '₹5.62 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-down-by-the-water/floor-plans/3bhk(I20)-floor-plan.webp') },
            { bhk: '3 BHK + Home Office (L21)', sqft: '2,628 sq. ft.', price: '₹5.91 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-down-by-the-water/floor-plans/3bhk(L21)-floor-plan.webp') },
            { bhk: '3 BHK + Home Office + Study (I25)', sqft: '3,240 sq. ft.', price: '₹7.27 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-down-by-the-water/floor-plans/3bhk(I25)-floor-plan.webp') },
            { bhk: '4 BHK + Home Office + Study (I40)', sqft: '4,980 sq. ft.', price: '₹11.24 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-down-by-the-water/floor-plans/4bhk(I40)-floor-plan.webp') },
            { bhk: '4 BHK + Home Office + Study (I50)', sqft: '6,480 sq. ft.', price: '₹14.60 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-down-by-the-water/floor-plans/4bhk(I50)-floor-plan.webp') }
        ],
        amenities: [
            { name: 'Lakeside Boardwalk', icon: 'fa-solid fa-water' },
            { name: 'Clubhouse with Green Roof', icon: 'fa-solid fa-building' },
            { name: 'Open-to-Sky Swimming Pool', icon: 'fa-solid fa-water-ladder' },
            { name: 'Indoor Heated Pool', icon: 'fa-solid fa-temperature-arrow-up' },
            { name: 'Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Amphitheatre', icon: 'fa-solid fa-masks-theater' },
            { name: 'Jogging / Pedestrian Track', icon: 'fa-solid fa-person-running' },
            { name: 'Cycling Track', icon: 'fa-solid fa-bicycle' },
            { name: 'Children\'s Play Area', icon: 'fa-solid fa-child-reaching' }
        ],
        connectivity: [
            { label: 'Airport', distance: 'Kempegowda International Airport Bengaluru (~21.6 km / ~30 min)', icon: 'fa-solid fa-plane' },
            { label: 'Business Hubs & Tech Parks', distance: 'Manyata Tech Park (5.9 km)', icon: 'fa-solid fa-laptop-code' },
            { label: 'Schools', distance: 'Mallya Aditi International School (6.5 km) | Legacy School (7.5 km) | Bangalore International School (8.5 km)', icon: 'fa-solid fa-school' },
            { label: 'Hospitals', distance: 'Manipal Hospital Hebbal (8.5 km) | Aster CMI Hospital (9.6 km)', icon: 'fa-solid fa-hospital' },
            { label: 'Shopping & Malls', distance: 'Bhartiya Mall of Bengaluru (5.3 km) | Mall of Asia (8.2 km)', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Metro Station', distance: 'Upcoming Yelahanka / Jakkur Cross Metro Station (5.0 km)', icon: 'fa-solid fa-train' }
        ]
    },
    {
        id: 'total-environment-after-the-rain',
        name: 'Total Environment After the Rain',
        location: 'Sir MVIT College Road, Betthadasanapura, Yelahanka, Bengaluru, Karnataka 560097',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹15.99 Crore Onwards',
        bhk: '3 Bedroom Earth-Sheltered Villas',
        area: '45 Acres',
        possession: 'Phased Delivery (Phase 3 Onwards)',
        rera: 'PRM/KA/RERA/1251/309/PR/160825/008002',
        description: 'After the Rain by Total Environment is an exclusive community of earth-sheltered, green-roof villas located off Sir MVIT College Road in Yelahanka, North Bengaluru. Designed with native plants and natural earth-sheltered roofs, these homes maintain naturally cool interior temperatures and blend seamlessly into the surrounding greenery.',
        thumbnail: totalEnvironmentImage('total-environment/total-environment-after-the-rain/thumbnail.webp'),
        images: [
            totalEnvironmentImage('total-environment/total-environment-after-the-rain/gallery/exterior-view.webp'),
            totalEnvironmentImage('total-environment/total-environment-after-the-rain/gallery/interior-view.webp'),
            totalEnvironmentImage('total-environment/total-environment-after-the-rain/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: 'V45 Duplex Villa (3 BHK)', sqft: '4,824 sq. ft.', price: '₹15.99 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-after-the-rain/floor-plans/3bhk-duplex-villa-floor-plan.webp') }
        ],
        amenities: [
            { name: 'Clubhouse', icon: 'fa-solid fa-building' },
            { name: 'Vanishing Edge Swimming Pool', icon: 'fa-solid fa-water-ladder' },
            { name: 'Heated Indoor Pool', icon: 'fa-solid fa-temperature-arrow-up' },
            { name: 'Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Interactive Kids Play Area', icon: 'fa-solid fa-child-reaching' },
            { name: 'Multipurpose Court & Tennis Court', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Pedestrian Path / Jogging Track', icon: 'fa-solid fa-person-running' },
            { name: 'Landscape Composting Area', icon: 'fa-solid fa-seedling' },
            { name: 'Canine Club', icon: 'fa-solid fa-dog' }
        ],
        connectivity: [
            { label: 'Airport', distance: 'Kempegowda International Airport (16.0 km / ~20 min)', icon: 'fa-solid fa-plane' },
            { label: 'Schools', distance: 'Stonehill International School (2.2 km) | Sadhu Vaswani International School (1.0 km)', icon: 'fa-solid fa-school' },
            { label: 'Colleges', distance: 'Sir M. Visvesvaraya Institute of Technology (2.0 km) | Krishnadevaraya College of Dental Sciences (1.8 km)', icon: 'fa-solid fa-graduation-cap' },
            { label: 'Sports Complex', distance: 'Padukone-Dravid Centre for Sports Excellence (2.0 km)', icon: 'fa-solid fa-dumbbell' },
            { label: 'Hospitals', distance: 'Life Care Hospital (4.0 km)', icon: 'fa-solid fa-hospital' },
            { label: 'Business Hubs & Tech Parks', distance: 'Embassy Manyata Business Park (19.0 km)', icon: 'fa-solid fa-laptop-code' },
            { label: 'Shopping & Malls', distance: 'RMZ Galleria Mall (12.0 km)', icon: 'fa-solid fa-cart-shopping' }
        ]
    },
    {
        id: 'total-environment-pursuit-of-a-radical-rhapsody',
        name: 'Total Environment Pursuit of a Radical Rhapsody',
        location: 'ITPL Main Road, Hoodi, Whitefield, Bengaluru, Karnataka 560048',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹6.18 Crore Onwards',
        bhk: '3 & 4 BHK Apartments, Duplexes & Earth-Sheltered Villas',
        area: '34.5 Acres',
        possession: 'December 2026',
        rera: 'PRM/KA/RERA/1251/446/PR/171014/000433',
        description: 'Pursuit of a Radical Rhapsody is a 34.5-acre lakefront development by Total Environment on ITPL Main Road in Whitefield, Bengaluru. The project features terrace gardens on every home up to the 27th floor, earth-sheltered villas with green roofs, custom cabinetry, natural finishes, and direct views of the adjacent Hoodi Lake.',
        thumbnail: totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/thumbnail.webp'),
        images: [
            totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/gallery/exterior-view.webp'),
            totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/gallery/interior-view.webp'),
            totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '3 BHK Apartment (C20)', sqft: '2,753 sq. ft.', price: '₹6.18 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/floor-plans/3bhk(C20)-floor-plan.webp') },
            { bhk: '3 BHK Apartment (R22)', sqft: '2,804 sq. ft.', price: '₹6.19 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/floor-plans/3bhk(R22)-floor-plan.webp') },
            { bhk: '3 BHK Apartment (R25)', sqft: '3,434 sq. ft.', price: '₹7.59 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/floor-plans/3bhk(R25)-floor-plan.webp') },
            { bhk: '3 BHK Duplex (D35)', sqft: '4,596 sq. ft.', price: '₹11.07 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/floor-plans/3bhk(D35)-duplex-floor-plan.webp')},
            { bhk: '4 BHK Duplex Villa (V40)', sqft: '4,686 sq. ft.', price: '₹16.36 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/floor-plans/4bhk-duplex-villa-floor-plan.webp') }
        ],
        amenities: [
            { name: 'Boardwalk by Lake', icon: 'fa-solid fa-water' },
            { name: 'Terrace Gardens', icon: 'fa-solid fa-seedling' },
            { name: 'Clubhouse', icon: 'fa-solid fa-building' },
            { name: 'Main Outdoor Swimming Pool', icon: 'fa-solid fa-water-ladder' },
            { name: 'Toddler\'s Pool', icon: 'fa-solid fa-child-reaching' },
            { name: 'Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Amphitheatre', icon: 'fa-solid fa-masks-theater' },
            { name: 'Pedestrian Path / Jogging Track', icon: 'fa-solid fa-person-running' },
            { name: 'Pet Park', icon: 'fa-solid fa-dog' },
            { name: 'Tree Museum', icon: 'fa-solid fa-tree' },
            { name: 'Spa & Sauna', icon: 'fa-solid fa-spa' }
        ],
        connectivity: [
            { label: 'Airport', distance: 'Kempegowda International Airport (38.0 km / ~50 min)', icon: 'fa-solid fa-plane' },
            { label: 'Business Hubs & Tech Parks', distance: 'International Tech Park Bangalore (ITPB) (3.2 km) | EPIP Zone (4.5 km) | Bagmane Constellation Business Park (6.8 km)', icon: 'fa-solid fa-laptop-code' },
            { label: 'Metro Station', distance: 'Hoodi Metro Station (1.2 km) | Pattandur Agrahara Metro Station (3.0 km)', icon: 'fa-solid fa-train' },
            { label: 'Schools', distance: 'Gopalan National School (2.5 km) | The Ryan International School (6.2 km)', icon: 'fa-solid fa-school' },
            { label: 'Hospitals', distance: 'Manipal Hospital Whitefield (3.8 km) | Sri Sathya Sai Super Speciality Hospital (3.5 km)', icon: 'fa-solid fa-hospital' },
            { label: 'Shopping & Malls', distance: 'Nexus Shantiniketan Mall (2.8 km) | VR Bengaluru (3.1 km) | Phoenix Marketcity (3.3 km)', icon: 'fa-solid fa-cart-shopping' }
        ]
    },
    {
        id: 'total-environment-in-that-quiet-earth',
        name: 'Total Environment In That Quiet Earth',
        location: 'Off Hennur Main Road, Bileshivale, Bengaluru, Karnataka 560077',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹4.48 Crore Onwards',
        bhk: '3 BHK Apartments',
        area: '14.5 Acres',
        possession: 'June 2026',
        rera: 'PRM/KA/RERA/1251/446/PR/180519/001745',
        description: 'In That Quiet Earth is a 14.5-acre exclusive residential community by Total Environment off Hennur Main Road in North Bengaluru. Designed around human-centered principles and traditional courtyard concepts, the homes feature exposed brick masonry, natural stone floors, custom cabinetry, and private terrace gardens.',
        thumbnail: totalEnvironmentImage('total-environment/total-environment-in-that-quiet-earth/thumbnail.webp'),
        images: [
            totalEnvironmentImage('total-environment/total-environment-in-that-quiet-earth/gallery/exterior-view.webp'),
            totalEnvironmentImage('total-environment/total-environment-in-that-quiet-earth/gallery/interior-view.webp'),
            totalEnvironmentImage('total-environment/total-environment-in-that-quiet-earth/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '3 BHK + Home Office (L21)', sqft: '2,628 sq. ft.', price: '₹4.48 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-in-that-quiet-earth/floor-plans/3bhk-floor-plan.webp') }
        ],
        amenities: [
            { name: '50,000+ sq.ft. Clubhouse', icon: 'fa-solid fa-building' },
            { name: 'Outdoor Main Swimming Pool', icon: 'fa-solid fa-water-ladder' },
            { name: 'Outdoor Toddler\'s Pool', icon: 'fa-solid fa-child-reaching' },
            { name: 'Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Steam Room & Sauna', icon: 'fa-solid fa-spa' },
            { name: 'Amphitheatre', icon: 'fa-solid fa-masks-theater' },
            { name: 'Pedestrian Path / Jogging Track', icon: 'fa-solid fa-person-running' },
            { name: 'Pet Park', icon: 'fa-solid fa-dog' },
            { name: 'Tree Museum', icon: 'fa-solid fa-tree' },
            { name: 'Guest Suites', icon: 'fa-solid fa-hotel' }
        ],
        connectivity: [
            { label: 'Airport', distance: 'Kempegowda International Airport (29.0 km)', icon: 'fa-solid fa-plane' },
            { label: 'Business Hubs & Tech Parks', distance: 'Manyata Tech Park (5.9 km) | ITPL Whitefield (9.7 km)', icon: 'fa-solid fa-laptop-code' },
            { label: 'Railway Station', distance: 'KR Puram Railway Station (5.8 km)', icon: 'fa-solid fa-train' },
            { label: 'Schools', distance: 'Srees Carnatic School (0.5 km) | Vani Public School (1.1 km)', icon: 'fa-solid fa-school' },
            { label: 'Colleges', distance: 'Presidency College of Nursing (1.1 km) | Alpha College of Engineering (2.5 km)', icon: 'fa-solid fa-graduation-cap' }
        ]
    },
    {
        id: 'total-environment-over-the-rainbow',
        name: 'Total Environment Over the Rainbow',
        location: 'Kuduvathi, (Nandi Hills), Devanahalli / Chikkaballapur, Karnataka 562103',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹7.14 Crore Onwards',
        bhk: '3 BHK Villa',
        area: '8.8 Acres',
        possession: 'September 2026',
        rera: 'PRM/KA/RERA/1254/460/PR/240424/006832',
        description: 'Total Environment Over the Rainbow is an ultra-luxury low-density villa development by Total Environment, located in Kuduvathi, Karnataka, at the foothills of Nandi Hills in North Bengaluru. Spread across 8.8 acres, the project comprises 33 single-storied villas, offering an exclusive and private residential environment. The project offers 3-bedroom villas with a spacious area of 3,000 sq. ft. priced at ₹7.14 crore onwards. Each villa is designed to provide a strong connection with nature, complemented by landscaped surroundings and thoughtfully planned outdoor spaces.',
        thumbnail: totalEnvironmentImage('total-environment/total-environment-over-the-rainbow/thumbnail.webp'),
        images: [
            totalEnvironmentImage('total-environment/total-environment-over-the-rainbow/gallery/exterior-view.webp'),
            totalEnvironmentImage('total-environment/total-environment-over-the-rainbow/gallery/interior-view.webp'),
            totalEnvironmentImage('total-environment/total-environment-over-the-rainbow/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '3 BHK Villa', sqft: '3,000 sq. ft.', price: '₹7.14 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-over-the-rainbow/floor-plans/3bhk-villa-floor-plan.webp') }
        ],
        amenities: [
            { name: 'Jogging Track', icon: 'fa-solid fa-person-running' },
            { name: 'Pedestrian Path', icon: 'fa-solid fa-person-walking' },
            { name: 'Children\'s Playing Area', icon: 'fa-solid fa-child-reaching' },
            { name: 'Home Office', icon: 'fa-solid fa-laptop-house' },
            { name: 'Gardens', icon: 'fa-solid fa-leaf' },
            { name: 'Green Roof', icon: 'fa-solid fa-seedling' },
            { name: 'Dense Planting Area', icon: 'fa-solid fa-tree' }
        ],
        connectivity: [
            { label: 'Airport', distance: '35 min / 25.7 km (Kempegowda International Airport Bengaluru)', icon: 'fa-solid fa-plane' },
            { label: 'Railway Station', distance: 'Nandi Halt Railway Station (5.4 km) | Chikkaballapur Railway Station (10.8 km)', icon: 'fa-solid fa-train' },
            { label: 'Schools', distance: '3.7 km (Gitanjali International School Bangalore)', icon: 'fa-solid fa-school' },
            { label: 'Colleges', distance: 'Shaanthiniketans PU College (10.3 km) | SJCIT Institute of Technology (9.5 km)', icon: 'fa-solid fa-graduation-cap' },
            { label: 'Hospitals', distance: 'Sri Sathya Sai Sarala Memorial Hospital (5.7 km) | Jain Mission Hospital (0.4 km) | Sri Sathya Sai Lok Seva Health Care (2.7 km)', icon: 'fa-solid fa-hospital' },
            { label: 'Business Hubs & Tech Parks', distance: 'Nagarjuna Tech Solutions (9.5 km)', icon: 'fa-solid fa-laptop-code' },
            { label: 'Shopping & Malls', distance: 'MNR Vegetable shop (1.5 km) | Manvitha General Stores', icon: 'fa-solid fa-cart-shopping' }
        ]
    },
    {
        id: 'total-environment-tangled-up-in-green',
        name: 'Total Environment Tangled Up in Green',
        location: 'Doddaballapur Main Road, Next to STRR, Settarahally, Devanahalli, Bengaluru, Karnataka 562110',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹1.86 Crore Onwards',
        bhk: 'Luxury Villa Plots',
        area: '115 Acres',
        possession: 'December 2028',
        rera: 'PRM/KA/RERA/1250/303/PR/080124/006538',
        description: 'Tangled Up in Green is a massive 115-acre sustainable plotted development by Total Environment located on Doddaballapur Main Road near the Satellite Town Ring Road (STRR) in Devanahalli, North Bengaluru. The project is designed around natural elements, featuring a central green boulevard, an 8-acre natural eucalyptus forest, curated tree museums, pedestrian pathways, and custom-build options for independent luxury homes.',
        thumbnail: totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/thumbnail.webp'),
        images: [
            totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/gallery/exterior-view.webp'),
            totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/gallery/interior-view.webp'),
            totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '30 x 60 Plot', sqft: '1,800 sq. ft.', price: '₹1.86 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/floor-plans/30x60-plot-layout.webp') },
            { bhk: '40 x 60 Plot', sqft: '2,400 sq. ft.', price: '₹2.47 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/floor-plans/40x60-plot-layout.webp')  },
            { bhk: '45 x 60 Plot', sqft: '2,700 sq. ft.', price: '₹2.78 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/floor-plans/45x60-plot-layout.webp')  },
            { bhk: '40 x 80 Plot', sqft: '3,200 sq. ft.', price: '₹3.29 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/floor-plans/40x80-plot-layout.webp')  },
            { bhk: '50 x 100 Plot', sqft: '5,000 sq. ft.', price: '₹5.12 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/floor-plans/50x100-plot-layout.webp')  }
        ],
        amenities: [
            { name: 'Clubhouse', icon: 'fa-solid fa-building' },
            { name: 'Swimming Pool & Kids Pool', icon: 'fa-solid fa-water-ladder' },
            { name: 'World-Class Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Natural Eucalyptus Forest', icon: 'fa-solid fa-tree' },
            { name: 'Central Boulevard & Retention Ponds', icon: 'fa-solid fa-road' },
            { name: 'Jogging & Cycling Track', icon: 'fa-solid fa-person-running' },
            { name: 'Yoga Deck & Lawn', icon: 'fa-solid fa-spa' },
            { name: 'Sports Courts & Indoor Games', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Children\'s Play Area & Pet Park', icon: 'fa-solid fa-child-reaching' }
        ],
        connectivity: [
            { label: 'Airport', distance: 'Kempegowda International Airport (~18.0 km / ~25 min)', icon: 'fa-solid fa-plane' },
            { label: 'Business Hubs & Tech Parks', distance: 'Devanahalli Business Park (~12.6 km) | KIADB Aerospace SEZ (~17.0 km) | Foxconn Complex (~11.7 km)', icon: 'fa-solid fa-laptop-code' },
            { label: 'Railway Station', distance: 'Devanahalli Railway Station (~7.0 km) | KR Puram Railway Station (~29.2 km)', icon: 'fa-solid fa-train' },
            { label: 'Metro Station', distance: 'Upcoming Airport Metro Line Station (~7.6 km)', icon: 'fa-solid fa-train' },
            { label: 'Schools', distance: 'Akash International School | Stonehill International School', icon: 'fa-solid fa-school' },
            { label: 'Hospitals', distance: 'New Manasa Hospital | Akash Hospital', icon: 'fa-solid fa-hospital' },
            { label: 'Hotels & Resorts', distance: 'JW Marriott Bengaluru Prestige Golfshire Resort & Spa', icon: 'fa-solid fa-hotel' }
        ]
    },
    {
        id: 'total-environment-the-magic-faraway-tree',
        name: 'Total Environment The Magic Faraway Tree',
        location: 'Sy. No. 32/1, 33/1, Thalaghattapura, Kanakapura Road, Bengaluru, Karnataka 560062',
        category: 'READY',
        statusText: 'Ready to Move',
        badgeClass: 'badge-ready',
        price: '₹5.56 Crore Onwards',
        bhk: '3 BHK Simplex & Duplex Apartments',
        area: '12 Acres',
        possession: 'Ready to Move',
        rera: 'PRM/KA/RERA/1251/310/PR/171015/000424',
        description: 'The Magic Faraway Tree by Total Environment is a 12-acre residential community located on Kanakapura Road, Bengaluru. Named after a beautiful old tree on the site, the project features handcrafted homes with exposed brick masonry, natural stone floors, custom cabinetry, and private terrace gardens for every apartment.',
        thumbnail: totalEnvironmentImage('total-environment/total-environment-the-magic-faraway-tree/thumbnail.webp'),
        images: [
            totalEnvironmentImage('total-environment/total-environment-the-magic-faraway-tree/gallery/exterior-view.webp'),
            totalEnvironmentImage('total-environment/total-environment-the-magic-faraway-tree/gallery/interior-view.webp'),
            totalEnvironmentImage('total-environment/total-environment-the-magic-faraway-tree/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '3 BHK Simplex (C20)', sqft: '2,753 sq. ft.', price: '₹5.56 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-the-magic-faraway-tree/floor-plans/3bhk-floor-plan.webp') },
            { bhk: '3 BHK Duplex (D35)', sqft: '4,498 sq. ft.', price: '₹9.11 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-the-magic-faraway-tree/floor-plans/3bhk-duplex-floor-plan.webp') }
        ],
        amenities: [
            { name: 'Terrace Garden with Water Body', icon: 'fa-solid fa-leaf' },
            { name: 'Swimming Pool', icon: 'fa-solid fa-water-ladder' },
            { name: 'Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Billiards / Snooker', icon: 'fa-solid fa-circle-dot' },
            { name: 'Table Tennis & Board Games', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Multipurpose Hall', icon: 'fa-solid fa-building' },
            { name: 'Children\'s Play Area', icon: 'fa-solid fa-child-reaching' },
            { name: 'Central Greens', icon: 'fa-solid fa-tree' }
        ],
        connectivity: [
            { label: 'Metro Station', distance: 'Adjacent to Silk Institute Metro Station', icon: 'fa-solid fa-train' },
            { label: 'Highways & Expressways', distance: '200 metres from NICE Road Corridor', icon: 'fa-solid fa-road' },
            { label: 'Schools', distance: '10-minute drive to major local & international schools', icon: 'fa-solid fa-school' },
            { label: 'Hospitals', distance: '10-minute drive to major hospitals', icon: 'fa-solid fa-hospital' },
            { label: 'Shopping & Malls', distance: '10-minute drive to shopping centers and malls', icon: 'fa-solid fa-cart-shopping' }
        ]
    }
];
