import os

BASE_DIR = r"d:\3DBuildcom\3Dbuildcom\homy.framer.media"

TRANSLATOR_SCRIPT = """
<script>
(function() {
    const translations = {
        "Homy": "CornerStone Buildcom",
        "homy.framer.media": "cornerstonebuildcom.com",
        "Buy a Home": "Strategic Real Estate Investments",
        "Find Homes Perfect For You": "Research-driven real estate investments across commercial, premium residential.",
        "Rent a Home": "Integrated Leasing Solutions",
        "Find Rental Homes With Ease": "End-to-end leasing solutions for offices, industrial spaces, warehouses.",
        "Explore Listings": "Comprehensive Due Diligence",
        "Explore Available Properties Easily": "Comprehensive technical, legal, and compliance due diligence.",
        "Focused discovery, built real choices.": "Elie Saab Branded Residences India",
        "design platforms that help buyers explore homes, understand value, move forward with confidence.": "India's first ultra-luxury residences curated by Elie Saab.",
        "Real insights behind every property decision": "About CornerStone Buildcom",
        "Built to make modern home discovery simple, transparent, and more confident for every user.": "Established in 2012, CornerStone Buildcom is a specialized real estate investment advisory firm.",
        "Dallas Townhouse": "DLF",
        "Urban Modern House": "Max",
        "What people about their home search": "Why Clients Choose CornerStone Buildcom",
        "Things Should Know": "Frequently Asked Questions",
        "How do I start searching for a home?": "What makes CornerStone Buildcom different?",
        "You can browse available properties, apply filters, and explore listings based on your needs and location.": "Investor-first approach combining 18+ years expertise, rigorous due diligence, integrated leasing.",
        "Can I filter homes by budget & location?": "Which markets do you specialize in?",
        "Yes, you can easily filter properties by price range, location, and other preferences.": "Primary focus on Noida, Delhi NCR with strong capabilities across India's premium commercial corridors.",
        "Are the property details accurate?": "Do you support NRI investments?",
        "We provide updated and verified details to help you make informed decisions.": "Yes. Complete guidance on compliant structures, documentation, financing, and portfolio management.",
        "How do I contact a owner or agent?": "How does your due diligence process work?",
        "Each listing includes contact options so you can directly connect for more information.": "Comprehensive title verification, technical audits, compliance checks, site inspections, and financial evaluation.",
        "Can I explore rental and buying options": "Can leasing improve investment returns?",
        "Yes, you can browse both rental and purchase options in one place.": "Absolutely. Strategic leasing delivers higher ROI through faster occupancy, quality tenants.",
        "Do I need an account to use platform": "What funding solutions do you offer?",
        "You can browse freely, but creating an account helps you save and manage your preferences.": "Commercial loans, LRD, working capital, industrial financing, PE/VC connections.",
        "How do I know if a property is available?": "What's your typical client profile?",
        "Availability is updated regularly, but we recommend contacting the listing for confirmation.": "Serious investors, developers, corporates, retail brands, industrial players, startups, and NRIs.",
        "Find your next home": "Build Your Real Estate Portfolio",
        "Discover homes designed your lifestyle": "Connect with our advisory team today and explore secure opportunities.",
        "homy@yopmail.com": "info@cornerstonebuildcom.com",
        "New York, USA": "111-F-Block, Sector-8 Noida-201301",
        "+123 456 000": "+91-9654335826"
    };

    function replaceText(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.nodeValue;
            let changed = false;
            for (let key in translations) {
                if (text.includes(key)) {
                    text = text.replace(new RegExp(key, 'g'), translations[key]);
                    changed = true;
                }
            }
            if (changed) {
                node.nodeValue = text;
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Do not traverse script or style tags
            if (node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
                for (let child of node.childNodes) {
                    replaceText(child);
                }
            }
        }
    }

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    replaceText(node);
                });
            } else if (mutation.type === 'characterData') {
                let text = mutation.target.nodeValue;
                let changed = false;
                for (let key in translations) {
                    if (text.includes(key)) {
                        text = text.replace(new RegExp(key, 'g'), translations[key]);
                        changed = true;
                    }
                }
                if (changed) {
                    mutation.target.nodeValue = text;
                }
            }
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        replaceText(document.body);
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        });
        
        // Also update logos
        const updateLogos = () => {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                if (img.src.includes('hpBPVJ4EDWe6VR2UVdlcckRzGFo.svg') || img.src.includes('dCLiSk3yyEASIAiQcx3pqfCcTA.svg')) {
                    img.src = 'https://cornerstonebuildcom.com/wp-content/uploads/2024/09/CSB-White-Logo.webp';
                    img.srcset = '';
                }
            });
        };
        updateLogos();
        setInterval(updateLogos, 500); // Keep enforcing logo
    });
})();
</script>
"""

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if "translations = {" not in content:
        content = content.replace('</head>', TRANSLATOR_SCRIPT + '\n</head>')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Injected into: {filepath}")

def main():
    for root, dirs, files in os.walk(BASE_DIR):
        for fname in files:
            if fname.endswith('.html'):
                process_file(os.path.join(root, fname))

if __name__ == "__main__":
    main()
