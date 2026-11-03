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

const overviewSearchTerms = [
  'Total Environment homes in Bangalore',
  'Total Environment projects in Bangalore',
  'Total Environment Bangalore',
  'Total Environment builders',
  'Total Environment group',
  'Total Environment in Bangalore'
];

function formatOverviewList(values) {
  if (values.length < 2) return values[0] || '';
  return `${values.slice(0, -1).join(', ')} and ${values[values.length - 1]}`;
}

export function createPropertyOverview(property) {
  const projectLocation = property.shortAddress || property.location;
  const projectIndex = propertiesData.findIndex(({ id }) => id === property.id);
  const locLower = projectLocation.toLowerCase();
  
  let searchTerm;
  if (locLower.includes('hennur') || locLower.includes('bileshivale')) {
    searchTerm = 'Total Environment Hennur';
  } else if (locLower.includes('whitefield') || locLower.includes('hoodi')) {
    searchTerm = 'Total Environment Whitefield';
  } else if (locLower.includes('thalaghattapura') || locLower.includes('kanakapura') || locLower.includes('jp nagar')) {
    searchTerm = 'Total Environment JP Nagar';
  } else {
    searchTerm = overviewSearchTerms[(projectIndex >= 0 ? projectIndex : 0) % overviewSearchTerms.length];
  }

  const floorPlans = formatOverviewList((property.floorPlans || []).slice(0, 3).map(({ bhk }) => bhk));
  const amenities = formatOverviewList((property.amenities || []).slice(0, 4).map(({ name }) => name));
  const nearbyPlaces = formatOverviewList((property.connectivity || []).slice(0, 3).map(({ label, distance }) => `${label} (${distance})`));

  return [
      `${property.description} Homebuyers researching ${searchTerm} can explore this Total Environment residence in ${projectLocation}, with project location, status, and listed configurations to compare.`,
      `${property.name} is listed with ${property.bhk} across ${property.area}, with ${property.statusText.toLowerCase()} status and possession shown as ${property.possession}. Listed floor plan options include ${floorPlans || property.bhk}. Residents can explore amenities such as ${amenities || "the community's listed lifestyle facilities"}, with nearby destinations including ${nearbyPlaces || projectLocation}. Review Total Environment floor plans, amenities, and connectivity when comparing homes in Bengaluru.${property.rera ? ` RERA registration number: ${property.rera.replace(/\.$/, '')}.` : ''}`
  ];
}

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
      list.push(`Prime connectivity: close to ${topPlace.label || topPlace.destination || 'key hubs'}`);
  }
  if (property.rera) list.push(`RERA Registered: ${property.rera}`);
  return list;
}

