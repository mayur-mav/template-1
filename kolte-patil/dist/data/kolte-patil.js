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
        description: 'Kolte Patil Raaga is a ready-to-move residential community in Kannuru, off Hennur Main Road in North Bengaluru. The project offers thoughtfully planned 2 and 3 BHK apartments across 12 towers, with 590 homes, landscaped open spaces, and layouts designed for ventilation and privacy with no common walls. Residents can enjoy a clubhouse, swimming pool, gym, indoor games room, sports courts, and children’s play area. Its location connects residents to Manyata Tech Park, Outer Ring Road, Hebbal, and Kempegowda International Airport. Explore Kolte Patil Raaga apartments, floor plans, amenities, and current pricing.',
        overview: [
            'Kolte Patil Raaga is a ready-to-move residential project by Kolte-Patil Developers in Kannuru, off Hennur Main Road in North Bengaluru. For homebuyers comparing Kolte Patil apartments in Bangalore, Raaga offers 2 and 3 BHK homes in a community of 12 towers and 590 residences. The layouts are designed without common walls, with landscaped open spaces that add breathing room between buildings.',
            'Residents have access to a clubhouse, swimming pool, gym, indoor games room, badminton and basketball courts, children’s play area, and landscaped courtyards. The Kannuru location connects the homes to Outer Ring Road, Manyata Tech Park, Elements Mall, Hebbal, and Kempegowda International Airport. Explore Kolte Patil Raaga floor plans, apartment configurations, amenities, and pricing to understand the available homes and their location.'
        ],
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
        description: 'I-Towers Exente by Kolte-Patil Developers is a ready-to-move high-rise residential project at the entrance to Electronic City Phase 1, Bengaluru. The development comprises five towers with 438 2 and 3 BHK residences, designed to capture open city views; more than 70% of the site is open space. Residents have access to a rooftop swimming pool and clubhouse, gym, yoga deck, sports courts, themed gardens, and the Aristotle digital library and study zone. Infosys, D-Mart, Hosur Road, and the Electronic City Metro Station are among the nearby destinations. Explore I-Towers Exente apartments, floor plans, amenities, and pricing.',
        overview: [
            'I-Towers Exente by Kolte-Patil Developers is a ready-to-move high-rise residential project at the entrance to Electronic City Phase 1, Bengaluru. Buyers looking for Kolte Patil homes in Bangalore’s Electronic City can explore 2 and 3 BHK residences across five towers, comprising 438 homes. The towers rise to 22 or 23 floors, and more than 70% of the development area is open space, with residences designed to take in open city views.',
            'The project’s lifestyle facilities include a rooftop swimming pool and clubhouse, gym, yoga deck, squash and badminton courts, themed gardens, children’s play area, and the Aristotle digital library and study zone. Infosys, D-Mart, Hosur Road, IIIT Bangalore, and Electronic City Metro Station are among the nearby destinations. Review I-Towers Exente apartment configurations, floor plans, amenities, and pricing when comparing Kolte Patil projects in Bangalore.'
        ],
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
        description: 'Kolte Patil Mirabilis is a ready-to-move residential community in Horamavu, North-East Bengaluru. Set among landscaped open areas, the project has seven high-rise towers and 640 homes, with 1, 2, 2.5, 3, and 4-bedroom configurations listed. Amenities include a clubhouse, swimming and kids’ pools, gym, basketball and volleyball courts, cricket practice pitch, skating rink, indoor games, and garden atriums. The Horamavu location offers access to Outer Ring Road, Manyata Tech Park, K.R. Puram Railway Station, and Hebbal, with nearby schools and shopping. View Kolte Patil Mirabilis apartments, available floor plan details, amenities, and pricing.',
        overview: [
            'Kolte Patil Mirabilis is a ready-to-move residential project in Horamavu, North-East Bengaluru. Set across 7 acres, this Kolte Patil community has seven high-rise towers and 640 homes, with 1, 2, 2.5, 3, and 4-bedroom configurations listed. Landscaped open areas and four-storey indoor tree atriums bring greenery into the development, while the range of home sizes gives buyers options to compare when searching for Kolte Patil apartments in Bangalore.',
            'Amenities include a clubhouse and party lawn, swimming and kids’ splash pools, gym, basketball and volleyball courts, cricket practice pitch, skating rink, indoor games, squash court, and outdoor amphitheatre. Horamavu provides access to Outer Ring Road, Manyata Tech Park, Hebbal, K.R. Puram Railway Station, schools, and shopping. Explore Kolte Patil Mirabilis project details, listed apartment configurations, available floor plan information, amenities, and pricing.'
        ],
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
        description: 'Kolte Patil Lakeside 24 is a new-launch residential project in Kannuru, off Hennur–Thanisandra Main Road in North Bengaluru. Planned as a low-density community, it has one high-rise tower with 131 residences and more than 80% open space. Home options include 2, 2.5, 3, and 4 BHK layouts, while the lakeside setting, rooftop pool and sun deck, clubhouse, yoga lawn, reflexology park, pet park, and viewing deck create space for recreation and relaxation. Manyata Tech Park, Elements Mall, Hebbal, and Kempegowda International Airport are among the connected destinations. Explore Lakeside 24 apartments, floor plans, amenities, and possession details.',
        overview: [
            'Kolte Patil Lakeside 24 is a new-launch residential project in Kannuru, off Hennur–Thanisandra Main Road in North Bengaluru. Planned across 1.86 acres, this Kolte Patil development has a single high-rise tower with 131 residences and over 80% open space. Homebuyers can compare 2, 2.5, 3, and 4 BHK options, including duplex homes, in a low-density setting beside a natural lake. The stated possession timeline is October 2028.',
            'The lakeside homes are complemented by a rooftop swimming pool and sun deck, clubhouse, gym, yoga lawn, reflexology park, multi-sport court, pet park, children’s play area, and a viewing deck with a tree-lined walkway. Kannuru Main Road, Elements Mall, Manyata Tech Park, Hebbal, and Kempegowda International Airport are among the connected destinations. Explore Kolte Patil Lakeside 24 apartment floor plans, amenities, location, and possession details when comparing new Kolte Patil projects in Bangalore.'
        ],
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
