const imageCdnPrefix = 'https://media.justflip.in/builder-brand-pages/';
const prideImage = suffix => `${imageCdnPrefix}${suffix.replace(/^\/+/, '')}`;

export const developerInfo = {
    hero: {
        subtitle: 'Pride Group | Bengaluru',
        title: 'Pride Developers & Projects in Bangalore',
        description: 'Explore Pride Group residential construction projects in Bangalore, including plots, villa plots, villas, and apartments. Compare locations, configurations, and prices.',
        image: prideImage('pride-group/banner.webp')
    }
};

export const faqData = [
  {
    "question": "Who is the owner of Pride Group?",
    "answer": "The owner or key leader depends on which company named \"Pride Group\" you mean, as several distinct businesses share this name: Pride Hotels Group: Founded and chaired by Sureshchand Premchand Jain (S. P. Jain), who serves as the Chairman and Managing Director. Pride Group (Real Estate - Pune/Mumbai/Bangalore): Led by Managing Directors Arvind Jain, M. L. Saraogi, and D. P. Jain. Pride Group (Dubai-based Financial Services): Chaired by Her Excellency Shaikha Moaza Obaid Suhail Al Maktoum. Pride Group (Enterprises/Tech/MSME): Founded and led by Sudendu Shah, who has served as Founder and CEO since 2008."
  },
  {
    "question": "What is the Pride group?",
    "answer": "The Pride Group most commonly refers to an Indian real estate and hospitality developer, though the name also applies to a manufacturing conglomerate in Bangladesh and a human services organization in the United States."
  },
  {
    "question": "What are the main design philosophies followed in Pride Group homes?",
    "answer": "According to their construction frameworks, the company focuses on open floor plans, maximized natural light, and seamless connectivity. Their layout standards prioritize contemporary architecture, particularly around smart planning near urban hubs."
  },
  {
    "question": "Are Pride Group properties legally compliant and easy to finance?",
    "answer": "Yes. The builder ensures all state legal formalities are complete so that buyers can process hassle-free home loans and formal property registration proceedings through major banks."
  },
  {
    "question": "What environmental sustainability practices does the builder use?",
    "answer": "As part of its commitment to eco-friendly residential spaces, Pride projects incorporate energy-efficient appliances and built-in rainwater harvesting systems to reduce the property's overall carbon footprint."
  },
  {
    "question": "What is the scale of Pride Group’s construction footprint?",
    "answer": "The company has developed 35 million square feet of real estate space and successfully established more than 30 landmark projects."
  },
  {
    "question": "How large is the Pride Group community?",
    "answer": "The builder caters to a customer base of over 100,000 happy families across its various residential portfolios."
  },
  {
    "question": "Which project recently won a major luxury real estate award?",
    "answer": "Pride Euphora was awarded the Luxury Project of the Year at the 17th Realty+ Awards."
  }
];

const overviewSearchTerms = [
  'Pride developers Bangalore',
  'Pride construction Bangalore',
  'Pride group builders',
  'Pride builders and developers',
  'Pride builders & developers',
  'Pride property developers',
  'Pride developers'
];

function formatOverviewList(values) {
  if (values.length < 2) return values[0] || '';
  return `${values.slice(0, -1).join(', ')} and ${values[values.length - 1]}`;
}

