self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

const translations = {
    "Homy": "CornerStone Buildcom",
    "homy.framer.media": "cornerstonebuildcom.com",
    "Find Your Perfect Home Easily": "Build A Future-Ready Property Portfolio",
    "Explore thoughtfully designed homes in premium locations, crafted to match modern lifestyles with comfort, elegance, and long-term value.": "Commercial, Premium Residential, Industrial.",
    "Explore Homes": "View Properties",
    "Book a Visit": "Inquire Now",
    "OUR IMPACT": "Experience-Led Real Estate Advisory",
    "Real insights behind every property decision": "About CornerStone Buildcom",
    "Built to make modern home discovery simple, transparent, and more confident for every user.": "Established in 2012, CornerStone Buildcom is a specialized real estate investment advisory firm focused on high-quality commercial, premium residential, branded retail, and industrial assets.",
    "TOP PROPERTIES": "Our Featured Projects",
    "Explore selected homes modern living": "Showcasing Prime, High-Performing Developments",
    "Our Core Services": "Our Core Services",
    "Everything need your home": "End-to-End Real Estate Advisory Solutions",
    "Buy a Home": "Strategic Real Estate Investments",
    "Find Homes Perfect For You": "Strategic, research-driven real estate investments across commercial, premium residential, and industrial assets.",
    "Rent a Home": "Integrated Leasing Solutions",
    "Find Rental Homes With Ease": "End-to-end leasing solutions for offices, industrial spaces, warehouses, large retail formats, and premium residences.",
    "Explore Listings": "Comprehensive Due Diligence & Compliance",
    "Explore Available Properties Easily": "Comprehensive technical, legal, and compliance due diligence covering title, documents, approvals, site condition, and financials.",
    "Nimbus": "Max",
    "Trump": "Jacob",
    "Dallas Townhouse": "DLF",
    "Urban Modern House": "Nimbus",
    "PROPERTY LISTINGS": "Our Properties",
    "Discover homes that your lifestyle": "Handpicked assets for investment and leasing across leading commercial projects.",
    "HIGHLIGHTED HOME": "Who We Support",
    "Modern homes, designed live better": "Specialised support for investors, businesses, and developers who view real estate and capital as strategic growth enablers.",
    "CLIENT REVIEWS": "Why Choose CornerStone Buildcom",
    "What people about their home search": "Built on 18+ years of experience, CornerStone Buildcom combines strategic market insight, trusted partnerships, and end-to-end real estate expertise.",
    "I was able to find a home that matched my needs perfectly. The overall experience was smooth and very easy to follow.": "End-to-End Leasing Expertise — From property scouting to final agreement — we handle everything seamlessly.",
    "Clean interface and useful details helped me make better decisions. It saved time and made the process much easier.": "Verified & Value-Driven Spaces — Every property is legally vetted, RERA-checked, and location-analyzed to ensure maximum return and zero risk.",
    "From browsing to shortlisting properties, everything felt intuitive. It helped me move forward with confidence.": "Trust & Experience Since 2012 — Led by Rajesh Ghai, CornerStone Buildcom is built on transparency, strong developer networks, and long-term client relationships.",
    "The way homes are presented makes it easy to understand value and compare options without feeling overwhelmed.": "Investor-Focused, ROI-Driven Approach — Every engagement is designed around stable cash flows, capital appreciation, and portfolio resilience.",
    "A very well-designed experience that made finding the right home simple. Everything was clear and easy to navigate.": "Strong Networks, Trusted Market Access — CornerStone Buildcom leverages strong financial and industry networks to deliver exclusive investment opportunities.",
    "The experience felt clean and thoughtfully designed. It helped me explore options clearly and choose a home with confidence.": "Curated, High-Quality Assets — Access to pre-leased, income-generating, and future-growth assets across commercial, premium residential, industrial.",
    "Things Should Know": "Frequently Asked Questions",
    "How do I start searching for a home?": "What makes CornerStone Buildcom different?",
    "You can browse available properties, apply filters, and explore listings based on your needs and location.": "Investor-first approach combining 18+ years expertise, rigorous due diligence, integrated leasing, and comprehensive capital support beyond transactions.",
    "Can I filter homes by budget & location?": "Which markets do you specialize in?",
    "Yes, you can easily filter properties by price range, location, and other preferences.": "Primary focus on Noida, Delhi NCR with strong capabilities across India's premium commercial and industrial corridors.",
    "Are the property details accurate?": "Do you support NRI investments?",
    "We provide updated and verified details to help you make informed decisions.": "Yes. Complete guidance on compliant structures, documentation, financing, and portfolio management for overseas investors.",
    "How do I contact a owner or agent?": "How does your due diligence process work?",
    "Each listing includes contact options so you can directly connect for more information.": "Comprehensive title verification, technical audits, compliance checks, site inspections, and financial evaluation ensuring risk-free decisions.",
    "Can I explore rental and buying options": "Can leasing improve investment returns?",
    "Yes, you can browse both rental and purchase options in one place.": "Absolutely. Strategic leasing delivers higher ROI through faster occupancy, quality tenants, and long-term rental stability.",
    "Do I need an account to use platform": "What funding solutions do you offer?",
    "You can browse freely, but creating an account helps you save and manage your preferences.": "Commercial loans, LRD, working capital, industrial financing, PE/VC connections.",
    "How do I know if a property is available?": "What's your typical client profile?",
    "Availability is updated regularly, but we recommend contacting the listing for confirmation.": "Serious investors, developers, corporates, retail brands, industrial players, startups, and NRIs.",
    "Find your next home": "Build Your Real Estate Portfolio",
    "Discover homes designed your lifestyle": "Connect with our advisory team today and explore secure, high-yield real estate opportunities.",
    "Get in Touch": "Contact Us",
    "Find, explore, and choose your next home with a simple and modern experience.": "Build Your Next Real Estate Portfolio with Experts",
    "homy@yopmail.com": "info@cornerstonebuildcom.com",
    "+123 456 000": "+91-9654335826",
    "New York, USA": "111-F-Block, Sector-8 Noida-201301"
};