export const propertiesData = [
  {
    id: 'total-environment-down-by-the-water',
    name: 'Total Environment Down by the Water',
    shortAddress: 'Jakkur, Bengaluru',
    location: 'Agrahara, Jakkur, Yelahanka, Bengaluru, Karnataka 560064',
    coordinates: { lat: 13.076800, lon: 77.607400 },
    mapsQuery: 'Total Environment Down by the Water, Jakkur, Bengaluru',
    category: 'ONGOING',
    statusText: 'Ongoing',
    badgeClass: 'badge-ongoing',
    price: '₹5.62 Crore Onwards',
    bhk: '3 & 4 BHK Apartments',
    area: '17.5 Acres',
    possession: 'June 2029',
    rera: 'PRM/KA/RERA/1251/472/PR/090824/006967',
    description: 'Total Environment Down by the Water is a premium waterfront residential development located in Jakkur, North Bengaluru. Spread across 17.5 acres next to the serene Jakkur Lake, the project features thoughtfully crafted 3 & 4 BHK apartments and penthouses with expansive private terrace gardens, handcrafted natural stone finishes, wire-cut brick architecture, and world-class resort amenities.',
    thumbnail: totalEnvironmentImage('total-environment/total-environment-down-by-the-water/thumbnail.webp'),
    highlights: [
        "Double-height terrace garden and a deck at the homes",
        "3+ acres of central green",
        "Lakeside walkway",
        "80% Green cover",
        "Located just off the Airport main road",
        "Quick access to multiple Business parks",
        "Clubhouse with accessible Green roof"
    ],
    images: [
        totalEnvironmentImage('total-environment/total-environment-down-by-the-water/gallery/exterior-view.webp'),
        totalEnvironmentImage('total-environment/total-environment-down-by-the-water/gallery/interior-view.webp'),
        totalEnvironmentImage('total-environment/total-environment-down-by-the-water/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '3 BHK (I20)', sqft: '2,490 sq.ft.', price: '₹5.62 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-down-by-the-water/floor-plans/3bhk(I20)-floor-plan.webp') },
        { bhk: '3 BHK (L21)', sqft: '2,628 sq.ft.', price: '₹5.91 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-down-by-the-water/floor-plans/3bhk(L21)-floor-plan.webp') },
        { bhk: '3 BHK (I25)', sqft: '3,240 sq.ft.', price: '₹7.27 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-down-by-the-water/floor-plans/3bhk(I25)-floor-plan.webp') },
        { bhk: '4 BHK (I40)', sqft: '4,980 sq.ft.', price: '₹11.24 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-down-by-the-water/floor-plans/4bhk(I40)-floor-plan.webp') },
        { bhk: '4 BHK (I50)', sqft: '6,480 sq.ft.', price: '₹14.60 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-down-by-the-water/floor-plans/4bhk(I50)-floor-plan.webp') }
    ],
    amenities: [
        { name: 'Clubhouse', icon: 'fa-solid fa-building' },
        { name: 'Heated Swimming Pool', icon: 'fa-solid fa-person-swimming' },
        { name: 'Gymnasium', icon: 'fa-solid fa-dumbbell' },
        { name: 'Private Terrace Gardens', icon: 'fa-solid fa-seedling' },
        { name: 'Lakeside Boardwalk', icon: 'fa-solid fa-water' },
        { name: 'Tennis & Squash Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: 'Yoga & Aerobics Deck', icon: 'fa-solid fa-spa' },
        { name: 'Children\'s Play Area', icon: 'fa-solid fa-children' },
        { name: '24/7 Security & CCTV', icon: 'fa-solid fa-shield-halved' }
    ],
    connectivity: [
        { label: 'Bhartiya Mall of Bengaluru', destination: 'Bhartiya Mall of Bengaluru, Kannuru, Thanisandra Main Road, Bengaluru, Karnataka 560064', coordinates: { lat: 13.085500, lon: 77.638500 }, distance: '6.0 Kms', icon: 'fa-solid fa-cart-shopping' },
        { label: 'Manyata Tech Park', destination: 'Manyata Tech Park, Level Six, N1 Block, Outer Ring Rd, MS Ramaiah North City, M anayata TechPark, Nagavara, Bengaluru, Karnataka 560045', coordinates: { lat: 13.045000, lon: 77.625000 }, distance: '2.9 Kms', icon: 'fa-solid fa-laptop-code' },
        { label: 'Mallya Aditi International School', destination: 'Mallya Aditi International School, Behind Yelahanka New Town, Yelahanka, Bengaluru, Karnataka 560064', coordinates: { lat: 13.098500, lon: 77.593500 }, distance: '8.3 Kms', icon: 'fa-solid fa-school' },
        { label: 'Legacy School Bangalore', destination: 'Legacy School, Kothanur, Bengaluru, Karnataka 560077', coordinates: { lat: 13.064500, lon: 77.652500 }, distance: '5.4 Kms', icon: 'fa-solid fa-school' },
        { label: 'Phoenix Mall of Asia', destination: 'Phoenix Mall of Asia, Bellary Road, Byatarayanapura, Yelahanka, Bengaluru, Karnataka 560092', coordinates: { lat: 13.058500, lon: 77.591000 }, distance: '4.3 Kms', icon: 'fa-solid fa-cart-shopping' },
        { label: 'Manipal Hospital Hebbal', destination: 'Manipal Hospital Hebbal, Bellary Road, Bengaluru, Karnataka 560092', coordinates: { lat: 13.048500, lon: 77.592500 }, distance: '5.2 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'Aster CMI Hospital', destination: 'Aster CMI Hospital, Bellary Road, New Airport Road, Sahakar Nagar, Bengaluru, Karnataka 560092', coordinates: { lat: 13.054500, lon: 77.591500 }, distance: '7.5 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport Bengaluru, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.198600, lon: 77.706600 }, distance: '25.6 Kms', icon: 'fa-solid fa-plane' }
    ]
  },
  {
    id: 'total-environment-after-the-rain',
    name: 'Total Environment After the Rain',
    shortAddress: 'Yelahanka, Bengaluru',
    location: 'Sir MVIT College Road, Betthadasanapura, Yelahanka, Bengaluru, Karnataka 560097',
    coordinates: { lat: 13.167500, lon: 77.618000 },
    mapsQuery: 'Total Environment After the Rain, Yelahanka, Bengaluru',
    category: 'ONGOING',
    statusText: 'Ongoing',
    badgeClass: 'badge-ongoing',
    price: '₹15.99 Crore Onwards',
    bhk: '3 Bedroom Earth-Sheltered Villas',
    area: '45 Acres',
    possession: 'Phased Delivery (Phase 3 Onwards)',
    rera: 'PRM/KA/RERA/1251/309/PR/160825/008002',
    description: 'Total Environment After the Rain is an extraordinary 45-acre community of earth-sheltered, single-level luxury villas located off Bellary Road in Yelahanka, North Bengaluru. Designed to blend seamlessly with the natural landscape, each villa features a turf-covered green roof, private garden courtyards, heated swimming pool, hand-crafted timber woodwork, and high-end thermal performance.',
    thumbnail: totalEnvironmentImage('total-environment/total-environment-after-the-rain/thumbnail.webp'),
    highlights: [
        "Home automation system is available in every flat",
        "Beautiful landscaped garden areas with in the project",
        "Earth sheltered homes with green roofs replacing lost green cover",
        "Curtain motor with remote control in double height living area",
        "Hybrid central air-conditioning system in all bedroom units",
        "Properties with 100% power backup available"
    ],
    images: [
        totalEnvironmentImage('total-environment/total-environment-after-the-rain/gallery/exterior-view.webp'),
        totalEnvironmentImage('total-environment/total-environment-after-the-rain/gallery/interior-view.webp'),
        totalEnvironmentImage('total-environment/total-environment-after-the-rain/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '3 BHK Duplex Villa', sqft: '3,200 sq.ft.', price: '₹15.99 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-after-the-rain/floor-plans/3bhk-duplex-villa-floor-plan.webp') }
    ],
    amenities: [
        { name: 'Clubhouse', icon: 'fa-solid fa-building' },
        { name: 'Swimming Pool', icon: 'fa-solid fa-person-swimming' },
        { name: 'Gymnasium & Spa', icon: 'fa-solid fa-dumbbell' },
        { name: 'Earth-Sheltered Living', icon: 'fa-solid fa-leaf' },
        { name: 'Private Courtyards & Green Roof', icon: 'fa-solid fa-tree' },
        { name: 'Tennis & Badminton Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: 'Jogging & Walking Track', icon: 'fa-solid fa-person-running' },
        { name: 'Bespoke Handcrafted Finishes', icon: 'fa-solid fa-couch' },
        { name: '24/7 Gated Security', icon: 'fa-solid fa-shield-halved' }
    ],
    connectivity: [
        { label: 'Sadhu Vaswani International School', destination: 'Sadhu Vaswani International School, Bettenahalli, Bengaluru, Karnataka 562157', coordinates: { lat: 13.161500, lon: 77.614500 }, distance: '3.1 Kms', icon: 'fa-solid fa-school' },
        { label: 'Krishnadevaraya College of Dental Sciences', destination: 'Krishnadevaraya College of Dental Sciences, Hunasamaranahalli, Bengaluru, Karnataka 562157', coordinates: { lat: 13.149500, lon: 77.625500 }, distance: '1.8 Kms', icon: 'fa-solid fa-graduation-cap' },
        { label: 'Sir M. Visvesvaraya Institute of Technology', destination: 'Sir M. Visvesvaraya Institute of Technology, Krishnadeveraya Nagar, Hunasamaranahalli, Bengaluru, Karnataka 562157', coordinates: { lat: 13.151500, lon: 77.621500 }, distance: '2.0 Kms', icon: 'fa-solid fa-graduation-cap' },
        { label: 'Padukone-Dravid Centre for Sports Excellence', destination: 'Padukone - Dravid Centre for Sports Excellence, Survey No. 336, Bettahalasuru, Bengaluru, Karnataka 562157', coordinates: { lat: 13.175500, lon: 77.632500 }, distance: '3.4 Kms', icon: 'fa-solid fa-medal' },
        { label: 'Stonehill International School', destination: 'Stonehill International School, Tarahunise Post, Jala Hobli, Bengaluru, Karnataka 562157', coordinates: { lat: 13.181500, lon: 77.628500 }, distance: '3.7 Kms', icon: 'fa-solid fa-school' },
        { label: 'Cyte Care Hospital', destination: 'Cyte Care Hospital, Bagalur Cross, Yelahanka, Bengaluru, Karnataka 560064', coordinates: { lat: 13.136500, lon: 77.621500 }, distance: '8.9 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'RMZ Galleria Mall', destination: 'RMZ Galleria Mall, B.B. Road, Yelahanka, Bengaluru, Karnataka 560064', coordinates: { lat: 13.102300, lon: 77.589400 }, distance: '13.1 Kms', icon: 'fa-solid fa-cart-shopping' },
        { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport Bengaluru, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.198600, lon: 77.706600 }, distance: '14.3 Kms', icon: 'fa-solid fa-plane' }
    ]
  },
  {
    id: 'total-environment-pursuit-of-a-radical-rhapsody',
    name: 'Total Environment Pursuit of a Radical Rhapsody',
    shortAddress: 'Whitefield, Bengaluru',
    location: 'ITPL Main Road, Hoodi, Whitefield, Bengaluru, Karnataka 560048',
    coordinates: { lat: 12.991200, lon: 77.718500 },
    mapsQuery: 'Total Environment Pursuit of a Radical Rhapsody, ITPL Main Road, Whitefield, Bengaluru',
    category: 'ONGOING',
    statusText: 'Ongoing',
    badgeClass: 'badge-ongoing',
    price: '₹6.18 Crore Onwards',
    bhk: '3 & 4 BHK Apartments, Duplexes & Earth-Sheltered Villas',
    area: '34.5 Acres',
    possession: 'December 2026',
    rera: 'PRM/KA/RERA/1251/446/PR/171014/000433',
    description: 'Total Environment Pursuit of a Radical Rhapsody is an iconic 34.5-acre lakeside residential masterpiece located on ITPL Main Road, Hoodi, Whitefield. Built around a natural lake, the development features luxury apartments, duplex homes, and signature earth-sheltered villas. Units are crafted with open-to-sky terrace gardens, micro-climate cooling features, custom Italian stone flooring, and expansive timber deck terraces.',
    thumbnail: totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/thumbnail.webp'),
    highlights: [
        "Giddanakere lake view abodes are available",
        "Plush green project with 4 helipads",
        "It is in vicinity to various connectives",
        "Clubhouse has swimming pool, gym, and other amenities",
        "It has premium apartments with various amenities",
        "14.29% price appreciation in the last 1 year",
        "Properties with 100% power backup available"
    ],
    images: [
        totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/gallery/exterior-view.webp'),
        totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/gallery/interior-view.webp'),
        totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: 'C20 (3 BHK)', sqft: '2,753 sq.ft.', price: '₹6.18 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/floor-plans/3bhk(C20)-floor-plan.webp') },
        { bhk: 'R22 (3 BHK + Study)', sqft: '3,847 sq.ft.', price: '₹8.65 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/floor-plans/3bhk(R22)-floor-plan.webp') },
        { bhk: 'D35 (3 BHK Duplex)', sqft: '4,800 sq.ft.', price: '₹10.79 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/floor-plans/3bhk(D35)-duplex-floor-plan.webp') },
        { bhk: 'R25 (3 BHK Villa)', sqft: '4,100 sq.ft.', price: '₹14.50 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/floor-plans/3bhk(R25)-floor-plan.webp') },
        { bhk: '4 BHK Duplex Villa', sqft: '5,129 sq.ft.', price: '₹18.00 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-pursuit-of-a-radical-rhapsody/floor-plans/4bhk-duplex-villa-floor-plan.webp') }
    ],
    amenities: [
        { name: 'Clubhouse', icon: 'fa-solid fa-building' },
        { name: 'Infinity Swimming Pool', icon: 'fa-solid fa-person-swimming' },
        { name: 'Gymnasium & Aerobics Studio', icon: 'fa-solid fa-dumbbell' },
        { name: 'Lake Boardwalk & Promenade', icon: 'fa-solid fa-water' },
        { name: 'Private Landscaped Terrace Gardens', icon: 'fa-solid fa-leaf' },
        { name: 'Squash & Tennis Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: 'Billiards & Games Lounge', icon: 'fa-solid fa-chess' },
        { name: 'Children\'s Play Area', icon: 'fa-solid fa-children' },
        { name: 'Cafe & Library Lounge', icon: 'fa-solid fa-book-open' },
        { name: 'Multipurpose Community Hall', icon: 'fa-solid fa-hotel' },
        { name: '24/7 Security & CCTV', icon: 'fa-solid fa-shield-halved' }
    ],
    connectivity: [
        { label: 'Hoodi Metro Station', destination: 'Hoodi Metro Station (Purple Line), Whitefield Main Road, Bengaluru, Karnataka', coordinates: { lat: 12.991500, lon: 77.716200 }, distance: '1.2 Kms', icon: 'fa-solid fa-train-subway' },
        { label: 'Gopalan National School', destination: 'Gopalan National School, Seetharampalya, Hoodi, Bengaluru, Karnataka 560048', coordinates: { lat: 12.986500, lon: 77.712500 }, distance: '1.2 Kms', icon: 'fa-solid fa-school' },
        { label: 'Nexus Shantiniketan Mall', destination: 'Nexus Shantiniketan Mall, Whitefield Main Road, Bengaluru, Karnataka 560048', coordinates: { lat: 12.989200, lon: 77.728500 }, distance: '1.3 Kms', icon: 'fa-solid fa-cart-shopping' },
        { label: 'VR Bengaluru', destination: 'VR Bengaluru Mall, Whitefield Main Road, Mahadevapura, Bengaluru, Karnataka 560048', coordinates: { lat: 12.996500, lon: 77.697500 }, distance: '3.4 Kms', icon: 'fa-solid fa-cart-shopping' },
        { label: 'Phoenix Marketcity', destination: 'Phoenix Marketcity, Whitefield Main Road, Mahadevapura, Bengaluru, Karnataka 560048', coordinates: { lat: 12.995800, lon: 77.696500 }, distance: '3.5 Kms', icon: 'fa-solid fa-cart-shopping' },
        { label: 'ITPB Whitefield', destination: 'International Tech Park Bangalore (ITPB), Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.986500, lon: 77.737500 }, distance: '3.2 Kms', icon: 'fa-solid fa-building' },
        { label: 'Sri Sathya Sai Super Speciality Hospital', destination: 'Sri Sathya Sai Super Speciality Hospital, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.982500, lon: 77.733500 }, distance: '3.5 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'Manipal Hospital Whitefield', destination: 'Manipal Hospital Whitefield, 143, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.979000, lon: 77.728000 }, distance: '1.6 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'EPIP Zone Whitefield', destination: 'Export Promotion Industrial Park (EPIP Zone), Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.978500, lon: 77.724500 }, distance: '4.2 Kms', icon: 'fa-solid fa-industry' }
    ]
  },
  {
    id: 'total-environment-in-that-quiet-earth',
    name: 'Total Environment In That Quiet Earth',
    shortAddress: 'Bileshivale, Bengaluru',
    location: 'Off Hennur Main Road, Bileshivale, Bengaluru, Karnataka 560077',
    coordinates: { lat: 13.063200, lon: 77.662000 },
    mapsQuery: 'Total Environment In That Quiet Earth, Hennur Main Road, Bengaluru',
    category: 'ONGOING',
    statusText: 'Ongoing',
    badgeClass: 'badge-ongoing',
    price: '₹4.48 Crore Onwards',
    bhk: '3 BHK Apartments',
    area: '14.5 Acres',
    possession: 'June 2026',
    rera: 'PRM/KA/RERA/1251/446/PR/180519/001745',
    description: 'Total Environment In That Quiet Earth is a beautifully planned 14.5-acre residential community located off Hennur Main Road in North Bengaluru. Offering distinctive L-shaped garden apartments and signature duplexes, every home is designed around a private, cantilevered garden terrace. Features include exposed wire-cut red brick walls, custom crafted furniture and cabinetry, and an expansive central park with multi-tier amenities.',
    thumbnail: totalEnvironmentImage('total-environment/total-environment-in-that-quiet-earth/thumbnail.webp'),
    highlights: [
        "Low-density and pedestrian-friendly plan",
        "3-bedroom home based on a traditional Indian courtyard design",
        "Expansive 50,000 sq.ft. clubhouse features an open-to-sky swimming pool",
        "Unique living experiences with curated amenities, including treetop walkway",
        "Hybrid central air-conditioning with blower units in each bedroom",
        "Homes customizable via proprietary edesign platform for layout changes",
        "Unique home designs with living spaces opening to landscaped gardens"
    ],
    images: [
        totalEnvironmentImage('total-environment/total-environment-in-that-quiet-earth/gallery/exterior-view.webp'),
        totalEnvironmentImage('total-environment/total-environment-in-that-quiet-earth/gallery/interior-view.webp'),
        totalEnvironmentImage('total-environment/total-environment-in-that-quiet-earth/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '3 BHK', sqft: '2,890 sq.ft.', price: '₹4.48 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-in-that-quiet-earth/floor-plans/3bhk-floor-plan.webp') }
    ],
    amenities: [
        { name: 'Clubhouse', icon: 'fa-solid fa-building' },
        { name: 'Swimming Pool', icon: 'fa-solid fa-person-swimming' },
        { name: 'Gymnasium & Yoga Deck', icon: 'fa-solid fa-dumbbell' },
        { name: 'Private Terrace Gardens', icon: 'fa-solid fa-leaf' },
        { name: 'Badminton & Tennis Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: 'Children\'s Play Area', icon: 'fa-solid fa-children' },
        { name: 'Jogging Track', icon: 'fa-solid fa-person-running' },
        { name: 'Library & Reading Room', icon: 'fa-solid fa-book-open' },
        { name: 'Multipurpose Hall', icon: 'fa-solid fa-hotel' },
        { name: '24/7 Security & CCTV', icon: 'fa-solid fa-shield-halved' }
    ],
    connectivity: [
        { label: 'Srees Carnatic School', destination: 'Srees Carnatic Music and Dance School, Bileshivale, Bengaluru, Karnataka 560077', coordinates: { lat: 13.061500, lon: 77.660500 }, distance: '1.3 Kms', icon: 'fa-solid fa-music' },
        { label: 'Vani Public School', destination: 'Vani Public School, Hennur Bagalur Main Road, Bileshivale, Bengaluru, Karnataka 560077', coordinates: { lat: 13.064500, lon: 77.664500 }, distance: '1.9 Kms', icon: 'fa-solid fa-school' },
        { label: 'Presidency College of Nursing', destination: 'Presidency College of Nursing, Hennur Main Road, Bengaluru, Karnataka 560077', coordinates: { lat: 13.065500, lon: 77.659500 }, distance: '1.9 Kms', icon: 'fa-solid fa-graduation-cap' },
        { label: 'Alpha College of Engineering', destination: 'Alpha College of Engineering, Kannuru, Bengaluru, Karnataka 562149', coordinates: { lat: 13.078500, lon: 77.658500 }, distance: '6.5 Kms', icon: 'fa-solid fa-graduation-cap' },
        { label: 'KR Puram Railway Station', destination: 'Krishnarajapuram Railway Station (KJM), KR Puram, Bengaluru, Karnataka 560036', coordinates: { lat: 13.001500, lon: 77.676500 }, distance: '7.6 Kms', icon: 'fa-solid fa-train' },
        { label: 'Manyata Tech Park', destination: 'Manyata Tech Park, Level Six, N1 Block, Outer Ring Rd, MS Ramaiah North City, Manayata Tech Park, Nagavara, Bengaluru, Karnataka 560045', coordinates: { lat: 13.045000, lon: 77.625000 }, distance: '11.2 Kms', icon: 'fa-solid fa-laptop-code' },
        { label: 'ITPL Whitefield', destination: 'International Tech Park Bangalore (ITPB), Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.986500, lon: 77.737500 }, distance: '22.0 Kms', icon: 'fa-solid fa-building' },
        { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport Bengaluru, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.198600, lon: 77.706600 }, distance: '24.8 Kms', icon: 'fa-solid fa-plane' }
    ]
  },
  {
    id: 'total-environment-over-the-rainbow',
    name: 'Total Environment Over the Rainbow',
    shortAddress: 'Nandi Hills, Devanahalli',
    location: 'Kuduvathi, (Nandi Hills), Devanahalli / Chikkaballapur, Karnataka 562103',
    coordinates: { lat: 13.310000, lon: 77.685000 },
    mapsQuery: 'Total Environment Over the Rainbow, Nandi Hills, Devanahalli, Bengaluru',
    category: 'ONGOING',
    statusText: 'Ongoing',
    badgeClass: 'badge-ongoing',
    price: '₹7.14 Crore Onwards',
    bhk: '3 BHK Villa',
    area: '8.8 Acres',
    possession: 'September 2026',
    rera: 'PRM/KA/RERA/1254/460/PR/240424/006832',
    description: 'Total Environment Over the Rainbow is a serene 8.8-acre boutique sanctuary of luxury villas nestled at the foothills of scenic Nandi Hills. Thoughtfully integrated into the natural contours of the land, each villa is oriented toward uninterrupted panoramic hill views, with private landscaped gardens, earth-sheltered living areas, sustainable water management, and a retreat-style clubhouse.',
    thumbnail: totalEnvironmentImage('total-environment/total-environment-over-the-rainbow/thumbnail.webp'),
    highlights: [
        "Earth-sheltered villas nestled at the foothills of Nandi Hills",
        "Ultra-low density community with only 33 villas across 8.8 acres",
        "Stepped villa architecture ensures unobstructed panoramic hill views",
        "Expansive 6,000 sq. ft. minimum plots with dual private gardens",
        "Living areas designed with flanking gardens for natural ventilation",
        "Grand 12-meter tree-lined driveways with dedicated pedestrian paths",
        "Advanced Tertiary STP for eco-friendly water recycling and irrigation"
    ],
    images: [
        totalEnvironmentImage('total-environment/total-environment-over-the-rainbow/gallery/exterior-view.webp'),
        totalEnvironmentImage('total-environment/total-environment-over-the-rainbow/gallery/interior-view.webp'),
        totalEnvironmentImage('total-environment/total-environment-over-the-rainbow/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '3 BHK Luxury Villa', sqft: '4,500 sq.ft.', price: '₹7.14 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-over-the-rainbow/floor-plans/3bhk-villa-floor-plan.webp') }
    ],
    amenities: [
        { name: 'Clubhouse', icon: 'fa-solid fa-building' },
        { name: 'Infinity Swimming Pool', icon: 'fa-solid fa-person-swimming' },
        { name: 'Gymnasium & Wellness Spa', icon: 'fa-solid fa-dumbbell' },
        { name: 'Hill View Observation Deck', icon: 'fa-solid fa-mountain' },
        { name: 'Private Landscaped Lawns', icon: 'fa-solid fa-leaf' },
        { name: 'Nature Trails & Orchards', icon: 'fa-solid fa-tree' },
        { name: '24/7 Security & CCTV', icon: 'fa-solid fa-shield-halved' }
    ],
    connectivity: [
        { label: 'Jain Mission Hospital', destination: 'Jain Mission Hospital, Nandi Hills Road, Karnataka 562103', coordinates: { lat: 13.308500, lon: 77.683500 }, distance: '9.4 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'Sri Sathya Sai Lok Seva Health Care', destination: 'Sri Sathya Sai Lok Seva Hospital, Muddenahalli, Karnataka 562101', coordinates: { lat: 13.328500, lon: 77.701500 }, distance: '7.7 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'Gitanjali International School', destination: 'Gitanjali International School, NH 44, Bengaluru, Karnataka 562101', coordinates: { lat: 13.321500, lon: 77.718500 }, distance: '39.1 Kms', icon: 'fa-solid fa-school' },
        { label: 'Nandi Halt Railway Station', destination: 'Nandi Railway Station (NDY), Nandi, Karnataka 562103', coordinates: { lat: 13.351500, lon: 77.695500 }, distance: '5.4 Kms', icon: 'fa-solid fa-train' },
        { label: 'Sri Sathya Sai Sarala Memorial Hospital', destination: 'Sri Sathya Sai Sarala Memorial Hospital, Muddenahalli, Karnataka 562101', coordinates: { lat: 13.332500, lon: 77.712500 }, distance: '5.7 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'SJCIT Engineering College', destination: 'SJC Institute of Technology, Chikkaballapur, Karnataka 562101', coordinates: { lat: 13.432500, lon: 77.728500 }, distance: '9.5 Kms', icon: 'fa-solid fa-graduation-cap' },
        { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport Bengaluru, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.198600, lon: 77.706600 }, distance: '25.7 Kms', icon: 'fa-solid fa-plane' }
    ]
  },
  {
    id: 'total-environment-tangled-up-in-green',
    name: 'Total Environment Tangled Up in Green',
    shortAddress: 'Devanahalli, Bengaluru',
    location: 'Doddaballapur Main Road, Next to STRR, Settarahally, Devanahalli, Bengaluru, Karnataka 562110',
    coordinates: { lat: 13.253000, lon: 77.712000 },
    mapsQuery: 'Total Environment Tangled Up in Green, Devanahalli, Bengaluru',
    category: 'ONGOING',
    statusText: 'Ongoing',
    badgeClass: 'badge-ongoing',
    price: '₹1.86 Crore Onwards',
    bhk: 'Luxury Villa Plots',
    area: '115 Acres',
    possession: 'December 2028',
    rera: 'PRM/KA/RERA/1250/303/PR/080124/006538',
    description: 'Total Environment Tangled Up in Green is an expansive 115-acre vision of sustainable living located off Doddaballapur Road in Devanahalli, North Bengaluru. Bordering the upcoming Satellite Town Ring Road (STRR), the master-planned plotted enclave features thousands of indigenous shade trees, underground modern utility networks, quiet tree-lined lanes, and a multi-level recreational clubhouse.',
    thumbnail: totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/thumbnail.webp'),
    highlights: [
        "Eight acres of eucalyptus forest",
        "Tree museum",
        "Central boulevard with retention ponds",
        "10-minute drive to schools, malls, hotels, and hospitals on both sides",
        "Pet park and nature park"
    ],
    images: [
        totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/gallery/exterior-view.webp'),
        totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/gallery/interior-view.webp'),
        totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '30 x 60 Villa Plot', sqft: '1,800 sq.ft.', price: '₹1.86 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/floor-plans/30x60-plot-layout.webp') },
        { bhk: '40 x 60 Villa Plot', sqft: '2,400 sq.ft.', price: '₹2.48 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/floor-plans/40x60-plot-layout.webp') },
        { bhk: '50 x 70 Villa Plot', sqft: '3,500 sq.ft.', price: '₹3.62 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/floor-plans/50x70-plot-layout.webp') },
        { bhk: '50 x 80 Villa Plot', sqft: '4,000 sq.ft.', price: '₹4.14 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/floor-plans/50x80-plot-layout.webp') },
        { bhk: '60 x 90 Villa Plot', sqft: '5,400 sq.ft.', price: '₹5.58 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-tangled-up-in-green/floor-plans/60x90-plot-layout.webp') }
    ],
    amenities: [
        { name: 'Clubhouse', icon: 'fa-solid fa-building' },
        { name: 'Swimming Pool', icon: 'fa-solid fa-person-swimming' },
        { name: 'Gymnasium & Wellness Centre', icon: 'fa-solid fa-dumbbell' },
        { name: 'Indigenous Tree Canopies & Parks', icon: 'fa-solid fa-tree' },
        { name: 'Tennis & Basketball Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: 'Jogging & Cycling Tracks', icon: 'fa-solid fa-person-running' },
        { name: 'Children\'s Play Parks', icon: 'fa-solid fa-children' },
        { name: 'Organic Farming & Orchard Zone', icon: 'fa-solid fa-seedling' },
        { name: '24/7 Gated Security & Surveillance', icon: 'fa-solid fa-shield-halved' }
    ],
    connectivity: [
        { label: 'Devanahalli Railway Station', destination: 'Devanahalli Railway Station (DHL), Devanahalli, Karnataka 562110', coordinates: { lat: 13.245500, lon: 77.708500 }, distance: '4.9 Kms', icon: 'fa-solid fa-train' },
        { label: 'Akash International School', destination: 'Akash International School, Prasannahalli Main Road, Devanahalli, Bengaluru, Karnataka 562110', coordinates: { lat: 13.241500, lon: 77.721500 }, distance: '7.0 Kms', icon: 'fa-solid fa-school' },
        { label: 'Foxconn Industrial Complex', destination: 'Foxconn India Electronics, ITIR Zone, Devanahalli, Bengaluru, Karnataka 562110', coordinates: { lat: 13.275500, lon: 77.685500 }, distance: '10.9 Kms', icon: 'fa-solid fa-industry' },
        { label: 'Devanahalli Business Park', destination: 'Devanahalli Business Park, Doddasanne, Karnataka', coordinates: { lat: 13.228500, lon: 77.695500 }, distance: '12.6 Kms', icon: 'fa-solid fa-briefcase' },
        { label: 'JW Marriott Prestige Golfshire', destination: 'JW Marriott Bengaluru Prestige Golfshire Resort & Spa, Nandi Hills Road, Devanahalli, Karnataka 562164', coordinates: { lat: 13.315500, lon: 77.728500 }, distance: '11.9 Kms', icon: 'fa-solid fa-hotel' },
        { label: 'KIADB Aerospace SEZ', destination: 'KIADB Aerospace SEZ, Huvinayakanahalli, Bengaluru, Karnataka 562149', coordinates: { lat: 13.185500, lon: 77.718500 }, distance: '17.5 Kms', icon: 'fa-solid fa-industry' },
        { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport Bengaluru, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.198600, lon: 77.706600 }, distance: '16.4 Kms', icon: 'fa-solid fa-plane' }
    ]
  },
  {
    id: 'total-environment-the-magic-faraway-tree',
    name: 'Total Environment The Magic Faraway Tree',
    shortAddress: 'Thalaghattapura, Bengaluru',
    location: 'Sy. No. 32/1, 33/1, Thalaghattapura, Kanakapura Road, Bengaluru, Karnataka 560062',
    coordinates: { lat: 12.871500, lon: 77.538500 },
    mapsQuery: 'Total Environment The Magic Faraway Tree, Kanakapura Road, Bengaluru',
    category: 'READY',
    statusText: 'Ready to Move',
    badgeClass: 'badge-ready',
    price: '₹5.56 Crore Onwards',
    bhk: '3 BHK Simplex & Duplex Apartments',
    area: '12 Acres',
    possession: 'Ready to Move',
    rera: 'PRM/KA/RERA/1251/310/PR/171015/000424',
    description: 'Total Environment The Magic Faraway Tree is a ready-to-move 12-acre elevated residential community on Kanakapura Road in South Bengaluru. Overlooking scenic green tree canopies, the development offers simplex and duplex apartments with double-height garden terraces, exposed handmade brickwork, wire-cut terracotta jalis, and exceptional connectivity via the adjacent Silk Institute Metro Station and NICE Road interchange.',
    thumbnail: totalEnvironmentImage('total-environment/total-environment-the-magic-faraway-tree/thumbnail.webp'),
    highlights: [
        "Deck with water Feature",
        "Living Room with Garden view",
        "Unique panoramic view of scenic South Bangalore",
        "The economic times real estate conclave and award",
        "Winner, residential projects row housing",
        "Properties with 100% power backup available"
    ],
    images: [
        totalEnvironmentImage('total-environment/total-environment-the-magic-faraway-tree/gallery/exterior-view.webp'),
        totalEnvironmentImage('total-environment/total-environment-the-magic-faraway-tree/gallery/interior-view.webp'),
        totalEnvironmentImage('total-environment/total-environment-the-magic-faraway-tree/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: 'C20 (3 BHK Simplex)', sqft: '2,753 sq.ft.', price: '₹5.56 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-the-magic-faraway-tree/floor-plans/3bhk-floor-plan.webp') },
        { bhk: 'D35 (3 BHK Duplex)', sqft: '3,550 sq.ft.', price: '₹7.17 Crore Onwards', image: totalEnvironmentImage('total-environment/total-environment-the-magic-faraway-tree/floor-plans/3bhk-duplex-floor-plan.webp') }
    ],
    amenities: [
        { name: 'Clubhouse', icon: 'fa-solid fa-building' },
        { name: 'Swimming Pool & Kids Pool', icon: 'fa-solid fa-person-swimming' },
        { name: 'Fitness Centre / Gym', icon: 'fa-solid fa-dumbbell' },
        { name: 'Private Double-Height Gardens', icon: 'fa-solid fa-seedling' },
        { name: 'Tennis & Squash Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: 'Children\'s Play Area', icon: 'fa-solid fa-children' },
        { name: 'Indoor Games Room', icon: 'fa-solid fa-chess' },
        { name: '24/7 Security & CCTV', icon: 'fa-solid fa-shield-halved' }
    ],
    connectivity: [
        { label: 'Silk Institute Metro Station', destination: 'Silk Institute Metro Station (Green Line), Kanakapura Road, Thalaghattapura, Bengaluru, Karnataka 560062', coordinates: { lat: 12.871200, lon: 77.537800 }, distance: '1.2 Kms', icon: 'fa-solid fa-train-subway' },
        { label: 'NICE Road Expressway Junction', destination: 'NICE Ring Road Toll Plaza, Kanakapura Road, Bengaluru, Karnataka 560062', coordinates: { lat: 12.869500, lon: 77.539500 }, distance: '11.3 Kms', icon: 'fa-solid fa-highway' },
        { label: 'Astra Super Speciality Hospital', destination: 'Astra Hospital, Kanakapura Main Road, Konanakunte Cross, Bengaluru, Karnataka 560062', coordinates: { lat: 12.885500, lon: 77.551500 }, distance: '6.5 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'Metro Cash & Carry', destination: 'METRO Wholesale Kanakapura Road, Doddakallasandra, Bengaluru, Karnataka 560062', coordinates: { lat: 12.889500, lon: 77.552500 }, distance: '6.7 Kms', icon: 'fa-solid fa-cart-shopping' },
        { label: 'Delhi Public School Bangalore South', destination: 'Delhi Public School Bangalore South, Kanakapura Road, Bengaluru, Karnataka 560062', coordinates: { lat: 12.876500, lon: 77.555500 }, distance: '7.5 Kms', icon: 'fa-solid fa-school' },
        { label: 'Sri Sri Ravishankar Vidya Mandir', destination: 'Sri Sri Ravishankar Vidya Mandir, Art of Living International Center, Kanakapura Road, Bengaluru, Karnataka 560082', coordinates: { lat: 12.842500, lon: 77.502500 }, distance: '4.5 Kms', icon: 'fa-solid fa-school' },
        { label: 'Forum South Bangalore Mall', destination: 'Forum South Bangalore Mall, Konanakunte Cross, Kanakapura Road, Bengaluru, Karnataka 560062', coordinates: { lat: 12.886500, lon: 77.554500 }, distance: '6.2 Kms', icon: 'fa-solid fa-cart-shopping' },
        { label: 'JP Nagar 6th Phase', destination: 'JP Nagar 6th Phase, Sarakki Lake, Bengaluru, Karnataka 560078', coordinates: { lat: 12.905500, lon: 77.581500 }, distance: '8.5 Kms', icon: 'fa-solid fa-location-dot' }
    ]
  }
];

propertiesData.forEach(property => {
    property.overview = property.overview || createPropertyOverview(property);
    property.highlights = property.highlights || createPropertyHighlights(property);
});

