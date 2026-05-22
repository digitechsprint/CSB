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

    document.addEventListener("DOMContentLoaded", () => {
        processNode(document.body);
        cleanAboutPage();
        
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
