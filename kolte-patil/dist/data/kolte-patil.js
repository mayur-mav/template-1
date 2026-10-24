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

export const propertiesData = [
    {
        id: 'kolte-patil-raaga',
        name: 'Kolte Patil Raaga',
        shortAddress: 'Kannuru, Bengaluru',
        location: 'Kannuru, Off Hennur Main Road, North Bengaluru, Karnataka 560077',
        category: 'READY',
        statusText: 'Ready to Move',
        badgeClass: 'badge-ready',
        price: '₹90.25 Lakh Onwards',
        bhk: '2 & 3 Bed Homes',
        area: '6 Acres',
        possession: 'Ready to Move',
        rera: 'PRM/KA/RERA/1251/446/PR/171014/000856',
        description: 'Kolte Patil Raaga by Kolte Patil Developers is a thoughtfully designed residential community located off Hennur Main Road in North Bengaluru. Spread across 7 acres with ample green open spaces, the development features 12 residential towers housing 590 well-ventilated 2 and 3-bed apartments with no common walls, complemented by a fully equipped clubhouse and modern lifestyle amenities.',
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
            { label: 'Outer Ring Road (ORR)', distance: '10 mins', icon: 'fa-solid fa-road' },
            { label: 'Manyata Tech Park', distance: '15 mins', icon: 'fa-solid fa-laptop-code' },
            { label: 'Elements Mall', distance: '15 mins', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Yelahanka Railway Station', distance: '20 mins', icon: 'fa-solid fa-train' },
            { label: 'Hebbal Flyover', distance: '25 mins', icon: 'fa-solid fa-road' },
            { label: 'Kempegowda International Airport', distance: '35 mins', icon: 'fa-solid fa-plane' }
        ]
    },
    {
        id: 'itowers-exente',
        name: 'I-Towers Exente',
        shortAddress: 'Electronic City, Bengaluru',
        location: 'Kamadhenu Layout, Konappana Agrahara, Hosur Road, Electronic City Phase 1, Bengaluru, Karnataka 560100',
        category: 'READY',
        statusText: 'Ready to Move',
        badgeClass: 'badge-ready',
        price: '₹1.37 Crore Onwards',
        bhk: '2 & 3 Bed High-Rise Residences',
        area: '4.4 Acres',
        possession: 'Ready to Move',
        rera: 'PRM/KA/RERA/1251/310/PR/171026/000862',
        description: 'I-Towers Exente by Kolte Patil Developers is a premier high-rise residential project located at the entry point of Electronic City Phase 1. Spread across 4.04 acres, the development features 5 high-rise towers (G+22/23 floors) housing 438 thoughtfully designed residences with 3-side open city views, over 70% open spaces, an Aristotle digital library, and a rooftop swimming pool clubhouse.',
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
            { label: 'Infosys Main Campus', distance: '750 Meters', icon: 'fa-solid fa-building' },
            { label: 'D-Mart Electronic City', distance: '850 Meters', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Elevated Expressway / Hosur Road', distance: '2 mins', icon: 'fa-solid fa-road' },
            { label: 'IIIT Bangalore', distance: '2.9 Kms', icon: 'fa-solid fa-school' },
            { label: 'Vimalalaya Hospital', distance: '3.9 Kms', icon: 'fa-solid fa-hospital' },
            { label: 'Electronic City Metro Station', distance: '5 mins', icon: 'fa-solid fa-train-subway' },
            { label: 'Cantonment Railway Station', distance: '18.9 Kms', icon: 'fa-solid fa-train' }
        ]
    },
    {
        id: 'kolte-patil-mirabilis',
        name: 'Kolte Patil Mirabilis',
        shortAddress: 'Horamavu, Bengaluru',
        location: 'Survey No. 71, Horamavu Agara Village, K R Puram Hobli, Horamavu, Bengaluru, Karnataka 560113',
        category: 'READY',
        statusText: 'Ready to Move',
        badgeClass: 'badge-ready',
        price: '₹27.75 Lakh Onwards',
        bhk: '1, 2, 2.5 , 3 & 4 Bed Homes',
        area: '7 Acres',
        possession: 'October 2021',
        rera: 'PRM/KA/RERA/1251/446/PR/170922/000838',
        description: 'Kolte Patil Mirabilis by Kolte Patil Developers is a well-planned residential community located in Horamavu, North-East Bengaluru. Spread over 7 acres with landscaped open areas, the project features 7 high-rise towers comprising 640 contemporary 1, 2, 2.5, and 3-bed residences. Designed for optimum ventilation and natural light, the project offers quick access to Manyata Tech Park, Outer Ring Road, and Hebbal.',
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
            { label: 'Outer Ring Road (ORR)', distance: '1.5 Kms', icon: 'fa-solid fa-road' },
            { label: 'Bangalore International School', distance: '4.1 Kms', icon: 'fa-solid fa-school' },
            { label: 'Manyata Tech Park', distance: '5.1 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'K.R. Puram Railway Station', distance: '5.7 Kms', icon: 'fa-solid fa-train' },
            { label: 'Gopalan Signature Mall', distance: '6.1 Kms', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Kempegowda International Airport', distance: '29 Kms', icon: 'fa-solid fa-plane' }
        ]
    },
    {
        id: 'kolte-patil-lakeside-24',
        name: 'Kolte Patil Lakeside 24',
        shortAddress: 'Kannuru, Bengaluru',
        location: 'Sy No. 33 (Part), Kannuru, Off Hennur - Thanisandra Main Road, North Bengaluru, Karnataka 562149',
        category: 'NEW',
        statusText: 'New Launch',
        badgeClass: 'badge-new',
        price: '₹1.12 Crore Onwards',
        bhk: '2, 2.5, 3 & 4 Bed Residences',
        area: '1.86 Acres',
        possession: 'October 2028',
        rera: 'PRM/KA/RERA/1251/446/PR/060324/006667',
        description: 'Kolte Patil Lakeside 24 by Kolte Patil Developers is an exclusive boutique residential community located off Hennur - Thanisandra Main Road in Kannuru. Spread across 1.86 acres with over 80% open spaces, the project features a single high-rise tower with 131 low-density luxury homes. Positioned along a natural lake, it offers picturesque views, a rooftop swimming pool, wellness decks, and close proximity to Manyata Tech Park and airport corridors.',
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
            { label: 'Kannuru Main Road', distance: '2 mins', icon: 'fa-solid fa-road' },
            { label: 'Decathlon Thanisandra', distance: '8 mins', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Elements Mall', distance: '12 mins', icon: 'fa-solid fa-bag-shopping' },
            { label: 'Manyata Tech Park', distance: '15 mins', icon: 'fa-solid fa-laptop-code' },
            { label: 'Upcoming Kogilu Metro Station', distance: '15 mins', icon: 'fa-solid fa-train-subway' },
            { label: 'Hebbal Flyover', distance: '20 mins', icon: 'fa-solid fa-road' },
            { label: 'Kempegowda International Airport', distance: '30 mins', icon: 'fa-solid fa-plane' }
        ]
    }
];
