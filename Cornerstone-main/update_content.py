import os
import re

BASE_DIR = r"d:\3DBuildcom\3Dbuildcom\homy.framer.media"

# All replacements: (old_text, new_text)
# Order matters — more specific strings first
REPLACEMENTS = [

    # ===== PAGE TITLE & META =====
    ("Homy - Find Your Perfect Home Easily", "Home - Corner Stone Buildcom"),
    ("Find, explore, and choose your perfect home with Homy. Browse modern properties, get expert guidance, and make confident real estate decisions with ease.",
     "Established in 2012, CornerStone Buildcom is a specialized real estate investment advisory firm focused on high‑quality commercial, premium residential."),

    # About page
    ("About - Homy", "About Us - Corner Stone Buildcom"),
    ("Properties - Homy", "Properties - Corner Stone Buildcom"),
    ("Privacy Policy - Homy", "Privacy Policy - Corner Stone Buildcom"),
    ("Terms of Service - Homy", "Terms of Service - Corner Stone Buildcom"),

    # OG / Twitter titles
    ("Homy - Find Your Perfect Home Easily", "Home - Corner Stone Buildcom"),

    # ===== NAVIGATION BRAND NAME =====
    ("Homy", "CornerStone Buildcom"),

    # ===== HERO SECTION =====
    ("Find Your Dream Home", "Build A Future‑Ready Property Portfolio"),
    ("Discover and find the perfect property with ease — search smarter, explore better, and move in sooner.",
     "Commercial, Premium Residential, Industrial."),
    ("Your Gateway to Perfect Living", "Discover High‑Yield Property Investments"),
    ("Office, Premium Residential, Retail, Industrial", "Office, Premium Residential, Retail, Industrial"),
    ("Browse Listings", "View Properties"),
    ("Get Started", "Inquire Now"),
    ("Start Searching", "Inquire Now"),
    ("Explore Properties", "View Properties"),

    # ===== ABOUT SECTION (HOME) =====
    ("About Homy", "About CornerStone Buildcom"),
    ("We&#x27;re a dedicated real estate agency committed to helping you find the perfect property. With years of experience, we offer personalized services for buyers, sellers, and renters.",
     "Established in 2012, CornerStone Buildcom is a specialized real estate investment advisory firm focused on high‑quality commercial, premium residential, branded retail, and industrial assets."),
    ("Real Estate Agency", "Experience‑Led Real Estate Advisory"),
    ("Experience & Trust Since 2010", "18+ Years of Real Estate Leadership"),
    ("With a decade of expertise, Homy has helped thousands find their perfect home through personalized service and in-depth market knowledge.",
     "The company is led by a founder with over 18 years of real estate experience since 2007, bringing deep market understanding and strong developer and investor networks."),

    # ===== SERVICES SECTION =====
    ("Our Services", "Our Core Services"),
    ("End‑to‑End Real Estate Advisory Solutions", "End‑to‑End Real Estate Advisory Solutions"),
    ("Comprehensive support across investment, leasing, due diligence, and fund support to help you grow and protect your real estate portfolio.",
     "Comprehensive support across investment, leasing, due diligence, and fund support to help you grow and protect your real estate portfolio."),

    # Service 1
    ("Property Search", "Strategic Real Estate Investments"),
    ("Find your ideal property with our advanced search tools and expert market knowledge.",
     "Strategic, research‑driven real estate investments across commercial, premium residential, and industrial assets, focused on stable cash flows, capital appreciation, and long‑term portfolio resilience for serious investors."),

    # Service 2
    ("Investment Advisory", "Integrated Leasing Solutions"),
    ("Expert guidance on real estate investments to maximize your returns and build long-term wealth.",
     "End‑to‑end leasing solutions for offices, industrial spaces, warehouses, large retail formats, and premium residences, designed to unlock higher ROI, faster occupancy, and lasting tenant relationships."),

    # Service 3
    ("Property Management", "Comprehensive Due Diligence &amp; Compliance"),
    ("Professional management services to maintain and enhance the value of your property portfolio.",
     "Comprehensive technical, legal, and compliance due diligence—covering title, documents, approvals, site condition, and financials—to ensure every property is legally clear, technically sound, and financially viable."),

    # Service 4
    ("Legal Support", "Smart Capital &amp; Fund Support"),
    ("Complete legal assistance for all your real estate transactions, ensuring smooth and secure dealings.",
     "Smart capital and financial structuring support, from loans and LRD to PE/VC access, helping clients secure the right capital, optimise costs, and accelerate sustainable growth beyond transactions."),

    # ===== FEATURED PROPERTIES =====
    ("Featured Properties", "Our Featured Projects"),
    ("Showcasing Prime, High‑Performing Developments", "Showcasing Prime, High‑Performing Developments"),
    ("Explore a curated selection of premium properties designed for modern living and investment.",
     "Explore a curated selection of office, premium residential, retail, and industrial projects designed for strong returns and long‑term value."),

    # Property names
    ("Beachfront Villa", "Max"),
    ("Coral Gables Home", "Jacob"),
    ("The Arista Lux", "DLF"),
    ("Hillside View House", "Nimbus"),
    ("Lakefront Condo", "Cullinan"),
    ("Modern Hillside Home", "Trump"),

    # Property descriptions
    ("A stunning beachfront property with panoramic ocean views and direct beach access.",
     "Future-Focused Premium Living with Sustainable Value Growth."),
    ("Elegant coral gables architecture with lush tropical landscaping and resort-style amenities.",
     "Branded Ultra-Luxury with Scarcity-Driven Appreciation."),
    ("Stylish urban loft in the heart of the financial district with floor-to-ceiling windows.",
     "Where Legacy Converts to Wealth."),
    ("Breathtaking hillside property with sweeping valley views and a private infinity pool.",
     "Strategic Real Estate Crafted for Intelligent Market Control."),
    ("Luxurious lakefront condominium with stunning water views and premium amenities.",
     "The Crown Jewel of Noida&#x27;s Ultra-Luxury Living."),
    ("Contemporary hillside home with clean lines and spectacular panoramic city views.",
     "The World&#x27;s Most Dominant Luxury Brand Commanding Noida&#x27;s Skyline."),

    # ===== STATS / COUNTER SECTION =====
    ("1,200+", "18+"),
    ("Happy Clients", "Years Experience"),
    ("500+", "2012"),
    ("Properties Sold", "Founded"),
    ("15+", "100+"),
    ("Years Experience", "Projects Delivered"),
    ("98%", "500+"),
    ("Client Satisfaction", "Clients Served"),

    # ===== WHY CHOOSE US =====
    ("Why Choose Homy", "Why Choose CornerStone Buildcom"),
    ("Experience. Trust. Performance.", "Experience. Trust. Performance."),
    ("Built on 18+ years of experience, CornerStone Buildcom combines strategic market insight, trusted partnerships, and end‑to‑end real estate expertise.",
     "Built on 18+ years of experience, CornerStone Buildcom combines strategic market insight, trusted partnerships, and end‑to‑end real estate expertise."),

    # Points
    ("Expert Agents", "End-to-End Leasing Expertise"),
    ("Our team of experienced real estate professionals brings deep market knowledge and proven expertise to every transaction.",
     "From property scouting to final agreement — we handle everything seamlessly so you can focus on growing your business."),
    ("Verified Listings", "Verified &amp; Value-Driven Spaces"),
    ("Every property on our platform is thoroughly verified for authenticity and legal compliance, ensuring peace of mind.",
     "Every property is legally vetted, RERA-checked, and location-analyzed to ensure maximum return and zero risk."),
    ("Market Insights", "Trust &amp; Experience Since 2012"),
    ("Access comprehensive market data and analysis to make informed investment decisions.",
     "Led by Rajesh Ghai, CornerStone Buildcom is built on transparency, strong developer networks, and long-term client relationships."),

    # ===== PARTNERS / LOGOS =====
    ("Trusted By Industry Leaders", "Valued Partners in Real Estate Growth"),
    ("Our Partners", "Valued Partners in Real Estate Growth"),

    # ===== WHO WE SUPPORT =====
    ("Who We Serve", "Who We Support"),
    ("Specialised support for investors, businesses, and developers who view real estate and capital as strategic growth enablers.",
     "Specialised support for investors, businesses, and developers who view real estate and capital as strategic growth enablers."),

    # Client types
    ("First-Time Buyers", "Real estate investors and family offices"),
    ("Experienced Investors", "Developers and project owners"),
    ("Commercial Clients", "Corporate occupiers and enterprise clients"),
    ("Property Developers", "Retail chains and F&amp;B brands"),
    ("Renters", "Industrial and logistics companies"),
    ("International Buyers", "NRIs seeking investment‑friendly Indian assets"),

    # ===== CTA SECTION =====
    ("Start Your Investment Journey", "Start Your Investment Journey"),
    ("Build Your Next Real Estate Portfolio with Experts", "Build Your Next Real Estate Portfolio with Experts"),
    ("Connect with our advisory team today and explore secure, high‑yield real estate opportunities backed by proven expertise.",
     "Connect with our advisory team today and explore secure, high‑yield real estate opportunities backed by proven expertise."),
    ("Connect on WhatsApp", "Connect on WhatsApp"),
    ("Book a Consultation", "Book a Consultation"),
    ("Ready to Find Your Dream Home?", "Build Your Next Real Estate Portfolio with Experts"),
    ("Let our expert team guide you through the process of finding your perfect property.",
     "Connect with our advisory team today and explore secure, high‑yield real estate opportunities backed by proven expertise."),
    ("Contact Us Today", "Book a Consultation"),
    ("Start Your Journey", "Book a Consultation"),

    # ===== FOOTER =====
    ("© 2024 Homy. All rights reserved.", "© 2025 Corner Stone Buildcom. All rights reserved. Designed By Sprint Digitech."),
    ("© 2025 Homy. All rights reserved.", "© 2025 Corner Stone Buildcom. All rights reserved. Designed By Sprint Digitech."),
    ("Your trusted partner in real estate", "Your trusted partner in real estate investment advisory"),
    ("hello@homy.com", "info@cornerstonebuildcom.com"),
    ("info@homy.com", "info@cornerstonebuildcom.com"),
    ("+1 (555) 123-4567", "+91-9654335826"),
    ("+1 (555) 000-0000", "+91-9654335826"),
    ("123 Real Estate Avenue, New York, NY 10001", "111-F-Block, Sector-8 Noida-201301"),
    ("456 Property Lane, Beverly Hills, CA 90210", "111-F-Block, Sector-8 Noida-201301"),

    # Footer links
    ("Quick Links", "Quick Links"),
    ("Buy Properties", "Office Spaces"),
    ("Rent Properties", "Premium Residential"),
    ("Sell Property", "Industrial/Warehouse"),
    ("New Developments", "Retail"),

    # ===== ABOUT PAGE =====
    ("Our Story", "About CornerStone Buildcom"),
    ("Homy was founded with a simple mission: to make finding your perfect home an enjoyable and stress-free experience.",
     "Founded in 2012, CornerStone Buildcom is a specialized Real Estate Investment Advisory firm driven by experience, integrity, and results."),
    ("Our Mission", "Our Philosophy"),
    ("To provide exceptional real estate services that empower our clients to make confident property decisions.",
     "At CornerStone Buildcom, every recommendation begins with clarity, trust, and strategy."),
    ("Our Vision", "Our Vision"),
    ("To be the most trusted real estate platform, connecting people with properties that transform their lives.",
     "To be India&#x27;s premier real estate investment partner, renowned for institutional-grade advisory, powerful networks, and consistent value creation."),

    # ===== CONTACT PAGE =====
    ("Get In Touch", "Get In Touch"),
    ("Your Next Landmark Begins Here", "Your Next Landmark Begins Here"),
    ("We work with visionaries, leaders, and enterprises to create spaces that define legacy. Let&#x27;s start the conversation.",
     "We work with visionaries, leaders, and enterprises to create spaces that define legacy. Let&#x27;s start the conversation."),
    ("We&#x27;d love to hear from you. Send us a message and we&#x27;ll respond as soon as possible.",
     "We work with visionaries, leaders, and enterprises to create spaces that define legacy. Let&#x27;s start the conversation."),
    ("Send Message", "Submit"),
    ("Our Address", "Our Address"),
    ("Phone Number", "Phone No"),
    ("Email Address", "Email Address"),

    # ===== PROPERTIES PAGE =====
    ("All Properties", "All Properties"),
    ("For Sale", "Commercial Office Space"),
    ("For Rent", "Premium Residential"),
    ("Commercial", "Branded Retail"),
    ("New Development", "Industrial/Warehouse"),

    # ===== INVESTMENT PAGE =====
    ("Investor-Focused Real Estate Advisory", "Investor-Focused Real Estate Advisory"),
    ("Premium Investment Advisory", "Premium Investment Advisory"),
    ("Elite Capital Allocators", "Elite Capital Allocators"),

    # ===== LEASING PAGE =====
    ("Strategic Leasing Extension", "Strategic Leasing Extension"),
    ("Premium Leasing Advisory", "Premium Leasing Advisory"),

    # ===== DUE DILIGENCE PAGE =====
    ("Risk Elimination Expertise", "Risk Elimination Expertise"),
    ("Due Diligence and Government Licensing Support", "Due Diligence and Government Licensing Support"),

    # ===== FUND SUPPORT PAGE =====
    ("Smart Capital Solutions", "Smart Capital Solutions"),
    ("Capital Fund Support Services", "Capital Fund Support Services"),

    # ===== BLOG PAGE =====
    ("Real Estate Insights", "Real Estate Insights"),
    ("Latest from Our Blog", "Latest from Our Blog"),

    # ===== GENERIC TEMPLATE TEXTS =====
    ("homy.framer.media", "cornerstonebuildcom.com"),
    ("Homy Real Estate", "CornerStone Buildcom"),
    ("homy", "CornerStone Buildcom"),
    ("Find Your Perfect Home", "Build Your Real Estate Portfolio"),
    ("Your Dream Home Awaits", "Your Investment Journey Begins Here"),
    ("Modern Real Estate Platform", "Real Estate Investment Advisory"),

    # Opening hours / top bar
    ("Mon - Fri: 9am - 6pm", "Opening Hour : 9:00AM - 6:00 PM"),
    ("Mon-Fri: 9:00 AM - 6:00 PM", "Opening Hour : 9:00AM - 6:00 PM"),

    # Phone numbers
    ("(555) 123-4567", "+91-9654335826"),
    ("555-123-4567", "+91-9654335826"),
]


def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    original = content
    for old, new in REPLACEMENTS:
        content = content.replace(old, new)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"[UPDATED] {filepath}")
    else:
        print(f"[SKIP]    {filepath}")


def main():
    html_files = []
    for root, dirs, files in os.walk(BASE_DIR):
        for fname in files:
            if fname.endswith('.html'):
                html_files.append(os.path.join(root, fname))

    print(f"Found {len(html_files)} HTML files to process...\n")
    for fpath in html_files:
        process_file(fpath)
    print("\n[DONE] All content updated.")


if __name__ == "__main__":
    main()
