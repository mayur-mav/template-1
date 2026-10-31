const imageCdnPrefix = 'https://media.justflip.in/builder-brand-pages/';
const prestigeImage = suffix => `${imageCdnPrefix}${suffix.replace(/^\/+/, '')}`;

export const developerInfo = {
    hero: {
        subtitle: 'Prestige Group | Bengaluru',
        title: 'Prestige Builders & Group Projects in Bangalore',
        description: 'Explore Prestige Group apartments and plotted developments in Bangalore. Compare new launches and ongoing projects by location, configuration, price, and plans.',
        image: prestigeImage('prestige/banner.webp')
    }
};

export const faqData = [
    {
        question: 'Do you provide assistance with rental and resale?',
        answer: 'We have a dedicated team who can assist you in finding a suitable tenant/buyer for your Prestige property.'
    },
    {
        question: 'How do you measure carpet area?',
        answer: 'Carpet area is calculated by measuring the inner dimensions of a unit, excluding the thickness of walls. It excludes common areas like lobbies, external amenities, staircase, etc. This measurement provides the actual living space available to occupants, aiding in accurate property assessments.'
    },
    {
        question: 'What is a built-up area?',
        answer: 'The built-up area encompasses the carpet area, which represents the actual usable living space within the walls, and adds to it the areas covered by walls, balconies, and common spaces. The inclusion of these elements provides a holistic view of the entire constructed area of the property, helping potential buyers or occupants understand the overall scale of the living space.'
    },
    {
        question: 'What is carpet area as per RERA?',
        answer: "As per RERA (Real Estate Regulatory Authority), carpet area is defined as the net usable floor area within the walls of an apartment, excluding the area covered by the walls. It includes the net usable area of the kitchen and toilets, while common areas like lobbies and passages are not considered. RERA regulations aim to standardize the measurement of carpet area, providing transparency to homebuyers and ensuring a fair representation of the actual living space. Understanding RERA's definition of carpet area is crucial for both developers and buyers, as it establishes a uniform method for measuring and disclosing the usable space within residential units."
    },
    {
        question: 'What is carpet area, super built-up area and built-up area?',
        answer: 'Carpet Area: Carpet area refers to the actual usable living space within the walls of a property. It includes the net floor area of the apartment, excluding the thickness of inner walls. It represents the space where one can lay a carpet. Super Built-up Area: Super built-up area is the total constructed area, which includes the carpet area along with common areas like lobbies, staircases, and other shared spaces. It encompasses the entire area, including the carpet area, outer walls, balconies, and common spaces. It represents the total area that contributes to the overall construction of the property. Built-up Area: Built-up area includes the carpet area and adds the thickness of outer walls to it. It comprises the carpet area, the thickness of the walls, and sometimes balconies. It represents the total area covered by the constructed structure.'
    },
    {
        question: 'What is gross area and net area?',
        answer: 'Gross area provides a comprehensive overview of the total building space, and Net area narrows down to the practical, occupiable space, excluding non-functional areas. Both metrics serve distinct purposes in evaluating real estate and construction efficiency.'
    },
    {
        question: 'What is gross building area?',
        answer: "Gross Building Area (GBA) is the total area of a building, including all floors, walls, staircases, and other structural elements. It's measured from the outside of the building's walls and includes any interior common areas, such as hallways and stairways."
    },
    {
        question: 'What is the difference between carpet area and saleable area?',
        answer: 'Carpet area is the actual usable living space within the walls, excluding common areas and wall thickness. Saleable area, on the other hand, includes the carpet area along with common areas like lobbies, balconies, and thickness of outer walls. It represents the total area that can be sold to a buyer. While carpet area focuses on practical living space, saleable area provides a broader view, incorporating all spaces that contribute to the property\'s value. Understanding both metrics is crucial for buyers to assess the true living space and overall value of a property accurately.'
    },
    {
        question: 'Is the title of the property clear?',
        answer: 'For all Prestige properties, legal due diligence is carried out. We ensure that the land is freehold, marketable, and free from all encumbrances.'
    },
    {
        question: 'What happens if I cancel my unit?',
        answer: 'If you cancel your unit after booking, 2% of the sale value will be forfeited before the sale agreement is generated and 10% of the sale value will be forfeited after the agreements are generated, as a cancellation fee. The balance will be returned (subject to statutory deductions) without interest. Cancellation will attract GST as applicable.'
    },
    {
        question: 'Can I make a booking without RERA approval?',
        answer: 'No, a customer can book only after the project has been approved by RERA.'
    },
    {
        question: 'Are modifications permitted?',
        answer: 'The specifications and designs have been carefully worked out. Keeping the adherence to delivery timelines and uniform quality and specifications, customization will not be possible in the collective interest of the purchasers.'
    },
    {
        question: 'Are your projects pet-friendly?',
        answer: 'Yes. However, to ensure harmony for all residents in the community, the purchaser shall keep all the pets confined within the scheduled property and shall ensure that pets do not create any nuisance/disturbance to the other owners/ occupants of the property.'
    },
    {
        question: 'What is the purchaser’s responsibility in Home Loan process/ disbursement?',
        answer: 'It is the purchaser’s responsibility to ensure timely disbursement of installments from HFIs and no demand will be made by the Developer to the HFIs for the same. To facilitate smooth payments, customers are required to agree to a pre-determined payment schedule & issue a mandate to the HFI to disburse payments as per the agreed payment schedule. This will be done via a ‘Mandatory Disbursement Form’ at the time of signing the Sale Agreement.'
    },
    {
        question: 'Does your projects have necessary approvals from Banks/ Home loan institutions/ NBFCs?',
        answer: 'Yes, all our projects are approved by leading financial institutions/ banks.'
    },
    {
        question: 'Do you offer home loan services?',
        answer: 'Yes, we have major financial institutions who will extend home loans to the customers based on their eligibility criteria. Our team can facilitate the home loan process for customers by connecting you to the appropriate financial institution.'
    },
    {
        question: 'How are instalments to be paid - is it time bound?',
        answer: 'Yes, we at Prestige follow a time-linked payment plan.'
    },
    {
        question: 'When do I get a confirmed allotment?',
        answer: 'You will receive a formal allotment letter, upon receipt of the 10% booking amount and post-dated cheques for the balance.'
    },
    {
        question: 'Who maintains the property and what are the charges?',
        answer: 'The maintenance will be taken care of by a facility management appointed by Prestige during the first year or further till the association for the community is formed. You can be rest assured our projects will be cared for by professionals. The charges are project specific collected as the advance maintenance fee for the first year and will be collected at the time of closing of your account. From the second year onwards, maintenance charges will be levied as decided by the Association/Appointed Facility Management Agency. All future payments are to be made favouring the property management company. An additional amount, (project-specific) corresponding to the super built-up area will be collected as a sinking fund. This amount will be deposited in a separate account and the accruals will be used for any major expenditure to be incurred on the renovation/ upkeep of the society.'
    },
    {
        question: 'What if Prestige delays the construction of the project & possession?',
        answer: 'We endeavour to complete and handover the project as per committed timelines. However, for reasons beyond our control, if the project is delayed, Prestige will follow the terms laid out in the agreement and as per the relevant RERA guidelines.'
    },
    {
        question: 'Does a home loan include GST and registration amount?',
        answer: "A home loan typically includes the financing of the property's agreement value, but the coverage of additional expenses such as Goods and Services Tax (GST) and registration amount varies. In most cases, GST is not incorporated into the home loan and needs to be paid separately by the buyer. Similarly, registration charges, associated with the transfer of property ownership, may not be fully covered by the loan and often require separate payment. It's essential for borrowers to thoroughly examine the terms of their home loan agreement and communicate with the lending institution to clarify which costs are included in the loan and which ones need to be settled independently. Local regulations and practices can influence these considerations, emphasizing the importance of informed financial planning during the property purchase process."
    },
    {
        question: 'Do I need sale agreement for property registration?',
        answer: "A sale agreement is a crucial document for home registration, serving as a legal contract between the buyer and seller. Also known as a sale deed or purchase agreement, it outlines essential transaction details such as property description, sale price, payment terms, and possession date. This agreement forms the foundation for transferring ownership during the property registration process. Typically registered with the local sub-registrar office, this step is often mandatory in many jurisdictions to ensure the legality of the transaction. It's advisable to consult legal professionals or local authorities to ensure compliance with specific documentation requirements and procedural steps for property registration in your area."
    },
    {
        question: 'What is the process of transfer of agreement/assignment?',
        answer: 'Assignment can be done only after the terms of Sale Agreement pertaining to the property are adhered to and also the new party complying with the terms and conditions of the Sale agreement. Transfer fee and GST as applicable, will be required to be paid. If you have availed a loan, then you will be required to retrieve and handover all letters and documents issued by Prestige to the bank/housing finance institution along with their NOC. Please note that transfer will be processed only when all the dues and interest for delayed payments, if applicable, has been cleared to Prestige as on the intended date of transfer.'
    },
    {
        question: 'Do I need to have PAN card for property registration?',
        answer: "In India, a Permanent Account Number (PAN) is typically required for certain financial transactions, including property registration. The PAN card serves as a unique identifier in these transactions, aiding in the verification process and ensuring compliance with tax regulations. During property registration, authorities often request PAN details to validate the transaction. It's recommended to verify the current requirements and procedures for property registration by checking with relevant authorities or seeking guidance from legal professionals. Rules and regulations may evolve, so staying informed about the latest guidelines is crucial to ensure a smooth and compliant property registration process."
    },
    {
        question: 'Does a home loan include stamp duty & registration charges in India?',
        answer: "In India, home loans typically encompass the principal amount for property acquisition, including the builder's cost, but they usually do not cover expenses such as stamp duty and registration charges. Stamp duty and registration charges are separate costs imposed by state governments for legal property recognition. Homebuyers are generally responsible for paying these charges directly to the government authorities, and they are not typically integrated into the home loan amount. It is imperative for individuals to thoroughly scrutinize the terms and conditions of their specific home loan agreement, engaging in discussions with the lending institution to ascertain which costs are included in the loan and which ones necessitate separate payments. Local regulations and practices can also influence these considerations, emphasizing the importance of clear understanding and financial planning during the property purchase process."
    },
    {
        question: 'How to calculate home registration charges?',
        answer: 'In India, usually registration charges vary between 5% to 8% of the property value. This depends on the city and state where the property is being registered and sometimes also on the category/gender of the applicant(s) registering the property.'
    },
    {
        question: 'When can I register my property?',
        answer: 'Registration will be done only on completion of the development and on payment of the entire sale consideration including the additional charges. Registration will be facilitated through an advocate appointed by Prestige.'
    },
    {
        question: 'What is stamp duty?',
        answer: 'Stamp duty is a tax imposed on the sale of property /property ownership by the state government. It is payable under Section 3 of Indian Stamp Act, 1899. The duration of stamp duty at the time of registration shall be based on the value of house/ property at the time of registration.'
    },
    {
        question: 'What are the documents involved in the purchase process?',
        answer: 'At the time of booking, the customer needs to fill in the application form and provide necessary KYC documents. Further, he will be required to execute the Sale Agreement, followed by a Sale Deed upon completion of the development.'
    },
    {
        question: 'Can I add co-applicant\'s name on home registration form?',
        answer: "The inclusion of a co-applicant's name on a home registration form depends on the regulations and requirements of the jurisdiction where the property is located. Generally, it is permissible, especially in cases of joint ownership or when spouses are involved. Seeking advice from a legal professional specializing in real estate transactions can also provide valuable insights tailored to the specific regulations of the area where the property is situated."
    },
    {
        question: 'What is franking of agreement and what are the charges applicable?',
        answer: 'The process of stamping sale agreement of the property is called franking, and the charges will be 0.5% of sale value.'
    },
    {
        question: 'What is the stamp duty value of a property?',
        answer: 'The stamp duty value of a property is the government-determined valuation used for calculating stamp duty and registration charges during property transactions. This value is crucial as it directly impacts the fees and taxes payable by the buyer to formalize the property transfer. Determined by factors like location, size, and amenities, the stamp duty value is a key consideration as stamp duty and registration charges are typically a percentage of this valuation. Buyers must pay these charges to the government at the time of property registration. It is essential for individuals involved in property transactions to understand the stamp duty value, ensuring accurate financial planning and compliance with legal and tax regulations. Note that calculation methods and rates may vary between different states and regions.'
    },
    {
        question: 'Can stamp duty be refunded?',
        answer: "Typically, stamp duty is non-refundable once paid, as it constitutes a government tax essential for legally recognizing property transfers. This levy is imposed on property transactions and serves as a crucial component in completing the ownership transfer process. While refunding stamp duty is not a standard practice, there might be exceptional cases where it could be considered. For instance, if an error occurs in the calculation of stamp duty or if the property transaction falls through due to legal reasons, there may be grounds for a refund. To explore the potential for a stamp duty refund, individuals should seek advice from legal professionals and consult with relevant government authorities. It's important to note that rules and regulations regarding stamp duty and potential refunds can vary between different regions and states, necessitating a clear understanding of local provisions."
    },
    {
        question: 'What is the procedure for purchasing car parking space?',
        answer: 'We provide a default number of car parking spaces along with the apartment at the time of booking, which varies from project to project. Additional car parking request will be taken up towards project completion subject to availability.'
    },
    {
        question: 'What are the additional charges when buying a Prestige property?',
        answer: 'When buying a Prestige property, these are the additional charges to be borne by the customer- Electricity and Water Provision Access Charges, GST, Generator charges, Assessment & bifurcation charges, Registration charges, Sinking fund, Advance maintenance charges and any other statutory charges/ duties as applicable. GST will be collected along with the booking amount and installments spread till possession.'
    },
    {
        question: 'Can I take home loan after registration?',
        answer: 'Yes, you can get a home loan within six months of registration. The registration process implies that the property can be sold.'
    }
];