export function createPropertyOverview(property) {
  const projectIndex = propertiesData.findIndex(({ id }) => id === property.id);
  const isPlotDevelopment = /plot/i.test(property.bhk);
  const searchTerm = isPlotDevelopment
    ? 'Pride group plots in Bangalore'
    : overviewSearchTerms[(projectIndex >= 0 ? projectIndex : 0) % overviewSearchTerms.length];
  const floorPlans = formatOverviewList((property.floorPlans || []).slice(0, 3).map(({ bhk }) => bhk));
  const amenities = formatOverviewList((property.amenities || []).slice(0, 4).map(({ name }) => name));
  const nearbyPlaces = formatOverviewList((property.connectivity || []).slice(0, 3).map(({ label, distance }) => `${label} (${distance})`));

  return [
      `${property.description} Buyers researching ${searchTerm} can explore Pride Group developments in ${property.shortAddress}, with project status, location, and configuration details available to compare.`,
      `${property.name} is listed with ${property.bhk} across ${property.area}, with ${property.statusText.toLowerCase()} status and possession shown as ${property.possession}. Listed layout options include ${floorPlans || property.bhk}. Residents can explore amenities such as ${amenities || "the community's listed lifestyle facilities"}, with nearby destinations including ${nearbyPlaces || property.shortAddress}. Review Pride Group floor plans, amenities, and connectivity when comparing homes and plots in Bengaluru.${property.rera ? ` RERA registration number: ${property.rera.replace(/\.$/, '')}.` : ''}`
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
    id: 'pride-green-avenue',
    name: 'Pride Green Avenue',
    shortAddress: 'Jigani, Bengaluru',
    location: 'Jigani, off Bannerghatta Road, South Bengaluru, Anekal Taluk, Bengaluru, Karnataka 560105',
    coordinates: { lat: 12.784500, lon: 77.639000 },
    mapsQuery: 'Pride Green Avenue, Jigani, Bengaluru',
    category: 'NEW',
    statusText: 'New Launch',
    badgeClass: 'badge-new',
    price: '₹85 Lakhs Onwards',
    bhk: 'Residential Plots',
    area: '15 Acres',
    possession: 'June 2026',
    rera: 'PRM/KA/RERA/1251/308/PR/250725/007951',
    description: 'Pride Green Avenue (also known as Pride Green Avenues) is a premium 15-acre BMRDA and RERA-approved plotted development by Pride Group. Located in Jigani, off Bannerghatta Road in South Bengaluru, the community comprises 266 Vastu-compliant plots with tree-lined avenues, 5 landscaped parks, wide internal concrete roads, and a luxury clubhouse.',
    thumbnail: prideImage('pride-group/pride-green-avenue/thumbnail.webp'),
    highlights: [
        "Exclusive Ultra Luxury Clubhouse with 25+ lifestyle amenities",
        "BMRDA and RERA approved plotted development",
        "Awarded Most Admired Plotted Development Project of the Year 2024",
        "Spread across 15 Acres within a 450 Acre Mega Township by Pride Group"
    ],
    images: [
        prideImage('pride-group/pride-green-avenue/gallery/exterior-view.webp'),
        prideImage('pride-group/pride-green-avenue/gallery/interior-view.webp'),
        prideImage('pride-group/pride-green-avenue/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '30 x 40 Plot (West Facing)', sqft: '1,200 sq.ft.', price: '₹85 Lakhs Onwards', image: prideImage('pride-group/pride-green-avenue/floor-plans/30x40-west-plot-layout.webp') },
        { bhk: '30 x 40 Plot (East Facing)', sqft: '1,200 sq.ft.', price: '₹87 Lakhs Onwards', image: prideImage('pride-group/pride-green-avenue/floor-plans/30x40-east-plot-layout.webp') },
        { bhk: '30 x 50 Plot (West Facing)', sqft: '1,500 sq.ft.', price: '₹1.07 Crore Onwards', image: prideImage('pride-group/pride-green-avenue/floor-plans/30x50-west-plot-layout.webp') },
        { bhk: '30 x 50 Plot (East Facing)', sqft: '1,500 sq.ft.', price: '₹1.10 Crore Onwards', image: prideImage('pride-group/pride-green-avenue/floor-plans/30x50-east-plot-layout.webp') }
    ],
    amenities: [
        { name: 'Clubhouse', icon: 'fa-solid fa-building' },
        { name: 'Landscaped Parks', icon: 'fa-solid fa-leaf' },
        { name: 'Jogging & Walking Track', icon: 'fa-solid fa-person-running' },
        { name: 'Gymnasium', icon: 'fa-solid fa-dumbbell' },
        { name: 'Yoga & Meditation Zone', icon: 'fa-solid fa-spa' },
        { name: 'Amphitheatre', icon: 'fa-solid fa-masks-theater' },
        { name: 'Badminton Court', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: '24/7 Security & CCTV', icon: 'fa-solid fa-shield-halved' }
    ],
    connectivity: [
        { label: 'Bannerghatta Main Road', destination: 'Bannerghatta Main Road, Jigani, Bengaluru, Karnataka', coordinates: { lat: 12.793200, lon: 77.632100 }, distance: '4.0 Kms', icon: 'fa-solid fa-road' },
        { label: 'Jigani Industrial Area', destination: 'Jigani Industrial Area, Bengaluru, Karnataka 560105', coordinates: { lat: 12.784500, lon: 77.643200 }, distance: '9.8 Kms', icon: 'fa-solid fa-industry' },
        { label: 'Bannerghatta National Park', destination: 'Bannerghatta Biological Park, Bannerghatta Main Road, Bengaluru, Karnataka 560083', coordinates: { lat: 12.800500, lon: 77.577200 }, distance: '9.2 Kms', icon: 'fa-solid fa-tree' },
        { label: 'NICE Road Expressway', destination: 'NICE Ring Road Junction, Bannerghatta Road, Bengaluru, Karnataka', coordinates: { lat: 12.836400, lon: 77.588600 }, distance: '12.3 Kms', icon: 'fa-solid fa-highway' },
        { label: 'Bommasandra Industrial Area', destination: 'Bommasandra Industrial Area, Hosur Road, Bengaluru, Karnataka', coordinates: { lat: 12.816500, lon: 77.685200 }, distance: '12.1 Kms', icon: 'fa-solid fa-industry' },
        { label: 'Electronic City Phase 1', destination: 'Electronic City Phase I, Electronic City, Karnataka 560100', coordinates: { lat: 12.845200, lon: 77.660200 }, distance: '13.4 Kms', icon: 'fa-solid fa-laptop-code' },
        { label: 'Bommasandra Metro Station', destination: 'Bommasandra Metro Station (Yellow Line), Hosur Road, Bengaluru, Karnataka', coordinates: { lat: 12.818200, lon: 77.689500 }, distance: '13.8 Kms', icon: 'fa-solid fa-train-subway' },
        { label: 'Royal Meenakshi Mall', destination: 'Royal Meenakshi Mall, Bannerghatta Main Road, Hulimavu, Bengaluru, Karnataka 560076', coordinates: { lat: 12.875500, lon: 77.595800 }, distance: '17.0 Kms', icon: 'fa-solid fa-cart-shopping' }
    ]
  },
  {
    id: 'pride-euphora',
    name: 'Pride Euphora',
    shortAddress: 'KR Puram, Bengaluru',
    location: 'Old Madras Road, Bhattarahalli Signal, Hosabasavanapura, KR Puram, Bengaluru, Karnataka 560049',
    coordinates: { lat: 13.011800, lon: 77.712500 },
    mapsQuery: 'Pride Euphora, Old Madras Road, KR Puram, Bengaluru',
    category: 'ONGOING',
    statusText: 'Ongoing',
    badgeClass: 'badge-ongoing',
    price: '₹1.99 Crore Onwards',
    bhk: '3 & 4 BHK Apartments',
    area: '2.5 Acres',
    possession: 'September 2027',
    rera: 'PRM/KA/RERA/1251/446/PR/080824/006965',
    description: 'Pride Euphora is a luxury high-rise residential development by the Pride Group, strategically located right on Old Madras Road in KR Puram, East Bengaluru. Spread across 2.5 acres with 80% green open space, the project features 3 towers rising up to 18 floors, offering meticulously designed 3 & 4 BHK residences with modern architectural design, custom finishes, and over 30 lifestyle amenities.',
    thumbnail: prideImage('pride-group/pride-euphora/thumbnail.webp'),
    highlights: [
        "Expansive living with 80% open spaces across the project layout",
        "Advanced Seismic Zone II structure with Aluminum formwork technology",
        "36+ lifestyle amenities featuring a pet's park and open-air theatre",
        "Excellent connectivity with KR Puram Metro Station within 5 km",
        "Healthcare at your doorstep with Sathya Sai Hospital just 500m away",
        "Modern homes with digital main door locks and integrated piped gas lines",
        "Grand lifestyle club and a premium designer entrance lobby"
    ],
    images: [
        prideImage('pride-group/pride-euphora/gallery/exterior.webp'),
        prideImage('pride-group/pride-euphora/gallery/interior-view.webp'),
        prideImage('pride-group/pride-euphora/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '3 BHK', sqft: '1,131 sq.ft.', price: '₹1.99 Crore Onwards', image: prideImage('pride-group/pride-euphora/floor-plans/3bhk-floor-plan.webp') },
        { bhk: '4 BHK', sqft: '1,862 sq.ft.', price: '₹3.27 Crore Onwards', image: prideImage('pride-group/pride-euphora/floor-plans/4bhk-floor-plan.webp') }
    ],
    amenities: [
        { name: 'Swimming Pool', icon: 'fa-solid fa-person-swimming' },
        { name: 'Clubhouse', icon: 'fa-solid fa-building' },
        { name: 'Fitness Centre / Gym', icon: 'fa-solid fa-dumbbell' },
        { name: 'Children\'s Play Area', icon: 'fa-solid fa-children' },
        { name: 'Jogging Track', icon: 'fa-solid fa-person-running' },
        { name: 'Landscaped Gardens', icon: 'fa-solid fa-leaf' },
        { name: 'Multipurpose Court', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: 'Yoga & Aerobics Deck', icon: 'fa-solid fa-spa' }
    ],
    connectivity: [
        { label: 'Sathya Sai Orthopaedic Hospital', destination: 'Sri Sathya Sai Orthopaedic Hospital, Old Madras Road, KR Puram, Bengaluru, Karnataka 560049', coordinates: { lat: 13.012500, lon: 77.708500 }, distance: '2.4 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'Cambridge International School', destination: 'Cambridge International School, KR Puram, Bengaluru, Karnataka 560036', coordinates: { lat: 13.008500, lon: 77.701500 }, distance: '2.1 Kms', icon: 'fa-solid fa-school' },
        { label: 'Garden City University', destination: 'Garden City University, Old Madras Road, Bengaluru, Karnataka 560049', coordinates: { lat: 13.015500, lon: 77.726500 }, distance: '2.9 Kms', icon: 'fa-solid fa-graduation-cap' },
        { label: 'KR Puram Metro Station', destination: 'KR Puram Metro Station (Blue & Purple Line), Old Madras Road, Bengaluru, Karnataka', coordinates: { lat: 12.998200, lon: 77.676500 }, distance: '5.7 Kms', icon: 'fa-solid fa-train-subway' },
        { label: 'Hoodi Metro Station', destination: 'Hoodi Metro Station (Purple Line), Whitefield Main Road, Bengaluru, Karnataka', coordinates: { lat: 12.991500, lon: 77.716200 }, distance: '4.8 Kms', icon: 'fa-solid fa-train-subway' },
        { label: 'Prestige Shantiniketan', destination: 'Prestige Shantiniketan, Whitefield Main Road, Bengaluru, Karnataka 560048', coordinates: { lat: 12.989200, lon: 77.728500 }, distance: '6.1 Kms', icon: 'fa-solid fa-building' },
        { label: 'RMZ Infinity', destination: 'RMZ Infinity, Old Madras Road, Bennigana Halli, Bengaluru, Karnataka 560016', coordinates: { lat: 12.992500, lon: 77.662000 }, distance: '7.4 Kms', icon: 'fa-solid fa-laptop-code' },
        { label: 'ITPB Whitefield', destination: 'International Tech Park Bangalore (ITPB), Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.986500, lon: 77.737500 }, distance: '7.6 Kms', icon: 'fa-solid fa-building-columns' },
        { label: 'Phoenix Marketcity', destination: 'Phoenix Marketcity, Whitefield Main Road, Mahadevapura, Bengaluru, Karnataka 560048', coordinates: { lat: 12.995800, lon: 77.696500 }, distance: '6.1 Kms', icon: 'fa-solid fa-cart-shopping' }
    ]
  },
  {
    id: 'pride-crosswinds-villas',
    name: 'Pride Crosswinds Villas',
    shortAddress: 'Bukkasagara, Bengaluru',
    location: 'Pride Vatika Main Road, Bukkasagara Village, Jigani Hobli, Bannerghatta Road, Bengaluru, Karnataka 560083',
    coordinates: { lat: 12.788500, lon: 77.585500 },
    mapsQuery: 'Pride Crosswinds Villas, Bannerghatta Road, Bengaluru',
    category: 'READY',
    statusText: 'Ready to Move',
    badgeClass: 'badge-ready',
    price: '₹3.06 Crore Onwards',
    bhk: '3 & 4 BHK Luxury Villas',
    area: '25 Acres',
    possession: 'Ready to Move',
    rera: 'PRM/KA/RERA/1251/308/PR/020622/004954',
    description: 'Pride Crosswinds Villas is an exclusive 25-acre gated villa community nestled adjacent to the lush greenery of the Bannerghatta National Park in South Bengaluru. The enclave features independent luxury villas set within pristine natural landscapes, designed with private gardens, expansive living rooms with double-height ceilings, premium imported fittings, and a sprawling clubhouse with sports and wellness facilities.',
    thumbnail: prideImage('pride-group/pride-crosswind-villas/thumbnail.webp'),
    highlights: [
        "Balcony overlooking the picturesque valleys with mesmerizing views",
        "A Private Swimming Pool to rewind, rejuvenate and relax",
        "Private terrace garden with breathtaking valley views.",
        "Thoughtfully designed interiors with fresh air",
        "Private & safe living with 24/7 surveillance for you and your loved ones"
    ],
    images: [
        prideImage('pride-group/pride-crosswind-villas/gallery/exterior-view.webp'),
        prideImage('pride-group/pride-crosswind-villas/gallery/interior-view.webp'),
        prideImage('pride-group/pride-crosswind-villas/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '3 BHK Villa', sqft: '2,912 sq.ft.', price: '₹3.06 Crore Onwards', image: prideImage('pride-group/pride-crosswind-villas/floor-plans/3bhk-floor-plan.webp') },
        { bhk: '4 BHK Villa', sqft: '4,460 sq.ft.', price: '₹4.68 Crore Onwards', image: prideImage('pride-group/pride-crosswind-villas/floor-plans/4bhk-floor-plan.webp') }
    ],
    amenities: [
        { name: 'Clubhouse', icon: 'fa-solid fa-building' },
        { name: 'Swimming Pool', icon: 'fa-solid fa-person-swimming' },
        { name: 'Gymnasium', icon: 'fa-solid fa-dumbbell' },
        { name: 'Tennis Court', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: 'Landscaped Courtyards', icon: 'fa-solid fa-leaf' },
        { name: 'Squash Court', icon: 'fa-solid fa-baseball-bat-ball' },
        { name: 'Spa & Steam Room', icon: 'fa-solid fa-spa' },
        { name: '24/7 Gated Security', icon: 'fa-solid fa-shield-halved' }
    ],
    connectivity: [
        { label: 'Shrutiram Gurukulam', destination: 'Shrutiram Gurukulam, Bannerghatta Road, Bukkasagara, Bengaluru, Karnataka 560083', coordinates: { lat: 12.791500, lon: 77.587500 }, distance: '3.3 Kms', icon: 'fa-solid fa-school' },
        { label: 'Bannerghatta Main Road', destination: 'Bannerghatta Main Road, Koppa Gate, Bengaluru, Karnataka 560083', coordinates: { lat: 12.801500, lon: 77.592500 }, distance: '3.4 Kms', icon: 'fa-solid fa-road' },
        { label: 'Jigani Industrial Area', destination: 'Jigani Industrial Area, Bengaluru, Karnataka 560105', coordinates: { lat: 12.784500, lon: 77.643200 }, distance: '10.5 Kms', icon: 'fa-solid fa-industry' },
        { label: 'Bannerghatta National Park', destination: 'Bannerghatta Biological Park, Bannerghatta Road, Bengaluru, Karnataka 560083', coordinates: { lat: 12.800500, lon: 77.577200 }, distance: '8.7 Kms', icon: 'fa-solid fa-tree' },
        { label: 'NICE Road Expressway', destination: 'NICE Ring Road Toll Plaza, Bannerghatta Road, Bengaluru, Karnataka', coordinates: { lat: 12.836400, lon: 77.588600 }, distance: '14.5 Kms', icon: 'fa-solid fa-highway' },
        { label: 'Vijayashree Hospital', destination: 'Vijayashree Multispeciality Hospital, Jigani, Bengaluru, Karnataka 560105', coordinates: { lat: 12.781500, lon: 77.641500 }, distance: '7.1 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'Bommasandra Industrial Area', destination: 'Bommasandra Industrial Area, Hosur Road, Bengaluru, Karnataka', coordinates: { lat: 12.816500, lon: 77.685200 }, distance: '11.6 Kms', icon: 'fa-solid fa-industry' },
        { label: 'Narayana Health City', destination: 'Narayana Health City, Bommasandra Industrial Area, Hosur Road, Bengaluru, Karnataka 560099', coordinates: { lat: 12.821500, lon: 77.692500 }, distance: '14.6 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'Electronic City Phase 1', destination: 'Electronic City Phase I, Electronic City, Karnataka 560100', coordinates: { lat: 12.845200, lon: 77.660200 }, distance: '12.0 Kms', icon: 'fa-solid fa-laptop-code' }
    ]
  },
  {
    id: 'pride-vatika-phase-2',
    name: 'Pride Vatika Phase 2',
    shortAddress: 'Koppa Gate, Bengaluru',
    location: 'Off Bannerghatta - Jigani Road, Bukkasagara / Koppa Gate, Bengaluru, Karnataka 560083',
    coordinates: { lat: 12.802000, lon: 77.601500 },
    mapsQuery: 'Pride Vatika Phase 2, Koppa Gate, Bengaluru',
    category: 'READY',
    statusText: 'Ready to Move',
    badgeClass: 'badge-ready',
    price: '₹82.5 Lakhs Onwards',
    bhk: 'Villa Plots',
    area: '21 Acres',
    possession: 'Ready to Move',
    rera: 'PRM/KA/RERA/1251/308/PR/020822/005119',
    description: 'Pride Vatika Phase 2 is an expansive 21-acre gated villa plotted development located strategically off the Bannerghatta-Jigani Road near Koppa Gate in South Bengaluru. The enclave provides ready-to-construct plots with underground utilities, paved wide tree-lined avenues, children’s play parks, and a modern lifestyle clubhouse.',
    thumbnail: prideImage('pride-group/pride-vatika-phase-2/thumbnail.webp'),
    highlights: [
        "Spread over 21 acres of pristine land",
        "Well connected with HSR & BTM layout",
        "Expansive grounds filled with lush greenery",
        "15+ Lifestyle amenities"
    ],
    images: [
        prideImage('pride-group/pride-vatika-phase-2/gallery/exterior-view.webp'),
        prideImage('pride-group/pride-vatika-phase-2/gallery/interior-view.webp'),
        prideImage('pride-group/pride-vatika-phase-2/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '30 x 40 Plot', sqft: '1,200 sq.ft.', price: '₹82.5 Lakhs Onwards', image: prideImage('pride-group/pride-vatika-phase-2/floor-plans/30x40-plot-layout.webp') },
        { bhk: '30 x 50 Plot', sqft: '1,500 sq.ft.', price: '₹1.03 Crore Onwards', image: prideImage('pride-group/pride-vatika-phase-2/floor-plans/30x50-plot-layout.webp') },
        { bhk: '40 x 60 Plot', sqft: '2,400 sq.ft.', price: '₹1.65 Crore Onwards', image: prideImage('pride-group/pride-vatika-phase-2/floor-plans/40x60-plot-layout.webp') }
    ],
    amenities: [
        { name: 'Clubhouse', icon: 'fa-solid fa-building' },
        { name: 'Swimming Pool', icon: 'fa-solid fa-person-swimming' },
        { name: 'Gymnasium', icon: 'fa-solid fa-dumbbell' },
        { name: 'Landscaped Parks', icon: 'fa-solid fa-leaf' },
        { name: 'Jogging Track', icon: 'fa-solid fa-person-running' },
        { name: 'Kids Play Area', icon: 'fa-solid fa-children' },
        { name: 'Tennis & Badminton Court', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: '24/7 Security & CCTV', icon: 'fa-solid fa-shield-halved' }
    ],
    connectivity: [
        { label: 'Redbridge International Academy', destination: 'Redbridge International Academy, S Bingipura, Hulimangala Post, Bengaluru, Karnataka 560105', coordinates: { lat: 12.812500, lon: 77.621500 }, distance: '4.8 Kms', icon: 'fa-solid fa-school' },
        { label: 'Toyota Industries Engine India', destination: 'Toyota Industries Engine India, Jigani Industrial Area, Bengaluru, Karnataka 560105', coordinates: { lat: 12.791500, lon: 77.638500 }, distance: '5.7 Kms', icon: 'fa-solid fa-industry' },
        { label: 'Otis Elevator India', destination: 'Otis Elevator Company, Jigani Industrial Area, Bengaluru, Karnataka 560105', coordinates: { lat: 12.788500, lon: 77.645500 }, distance: '6.0 Kms', icon: 'fa-solid fa-industry' },
        { label: 'Schneider Electric', destination: 'Schneider Electric, Jigani Industrial Area, Bengaluru, Karnataka 560105', coordinates: { lat: 12.784500, lon: 77.649500 }, distance: '6.7 Kms', icon: 'fa-solid fa-laptop-code' },
        { label: 'Narayana Hrudayalaya Hospital', destination: 'Narayana Institute of Cardiac Sciences, Bommasandra, Bengaluru, Karnataka 560099', coordinates: { lat: 12.821500, lon: 77.692500 }, distance: '14.5 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'DMart Bannerghatta Road', destination: 'DMart Bannerghatta Road, Gottigere, Bengaluru, Karnataka 560083', coordinates: { lat: 12.859500, lon: 77.591500 }, distance: '11.8 Kms', icon: 'fa-solid fa-cart-shopping' },
        { label: 'Electronic City Phase 1', destination: 'Electronic City Phase I, Electronic City, Karnataka 560100', coordinates: { lat: 12.845200, lon: 77.660200 }, distance: '11.9 Kms', icon: 'fa-solid fa-laptop-code' },
        { label: 'Royal Meenakshi Mall', destination: 'Royal Meenakshi Mall, Bannerghatta Main Road, Hulimavu, Bengaluru, Karnataka 560076', coordinates: { lat: 12.875500, lon: 77.595800 }, distance: '14.7 Kms', icon: 'fa-solid fa-cart-shopping' }
    ]
  },
  {
    id: 'pride-crosswinds-villa-plots-phase-2',
    name: 'Pride Crosswinds Phase 2 (Villa Plots)',
    shortAddress: 'Bukkasagara, Bengaluru',
    location: 'Off Bannerghatta - Jigani Road, Near Koppa Gate, Bukkasagara Village, Anekal Taluk, Bengaluru, Karnataka 560083',
    coordinates: { lat: 12.788500, lon: 77.585500 },
    mapsQuery: 'Pride Crosswinds Phase 2, Bannerghatta Road, Bengaluru',
    category: 'READY',
    statusText: 'Ready to Move',
    badgeClass: 'badge-ready',
    price: '₹1.32 Crore Onwards',
    bhk: 'Luxury Villa Plots',
    area: '25.43 Acres',
    possession: 'Ready to Move',
    rera: 'PRM/KA/RERA/1251/308/PR/020622/004954',
    description: 'Pride Crosswinds Phase 2 (Villa Plots) is a premier 25.43-acre gated enclave of luxury villa plots situated right off Bannerghatta Road in South Bengaluru. Set against the serene backdrop of the Bannerghatta National Park, the project is planned with extensive landscaped parks, underground power cabling, a grand clubhouse, and sports recreation facilities.',
    thumbnail: prideImage('pride-group/pride-crosswinds-phase-2/thumbnail.webp'),
    highlights: [
        "Just 2 km from Koppa Gate",
        "Proximity to Sarala Birla & Candor Schools",
        "Exclusive Clubhouse with Gym & Squash",
        "Off Bannerghatta-Jigani Road",
        "Premium Hydro Pneumatic Water System",
        "387 Luxury Villa Plots"
    ],
    images: [
        prideImage('pride-group/pride-crosswinds-phase-2/gallery/exterior-view.webp'),
        prideImage('pride-group/pride-crosswinds-phase-2/gallery/interior-view.webp'),
        prideImage('pride-group/pride-crosswinds-phase-2/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '40 x 60 Plot', sqft: '2,400 sq.ft.', price: '₹1.32 Crore Onwards', image: prideImage('pride-group/pride-crosswinds-phase-2/floor-plans/40x60-plot-floor-plan.webp') },
        { bhk: '50 x 80 Plot', sqft: '4,000 sq.ft.', price: '₹2.20 Crore Onwards', image: prideImage('pride-group/pride-crosswinds-phase-2/floor-plans/50x80-plot-floor-plan.webp') }
    ],
    amenities: [
        { name: 'Clubhouse', icon: 'fa-solid fa-building' },
        { name: 'Swimming Pool', icon: 'fa-solid fa-person-swimming' },
        { name: 'Gymnasium', icon: 'fa-solid fa-dumbbell' },
        { name: 'Tennis Court', icon: 'fa-solid fa-table-tennis-paddle-ball' },
        { name: 'Squash Court', icon: 'fa-solid fa-baseball-bat-ball' },
        { name: 'Landscaped Parks', icon: 'fa-solid fa-leaf' },
        { name: 'Jogging Track', icon: 'fa-solid fa-person-running' },
        { name: '24/7 Security & CCTV', icon: 'fa-solid fa-shield-halved' }
    ],
    connectivity: [
        { label: 'Shrutiram Gurukulam', destination: 'Shrutiram Gurukulam, Bannerghatta Road, Bukkasagara, Bengaluru, Karnataka 560083', coordinates: { lat: 12.791500, lon: 77.587500 }, distance: '3.5 Kms', icon: 'fa-solid fa-school' },
        { label: 'Bannerghatta Main Road', destination: 'Bannerghatta Main Road, Koppa Gate, Bengaluru, Karnataka 560083', coordinates: { lat: 12.801500, lon: 77.592500 }, distance: '3.6 Kms', icon: 'fa-solid fa-road' },
        { label: 'S-VYASA Arogyadhama', destination: 'S-VYASA University & Arogyadhama, Prashanti Kuteeram, Bengaluru, Karnataka 560105', coordinates: { lat: 12.798500, lon: 77.612500 }, distance: '7.5 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'Jigani Industrial Area', destination: 'Jigani Industrial Area, Bengaluru, Karnataka 560105', coordinates: { lat: 12.784500, lon: 77.643200 }, distance: '10.7 Kms', icon: 'fa-solid fa-industry' },
        { label: 'NICE Road Expressway', destination: 'NICE Ring Road Toll Plaza, Bannerghatta Road, Bengaluru, Karnataka', coordinates: { lat: 12.836400, lon: 77.588600 }, distance: '14.8 Kms', icon: 'fa-solid fa-highway' },
        { label: 'Sarala Birla Academy', destination: 'Sarala Birla Academy, Bannerghatta Road, Bengaluru, Karnataka 560083', coordinates: { lat: 12.825500, lon: 77.581500 }, distance: '5.2 Kms', icon: 'fa-solid fa-school' },
        { label: 'Narayana Health City', destination: 'Narayana Health City, Bommasandra Industrial Area, Hosur Road, Bengaluru, Karnataka 560099', coordinates: { lat: 12.821500, lon: 77.692500 }, distance: '14.7 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'Electronic City Phase 1', destination: 'Electronic City Phase I, Electronic City, Karnataka 560100', coordinates: { lat: 12.845200, lon: 77.660200 }, distance: '12.0 Kms', icon: 'fa-solid fa-laptop-code' }
    ]
  },
  {
    id: 'pride-altius',
    name: 'Pride Altius',
    shortAddress: 'Bagalakunte, Bengaluru',
    location: 'Tumkur Main Road, Bagalakunte, Near IKEA, West Bengaluru, Karnataka 560073',
    coordinates: { lat: 13.047800, lon: 77.499500 },
    mapsQuery: 'Pride Altius, Nagasandra, Bengaluru',
    category: 'READY',
    statusText: 'Ready to Move',
    badgeClass: 'badge-ready',
    price: '₹1.74 Crore Onwards',
    bhk: '2, 2.5 & 3 BHK Apartments',
    area: '1.29 Acres',
    possession: 'June 2026',
    rera: 'PRM/KA/RERA/1251/309/PR/050723/006035',
    description: 'Pride Altius is a premium high-rise residential enclave developed by the Pride Group, located right on Tumkur Main Road in West Bengaluru. Positioned opposite IKEA and just 500 meters from the Nagasandra Metro Station, the tower offers stylish 2, 2.5 & 3 BHK residences with elevated sunset views, rooftop recreational facilities, and seamless access to Peenya, Yeshwanthpur, and the Outer Ring Road.',
    thumbnail: prideImage('pride-group/pride-altius/thumbnail.webp'),
    highlights: [
        "Proposed Manjunatha Nagar Metro Station at your doorstep",
        "Prime location just 450 meters from IKEA Bengaluru",
        "Signal-free city access via Tumkur Elevated Expressway",
        "Integrated co-working spaces within the exclusive clubhouse",
        "Vastu-compliant architecture with an on-site temple complex",
        "Premium sports zone with skating rink and slam dunk court",
        "Strategic proximity to World Trade Center and Peenya Industrial Area"
    ],
    images: [
        prideImage('pride-group/pride-altius/gallery/exterior-view.webp'),
        prideImage('pride-group/pride-altius/gallery/interior-view.webp'),
        prideImage('pride-group/pride-altius/gallery/amenities.webp')
    ],
    floorPlans: [
        { bhk: '2 BHK', sqft: '1,014 sq.ft.', price: '₹1.74 Crore Onwards', image: prideImage('pride-group/pride-altius/floor-plans/2bhk-apartment-floor-plans.webp') },
        { bhk: '2.5 BHK', sqft: '1,328 sq.ft.', price: '₹2.28 Crore Onwards', image: prideImage('pride-group/pride-altius/floor-plans/2.5bhk-apartment-floor-plans.webp') },
        { bhk: '3 BHK', sqft: '1,607 sq.ft.', price: '₹2.76 Crore Onwards', image: prideImage('pride-group/pride-altius/floor-plans/3bhk-apartment-floor-plans.webp') }
    ],
    amenities: [
        { name: 'Sky Lounge & Rooftop Deck', icon: 'fa-solid fa-cloud' },
        { name: 'Swimming Pool', icon: 'fa-solid fa-person-swimming' },
        { name: 'Gymnasium', icon: 'fa-solid fa-dumbbell' },
        { name: 'Clubhouse', icon: 'fa-solid fa-building' },
        { name: 'Children\'s Play Area', icon: 'fa-solid fa-children' },
        { name: 'Indoor Games Room', icon: 'fa-solid fa-chess' },
        { name: 'Multipurpose Hall', icon: 'fa-solid fa-hotel' },
        { name: '24/7 Security & CCTV', icon: 'fa-solid fa-shield-halved' }
    ],
    connectivity: [
        { label: 'IKEA Nagasandra', destination: 'IKEA Nagasandra, Tumkur Road, Bengaluru, Karnataka 560073', coordinates: { lat: 13.046500, lon: 77.498500 }, distance: '750 Meters', icon: 'fa-solid fa-store' },
        { label: 'Nagasandra Metro Station', destination: 'Nagasandra Metro Station (Green Line), Tumkur Road, Bengaluru, Karnataka 560073', coordinates: { lat: 13.048200, lon: 77.499800 }, distance: '550 Meters', icon: 'fa-solid fa-train-subway' },
        { label: 'Jindal NatureCure Institute', destination: 'Jindal Naturecure Institute, Tumkur Road, Bengaluru, Karnataka 560073', coordinates: { lat: 13.041500, lon: 77.491500 }, distance: '4.0 Kms', icon: 'fa-solid fa-spa' },
        { label: 'Rockline Mall', destination: 'Rockline Mall, Prashanth Nagar, Jalahalli West, Bengaluru, Karnataka 560057', coordinates: { lat: 13.042500, lon: 77.518500 }, distance: '2.7 Kms', icon: 'fa-solid fa-cart-shopping' },
        { label: 'Sapthagiri Hospital', destination: 'Sapthagiri Super Speciality Hospital, Hesaraghatta Main Road, Bengaluru, Karnataka 560090', coordinates: { lat: 13.062500, lon: 77.508500 }, distance: '3.9 Kms', icon: 'fa-solid fa-hospital' },
        { label: 'Peenya Industrial Area', destination: 'Peenya Industrial Area, Bengaluru, Karnataka 560058', coordinates: { lat: 13.031500, lon: 77.521500 }, distance: '4.1 Kms', icon: 'fa-solid fa-industry' },
        { label: 'Vaishnavi Sapphire Mall', destination: 'Vaishnavi Sapphire Centre, Tumkur Road, Yeshwanthpur, Bengaluru, Karnataka 560022', coordinates: { lat: 13.024500, lon: 77.545500 }, distance: '6.6 Kms', icon: 'fa-solid fa-cart-shopping' },
        { label: 'World Trade Center Bengaluru', destination: 'World Trade Center Bangalore, Brigade Gateway, Malleshwaram West, Bengaluru, Karnataka 560055', coordinates: { lat: 13.011500, lon: 77.555200 }, distance: '8.5 Kms', icon: 'fa-solid fa-building' },
        { label: 'Orion Mall', destination: 'Orion Mall at Brigade Gateway, Dr Rajkumar Road, Rajajinagar, Bengaluru, Karnataka 560055', coordinates: { lat: 13.011200, lon: 77.555000 }, distance: '8.2 Kms', icon: 'fa-solid fa-cart-shopping' }
    ]
  }
];

propertiesData.forEach(property => {
    property.overview = property.overview || createPropertyOverview(property);
    property.highlights = property.highlights || createPropertyHighlights(property);
});

