import os
import re

BASE_DIR = r"d:\3Dbuildcom\3Dbuildcom\homy.framer.media"

TRANSLATOR_SCRIPT = """
<script>
(function() {
    // We use textContent trimming to match
    const translations = {
        "Homy": "CornerStone Buildcom",
        "homy.framer.media": "cornerstonebuildcom.com",
        
        // Header Mappings
        "PROPERTIES": "Properties",
        "SERVICES": "Services",
        "ABOUT": "About Us",
        "Contact us": "Book A Consultation", // The original nav button
        
        // Hero Mappings
        "Find Your Dream Home": "Build A Future-Ready Property Portfolio",
        "3,500+ Pro Users": "Strategic Real Estate Investments",
        "Commercial, Premium Residential, Industrial.": "Commercial, Premium Residential, Industrial.",
        "Find Your Perfect Home Easily": "Build A Future-Ready Property Portfolio",
        "Build A Future-Ready Property Portfolio": "Build A Future-Ready Property Portfolio",
        "Explore thoughtfully designed homes in premium locations, crafted to match modern lifestyles with comfort, elegance, and long-term value.": "Commercial, Premium Residential, Industrial.",
        "Explore Homes": "View Properties",
        "Book a Visit": "Inquire Now",
        
        // About Us Page Title/Header Mappings
        "ABOUT US": "About Us",
        "Discover homes that fit your lifestyle": "About CornerStone Buildcom",
        "We help people discover, explore, and choose homes with clarity - combining design, data, and a modern real estate experience.": "Founded in 2012, CornerStone Buildcom is a specialized Real Estate Investment Advisory firm driven by experience, integrity, and results. We help investors, corporates, and developers build, protect, and grow their portfolios through high-quality commercial, industrial, and premium residential assets. Over 18 years of deep real estate expertise.<br><br><strong>Philosophy</strong><br>Every recommendation begins with clarity, trust, and strategy. Genuine market insight, sound financial and compliance guidance, and partnerships that prioritize client success.",
        
        // Mission / Vision Mappings
        "Our Mission": "Mission",
        "To make home discovery simple, clear, and accessible - helping people explore properties with confidence and make decisions without confusion.": "To deliver end-to-end real estate advisory — from strategic investments and leasing to comprehensive due diligence and smart capital structuring — ensuring superior ROI, compliance, and sustainable portfolio growth.",
        
        "Our Vision": "Vision",
        "To create a modern real estate experience where finding the right home feels effortless, transparent, and truly aligned with how people live today.": "To be India's premier real estate investment partner, renowned for institutional-grade advisory, powerful networks, and consistent value creation across commercial, residential, and industrial assets.",
        
        // About Page FAQs Mappings
        "How do I start searching for a home?": "What makes CornerStone Buildcom different?",
        "You can browse available properties, apply filters, and explore listings based on your needs and location.": "Investor-first approach combining 18+ years expertise, rigorous due diligence, integrated leasing, and comprehensive capital support.",
        "Can I filter homes by budget & location?": "Which markets do you specialize in?",
        "Yes, you can easily filter properties by price range, location, and other preferences.": "Primary focus on Noida, Delhi NCR with strong capabilities across India's premium commercial and industrial corridors.",
        "Are the property details accurate?": "Do you support NRI investments?",
        "We provide updated and verified details to help you make informed decisions.": "Yes. Complete guidance on compliant structures, documentation, financing, and portfolio management for overseas investors.",

        // Other Page Texts
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
        "Find your next home": "Build Your Real Estate Portfolio",
        "Discover homes designed your lifestyle": "Connect with our advisory team today and explore secure, high-yield real estate opportunities.",
        "Get in Touch": "Contact Us",
        "Find, explore, and choose your next home with a simple and modern experience.": "Build Your Next Real Estate Portfolio with Experts",
        "homy@yopmail.com": "info@cornerstonebuildcom.com",
        "+123 456 000": "+91-9654335826",
        "New York, USA": "111-F-Block, Sector-8 Noida-201301",
        "Copyright@2026": "Copyright@2026 Corner Stone Buildcom"
    };

    let countFocused = 0;
    let countDesign = 0;
    let countLiveBetter = 0;
    let countModernSpaces = 0;

    function getReplacement(originalText) {
        let text = originalText.replace(/\s+/g, ' ').trim();
        
        if (translations[text]) return translations[text];

        if (text === "Focused discovery, built real choices.") {
            countFocused++;
            if (countFocused === 1) return "Elie Saab Branded Residences India";
            if (countFocused === 2) return "Future Of Prestige";
            return "Prime Location In Noida";
        }
        if (text === "design platforms that help buyers explore homes, understand value, move forward with confidence.") {
            countDesign++;
            if (countDesign === 1) return "India's first ultra-luxury residences curated by Elie Saab.";
            if (countDesign === 2) return "Experience internationally curated architecture, interiors, and luxury living standards.";
            return "Strategically located on the Noida Expressway, offering strong appreciation potential.";
        }
        if (text === "Live Better") {
            countLiveBetter++;
            if (countLiveBetter === 1) return "Real estate investors & family offices";
            return "Corporate occupiers & enterprise clients";
        }
        if (text === "Modern Spaces") {
            countModernSpaces++;
            if (countModernSpaces === 1) return "Developers & project owners";
            return "Retail chains & F&B brands";
        }
        
        return null;
    }

    function processNode(node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE') return;

            let childNodes = Array.from(node.childNodes);
            let hasElementChildren = childNodes.some(n => n.nodeType === Node.ELEMENT_NODE && n.nodeName !== 'BR' && n.nodeName !== 'SPAN');
            
            if (!hasElementChildren && node.textContent.trim().length > 0) {
                let originalText = node.textContent;
                let newText = getReplacement(originalText);
                if (newText) {
                    if (newText.includes('<') && newText.includes('>')) {
                        node.innerHTML = newText;
                    } else {
                        node.textContent = newText;
                    }
                } else {
                    let partialReplaced = originalText;
                    let changed = false;
                    if (partialReplaced.includes("homy@yopmail.com")) { partialReplaced = partialReplaced.replace("homy@yopmail.com", "info@cornerstonebuildcom.com"); changed = true; }
                    if (partialReplaced.includes("+123 456 000")) { partialReplaced = partialReplaced.replace("+123 456 000", "+91-9654335826"); changed = true; }
                    if (partialReplaced.includes("New York, USA")) { partialReplaced = partialReplaced.replace("New York, USA", "111-F-Block, Sector-8 Noida-201301"); changed = true; }
                    
                    if (changed) {
                        node.textContent = partialReplaced;
                    }
                }
            } else {
                for (let child of childNodes) {
                    processNode(child);
                }
            }
        }
    }

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        processNode(node);
                    }
                });
            } else if (mutation.type === 'characterData') {
                let parent = mutation.target.parentElement;
                if (parent) processNode(parent);
            }
        });
    });

    // Run About Page specific cleaning
    const cleanAboutPage = () => {
        if (window.location.pathname.toLowerCase().includes('about')) {
            // Hide unwanted sections
            const style = document.createElement('style');
            style.innerHTML = `
                div.framer-bkhcgt-container { display: none !important; }
                div.framer-1yqfgwa { display: none !important; }
                div.framer-ua7wv1 { display: none !important; }
            `;
            document.head.appendChild(style);

            // Questions to hide from FAQs
            const questionsToHide = [
                "How do I contact a owner or agent?",
                "Can I explore rental and buying options",
                "Do I need an account to use platform",
                "How do I know if a property is available?",
                "How does your due diligence process work?",
                "Can leasing improve investment returns?",
                "What funding solutions do you offer?",
                "What's your typical client profile?"
            ];

            const hideFAQItems = () => {
                document.querySelectorAll('.framer-1wcslto').forEach(item => {
                    const txt = item.textContent;
                    if (questionsToHide.some(q => txt.includes(q))) {
                        item.style.setProperty('display', 'none', 'important');
                    }
                });
            };
            hideFAQItems();
            setTimeout(hideFAQItems, 100);
            setTimeout(hideFAQItems, 500);
            setTimeout(hideFAQItems, 1000);
            setInterval(hideFAQItems, 1000);
        }
    };

    // Properties Data
    const customProperties = [
        // Commercial Office Spaces
        { name: "Graphix Tower – Grade-A IT/ITES", location: "Sector 62, Noida", type: "Office / Lease", category: "Commercial", details: "Grade-A IT/ITES" },
        { name: "Signia Tower (Majestic Signia)", location: "Sector 62, Noida", type: "Office / Lease", category: "Commercial", details: "Prime Space" },
        { name: "Majestic Knowledge Boulevard (Tower A/B)", location: "Sector 62, Noida", type: "Office / Lease", category: "Commercial", details: "Grade-A Office" },
        { name: "The Corenthum (Tower A/B)", location: "Sector 62, Noida", type: "Office / Lease", category: "Commercial", details: "Grade-A Office" },
        { name: "IHDP Business Park", location: "Sector 127, Noida", type: "Office / Lease", category: "Commercial", details: "Business Park" },
        { name: "Windsor Grand", location: "Sector 126, Noida Expressway", type: "Office / Lease", category: "Commercial", details: "Noida Expressway" },
        { name: "Supertech E-Square", location: "Sector 96/97, Noida Expressway", type: "Office / Retail / Lease", category: "Commercial", details: "Office / Retail" },
        { name: "Advant Navis Business Park", location: "Sector 142/140, Noida", type: "Office / Lease", category: "Commercial", details: "Noida Expressway" },
        { name: "Stellar Business Park / Stellar IT Park", location: "Noida Expressway", type: "Office / Lease", category: "Commercial", details: "Business Park" },
        { name: "Embassy (Oxygen / Parks)", location: "Sector 144-145, Noida Expressway", type: "Office / Lease", category: "Commercial", details: "IT/ITES Park" },
        { name: "Bhutani Technopark", location: "Sector 126/127, Noida", type: "Office / Lease", category: "Commercial", details: "Noida Expressway" },
        { name: "Okaya Centre", location: "Sector 62, Noida", type: "Office / Lease", category: "Commercial", details: "Business Centre" },
        { name: "Gulshan (Sector 129)", location: "Sector 129, Noida", type: "Office / Lease", category: "Commercial", details: "Premium Space" },
        { name: "Sikka – The Downtown / Mall of Noida", location: "Sector 96/98, Noida Expressway", type: "Office / Retail", category: "Commercial", details: "Commercial/Retail" },
        { name: "DLF Tech Park", location: "Sector 143A, Noida Expressway", type: "Office / Lease", category: "Commercial", details: "IT/ITES Office" },
        { name: "Urbtech Trade Centre", location: "Sector 132, Noida", type: "Office / Lease", category: "Commercial", details: "Office Space" },
        { name: "Max Square (IGBC Platinum)", location: "Sector 129, Noida Expressway", type: "Office / Lease", category: "Commercial", details: "IGBC Platinum" },

        // Premium Residential Properties
        { name: "Estate 361 (Max Estate)", location: "Sector 36A, Gurugram", type: "Premium Residential", category: "Residential", details: "Luxury Living" },
        { name: "The Arista Lux (Nimbus)", location: "Sector 168, Noida", type: "Premium Residential", category: "Residential", details: "Premium Lifestyle" },
        { name: "Max Estate (Sec 105)", location: "Sector 105, Noida", type: "Premium Residential", category: "Residential", details: "Modern Condos" },
        { name: "The Max Estate (Sec 16B)", location: "Sector 16B, Noida", type: "Ultra Premium Residential", category: "Residential", details: "Ultra Premium" },
        { name: "M3M Jacob & Co.", location: "Sector 97, Noida", type: "Ultra Premium Residential", category: "Residential", details: "Ultra Luxury" },
        { name: "The Cullinan (M3M)", location: "Sector 94, Noida", type: "Premium Residential", category: "Residential", details: "Iconic Tower" },
        { name: "Max 105", location: "Sector 105, Noida", type: "Residential + Retail", category: "Residential", details: "Mixed-Use" },
        { name: "The Trump – Ultra Premium (M3M)", location: "Sector 94, Noida", type: "Ultra Premium Residential", category: "Residential", details: "Trump Branded" },

        // Branded Retail Properties
        { name: "Supertech E-Square", location: "Sector 96/97, Noida Expressway", type: "Retail / Office", category: "Retail", details: "Prime Retail" },
        { name: "Sikka – The Downtown", location: "Sector 96/98, Noida Expressway", type: "Retail / Office", category: "Retail", details: "High Street Retail" },
        { name: "Max 105", location: "Sector 105, Noida", type: "Retail + Residential", category: "Retail", details: "Retail / Multiplex" },
        { name: "Jewel Crescent (M3M)", location: "Sector 97, Noida", type: "Premium Retail", category: "Retail", details: "Ultra Luxury Retail" },
        { name: "Gulson 129 (Gulshan)", location: "Sector 129, Noida", type: "Retail + Office", category: "Retail", details: "Premium Retail" },
        { name: "The Cullinan Mall (M3M)", location: "Sector 94, Noida", type: "Retail / Mall", category: "Retail", details: "Institutional Mall" },
        { name: "The Line (M3M)", location: "Sector 72, Noida", type: "Retail + Pentsuites", category: "Retail", details: "Retail & Suites" },

        // Industrial / Warehouse Properties
        { name: "CS Exclusive — Sector 80", location: "Sector 80, Noida", type: "Factory / Lease", category: "Industrial", details: "Industrial Shed" },
        { name: "CS Exclusive — Sector 140", location: "Sector 140, Noida", type: "Factory / Lease", category: "Industrial", details: "Factory/Warehouse" },
        { name: "CS Exclusive — Sector 154", location: "Sector 154, Noida", type: "Factory / Lease", category: "Industrial", details: "Premium Factory" },
        { name: "CS Exclusive — Sector 63", location: "Sector 63, Noida", type: "Factory / Lease", category: "Industrial", details: "Ready To Move" },
        { name: "CS Exclusive — Warehouse Sec 140", location: "Sector 140, Noida", type: "Warehouse / Triple Height", category: "Industrial", details: "Triple Height" },
        { name: "CS Exclusive — Sector 142", location: "Sector 142, Noida", type: "Factory / 4000 sqft / 7 floors", category: "Industrial", details: "4000 sqft / 7 floors" },
        { name: "CS Exclusive — Sector 10", location: "Sector 10, Noida", type: "Factory / 800 mtr / 4 floors", category: "Industrial", details: "800 mtr / 4 floors" }
    ];

    let activeCategory = "All";
    let activeLocation = "All";
    let activeStatus = "All";
    let cardTemplate = null;

    function populateCard(card, prop) {
        // 1. Status badge
        const badge = card.querySelector('.framer-6eu09h p, .framer-q0d4w2 p');
        if (badge) {
            badge.textContent = prop.type;
            badge.style.whiteSpace = 'nowrap';
        }

        // 2. Title
        const title = card.querySelector('.framer-1xf9if4 p');
        if (title) title.textContent = prop.name;

        // 3. Location (Price field spot)
        const price = card.querySelector('.framer-1aoxwi1 h5');
        if (price) {
            price.textContent = prop.location;
            price.style.fontSize = '18px';
            price.style.color = '#c5a85c'; // Premium gold color
        }

        // 4. Details / Specs
        const bedText = card.querySelector('.framer-8d4yu3 p');
        if (bedText) bedText.textContent = "CSB Approved";
        
        const bathText = card.querySelector('.framer-ojfric p');
        if (bathText) bathText.textContent = prop.category;
        
        const areaText = card.querySelector('.framer-1c25i03 p');
        if (areaText) areaText.textContent = prop.details;
        
        const areaLabel = card.querySelector('.framer-175p4i8 p');
        if (areaLabel) areaLabel.textContent = ""; // Hide the trailing "sq ft" label to look cleaner
    }

    function renderPropertyGrid() {
        const desktopGrid = document.querySelector('.hidden-1qzxamh > .ssr-variant');
        const tabletGrid = document.querySelector('.hidden-1wmkz8d > .ssr-variant');
        const mobileGrid = document.querySelector('.hidden-18t52s4 > .ssr-variant');

        if (!cardTemplate) {
            const firstCard = document.querySelector('.framer-tvrfza');
            if (firstCard) {
                cardTemplate = firstCard.cloneNode(true);
            }
        }

        if (!cardTemplate) return;

        // Filter the properties
        const filtered = customProperties.filter(p => {
            const matchCategory = activeCategory === "All" || p.category === activeCategory;
            let matchLocation = true;
            if (activeLocation !== "All") {
                if (activeLocation === "Noida Expressway") {
                    matchLocation = p.location.toLowerCase().includes("expressway");
                } else {
                    matchLocation = p.location.toLowerCase().includes(activeLocation.toLowerCase()) && !p.location.toLowerCase().includes("expressway");
                }
            }
            const matchStatus = activeStatus === "All" || 
                                (activeStatus === "Lease" && p.type.toLowerCase().includes("lease")) ||
                                (activeStatus === "Sale" && !p.type.toLowerCase().includes("lease"));
            return matchCategory && matchLocation && matchStatus;
        });

        const updateGrid = (gridContainer) => {
            if (!gridContainer) return;
            gridContainer.innerHTML = "";
            filtered.forEach(prop => {
                const card = cardTemplate.cloneNode(true);
                populateCard(card, prop);
                gridContainer.appendChild(card);
            });
        };

        updateGrid(desktopGrid);
        updateGrid(tabletGrid);
        updateGrid(mobileGrid);
    }

    function setupPropertiesPage() {
        if (!window.location.pathname.toLowerCase().includes('properties')) return;

        // Hide unwanted filter sections (Price Range, Bedrooms)
        const hideSections = () => {
            // Price range filter section
            const priceSec = document.querySelector('.framer-jrohvw');
            if (priceSec) priceSec.style.display = 'none';

            // Bedrooms filter section
            const bedSec = document.querySelector('.framer-kxq65d');
            if (bedSec) bedSec.style.display = 'none';
        };
        hideSections();
        setTimeout(hideSections, 200);

        // Customize Property Type filter buttons to represent Commercial, Residential, Retail, Industrial
        const customizeFilters = () => {
            // Category Buttons
            const catContainers = document.querySelectorAll('.framer-1mvtxj0 .framer-z5kd57-container');
            const catLabels = ["Commercial", "Residential", "Retail", "Industrial"];
            catContainers.forEach((container, idx) => {
                if (idx < catLabels.length) {
                    const textEl = container.querySelector('p');
                    if (textEl) {
                        textEl.textContent = catLabels[idx];
                        // Click handler
                        container.onclick = (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            // Toggle active styling
                            catContainers.forEach(c => {
                                const el = c.querySelector('.framer-XUfSa');
                                if (el) { el.classList.remove('framer-v-b6as80'); el.classList.add('framer-v-1n9o4fv'); }
                            });
                            const activeEl = container.querySelector('.framer-XUfSa');
                            if (activeEl) { activeEl.classList.remove('framer-v-1n9o4fv'); activeEl.classList.add('framer-v-b6as80'); }
                            
                            activeCategory = catLabels[idx];
                            renderPropertyGrid();
                        };
                    }
                } else {
                    container.style.display = 'none'; // Hide Townhouse
                }
            });

            // Location Buttons
            const locContainers = document.querySelectorAll('.framer-x04yjr .framer-18hxue8-container');
            const locLabels = ["Noida", "Gurugram", "Noida Expressway"];
            locContainers.forEach((container, idx) => {
                if (idx < locLabels.length) {
                    const textEl = container.querySelector('p');
                    if (textEl) {
                        textEl.textContent = locLabels[idx];
                        // Click handler
                        container.onclick = (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            // Toggle active styling
                            locContainers.forEach(c => {
                                const el = c.querySelector('.framer-XUfSa');
                                if (el) { el.classList.remove('framer-v-b6as80'); el.classList.add('framer-v-1n9o4fv'); }
                            });
                            const activeEl = container.querySelector('.framer-XUfSa');
                            if (activeEl) { activeEl.classList.remove('framer-v-1n9o4fv'); activeEl.classList.add('framer-v-b6as80'); }
                            
                            activeLocation = locLabels[idx];
                            renderPropertyGrid();
                        };
                    }
                } else {
                    container.style.display = 'none'; // Hide other locations
                }
            });

            // Clear All click handler
            const clearBtn = document.querySelector('.framer-71zd8w-container');
            if (clearBtn) {
                clearBtn.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    activeCategory = "All";
                    activeLocation = "All";
                    activeStatus = "All";
                    
                    // Reset all button styles
                    document.querySelectorAll('.framer-XUfSa').forEach(el => {
                        el.classList.remove('framer-v-b6as80');
                        el.classList.add('framer-v-1n9o4fv');
                    });
                    
                    // Reset all/defaults to active
                    const allLoc = document.querySelector('.framer-p25yfx-container .framer-XUfSa');
                    if (allLoc) { allLoc.classList.remove('framer-v-1n9o4fv'); allLoc.classList.add('framer-v-b6as80'); }
                    
                    renderPropertyGrid();
                };
            }
        };

        customizeFilters();
        renderPropertyGrid();

        // Observe modifications to ensure React doesn't wipe our cards
        const gridObserver = new MutationObserver(() => {
            gridObserver.disconnect();
            renderPropertyGrid();
            gridObserver.observe(document.querySelector('.framer-1hh8qsi'), { childList: true, subtree: true });
        });
        const gridNode = document.querySelector('.framer-1hh8qsi');
        if (gridNode) {
            gridObserver.observe(gridNode, { childList: true, subtree: true });
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        processNode(document.body);
        cleanAboutPage();
        setupPropertiesPage();
        
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        });
        
        const modifyNav = () => {
            let linkContainers = document.querySelectorAll('.framer-qssj0m');
            if (linkContainers.length > 0) {
                linkContainers.forEach(container => {
                    if (container.dataset.modified) return;
                    container.dataset.modified = "true";
                    
                    let children = Array.from(container.children);
                    if (children.length >= 3) {
                        let templateNode = children[2]; // ABOUT link to clone
                        
                        // Create Home
                        let homeNode = templateNode.cloneNode(true);
                        let homeTextEl = homeNode.querySelector('.framer-text') || homeNode.querySelector('p');
                        if (homeTextEl) homeTextEl.textContent = "Home";
                        container.insertBefore(homeNode, children[0]);
                        
                        // Create Blog
                        let blogNode = templateNode.cloneNode(true);
                        let blogTextEl = blogNode.querySelector('.framer-text') || blogNode.querySelector('p');
                        if (blogTextEl) blogTextEl.textContent = "Blog";
                        container.appendChild(blogNode);
                        
                        // Create Contact Us
                        let contactNode = templateNode.cloneNode(true);
                        let contactTextEl = contactNode.querySelector('.framer-text') || contactNode.querySelector('p');
                        if (contactTextEl) contactTextEl.textContent = "Contact Us";
                        container.appendChild(contactNode);
                    }
                });
            }
        };

        const updateLogos = () => {
            document.querySelectorAll('img').forEach(img => {
                if (img.src.includes('hpBPVJ4EDWe6VR2UVdlcckRzGFo.svg') || 
                    img.src.includes('dCLiSk3yyEASIAiQcx3pqfCcTA.svg') ||
                    img.src.includes('wtAazKz9ClT6GcQ95wWsMeO0LI.svg') ||
                    img.src.includes('5pXNN0nOEKyuh5SSnsdP1bwaO5M.svg')) {
                    
                    if (!img.dataset.golden) {
                        img.dataset.golden = "true";
                        img.onerror = function() {
                            this.onerror = null;
                            this.src = 'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CSB-White-Logo.webp';
                            this.srcset = 'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CSB-White-Logo.webp';
                        };
                        img.src = 'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CSB-Logo.webp';
                        img.srcset = 'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CSB-Logo.webp';
                    }
                }
            });
            modifyNav();
        };
        updateLogos();
        setInterval(updateLogos, 500); 
    });
})();
</script>
"""

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Clean previous translator script injections
    content = re.sub(r'<script>\s*\(function\(\)\s*\{\s*// We use textContent trimming[\s\S]*?</script>', '', content)
    
    # Inject the updated translator script
    content = content.replace('</head>', TRANSLATOR_SCRIPT + '\n</head>')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Injected updated translator into: {filepath}")

def main():
    for root, dirs, files in os.walk(BASE_DIR):
        for fname in files:
            if fname.endswith('.html'):
                process_file(os.path.join(root, fname))

if __name__ == "__main__":
    main()