const overviewSearchTerms = [
    'Prestige Group projects in Bangalore',
    'Prestige apartments in Bangalore',
    'Prestige flats for sale in Bangalore',
    'Prestige new launch projects in Bangalore',
    'Prestige homes in Bengaluru'
];

function formatOverviewList(values) {
    if (values.length < 2) return values[0] || '';
    return `${values.slice(0, -1).join(', ')} and ${values[values.length - 1]}`;
}

export function createPropertyOverview(property) {
    const projectIndex = propertiesData.findIndex(({ id }) => id === property.id);
    const isPlottedDevelopment = /plot/i.test(property.bhk);
    const searchTerm = isPlottedDevelopment ? 'Prestige plotted developments in Bangalore' : overviewSearchTerms[projectIndex % overviewSearchTerms.length];
    const floorPlans = formatOverviewList((property.floorPlans || []).slice(0, 3).map(({ bhk }) => bhk));
    const amenities = formatOverviewList((property.amenities || []).slice(0, 4).map(({ name }) => name));
    const nearbyPlaces = formatOverviewList((property.connectivity || []).slice(0, 3).map(({ label, distance }) => `${label} (${distance})`));

    return [
        `${property.description} Buyers researching ${searchTerm} can explore this Prestige Group project in ${property.shortAddress}, with location, status, and configuration information to guide comparisons.`,
        `${property.name} is listed with ${property.bhk} across ${property.area}, with ${property.statusText.toLowerCase()} status and possession shown as ${property.possession}. Listed floor plan options include ${floorPlans || property.bhk}. Residents can explore amenities such as ${amenities || 'the community’s listed lifestyle facilities'}, with nearby destinations including ${nearbyPlaces || property.shortAddress}. Review Prestige project plans, amenities, and connectivity when comparing homes in Bengaluru.${property.rera ? ` RERA registration number: ${property.rera.replace(/\.$/, '')}.` : ''}`
    ];
}