// Sequential mapping
const sequential = [
    {
        key: "Focused discovery, built real choices.",
        values: ["Elie Saab Branded Residences India", "Future Of Prestige", "Prime Location In Noida"]
    },
    {
        key: "design platforms that help buyers explore homes, understand value, move forward with confidence.",
        values: [
            "India's first ultra-luxury residences curated by Elie Saab.",
            "Experience internationally curated architecture, interiors, and luxury living standards.",
            "Strategically located on the Noida Expressway, offering strong appreciation potential."
        ]
    },
    {
        key: "Live Better",
        values: ["Real estate investors & family offices", "Corporate occupiers & enterprise clients"]
    },
    {
        key: "Modern Spaces",
        values: ["Developers & project owners", "Retail chains & F&B brands"]
    },
    {
        key: "ACTIVE HOMES",
        values: ["Projects Delivered On Schedule", "Projects Delivered On Schedule"]
    },
    {
        key: "TOTAL VALUE",
        values: ["Clients from IT/MNC Sector", "Clients from IT/MNC Sector"]
    },
    {
        key: "HAPPY CLIENTS",
        values: ["Commercial Spaces", "Commercial Spaces"]
    }
];

self.addEventListener('fetch', (event) => {
    const url = event.request.url;

    // Intercept JS files from Framer
    if (url.includes('framerusercontent.com') && url.endsWith('.mjs')) {
        event.respondWith(
            fetch(event.request).then(response => response.text()).then(text => {
                let modifiedText = text;

                // Replace exact strings
                for (const [key, value] of Object.entries(translations)) {
                    // Escape for regex, match exactly within quotes
                    const escapedKey = key.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
                    const regex = new RegExp('([\\'"`])' + escapedKey + '([\\'"`])', 'g');
                    modifiedText = modifiedText.replace(regex, '$1' + value + '$2');
                }

                // Sequential replacement
                for (const seq of sequential) {
                    const escapedKey = seq.key.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
                    const regex = new RegExp('([\\'"`])' + escapedKey + '([\\'"`])', 'g');
                    let matchIndex = 0;
                    modifiedText = modifiedText.replace(regex, (match, p1, p2) => {
                        const replacement = seq.values[matchIndex % seq.values.length];
                        matchIndex++;
                        return p1 + replacement + p2;
                    });
                }

                return new Response(modifiedText, {
                    headers: { 'Content-Type': 'application/javascript; charset=utf-8' }
                });
            }).catch(e => {
                console.error("SW Fetch error:", e);
                return fetch(event.request);
            })
        );
    }
    // Intercept images from Framer (logos)
    else if (url.includes('framerusercontent.com') && (url.includes('hpBPVJ4EDWe6VR2UVdlcckRzGFo.svg') || url.includes('dCLiSk3yyEASIAiQcx3pqfCcTA.svg'))) {
        event.respondWith(Response.redirect('https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CSB-White-Logo.webp', 302));
    }
    else {
        event.respondWith(fetch(event.request));
    }
});