export const propertiesData = [
    {
        id: 'prestige-parklane',
        name: 'Prestige Parklane',
        shortAddress: 'Devanahalli, Bengaluru',
        location: 'KIADB Hi-Tech, Defence and Aerospace Park Phase 2, Devanahalli, North Bengaluru, Karnataka 562129',
        coordinates: { lat: 13.212962, lon: 77.767110 },
        mapsQuery: 'Prestige Parklane, Devanahalli, Bengaluru',
        category: 'NEW',
        statusText: 'New Launch',
        badgeClass: 'badge-new',
        price: '₹65 Lakhs Onwards',
        bhk: '1 BHK, 2BHK, 2BHK large, 3BHK 2T, 3BHK 3T, 3BHK 3T Large',
        area: '11.76 Acres',
        possession: 'December 2030',
        rera: 'PRM/KA/RERA/1251/309/PR/150926/008941.',
        highlights: [
            "Advanced sports facilities, including badminton courts and cricket practice nets.",
            "Expansive clubhouse with wellness, fitness, and social spaces.",
            "Convenient access to Kempegowda International Airport, approximately a 25-minute drive.",
            "Unique community spaces, including pet gardens and urban vegetable gardens.",
            "Efficiently designed 1, 2, and 3-bedroom homes ranging from 565 to 1,800 sq. ft.",
            "Strategic location in KIADB Aerospace Park Phase 2, Devanahalli.",
            "A residential community featuring nine towers arranged in a circular layout."
        ],
        description: 'Prestige Parklane is a premium residential development by Prestige Group, located in Muddenahalli Village, within the Hitech Defence and Aerospace Park Phase 2, Chanarayapatna Hobli, Devanahalli, Bengaluru, Karnataka – 562135. Spread across 11.76 acres, the project comprises 1,788 residential units across 9 towers, each designed with 3 basements + Ground + 24 floors.',
        thumbnail: prestigeImage('prestige/prestige-parklane/thumbnail.webp'),
        images: [
            prestigeImage('prestige/prestige-parklane/gallery/exterior-view.webp'),
            prestigeImage('prestige/prestige-parklane/gallery/interior-view.webp'),
            prestigeImage('prestige/prestige-parklane/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '1 BHK', sqft: '567 - 571 sq. ft.', price: '65 Lakhs Onwards', image: prestigeImage('prestige/prestige-parklane/floor-plans/1bhk-floor-plan.webp')},
            { bhk: '2 BHK', sqft: '828 - 880 sq.ft.', price: '90 Lakhs Onwards', image: prestigeImage('prestige/prestige-parklane/floor-plans/2bhk-floor-plan.webp') },
            { bhk: '2BHK large', sqft: '1,087 - 1,103 sq.ft.', price: '1.15 Crore Onwards', image: prestigeImage('prestige/prestige-parklane/floor-plans/2bhk-large-floor-plan.webp') },
            { bhk: '3 BHK 2T', sqft: '1,445 - 1,469 sq.ft.', price: '1.50 Crore Onwards', image: prestigeImage('prestige/prestige-parklane/floor-plans/3bhk(2T)-floor-plan.webp') },
            { bhk: '3 BHK 3T', sqft: '1,597 - 1,662 sq.ft.', price: '1.69 Crore Onwards', image: prestigeImage('prestige/prestige-parklane/floor-plans/3bhk(3T)-floor-plan.webp') },
            { bhk: '3 BHK 3T Large', sqft: '1,757 - 1,801 sq.ft.', price: '1.89 Crore Onwards', image: prestigeImage('prestige/prestige-parklane/floor-plans/3bhk(3TL)-floor-plan.webp') }
        ],
        amenities: [
            { name: 'Gym', icon: 'fa-solid fa-dumbbell' },
            { name: 'Swimming Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Tennis', icon: 'fa-solid fa-baseball-bat-ball' },
            { name: 'Badminton', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Basketball Courts', icon: 'fa-solid fa-basketball' },
            { name: 'Yoga & Meditation', icon: 'fa-solid fa-spa' },
            { name: 'Kids’ Playground', icon: 'fa-solid fa-child-reaching' },
            { name: 'Clubhouse', icon: 'fa-solid fa-building-user' },
            { name: 'Indoor Games', icon: 'fa-solid fa-gamepad' },
            { name: 'Walking Paths & Green Areas', icon: 'fa-solid fa-tree' },
            { name: 'Café', icon: 'fa-solid fa-mug-hot' },
            { name: 'Co-working Space', icon: 'fa-solid fa-laptop-code' },
            { name: '24/7 Security with CCTV & Guards', icon: 'fa-solid fa-shield-halved' }
        ],
        connectivity: [
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, KIAL Road, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.197605, lon: 77.707486 }, distance: '19.8 Kms', icon: 'fa-solid fa-plane' },
            { label: 'Devanahalli Railway Station', destination: 'Devanahalli Railway Station, Devanahalli, Bengaluru, Karnataka 562110', coordinates: { lat: 13.243700, lon: 77.712600 }, distance: '9.3 Kms', icon: 'fa-solid fa-train' },
            { label: 'EKTA School', destination: 'EKTA School, Devanahalli, Bengaluru, Karnataka 562110', coordinates: { lat: 13.218500, lon: 77.695000 }, distance: '4.0 Kms', icon: 'fa-solid fa-school' },
            { label: 'United Christian PU College', destination: 'United Christian PU College, Devanahalli, Bengaluru, Karnataka 562110', coordinates: { lat: 13.239000, lon: 77.705000 }, distance: '5.2 Kms', icon: 'fa-solid fa-graduation-cap' },
            { label: 'Doctors For You Hospital', destination: 'Doctors For You Hospital, Devanahalli, Bengaluru, Karnataka 562110', coordinates: { lat: 13.245000, lon: 77.711000 }, distance: '9.5 Kms', icon: 'fa-solid fa-hospital' },
            { label: 'KIADB Aerospace SEZ', destination: 'KIADB Aerospace Park Phase 2, Devanahalli, Bengaluru, Karnataka 562149', coordinates: { lat: 13.206000, lon: 77.698000 }, distance: '11.4 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'The Arcade at Brigade Orchards', destination: 'The Arcade at Brigade Orchards, Devanahalli, Bengaluru, Karnataka 562110', coordinates: { lat: 13.241000, lon: 77.731000 }, distance: '6.6 Kms', icon: 'fa-solid fa-cart-shopping' }
        ]
    },
    {
        id: 'prestige-evergreen',
        name: 'Prestige Evergreen',
        shortAddress: 'Varthur, Bengaluru',
        location: 'SH 35, Whitefield Main Road, Varthur, Bengaluru, Karnataka 560087',
        coordinates: { lat: 12.939200, lon: 77.747500 },
        mapsQuery: 'Prestige Evergreen, Varthur, Bengaluru',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹1.90 Cr Onwards',
        bhk: '2 BHK, 3 BHK 2T, 3 BHK 3T, 3.5 BHK',
        area: '24 Acres',
        possession: 'June 2030',
        rera: 'PRM/KA/RERA/1251/446/PR/010126/008374',
        highlights:[
            "Prime Varthur–Whitefield location near major IT hubs",
            "30+ lifestyle amenities and grand clubhouse",
            "Lake-side living opposite Varthur Lake",
            "One of the largest clubhouses",
            "A premium offering from Prestige Group",
            "Indoor arenas, café, green boulevards & pet-friendly zones",
            "Lap pool, lagoon pool & indoor pool"
        ],
        description: 'Evergreen at Prestige Raintree Park is a premium Phase 2 residential development by Prestige Estates Projects Limited, sprawling over approximately 24 acres on State Highway 35 ,Whitefield Main Road, Varthur, Bengaluru 560087. Designed with 70% to 80% open landscaped spaces, the project comprises roughly 2,000 apartments distributed across 14 high-rise towers (2B + G + 19 floors), offering 2 BHK to 3.5 BHK configurations with unit sizes ranging from 659 to 2,513 sq. ft. Officially registered under Karnataka RERA (PRM/KA/RERA/1251/446/PR/010126/008374) with a target possession date of June 2030, the township integrates over 45 world class indoor and outdoor amenities alongside an adjacent 2.5 million sq. ft. commercial IT park (Prestige Tech Forest)',
        thumbnail: prestigeImage('prestige/prestige-evergreen/thumbnail.webp'),
        images: [
            prestigeImage('prestige/prestige-evergreen/gallery/exterior-view.webp'),
            prestigeImage('prestige/prestige-evergreen/gallery/interior-view.webp'),
            prestigeImage('prestige/prestige-evergreen/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '2 BHK', sqft: '1,174 – 1,194 Sq.Ft.', price: '₹ 1.90 Cr*', image: prestigeImage('prestige/prestige-evergreen/floor-plans/2bhk-floor-plan.webp') },
            { bhk: '3 BHK 2T', sqft: '1,486 Sq.Ft.', price: '₹ 2.30 Cr*', image: prestigeImage('prestige/prestige-evergreen/floor-plans/3bhk(2T)-floor-plan.webp')},
            { bhk: '3 BHK 3T', sqft: '1,825 Sq.Ft.', price: '₹ 2.60 Cr*', image: prestigeImage('prestige/prestige-evergreen/floor-plans/3bhk(3T)-floor-plan.webp') },
            { bhk: '3.5 BHK', sqft: '2,037 Sq.Ft.', price: '₹ 3.30 Cr*', image: prestigeImage('prestige/prestige-evergreen/floor-plans/3.5bhk-floor-plan.webp') }
        ],
        amenities: [
            { name: 'Indoor family pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'infinity lap pool', icon: 'fa-solid fa-water-ladder' },
            { name: 'relaxation pool', icon: 'fa-solid fa-water' },
            { name: 'multi-level gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'yoga and aerobics room', icon: 'fa-solid fa-spa' },
            { name: 'badminton courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'tennis and pickleball courts', icon: 'fa-solid fa-baseball-bat-ball' },
            { name: 'squash court', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'basketball court', icon: 'fa-solid fa-basketball' },
            { name: 'cricket practice pitch', icon: 'fa-solid fa-baseball' },
            { name: 'jogging and cycling tracks', icon: 'fa-solid fa-person-biking' },
            { name: 'Kids\' pool', icon: 'fa-solid fa-child-reaching' },
            { name: 'creche/daycare center', icon: 'fa-solid fa-baby' },
            { name: '3-floor grand clubhouse (~1,000,000+ sq. ft.)', icon: 'fa-solid fa-building-user' },
            { name: 'mini theatre', icon: 'fa-solid fa-film' },
            { name: 'billiards & VR bowling room', icon: 'fa-solid fa-bowling-ball' },
            { name: 'reading room', icon: 'fa-solid fa-book-open' },
            { name: 'multi-purpose party halls', icon: 'fa-solid fa-champagne-glasses' },
            { name: 'indoor games room', icon: 'fa-solid fa-gamepad' },
            { name: 'dedicated co-working space', icon: 'fa-solid fa-laptop' },
            { name: 'Central lawn', icon: 'fa-solid fa-tree' },
            { name: 'Raintree Grove Trail', icon: 'fa-solid fa-route' },
            { name: 'sculpture garden', icon: 'fa-solid fa-monument' },
            { name: 'falling water feature & water deck', icon: 'fa-solid fa-droplet' },
            { name: 'pet park with agility equipment', icon: 'fa-solid fa-dog' },
            { name: 'drop-off plazas', icon: 'fa-solid fa-car' },
            { name: 'landscaped gardens', icon: 'fa-solid fa-leaf' },
            { name: 'In-house convenience store', icon: 'fa-solid fa-store' },
            { name: 'cafe & bakery', icon: 'fa-solid fa-mug-hot' },
            { name: 'salon', icon: 'fa-solid fa-scissors' },
            { name: 'pharmacy', icon: 'fa-solid fa-capsules' },
            { name: 'clinic', icon: 'fa-solid fa-user-doctor' }
        ],
        connectivity: [
            { label: 'Prestige Tech Forest', destination: 'Prestige Tech Forest, SH 35, Varthur, Bengaluru, Karnataka 560087', coordinates: { lat: 12.938000, lon: 77.749000 }, distance: '350 Meters', icon: 'fa-solid fa-laptop-code' },
            { label: 'The Deens Academy', destination: 'The Deens Academy, ECC Road, Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.969800, lon: 77.749900 }, distance: '5.9 Kms', icon: 'fa-solid fa-school' },
            { label: 'Manipal Hospital Varthur', destination: 'Manipal Hospital, Whitefield - Varthur Road, Bengaluru, Karnataka 560087', coordinates: { lat: 12.959200, lon: 77.747100 }, distance: '3.4 Kms', icon: 'fa-solid fa-hospital' },
            { label: 'Nexus Whitefield Mall', destination: 'Nexus Whitefield Mall, Whitefield Main Road, Bengaluru, Karnataka 560066', coordinates: { lat: 12.958500, lon: 77.746000 }, distance: '3.8 Kms', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Whitefield Railway Station', destination: 'Whitefield Railway Station, Kadugodi, Bengaluru, Karnataka 560067', coordinates: { lat: 12.996100, lon: 77.761000 }, distance: '8.7 Kms', icon: 'fa-solid fa-train' },
            { label: 'Hopefarm Metro Station', destination: 'Hopefarm Channasandra Metro Station (Purple Line), Whitefield, Bengaluru, Karnataka 560067', coordinates: { lat: 12.984200, lon: 77.756500 }, distance: '6.2 Kms', icon: 'fa-solid fa-train-subway' },
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, KIAL Road, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.197605, lon: 77.707486 }, distance: '41.6 Kms', icon: 'fa-solid fa-plane' }
        ]
    },
    {
        id: 'prestige-glenbrook',
        name: 'Prestige Glenbrook',
        shortAddress: 'Whitefield, Bengaluru',
        location: 'Nallurhalli, Borewell Road, Whitefield, Bengaluru, Karnataka 560066',
        coordinates: { lat: 12.973400, lon: 77.734800 },
        mapsQuery: 'Prestige Glenbrook, Whitefield, Bengaluru',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹3.82 Cr Onwards',
        bhk: '4 BHK',
        area: '4.5 Acres',
        possession: 'June 2027',
        rera: 'PRM/KA/RERA/1251/446/PR/081123/006382',
        highlights: [
            "Low-density 4-acre development featuring only 285 premium residences",
            "Safe pedestrian-friendly central zones with perimeter-only traffic",
            "Direct connectivity to Whitefield Metro and major IT corridors",
            "Apartments designed for optimal natural light and cross-ventilation",
            "Strategically located near ITPL, EPIP, and Marathahalli IT hubs",
            "Comprehensive clubhouse with badminton, gymnasium, and yoga facilities",
            "10.38% price appreciation in the last 1 year"
        ],
        description: 'Prestige Glenbrook is a residential project by Prestige Group, located in Nallurahalli, Borewell Road, Bangalore – 560066. The project is spread across 4.5 acres and consists of 285 residential units, planned across 2 towers with 16 floors each. It offers spacious 4 BHK apartments, with prices starting from ₹3.82 crore onwards. The project is designed to provide a comfortable lifestyle with 10+ amenities for residents. Its location in Nallurahalli offers good connectivity to Whitefield and other important areas of East Bangalore, making it convenient for both families and working professionals. Residents can also benefit from easy access to nearby IT hubs, schools, hospitals, shopping areas, and major roads. Prestige Glenbrook is registered under RERA with the registration number PRM/KA/RERA/1251/446/PR/081123/006382. Overall, the project combines spacious homes, a well-connected location, modern amenities, and the experience of Prestige Group.',
        thumbnail: prestigeImage('prestige/prestige-glenbrook/thumbnail.webp'),
        images: [
            prestigeImage('prestige/prestige-glenbrook/gallery/exterior-view.webp'),
            prestigeImage('prestige/prestige-glenbrook/gallery/interior-view.webp'),
            prestigeImage('prestige/prestige-glenbrook/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '4 BHK', sqft: '2,928 sq. ft.', price: '₹ 3.82 Cr*', image: prestigeImage('prestige/prestige-glenbrook/floor-plans/4bhk-floor-plan.webp') }
        ],
        amenities: [
            { name: 'Basketball Court', icon: 'fa-solid fa-basketball' },
            { name: 'Badminton Court', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Tennis Court', icon: 'fa-solid fa-baseball-bat-ball' },
            { name: 'Swimming Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Aerobics Room', icon: 'fa-solid fa-spa' },
            { name: 'Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Kids Pool', icon: 'fa-solid fa-child-reaching' },
            { name: 'Billiards', icon: 'fa-solid fa-bowling-ball' },
            { name: 'Table Tennis', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Mini Theatre', icon: 'fa-solid fa-film' },
            { name: 'Party Hall', icon: 'fa-solid fa-champagne-glasses' },
            { name: 'Ladies and Gents Spa', icon: 'fa-solid fa-spa' },
            { name: 'Outdoor Landscaped Area', icon: 'fa-solid fa-tree' },
            { name: 'Visitor Parking', icon: 'fa-solid fa-square-parking' }
        ],
        connectivity: [
            { label: 'ITPB (International Tech Park)', destination: 'International Tech Park Bangalore (ITPB), Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.986000, lon: 77.738000 }, distance: '2.9 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'Nallurhalli Metro Station', destination: 'Nallurhalli Metro Station (Purple Line), Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.973400, lon: 77.728000 }, distance: '2.3 Kms', icon: 'fa-solid fa-train-subway' },
            { label: 'Whitefield Railway Station', destination: 'Whitefield Railway Station, Kadugodi, Bengaluru, Karnataka 560067', coordinates: { lat: 12.996100, lon: 77.761000 }, distance: '5.9 Kms', icon: 'fa-solid fa-train' },
            { label: 'The Deens Academy', destination: 'The Deens Academy, ECC Road, Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.969000, lon: 77.742000 }, distance: '2.0 Kms', icon: 'fa-solid fa-school' },
            { label: 'Manipal Hospital Whitefield', destination: 'Manipal Hospital Whitefield, 143, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.959200, lon: 77.747100 }, distance: '3.2 Kms', icon: 'fa-solid fa-hospital' },
            { label: 'Nexus Shantiniketan Mall', destination: 'Nexus Shantiniketan Mall, Whitefield Main Road, Bengaluru, Karnataka 560066', coordinates: { lat: 12.989200, lon: 77.728100 }, distance: '4.3 Kms', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, KIAL Road, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.197605, lon: 77.707486 }, distance: '38.7 Kms', icon: 'fa-solid fa-plane' }
        ]
    },
    {
        id: 'prestige-garden-breeze',
        name: 'Prestige Garden Breeze',
        shortAddress: 'Sarjapur, Bengaluru',
        location: 'Ittangur Road, off Sarjapur Main Road (SH 35), Yamare Village, Sarjapur, Bengaluru, Karnataka 562125',
        coordinates: { lat: 12.878900, lon: 77.762300 },
        mapsQuery: 'Prestige Garden Breeze, Sarjapur Road, Bengaluru',
        category: 'NEW',
        statusText: 'New Launch',
        badgeClass: 'badge-new',
        price: '₹1.2 Cr Onwards',
        bhk: '2 BHK 2T, 3 BHK 2T, 3 BHK 3T, 4 BHK Penthouse ',
        area: '10 Acres',
        possession: 'December 2030',
        rera: 'PRM/KA/RERA/1251/308/PR/080926/008919',
        highlights: [
            "3.5 km from state highway 35 & 12.6 km from karmelaram station",
            "3.2 km from forum mall & 5.5 km from oakridge international school",
            "5 km from azim premji university & 10.3 km from wipro kodathi park",
            "Clubhouse with gym, swimming pool, tennis court, and cricket pitch",
            "Gated community with solar heating, STP, and rainwater harvesting",
            "Multi-sport setup: Basketball, tennis, padel & pickleball courts"
        ],
        description: 'Garden Breeze is the final residential phase (Phase 7) of the landmark 10-acre integrated township, The Prestige City, located on Sarjapur Road. Designed with 80% landscaped open spaces across 4 high-rise towers (featuring 655 ultra-luxury homes), the enclave offers a grand G+2 clubhouse, forest trails, and seamless connectivity to major tech corridors.',
        thumbnail: prestigeImage('prestige/prestige-garden-breeze/thumbnail.webp'),
        images: [
            prestigeImage('prestige/prestige-garden-breeze/gallery/exterior-view.webp'),
            prestigeImage('prestige/prestige-garden-breeze/gallery/interior-view.webp'),
            prestigeImage('prestige/prestige-garden-breeze/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '2 BHK 2T', sqft: '1,080 sq. ft.', price: '₹ 1.2 Cr*', image: prestigeImage('prestige/prestige-garden-breeze/floor-plans/2bhk(2T)-floor-plan.webp') },
            { bhk: '3 BHK 2T', sqft: '1,470 sq. ft.', price: '₹ 1.62 Cr*', image: prestigeImage('prestige/prestige-garden-breeze/floor-plans/3bhk(2t)-floor-plan.webp') },
            { bhk: '3 BHK 3T', sqft: '1,720 sq. ft.', price: '₹ 1.89 Cr*', image: prestigeImage('prestige/prestige-garden-breeze/floor-plans/3bhk(3t)-floor-plan.webp') },
            { bhk: '4 BHK Penthouse', sqft: '2,779 sq. ft.', price: '₹ 3.56 Cr*', image: prestigeImage('prestige/prestige-garden-breeze/floor-plans/4bhk-penthouse-floor-plan.webp') },
        ],
        amenities: [
            { name: 'Grand G+2 Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: 'Swimming Pool & Kids Splash Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Modern Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Yoga & Meditation Seating Pavilion', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Forest Trail & Zen Gardens', icon: 'fa-solid fa-tree' },
            { name: 'Outdoor Sports & Event Lawn', icon: 'fa-solid fa-champagne-glasses' },
            { name: 'Children\'s Dedicated Play Area', icon: 'fa-solid fa-child-reaching' },
            { name: '24/7 Manned Security & Surveillance', icon: 'fa-solid fa-shield-halved' }
        ],
        connectivity: [
            { label: 'Upcoming Forum Retail Mall', destination: 'The Prestige City Forum Mall, Sarjapur Road, Bengaluru, Karnataka 562125', coordinates: { lat: 12.879500, lon: 77.761800 }, distance: '3.2 Kms', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Sarjapur Main Road (SH 35)', destination: 'Sarjapur Main Road (SH 35), Yamare, Bengaluru, Karnataka 562125', coordinates: { lat: 12.885000, lon: 77.765000 }, distance: '3.6 Kms', icon: 'fa-solid fa-road' },
            { label: 'Wipro SEZ Sarjapur', destination: 'Wipro Technologies SEZ, Sarjapur Road, Doddakannelli, Bengaluru, Karnataka 560035', coordinates: { lat: 12.911000, lon: 77.692000 }, distance: '15.0 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'Carmelaram Railway Station', destination: 'Carmelaram Railway Station, Carmelaram, Bengaluru, Karnataka 560035', coordinates: { lat: 12.912000, lon: 77.702000 }, distance: '12.6 Kms', icon: 'fa-solid fa-train' },
            { label: 'RGA Tech Park', destination: 'RGA Tech Park, Sarjapur Road, Carmelaram, Bengaluru, Karnataka 560035', coordinates: { lat: 12.905000, lon: 77.708000 }, distance: '12.5 Kms', icon: 'fa-solid fa-building' },
            { label: 'Outer Ring Road (ORR) Bellandur', destination: 'Outer Ring Road, Bellandur Junction, Bengaluru, Karnataka 560103', coordinates: { lat: 12.926000, lon: 77.676000 }, distance: '18.1 Kms', icon: 'fa-solid fa-road' },
            { label: 'Electronic City', destination: 'Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100', coordinates: { lat: 12.845200, lon: 77.660200 }, distance: '29.8 Kms', icon: 'fa-solid fa-laptop-code' }
        ]
    },
    {
        id: 'prestige-city-eaton-park',
        name: 'Prestige City Eaton Park',
        shortAddress: 'Sarjapur, Bengaluru',
        location: 'Off Sarjapur - Marathahalli Main Road (SH 35), Yamare Village, Sarjapur, Bengaluru, Karnataka 562125',
        coordinates: { lat: 12.877000, lon: 77.766100 },
        mapsQuery: 'Prestige Eaton Park, Sarjapur Road, Bengaluru',
        category: 'NEW',
        statusText: 'New Launch',
        badgeClass: 'badge-new',
        price: '₹2.21 Cr Onwards',
        bhk: '3 BHK 3T, 4 BHK 4T',
        area: '7 Acres',
        possession: 'June 2030',
        rera: 'PRM/KA/RERA/1251/308/PR/180326/008537',
        highlights: [ 
            "Spanning 7 acres with 90% open spaces for nature-centric living", 
            "Premium lake-facing residences framing views of Sarjapur lake", 
            "Exclusive residences with no shared walls between homes for total privacy",        "Meticulously planned Vastu-compliant homes with cross-ventilation",
            "Signature elevated boardwalk offering panoramic views of the greens",
            "Club Eaton: Neoclassical architecture with symmetry & grandeur", 
            "Professional-grade padel court & tennis court within the activity zone"
        ],
        description: 'Eaton Park is a high-rise residential phase within the 180-acre integrated township, The Prestige City, on Sarjapur Road. Spread across 7 acres with ~90% open space, the enclave comprises 4 high-rise towers (G+28 to G+37 floors) offering 366 large-format 3 & 4 BHK residences, supported by the dedicated 17,770 sq. ft. Club Eaton lakeside clubhouse and seamless access to on-site retail hubs.',
        thumbnail: prestigeImage('prestige/prestige-city-at-eaton-park/thumbnail.webp'),
        images: [
            prestigeImage('prestige/prestige-city-at-eaton-park/gallery/exterior-view.webp'),
            prestigeImage('prestige/prestige-city-at-eaton-park/gallery/interior-view.webp'),
            prestigeImage('prestige/prestige-city-at-eaton-park/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '3 BHK 3T', sqft: '1,903 sq. ft.', price: '₹ 2.21 Cr*', image: prestigeImage('prestige/prestige-city-at-eaton-park/floor-plans/3bhk-floor-plan.webp') },
            { bhk: '4 BHK 4T', sqft: '2,492 sq. ft.', price: '₹ 2.98 Cr*', image: prestigeImage('prestige/prestige-city-at-eaton-park/floor-plans/4bhk-floor-plan.webp') },
        ],
        amenities: [
            { name: '17,770 sq. ft. Club Eaton Lakeside Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: 'Rooftop Infinity Swimming Pool & Kids Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Modern Gymnasium & Fitness Studio', icon: 'fa-solid fa-dumbbell' },
            { name: 'Yoga & Meditation Pavilion', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Multipurpose Sports Courts & Tennis Court', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Jogging & Cycling Tracks', icon: 'fa-solid fa-person-running' },
            { name: 'Pet Park & Dedicated Dog Run Area', icon: 'fa-solid fa-paw' },
            { name: 'Children\'s Play Area', icon: 'fa-solid fa-child-reaching' },
            { name: 'Spa & Wellness Rooms', icon: 'fa-solid fa-hot-tub-person' },
            { name: 'Mini Theatre & Games Room', icon: 'fa-solid fa-film' }
        ],
        connectivity: [
            { label: 'Wipro SEZ Sarjapur', destination: 'Wipro Technologies SEZ, Sarjapur Road, Doddakannelli, Bengaluru, Karnataka 560035', coordinates: { lat: 12.911000, lon: 77.692000 }, distance: '10.0 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'Carmelaram Railway Station', destination: 'Carmelaram Railway Station, Carmelaram, Bengaluru, Karnataka 560035', coordinates: { lat: 12.912000, lon: 77.702000 }, distance: '9.9 Kms', icon: 'fa-solid fa-train' },
            { label: 'Harvest International School', destination: 'Harvest International School, Sarjapur - Mugalur Road, Bengaluru, Karnataka 562125', coordinates: { lat: 12.872000, lon: 77.755000 }, distance: '8.9 Kms', icon: 'fa-solid fa-school' },
            { label: 'RGA Tech Park', destination: 'RGA Tech Park, Sarjapur Road, Carmelaram, Bengaluru, Karnataka 560035', coordinates: { lat: 12.905000, lon: 77.708000 }, distance: '9.2 Kms', icon: 'fa-solid fa-building' },
            { label: 'Embassy TechVillage (ORR)', destination: 'Embassy TechVillage, Outer Ring Road, Devarabisanahalli, Bengaluru, Karnataka 560103', coordinates: { lat: 12.929000, lon: 77.692000 }, distance: '12.6 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'Electronic City Phase 1', destination: 'Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100', coordinates: { lat: 12.845200, lon: 77.660200 }, distance: '26.5 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, KIAL Road, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.197605, lon: 77.707486 }, distance: '50.5 Kms', icon: 'fa-solid fa-plane' }
        ]
    },
    {
        id: 'prestige-marigold',
        name: 'Prestige Marigold Phase 2',
        shortAddress: 'Bettenahalli, Bengaluru',
        location: 'Chapparkallu Road, Bettenahalli, off Bellary Road (NH 44), North Bengaluru, Karnataka 562110',
        coordinates: { lat: 13.238400, lon: 77.601500 },
        mapsQuery: 'Prestige Marigold, Bettenahalli, Bengaluru',
        category: 'NEW',
        statusText: 'New Launch',
        badgeClass: 'badge-new',
        price: '₹1.02 Cr Onwards',
        bhk: '30x40 Plot, 30x50 Plot, 40x60 Plot, 50x80 Plot',
        area: '55.14 Acres',
        possession: 'November 2027',
        rera: 'PRM/KA/RERA/1250/303/PR/171225/008346',
        highlights: [
            "Grand classical entrance and imposing clubhouse design",
            "Landscaped avenues, urban gardens, and low maintenance plants",
            "Underground fibre optic conduits for seamless connectivity",
            "Wide spine roads (18m and 15m) ensure smooth circulation",
            "24/7 security with RFID boom barriers and CCTV surveillance",
            "Prestige Group, a market leader with high CRISIL DA1 rating",
            "Located off NH7 Chapparakul Road, near Devanahalli and Airport"
        ],
        description: 'Prestige Marigold Phase 2 is an infrastructure-ready plotted development by Prestige Group located off Bellary Road (NH 44) on Chapparkallu Road, Bettenahalli. Encompassing ~49 acres with 716 residential plots, the master-planned layout features wide asphalted internal roads, underground power & fiber-optic networks, landscaped gardens, and a G+2 multi-level clubhouse with 35+ lifestyle amenities.',
        thumbnail: prestigeImage('prestige/prestige-marigold-phase-two/thumbnail.webp'),
        images: [
            prestigeImage('prestige/prestige-marigold-phase-two/gallery/exterior-view.webp'),
            prestigeImage('prestige/prestige-marigold-phase-two/gallery/interior-view.webp'),
            prestigeImage('prestige/prestige-marigold-phase-two/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '30 x 40 PLOT', sqft: '1,200 sq. ft.', price: '₹1.02 Cr Onwards', image: prestigeImage('prestige/prestige-marigold-phase-two/floor-plans/30x40-plot-layout.webp') },
            { bhk: '30 x 50 PLOT', sqft: '1,500 sq. ft.', price: '₹1.27 Cr Onwards', image: prestigeImage('prestige/prestige-marigold-phase-two/floor-plans/30x50-plot-layout.webp') },
            { bhk: '40 x 60 PLOT', sqft: '2,400 sq. ft.', price: '₹2.05 Cr Onwards', image: prestigeImage('prestige/prestige-marigold-phase-two/floor-plans/40x60-plot-layout.webp') },
            { bhk: '50 x 80 PLOT', sqft: '4,000 sq. ft.', price: '₹3.20 Cr Onwards', image: prestigeImage('prestige/prestige-marigold-phase-two/floor-plans/50x80-plot-layout.webp') }
        ],
        amenities: [
            { name: 'G+2 Multi-Level Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: 'Swimming Pool & Kids Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Tennis & Badminton Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Cricket Practice Pitch', icon: 'fa-solid fa-baseball-bat-ball' },
            { name: 'Skating Rink & Jogging Track', icon: 'fa-solid fa-person-skating' },
            { name: 'Yoga & Meditation Pavilion', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Underground Electrical & Fiber Optic Lines', icon: 'fa-solid fa-plug' },
            { name: 'Underground STP & Dual Water Network', icon: 'fa-solid fa-faucet-drip' },
            { name: 'Children\'s Play Area', icon: 'fa-solid fa-child-reaching' }
        ],
        connectivity: [
            { label: 'Bellary Road (NH 44)', destination: 'Bellary Road, Chikkajala, Bengaluru, Karnataka 562157', coordinates: { lat: 13.205000, lon: 77.625000 }, distance: '12.1 Kms', icon: 'fa-solid fa-road' },
            { label: 'Yelahanka Junction Railway Station', destination: 'Yelahanka Junction Railway Station, Railway Station Road, Yelahanka, Bengaluru, Karnataka 560064', coordinates: { lat: 13.105007, lon: 77.591894 }, distance: '21.0 Kms', icon: 'fa-solid fa-train' },
            { label: 'RMZ Galleria Mall', destination: 'RMZ Galleria Mall, B.B. Road, Yelahanka, Bengaluru, Karnataka 560064', coordinates: { lat: 13.102300, lon: 77.589400 }, distance: '16.7 Kms', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Devanahalli Business Park', destination: 'Devanahalli Business Park, Devanahalli, Bengaluru, Karnataka 562110', coordinates: { lat: 13.245000, lon: 77.712000 }, distance: '19.1 Kms', icon: 'fa-solid fa-briefcase' },
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, KIAL Road, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.197605, lon: 77.707486 }, distance: '16.5 Kms', icon: 'fa-solid fa-plane' },
            { label: 'KIADB Aerospace Park', destination: 'KIADB Aerospace Park, Devanahalli, Bengaluru, Karnataka 562149', coordinates: { lat: 13.206000, lon: 77.698000 }, distance: '19.5 Kms', icon: 'fa-solid fa-industry' },
            { label: 'Manyata Tech Park', destination: 'Manyata Embassy Business Park, Outer Ring Road, Nagavara, Bengaluru, Karnataka 560045', coordinates: { lat: 13.045635, lon: 77.621195 }, distance: '29.9 Kms', icon: 'fa-solid fa-laptop-code' }
        ]
    },
    {
        id: 'prestige-city-fernvale',
        name: 'Prestige City Fernvale',
        shortAddress: 'Sarjapur, Bengaluru',
        location: 'Kalahalli, Off Sarjapur Main Road, Yamare Village, Sarjapur, Bengaluru, Karnataka 562125',
        coordinates: { lat: 12.880100, lon: 77.763500 },
        mapsQuery: 'Prestige City Fernvale, Sarjapur Road, Bengaluru',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹1.29 Cr Onwards',
        bhk: '2 BHK 2T, 3 BHK 2T, 3 BHK 3T, 3 BHK 3T + Home Office',
        area: '4.38 Acres',
        possession: 'March 2030',
        rera: 'PRM/KA/RERA/1251/308/PR/110326/008519',
        highlights: [
            "3 bed ultima units feature a dedicated home office (3B3T+HO)",
            "Security cabins at all entrances & exits with CCTV coverage",
            "Multiple clubhouses integrated within the 175+ acre township",
            "Landscaped social garden, fern corridor, pet park & play lawn",
            "Includes padel court, pickleball court, mini golf & cricket pitch",
            "Proximity to major IT hubs RGA Tech Park & Embassy Tech Village"
        ],
        description: 'Fernvale is Phase 6 of the landmark 180-acre integrated township, The Prestige City, located off Sarjapur Main Road. Spread across 3 acres with 2 high-rise towers comprising 387 premium residences, the project provides full access to the township ecosystem, resort-style amenities, and well-designed 2 and 3 BHK apartment layouts.',
        thumbnail: prestigeImage('prestige/prestige-city-fernvale/thumbnail.webp'),
        images: [
            prestigeImage('prestige/prestige-city-fernvale/gallery/exterior-view.webp'),
            prestigeImage('prestige/prestige-city-fernvale/gallery/interior-view.webp'),
            prestigeImage('prestige/prestige-city-fernvale/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '2 BHK 2T', sqft: '1,113 sq. ft.', price: '₹ 1.34 Cr*', image: prestigeImage('prestige/prestige-city-fernvale/floor-plans/2bhk-floor-plan.webp') },
            { bhk: '3 BHK 2T', sqft: '1,513 sq. ft.', price: '₹ 1.80 Cr*', image: prestigeImage('prestige/prestige-city-fernvale/floor-plans/3bhk(2T)-floor-plan.webp') },
            { bhk: '3 BHK 3T', sqft: '1,808 sq. ft.', price: '₹ 2.17 Cr*', image: prestigeImage('prestige/prestige-city-fernvale/floor-plans/3bhk(3T)-floor-plan.webp') },
            { bhk: '3 BHK 3T + Home Office', sqft: '1,996 sq. ft.', price: '₹ 2.39 Cr*', image: prestigeImage('prestige/prestige-city-fernvale/floor-plans/3bhk(3T-HO)-floor-plan.webp') },
        ],
        amenities: [
            { name: 'Exclusive Clubhouse Access', icon: 'fa-solid fa-hotel' },
            { name: 'Swimming Pool & Kids Splash Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Modern Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Yoga & Meditation Zone', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Multi-Purpose Sports Court', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Jogging & Walking Tracks', icon: 'fa-solid fa-person-running' },
            { name: 'Landscaped Central Gardens', icon: 'fa-solid fa-tree' },
            { name: 'Children\'s Play Area', icon: 'fa-solid fa-child-reaching' }
        ],
        connectivity: [
            { label: 'Sarjapur Main Road (SH 35)', destination: 'Sarjapur Main Road (SH 35), Yamare, Bengaluru, Karnataka 562125', coordinates: { lat: 12.885000, lon: 77.765000 }, distance: '1.5 Kms', icon: 'fa-solid fa-road' },
            { label: 'Wipro SEZ Sarjapur', destination: 'Wipro Technologies SEZ, Sarjapur Road, Doddakannelli, Bengaluru, Karnataka 560035', coordinates: { lat: 12.911000, lon: 77.692000 }, distance: '12.1 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'Carmelaram Railway Station', destination: 'Carmelaram Railway Station, Carmelaram, Bengaluru, Karnataka 560035', coordinates: { lat: 12.912000, lon: 77.702000 }, distance: '9.6 Kms', icon: 'fa-solid fa-train' },
            { label: 'RGA Tech Park', destination: 'RGA Tech Park, Sarjapur Road, Carmelaram, Bengaluru, Karnataka 560035', coordinates: { lat: 12.905000, lon: 77.708000 }, distance: '9.5 Kms', icon: 'fa-solid fa-building' },
            { label: 'Outer Ring Road (ORR)', destination: 'Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103', coordinates: { lat: 12.926000, lon: 77.676000 }, distance: '28.5 Kms', icon: 'fa-solid fa-road' },
            { label: 'Hopefarm Metro Station', destination: 'Hopefarm Channasandra Metro Station (Purple Line), Whitefield, Bengaluru, Karnataka 560067', coordinates: { lat: 12.984200, lon: 77.756500 }, distance: '15.6 Kms', icon: 'fa-solid fa-train-subway' }
        ]
    },
    {
        id: 'prestige-crystal-lawns',
        name: 'Prestige Crystal Lawns',
        shortAddress: 'Devanahalli, Bengaluru',
        location: 'IVC Road, Near Singarahalli, Kundana Hobli, Devanahalli, North Bengaluru, Karnataka 562110',
        coordinates: { lat: 13.264200, lon: 77.643800 },
        mapsQuery: 'Prestige Crystal Lawns, Devanahalli, Bengaluru',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹1.38 Cr Onwards',
        bhk: '30x50 Plot, 40x60 Plot, 50x80 Plot',
        area: '24.3 Acres',
        possession: 'March 2027',
        rera: 'PRM/KA/RERA/1250/303/PR/300925/008132',
        highlights: [
            "24 acres with 235 premium plots; low-density living",
            "Massive central park with vast lawns and flowering gardens",
            "Miyawaki planting for rapid forest growth",
            "Underground fiber optic conduits for data/voice and power lines",
            "Optional membership clubhouse with diverse recreational amenities",
            "CRISIL Real Estate DA1+ developer gradings achieved",
            "Short drive from Kempegowda International Airport"
        ],
        description: 'Prestige Crystal Lawns is a premier planned plotted development by Prestige Group located on IVC Road, Devanahalli. Spanning 24.3 acres with 235 premium residential plots, the project centers around a massive landscaped central park and features a 30m wide grand entrance road, 12m wide internal asphalted roads, underground utilities, and a modern clubhouse with rich recreational facilities.',
        thumbnail: prestigeImage('prestige/prestige-crystal-lawns/thumbnail.webp'),
        images: [
            prestigeImage('prestige/prestige-crystal-lawns/gallery/exterior-view.webp'),
            prestigeImage('prestige/prestige-crystal-lawns/gallery/interior-view.webp'),
            prestigeImage('prestige/prestige-crystal-lawns/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '30x50 Plot', sqft: '1,500 sq. ft.', price: '₹ 1.38 Cr*', image: prestigeImage('prestige/prestige-crystal-lawns/floor-plans/30x50-plot-layout.webp') },
            { bhk: '40x60 Plot', sqft: '2,400 sq. ft.', price: 'On Request', image: prestigeImage('prestige/prestige-crystal-lawns/floor-plans/40x60-plot-layout.webp') },
            { bhk: '50x80 Plot', sqft: '4,000 sq. ft.', price: 'On Request', image: prestigeImage('prestige/prestige-crystal-lawns/floor-plans/50x80-plot-layout.webp') },
        ],
        amenities: [
            { name: 'Modern Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: 'Central Park & Amphitheatre', icon: 'fa-solid fa-tree' },
            { name: 'Swimming Pool & Kids Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Badminton & Pickleball Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Snooker & Table Tennis Room', icon: 'fa-solid fa-gamepad' },
            { name: 'Yoga Lawn & Meditation Deck', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Underground Power & Fiber Optic Lines', icon: 'fa-solid fa-plug' },
            { name: 'Underground STP & Dual Water Network', icon: 'fa-solid fa-faucet-drip' },
            { name: 'Children\'s Play Area & Gazebos', icon: 'fa-solid fa-child-reaching' }
        ],
        connectivity: [
            { label: 'Orchid Nirvana Co.', destination: 'Bellary Road, Kundana Hobli, Devanahalli, Bengaluru, Karnataka 562110', coordinates: { lat: 13.245000, lon: 77.665000 }, distance: '1.9 Kms', icon: 'fa-solid fa-road' },
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, KIAL Road, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.197605, lon: 77.707486 }, distance: '14.5 Kms', icon: 'fa-solid fa-plane' },
            { label: 'Yelahanka Junction Railway Station', destination: 'Yelahanka Junction Railway Station, Railway Station Road, Yelahanka, Bengaluru, Karnataka 560064', coordinates: { lat: 13.105007, lon: 77.591894 }, distance: '19.6 Kms', icon: 'fa-solid fa-train' },
            { label: 'KIADB Aerospace Park', destination: 'KIADB Aerospace Park, Devanahalli, Bengaluru, Karnataka 562149', coordinates: { lat: 13.206000, lon: 77.698000 }, distance: '21.1 Kms', icon: 'fa-solid fa-industry' },
            { label: 'Manyata Tech Park', destination: 'Manyata Embassy Business Park, Outer Ring Road, Nagavara, Bengaluru, Karnataka 560045', coordinates: { lat: 13.045635, lon: 77.621195 }, distance: '29.1 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'K.R. Puram Railway Station', destination: 'Krishnarajapuram Railway Station, Old Madras Road, Krishnarajapura, Bengaluru, Karnataka 560016', coordinates: { lat: 13.000546, lon: 77.675456 }, distance: '39.7 Kms', icon: 'fa-solid fa-train' }
        ]
    },
    {
        id: 'prestige-greenbrook',
        name: 'Prestige Greenbrook',
        shortAddress: 'Devanahalli, Bengaluru',
        location: 'IVC Road, Off Bellary Road (NH 44), Devanahalli, North Bengaluru, Karnataka 562110',
        coordinates: { lat: 13.268000, lon: 77.649500 },
        mapsQuery: 'Prestige Greenbrook, Devanahalli, Bengaluru',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹1.35 Cr Onwards',
        bhk: '30x50 Plot, 30x60 Plot, 40x50 Plot, 40x60 Plot',
        area: '33 Acres',
        possession: 'March 2027',
        rera: 'PRM/KA/RERA/1250/303/PR/260925/008123',
        highlights: [
            "18m entrance & 12m internal roads with landscaped avenues",
            "Periphery roads ensure safe spaces for kids & senior citizens",
            "Nature-rich living with gardens, lawns & themed green spaces",
            "Rainwater harvesting, treated water reuse & waste converter",
            "Yoga, sports & leisure zones with skating, cricket & reflexology",
            "24/7 security with RFID, CCTV & secured entrance cabin"
        ],
        description: 'Prestige Greenbrook is a premium residential plotted development by Prestige Group located along IVC Road in Devanahalli, North Bengaluru. Spanning 33.29 acres with just 325 villa plots (~10 units per acre), the low-density master-planned community features asphalted internal roads, underground electrical & fiber optic cabling, dedicated rainwater harvesting, and a fully equipped lifestyle clubhouse.',
        thumbnail: prestigeImage('prestige/prestige-green-brook/thumbnail.webp'),
        images: [
            prestigeImage('prestige/prestige-green-brook/gallery/exterior-view.webp'),
            prestigeImage('prestige/prestige-green-brook/gallery/interior-view.webp'),
            prestigeImage('prestige/prestige-green-brook/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '30 x 50 PLOT', sqft: '1,500 sq. ft.', price: '₹1.35 Cr Onwards', image: prestigeImage('prestige/prestige-green-brook/floor-plans/30x50-plot-layout.webp') },
            { bhk: '30 x 60 PLOT', sqft: '1,800 sq. ft.', price: '₹1.61 Cr Onwards', image: prestigeImage('prestige/prestige-green-brook/floor-plans/30x60-plot-layout.webp') },
            { bhk: '40 x 50 PLOT', sqft: '2,000 sq. ft.', price: '₹1.79 Cr Onwards', image: prestigeImage('prestige/prestige-green-brook/floor-plans/40x50-plot-layout.webp') },
            { bhk: '40 x 60 PLOT', sqft: '2,400 sq. ft.', price: '₹2.15 Cr Onwards', image: prestigeImage('prestige/prestige-green-brook/floor-plans/40x60-plot-layout.webp') }
        ],
        amenities: [
            { name: 'Multipurpose Clubhouse & Foyer', icon: 'fa-solid fa-hotel' },
            { name: 'Swimming Pool & Kids Splash Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Yoga & Meditation Pavilion', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Tennis & Basketball Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Badminton Courts & Indoor Games', icon: 'fa-solid fa-gamepad' },
            { name: 'Mini Theatre & Multipurpose Hall', icon: 'fa-solid fa-film' },
            { name: 'Jogging & Cycling Track', icon: 'fa-solid fa-person-running' },
            { name: 'Underground Utilities & Fiber Cable Network', icon: 'fa-solid fa-plug' },
            { name: 'Children\'s Play Zone & Senior Citizen Seating', icon: 'fa-solid fa-child-reaching' }
        ],
        connectivity: [
            { label: 'Bellary Road (NH 44)', destination: 'Bellary Road, Kundana, Devanahalli, Bengaluru, Karnataka 562110', coordinates: { lat: 13.245000, lon: 77.665000 }, distance: '15.0 Kms', icon: 'fa-solid fa-road' },
            { label: 'Satellite Town Ring Road (STRR)', destination: 'Satellite Town Ring Road (STRR), Devanahalli, Bengaluru, Karnataka 562110', coordinates: { lat: 13.245000, lon: 77.712000 }, distance: '31.8 Kms', icon: 'fa-solid fa-road' },
            { label: 'Yelahanka Satellite Town', destination: 'Yelahanka Satellite Town, Yelahanka, Bengaluru, Karnataka 560064', coordinates: { lat: 13.100000, lon: 77.590000 }, distance: '19.9 Kms', icon: 'fa-solid fa-city' },
            { label: 'RMZ Galleria Mall', destination: 'RMZ Galleria Mall, B.B. Road, Yelahanka, Bengaluru, Karnataka 560064', coordinates: { lat: 13.102300, lon: 77.589400 }, distance: '20.3 Kms', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, KIAL Road, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.197605, lon: 77.707486 }, distance: '17.7 Kms', icon: 'fa-solid fa-plane' },
            { label: 'KIADB Aerospace Park', destination: 'KIADB Aerospace Park, Devanahalli, Bengaluru, Karnataka 562149', coordinates: { lat: 13.206000, lon: 77.698000 }, distance: '16.3 Kms', icon: 'fa-solid fa-industry' },
            { label: 'Foxconn Manufacturing Hub', destination: 'Foxconn Manufacturing Campus, ITIR Region, Doddaballapura, Karnataka 561203', coordinates: { lat: 13.220000, lon: 77.680000 }, distance: '21.6 Kms', icon: 'fa-solid fa-microchip' }
        ]
    },
    {
        id: 'prestige-autumn-leaves',
        name: 'Prestige Autumn Leaves',
        shortAddress: 'Devanahalli, Bengaluru',
        location: 'Chapparkallu Road, Hegganahalli, Kundana Hobli, Devanahalli, North Bengaluru, Karnataka 562110',
        coordinates: { lat: 13.242000, lon: 77.606200 },
        mapsQuery: 'Prestige Autumn Leaves, Devanahalli, Bengaluru',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹1.32 Cr Onwards',
        bhk: '30x45 Plot, 40x60 Plot, 50x60 Plot, 60x60 Plot, 60x80 Plot',
        area: '27 Acres',
        possession: 'August 2028',
        rera: 'PRM/KA/RERA/1250/303/PR/240925/008116',
        highlights: [
            "Grand 18m entrance with 12m wide asphalted internal roads",
            "Landscaped urban gardens with seasonal plants & low maintenance",
            "Sports facilities: pickleball, cricket pitch, multipurpose & skating courts",
            "24/7 security with CCTV, RFID boom barriers & manned gates",
            "Central Park with lawns, flowering trees & cobbled pathways",
            "Kids' play area, treehouse, trampoline park & amphitheatre",
            "Sustainable design with STP, rainwater harvesting & waste converter"
        ],
        description: 'Prestige Autumn Leaves is a premium 27-acre plotted development by Prestige Group located on Chapparkallu Road off IVC Road, Devanahalli. Designed with dual block layouts and 240 boutique villa plots, the master community features an 18m wide entry boulevard, 12m wide internal asphalted roads, underground dual water & fiber-optic networks, and a central linear park.',
        thumbnail: prestigeImage('prestige/prestige-autumn-leaves/thumbnail.webp'),
        images: [
            prestigeImage('prestige/prestige-autumn-leaves/gallery/exterior-view.webp'),
            prestigeImage('prestige/prestige-autumn-leaves/gallery/interior-view.webp'),
            prestigeImage('prestige/prestige-autumn-leaves/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '30 x 45 PLOT', sqft: '1,350 sq. ft.', price: '₹1.32 Cr Onwards', image: prestigeImage('prestige/prestige-autumn-leaves/floor-plans/30x45-plot-layout.webp') },
            { bhk: '40 x 60 PLOT', sqft: '2,400 sq. ft.', price: '₹2.36 Cr Onwards', image: prestigeImage('prestige/prestige-autumn-leaves/floor-plans/40x60-plot-layout.webp') },
            { bhk: '50 x 60 PLOT', sqft: '3,000 sq. ft.', price: '₹2.95 Cr Onwards', image: prestigeImage('prestige/prestige-autumn-leaves/floor-plans/50x60-plot-layout.webp') },
            { bhk: '60 x 60 PLOT', sqft: '3,600 sq. ft.', price: '₹3.53 Cr Onwards', image: prestigeImage('prestige/prestige-autumn-leaves/floor-plans/60x60-plot-layout.webp') },
            { bhk: '50 x 80 PLOT', sqft: '4,000 sq. ft.', price: '₹3.93 Cr Onwards', image: prestigeImage('prestige/prestige-autumn-leaves/floor-plans/50x80-plot-layout.webp') }
        ],
        amenities: [
            { name: 'Grand Clubhouse & Reception Hall', icon: 'fa-solid fa-hotel' },
            { name: 'Swimming Pool & Kids Splash Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Multipurpose Court & Cricket Pitch', icon: 'fa-solid fa-baseball-bat-ball' },
            { name: 'Skating Rink & Jogging Pathways', icon: 'fa-solid fa-person-skating' },
            { name: 'Yoga Lawn & Open-Air Amphitheatre', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Underground Electrical & Fiber Optic Lines', icon: 'fa-solid fa-plug' },
            { name: 'Central STP & Dual UPVC Water Network', icon: 'fa-solid fa-faucet-drip' },
            { name: 'Linear Green Central Park', icon: 'fa-solid fa-tree' },
            { name: 'RFID Boom Barrier Security & 24/7 CCTV', icon: 'fa-solid fa-shield-halved' }
        ],
        connectivity: [
            { label: 'Vidyashilp University', destination: 'Vidyashilp University, Chapparkallu Road, Kundana Hobli, Bengaluru, Karnataka 562110', coordinates: { lat: 13.238000, lon: 77.603000 }, distance: '1.2 Kms', icon: 'fa-solid fa-graduation-cap' },
            { label: 'Bellary Road (NH 44)', destination: 'Bellary Road, Kundana Hobli, Devanahalli, Bengaluru, Karnataka 562110', coordinates: { lat: 13.205000, lon: 77.625000 }, distance: '4.6 Kms', icon: 'fa-solid fa-road' },
            { label: 'Devanahalli Town', destination: 'Devanahalli Town, Bengaluru Rural, Karnataka 562110', coordinates: { lat: 13.248000, lon: 77.712000 }, distance: '15.2 Kms', icon: 'fa-solid fa-city' },
            { label: 'Doddajala Railway Station', destination: 'Doddajala Railway Station, Doddajala, Bengaluru, Karnataka 562157', coordinates: { lat: 13.185000, lon: 77.632000 }, distance: '7.0 Kms', icon: 'fa-solid fa-train' },
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, KIAL Road, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.197605, lon: 77.707486 }, distance: '11.9 Kms', icon: 'fa-solid fa-plane' },
            { label: 'KIADB Aerospace SEZ', destination: 'KIADB Aerospace SEZ, Devanahalli, Bengaluru, Karnataka 562149', coordinates: { lat: 13.206000, lon: 77.698000 }, distance: '17.1 Kms', icon: 'fa-solid fa-industry' }
        ]
    },
    {
        id: 'prestige-southern-star',
        name: 'Prestige Southern Star',
        shortAddress: 'Akshayanagar, Bengaluru',
        location: 'Begur - DLF Newtown Road, Akshayanagar, Off Bannerghatta Road, Bengaluru, Karnataka 560068',
        coordinates: { lat: 12.875200, lon: 77.615400 },
        mapsQuery: 'Prestige Southern Star, Begur, Bengaluru',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹83.7 Lakh Onwards',
        bhk: '1 BHK, 2 BHK, 3 BHK, 4 BHK',
        area: '32.5 Acres',
        possession: 'September 2027',
        rera: 'PRM/KA/RERA/1251/310/PR/210325/007603',
        highlights: [
            "80% open spaces, central park and Begur Lake views",
            "Luxury with olympic-size, heated, and glass-floor kids pools",
            "A full-acre fitness arena packed with indoor and outdoor sporting options",
            "Homes are meticulously designed to optimize space and ventilation",
            "DA1+ rating from CRISIL for high construction standards"
        ],
        description: 'Prestige Southern Star is a premier 34-acre high-rise residential township by Prestige Group located off Bannerghatta Road in Akshayanagar. Featuring 14 high-rise towers (G+26 to G+27 floors) with over 75% open spaces and views of Begur Lake, the development accommodates 2,130 luxury residences anchored by a 70,000 sq. ft. multi-level clubhouse and an expansive 1-acre fitness arena.',
        thumbnail: prestigeImage('prestige/prestige-southern-star/thumbnail.webp'),
        images: [
            prestigeImage('prestige/prestige-southern-star/gallery/exterior-view.webp'),
            prestigeImage('prestige/prestige-southern-star/gallery/interior-view.webp'),
            prestigeImage('prestige/prestige-southern-star/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '1 BHK', sqft: '695 sq. ft.', price: '₹83.7 L Onwards', image: prestigeImage('prestige/prestige-southern-star/floor-plans/1bhk-floor-plan.webp') },
            { bhk: '2 BHK (Optima)', sqft: '1,138 - 1,599 sq. ft.', price: '₹1.29 Cr Onwards', image: prestigeImage('prestige/prestige-southern-star/floor-plans/2bhk-floor-plan.webp') },
            { bhk: '3 BHK (Aspire)', sqft: '1,463 - 1,524 sq. ft.', price: '₹1.68 Cr Onwards', image: prestigeImage('prestige/prestige-southern-star/floor-plans/3bhk(as)-floor-plan.webp') },
            { bhk: '3 BHK (Premia)', sqft: '1,812 - 1,883 sq. ft.', price: '₹2.02 Cr Onwards', image: prestigeImage('prestige/prestige-southern-star/floor-plans/3bhk(pr)-floor-plan.webp') },
            { bhk: '3 BHK + HOME OFFICE (Ultima)', sqft: '2,083 - 2,553 sq. ft.', price: '₹2.36 Cr Onwards', image: prestigeImage('prestige/prestige-southern-star/floor-plans/3bhk-home-office-floor-plan.webp') },
            { bhk: '4 BHK + HOME OFFICE (Magnus)', sqft: '2,690 - 2,774 sq. ft.', price: '₹3.29 Cr Onwards', image: prestigeImage('prestige/prestige-southern-star/floor-plans/4bhk(hom)-layout.webp') }
        ],
        amenities: [
            { name: '70,000 sq. ft. Grand Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: 'Olympic-Size Swimming Pool & Glass-Floor Kids Pool', icon: 'fa-solid fa-person-swimming' },
            { name: '1-Acre Fitness Arena & Modern Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Badminton & Tennis Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Skating Rink & Squash Court', icon: 'fa-solid fa-person-skating' },
            { name: 'Yoga, Meditation & Health Club/Spa', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Mini Theatre & Multipurpose Party Hall', icon: 'fa-solid fa-film' },
            { name: 'Outdoor Jogging & Cycling Track', icon: 'fa-solid fa-person-running' },
            { name: 'Begur Lake View Deck & Landscaped Parks', icon: 'fa-solid fa-tree' },
            { name: 'Children\'s Play Area & Indoor Games Room', icon: 'fa-solid fa-child-reaching' }
        ],
        connectivity: [
            { label: 'Singasandra Metro Station (Yellow Line)', destination: 'Singasandra Metro Station (Yellow Line), Hosur Road, Singasandra, Bengaluru, Karnataka 560068', coordinates: { lat: 12.881000, lon: 77.648000 }, distance: '4.2 Kms', icon: 'fa-solid fa-train-subway' },
            { label: 'Bannerghatta Main Road', destination: 'Bannerghatta Main Road, Hulimavu, Bengaluru, Karnataka 560076', coordinates: { lat: 12.890000, lon: 77.598000 }, distance: '11.4 Kms', icon: 'fa-solid fa-road' },
            { label: 'Vega City Mall', destination: 'Vega City Mall, Bannerghatta Main Road, Dollars Colony, Bengaluru, Karnataka 560076', coordinates: { lat: 12.909000, lon: 77.601000 }, distance: '5.6 Kms', icon: 'fa-solid fa-cart-shopping' },
            { label: 'Electronic City Phase 1', destination: 'Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100', coordinates: { lat: 12.845200, lon: 77.660200 }, distance: '14.1 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'Jayadeva Flyover / Hospital', destination: 'Sri Jayadeva Institute of Cardiovascular Sciences, Bannerghatta Road, Jayanagar, Bengaluru, Karnataka 560069', coordinates: { lat: 12.920000, lon: 77.599000 }, distance: '7.4 Kms', icon: 'fa-solid fa-hospital' },
            { label: 'Outer Ring Road (ORR) Silk Board', destination: 'Central Silk Board Junction, Hosur Road, Outer Ring Road, Bengaluru, Karnataka 560068', coordinates: { lat: 12.917000, lon: 77.623000 }, distance: '6.0 Kms', icon: 'fa-solid fa-road' }
        ]
    },
    {
        id: 'prestige-pine-forest',
        name: 'Prestige Pine Forest',
        shortAddress: 'Whitefield, Bengaluru',
        location: 'ECC Road, Pattandur Agrahara, Whitefield, Bengaluru, Karnataka 560066',
        coordinates: { lat: 12.977800, lon: 77.740200 },
        mapsQuery: 'Prestige Pine Forest, Whitefield, Bengaluru',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹3.75 Cr Onwards',
        bhk: '3 BHK, 4 BHK',
        area: '9 Acres',
        possession: 'December 2028',
        rera: 'PRM/KA/RERA/1251/446/PR/190924/007048',
        highlights: [
            "Low-density living with only 316 residences across 8 acres",
            "Forest-themed landscaping with a dedicated forest trail",
            "Unobstructed green and open views from every apartment",
            "Apartments featuring large private decks and family rooms",
            "Comprehensive sports zone with futsal and cricket practice nets",
            "Grand G+2 clubhouse featuring a lap pool and wellness deck",
            "Curated outdoor spaces with a pet park and reflexology walk"
        ],
        description: 'Prestige Pine Forest is a high-end forest-themed residential enclave by Prestige Group located on ECC Road in Pattandur Agrahara, Whitefield. Spread across 9 acres with over 80% open green spaces, the community features 4 high-rise towers (2B+G+14 floors) offering 316 large-format 3 & 4 BHK luxury residences with home office options and access to a 35,000+ sq. ft. clubhouse.',
        thumbnail: prestigeImage('prestige/prestige-pine-forest/thumbnail.webp'),
        images: [
            prestigeImage('prestige/prestige-pine-forest/gallery/exterior-view.webp'),
            prestigeImage('prestige/prestige-pine-forest/gallery/interior-view.webp'),
            prestigeImage('prestige/prestige-pine-forest/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '3 BHK', sqft: '3,121 sq. ft.', price: '₹4.16 Cr Onwards', image: prestigeImage('prestige/prestige-pine-forest/floor-plans/3bhk-floor-plan.webp') },
            { bhk: '3 BHK + HOME OFFICE', sqft: '2,757 - 2,796 sq. ft.', price: '₹3.75 Cr Onwards', image: prestigeImage('prestige/prestige-pine-forest/floor-plans/3bhk-home-office-floor-plan.webp') },
            { bhk: '3 BHK + HOME OFFICE + STUDIO', sqft: '3,160 - 3,235 sq. ft.', price: '₹4.25 Cr Onwards', image: prestigeImage('prestige/prestige-pine-forest/floor-plans/3bhk-home-office-studio-floor-plan.webp') },
            { bhk: '4 BHK + HOME OFFICE', sqft: '3,540 - 3,556 sq. ft.', price: '₹4.77 Cr Onwards', image: prestigeImage('prestige/prestige-pine-forest/floor-plans/4bhk-home-office-floor-plan.webp') }
        ],
        amenities: [
            { name: '35,000+ sq. ft. Multi-Level Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: 'Swimming Pool & Kids Splash Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Modern Gymnasium', icon: 'fa-solid fa-dumbbell' },
            { name: 'Yoga & Meditation Pavilion', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Badminton & Tennis Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Squash Court & Indoor Games Room', icon: 'fa-solid fa-gamepad' },
            { name: 'Mini Theatre & Multipurpose Party Hall', icon: 'fa-solid fa-film' },
            { name: 'Forest Trail & Jogging Track', icon: 'fa-solid fa-person-running' },
            { name: 'Landscaped Central Park & Tree Canopy', icon: 'fa-solid fa-tree' },
            { name: 'Children\'s Play Area & Pet Park', icon: 'fa-solid fa-child-reaching' }
        ],
        connectivity: [
            { label: 'Kadugodi Tree Park Metro Station', destination: 'Kadugodi Tree Park Metro Station (Purple Line), Whitefield, Bengaluru, Karnataka 560067', coordinates: { lat: 12.986000, lon: 77.750000 }, distance: '2.4 Kms', icon: 'fa-solid fa-train-subway' },
            { label: 'ITPL (International Tech Park Bangalore)', destination: 'International Tech Park Bangalore (ITPB), Whitefield Main Road, Bengaluru, Karnataka 560066', coordinates: { lat: 12.986000, lon: 77.738000 }, distance: '2.2 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'Whitefield Main Road', destination: 'Whitefield Main Road, Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.975000, lon: 77.745000 }, distance: '1.3 Kms', icon: 'fa-solid fa-road' },
            { label: 'EPIP Zone', destination: 'EPIP Zone, Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.978000, lon: 77.725000 }, distance: '6.4 Kms', icon: 'fa-solid fa-industry' },
            { label: 'Nexus Whitefield Mall', destination: 'Nexus Whitefield Mall, Whitefield Main Road, Bengaluru, Karnataka 560066', coordinates: { lat: 12.958500, lon: 77.746000 }, distance: '2.7 Kms', icon: 'fa-solid fa-cart-shopping' },
            { label: 'K.R. Puram Railway Station', destination: 'Krishnarajapuram Railway Station, Old Madras Road, Krishnarajapura, Bengaluru, Karnataka 560016', coordinates: { lat: 13.000546, lon: 77.675456 }, distance: '11.8 Kms', icon: 'fa-solid fa-train' }
        ]
    },
    {
        id: 'prestige-raintree-park',
        name: 'Prestige Raintree Park',
        shortAddress: 'Whitefield, Bengaluru',
        location: 'SH 35, Whitefield - Varthur Main Road, Opp. Varthur Lake, Whitefield, Bengaluru, Karnataka 560087',
        coordinates: { lat: 12.943100, lon: 77.742000 },
        mapsQuery: 'Prestige Raintree Park, Whitefield, Bengaluru',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹2.93 Cr Onwards',
        bhk: '3 BHK, 4 BHK, 5 BHK',
        area: '21 Acres',
        possession: 'December 2028',
        rera: 'PRM/KA/RERA/1251/446/PR/270824/006981',
        highlights: [
            "1520 abodes in 18 towers on 21 acres overlooking Varthur lake",
            "Extensively landscaped green parkland with private views",
            "Plush clubhouse complex sprawling over 1 lakh sq ft",
            "Central 3-acre landscaped courtyard houses clubhouse complex",
            "Broad balconies and large windows maximize natural light",
            "3 swimming pools and a temperature-controlled pool",
            "High density landscape with nine towers directly facing the lake"
        ],
        description: 'Prestige Raintree Park is a high-end residential township by Prestige Group located on the Whitefield-Varthur Main Road opposite Varthur Lake. Spread across 21 acres in Phase 1 (as part of a grand 107-acre mixed-use development comprising residential, commercial, and retail zones), the enclave features 18 high-rise towers (3B+G+19 floors) offering 1,520 large-format luxury apartments, an expansive 100,000+ sq. ft. clubhouse, and over 80% open spaces.',
        thumbnail: prestigeImage('prestige/prestige-raintree-park/thumbnail.webp'),
        images: [
            prestigeImage('prestige/prestige-raintree-park/gallery/exterior-view.webp'),
            prestigeImage('prestige/prestige-raintree-park/gallery/interior-view.webp'),
            prestigeImage('prestige/prestige-raintree-park/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '3 BHK', sqft: '2,005 sq. ft.', price: '₹2.93 Cr Onwards', image: prestigeImage('prestige/prestige-raintree-park/floor-plans/3bhk-floor-plan.webp') },
            { bhk: '3 BHK + Home Office', sqft: '2,187 sq. ft.', price: '₹3.40 Cr Onwards', image: prestigeImage('prestige/prestige-raintree-park/floor-plans/3bhk-home-floor-plan.webp') },
            { bhk: '4 BHK + Home Office', sqft: '2,451 sq. ft.', price: '₹3.65 Cr Onwards', image: prestigeImage('prestige/prestige-raintree-park/floor-plans/4bhk-floor-plan.webp') },
            { bhk: '4 BHK 4T + Home Office', sqft: '2,924 sq. ft.', price: '₹4.30 Cr Onwards', image: prestigeImage('prestige/prestige-raintree-park/floor-plans/4bhk-home-office-floor-plan.webp') },
            { bhk: '5 BHK', sqft: '3,503 sq. ft.', price: '₹5.12 Cr Onwards', image: prestigeImage('prestige/prestige-raintree-park/floor-plans/5bhk-floor-plans.webp') }
        ],
        amenities: [
            { name: '100,000+ sq. ft. Multi-Level Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: '3 Temperature-Controlled Swimming Pools & Kids Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Fitness Studio & Gym', icon: 'fa-solid fa-dumbbell' },
            { name: 'Badminton Courts, Tennis Courts & Squash Court', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Indoor Games Room & Bowling Alley', icon: 'fa-solid fa-bowling-ball' },
            { name: 'Yoga & Meditation Deck', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Mini Theatre & Multipurpose Community Hall', icon: 'fa-solid fa-film' },
            { name: 'Lakeside Jogging & Cycling Tracks', icon: 'fa-solid fa-person-running' },
            { name: 'Central Landscaped Courtyard & Tree Canopies', icon: 'fa-solid fa-tree' },
            { name: 'Children\'s Play Area & Dedicated Pet Park', icon: 'fa-solid fa-child-reaching' }
        ],
        connectivity: [
            { label: 'ITPL (International Tech Park Bengaluru)', destination: 'International Tech Park Bangalore (ITPB), Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.986000, lon: 77.738000 }, distance: '8.0 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'EPIP Zone Whitefield', destination: 'EPIP Zone, Whitefield, Bengaluru, Karnataka 560066', coordinates: { lat: 12.978000, lon: 77.725000 }, distance: '10.0 Kms', icon: 'fa-solid fa-industry' },
            { label: 'Kadugodi / Whitefield Metro Station', destination: 'Whitefield (Kadugodi) Metro Station (Purple Line), Kadugodi, Bengaluru, Karnataka 560067', coordinates: { lat: 12.996000, lon: 77.761000 }, distance: '7.7 Kms', icon: 'fa-solid fa-train-subway' },
            { label: 'Marathahalli ORR Junction', destination: 'Marathahalli Bridge Junction, Outer Ring Road, Marathahalli, Bengaluru, Karnataka 560037', coordinates: { lat: 12.956000, lon: 77.701000 }, distance: '14.8 Kms', icon: 'fa-solid fa-road' },
            { label: 'K.R. Puram Railway Station', destination: 'Krishnarajapuram Railway Station, Old Madras Road, Krishnarajapura, Bengaluru, Karnataka 560016', coordinates: { lat: 13.000546, lon: 77.675456 }, distance: '17.4 Kms', icon: 'fa-solid fa-train' },
            { label: 'Electronic City Phase 1', destination: 'Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100', coordinates: { lat: 12.845200, lon: 77.660200 }, distance: '25.2 Kms', icon: 'fa-solid fa-laptop-code' },
            { label: 'Kempegowda International Airport', destination: 'Kempegowda International Airport, KIAL Road, Devanahalli, Bengaluru, Karnataka 560300', coordinates: { lat: 13.197605, lon: 77.707486 }, distance: '41.5 Kms', icon: 'fa-solid fa-plane' }
        ]
    },
    {
        id: 'prestige-kings-county',
        name: 'Prestige Kings County',
        shortAddress: 'Rajapura, Bengaluru',
        location: 'Rajapura, Jigani-Bommasandra Main Road, Off Electronic City, South Bengaluru, Karnataka 560105',
        coordinates: { lat: 12.798400, lon: 77.653200 },
        mapsQuery: 'Prestige Kings County, Rajapura, Bengaluru',
        category: 'ONGOING',
        statusText: 'Ongoing',
        badgeClass: 'badge-ongoing',
        price: '₹1.02 Cr Onwards',
        bhk: '30x40 Plot, 30x50 Plot, 30x60 Plot, 40x50 Plot, 40x60 Plot',
        area: '73 Acres',
        possession: 'December 2026',
        rera: 'PRM/KA/RERA/1251/308/PR/290624/006936',
        highlights:[
            "Close to tech parks, schools, shopping centers and hospitals",
            "Community overlooks a lake with parks and gardens",
            "Organic farm and orchard enhance green cover and nature",
            "Active lifestyle with tracks, outdoor gym, skating rink, and yoga arena",
            "9m and 12m roads within the premise",
            "Waterfront Park Roundabout and waterfront park pathway"
        ],
        description: 'Prestige Kings County is a premier 73-acre lakeside plotted township by Prestige Group located in Rajapura, off Electronic City on Jigani-Bommasandra Main Road. Adjacent to Hennagara Lake, the master community features 875 residential villa plots with wide internal asphalted roads, underground electrical & fiber-optic networks, dual water supply, and a dedicated multi-level clubhouse with over 40 active lifestyle amenities.',
        thumbnail: prestigeImage('prestige/prestige-kings-county/thumbnail.webp'),
        images: [
            prestigeImage('prestige/prestige-kings-county/gallery/exterior-view.webp'),
            prestigeImage('prestige/prestige-kings-county/gallery/interior-view.webp'),
            prestigeImage('prestige/prestige-kings-county/gallery/amenities.webp')
        ],
        floorPlans: [
            { bhk: '30 x 40 PLOT', sqft: '1,200 sq. ft.', price: '₹1.02 Cr Onwards', image: prestigeImage('prestige/prestige-kings-county/floor-plans/30x40-plot-layout.webp') },
            { bhk: '30 x 50 PLOT', sqft: '1,500 sq. ft.', price: '₹1.27 Cr Onwards', image: prestigeImage('prestige/prestige-kings-county/floor-plans/30x50-plot-layout.webp') },
            { bhk: '40 x 50 PLOT', sqft: '1,800 sq. ft.', price: '₹1.53 Cr Onwards', image: prestigeImage('prestige/prestige-kings-county/floor-plans/40x50-plot-layout.webp') },
            { bhk: '30 x 60 PLOT', sqft: '2,000 sq. ft.', price: '₹1.70 Cr Onwards', image: prestigeImage('prestige/prestige-kings-county/floor-plans/30x60-plot-layout.webp') },
            { bhk: '40 x 60 PLOT', sqft: '2,400 sq. ft.', price: '₹2.04 Cr Onwards', image: prestigeImage('prestige/prestige-kings-county/floor-plans/40x60-plot-layout.webp') }
        ],
        amenities: [
            { name: 'Multi-Level Grand Clubhouse', icon: 'fa-solid fa-hotel' },
            { name: 'Swimming Pool & Kids Pool', icon: 'fa-solid fa-person-swimming' },
            { name: 'Fully Equipped Gymnasium & Outdoor Gym', icon: 'fa-solid fa-dumbbell' },
            { name: 'Tennis, Basketball & Badminton Courts', icon: 'fa-solid fa-table-tennis-paddle-ball' },
            { name: 'Skating Rink & Climbing Wall', icon: 'fa-solid fa-person-skating' },
            { name: 'Yoga Lawn & Meditation Pavilion', icon: 'fa-solid fa-mattress-pillow' },
            { name: 'Multipurpose Community Hall & Mini Theatre', icon: 'fa-solid fa-film' },
            { name: 'Lakeside Jogging & Cycling Tracks', icon: 'fa-solid fa-person-running' },
            { name: 'Underground Electrical & Fiber Optic Cabling', icon: 'fa-solid fa-plug' },
            { name: 'Children\'s Play Area & Dedicated Pet Park', icon: 'fa-solid fa-child-reaching' }
        ],
        connectivity: [
            { label: 'Treamis World School', destination: 'Treamis World School, Hulimangala Post, Near Electronic City, Bengaluru, Karnataka 560105', coordinates: { lat: 12.822000, lon: 77.636000 }, distance: '5.0 Kms', icon: 'fa-solid fa-school' },
            { label: 'Mazumdar Shaw Medical Center', destination: 'Mazumdar Shaw Medical Center, Narayana Health City, Bommasandra Industrial Area, Bengaluru, Karnataka 560099', coordinates: { lat: 12.821000, lon: 77.685000 }, distance: '5.4 Kms', icon: 'fa-solid fa-hospital' },
            { label: 'Bommasandra Metro Station (Yellow Line)', destination: 'Bommasandra Metro Station (Yellow Line), Hosur Road, Bommasandra, Bengaluru, Karnataka 560099', coordinates: { lat: 12.818000, lon: 77.691000 }, distance: '6.3 Kms', icon: 'fa-solid fa-train-subway' },
            { label: 'NICE Ring Road Junction', destination: 'NICE Ring Road Junction, Electronic City, Bengaluru, Karnataka 560100', coordinates: { lat: 12.825000, lon: 77.628000 }, distance: '7.9 Kms', icon: 'fa-solid fa-road' },
            { label: 'Heelalige Railway Station', destination: 'Heelalige Railway Station, Chandapura, Bengaluru, Karnataka 560099', coordinates: { lat: 12.809000, lon: 77.712000 }, distance: '9.7 Kms', icon: 'fa-solid fa-train' },
            { label: 'Electronic City Phase 1', destination: 'Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100', coordinates: { lat: 12.845200, lon: 77.660200 }, distance: '26.3 Kms', icon: 'fa-solid fa-laptop-code' },
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
