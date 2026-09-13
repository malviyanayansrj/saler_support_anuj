export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  tagline: string;
  heroDescription: string;
  iconName: string;
  badge: string;
  highlights: string[];
  features: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortDescription: "Drive traffic, build brand authority, and scale eCommerce sales with targeted social campaigns.",
    tagline: "Engage Audiences & Boost Conversions",
    heroDescription: "Scale your brand with data-driven social media strategies. From Instagram Reels to targeted Meta & Google Ads, we connect your marketplace store with high-intent shoppers.",
    iconName: "Share2",
    badge: "Growth Marketing",
    highlights: [
      "Targeted Meta (FB & Insta) & TikTok/YouTube Ad Campaigns",
      "High-Converting Visual Content & Reels Creation",
      "Influencer Partnership & Brand Ambassador Outreach",
      "ROAS-Driven Traffic Funnels to Marketplace Storefronts",
    ],
    features: [
      {
        title: "Targeted Paid Advertising",
        description: "Laser-focused Meta & Google ad campaigns engineered to send warm buyer traffic directly to your Amazon, Flipkart, or D2C listings.",
      },
      {
        title: "Social Commerce Content",
        description: "Engaging short-form videos, product showcases, and lifestyle graphics that capture attention and drive purchase intent.",
      },
      {
        title: "Influencer Collaboration",
        description: "Partner with niche content creators and micro-influencers to build social proof, trust, and organic viral reach for your brand.",
      },
      {
        title: "Retargeting & Audience Funnels",
        description: "Re-engage past visitors and abandoned cart users across social platforms to maximize sales conversions and customer lifetime value.",
      },
    ],
    benefits: [
      {
        title: "Increased External Marketplace Traffic",
        description: "Boost your search rank on Amazon & Flipkart by sending high-quality off-Amazon traffic to your product listings.",
      },
      {
        title: "Enhanced Brand Authority",
        description: "Establish a cohesive visual brand presence that inspires trust and turns casual scrollers into repeat buyers.",
      },
      {
        title: "Higher Return on Ad Spend (ROAS)",
        description: "Continuous audience optimization and creative A/B testing ensure every ad rupee spent drives measurable revenue.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audience & Competitor Audit",
        description: "We analyze target customer demographics, competitor campaigns, and channel benchmarks to pinpoint key growth opportunities.",
      },
      {
        step: "02",
        title: "Creative Strategy & Setup",
        description: "Our design team crafts high-impact ad copy, video creatives, and sets up audience tracking pixels across platforms.",
      },
      {
        step: "03",
        title: "Campaign Execution",
        description: "We launch multi-channel campaigns with automated budget allocation and daily performance tracking.",
      },
      {
        step: "04",
        title: "Optimization & Scaling",
        description: "Continuous creative refresh, audience pruning, and scaling high-ROAS campaign structures for maximum ROI.",
      },
    ],
    faqs: [
      {
        question: "How does social media marketing help my marketplace store?",
        answer: "Marketplace algorithms (like Amazon A10) heavily reward products that bring external traffic. Social media ads drive high-intent buyers directly to your product pages, increasing rank, conversion rate, and overall sales velocity.",
      },
      {
        question: "Which social media platforms do you manage?",
        answer: "We primarily focus on Instagram, Facebook, YouTube Shorts, Google Ads, and Pinterest, tailored based on where your ideal customers spend their time.",
      },
      {
        question: "Do you create the graphics and video content?",
        answer: "Yes! Our in-house creative team produces eye-catching graphics, video ads, product showcases, and promotional copy customized to your brand identity.",
      },
    ],
  },
  {
    slug: "marketplace-brand-store",
    title: "Marketplace Brand Store",
    shortDescription: "Custom Amazon Brand Stores, Flipkart Hubs, and high-impact A+ Content modules.",
    tagline: "Immersive Visual Branding & Premium Storefronts",
    heroDescription: "Transform your marketplace presence with a custom Brand Storefront and stunning A+ Enhanced Brand Content. Showcase your full product line and elevate brand perception.",
    iconName: "Store",
    badge: "Brand Identity",
    highlights: [
      "Custom Amazon Storefront & Flipkart Brand Hub Design",
      "High-Impact A+ / EBC (Enhanced Brand Content) Modules",
      "Mobile-Optimized Responsive Store Layouts",
      "Cross-Selling Module Setup & Category Structuring",
    ],
    features: [
      {
        title: "Custom Storefront Architecture",
        description: "Multi-page visual store design with custom navigation, banner sliders, category grids, and seasonal promotional zones.",
      },
      {
        title: "Premium A+ Content Design",
        description: "High-resolution comparison charts, lifestyle imagery, infographic banners, and feature callouts that dramatically raise conversion rates.",
      },
      {
        title: "Brand Storytelling & Heritage",
        description: "Communicate your unique brand mission, product quality standards, and customer promises with immersive brand story modules.",
      },
      {
        title: "Cross-Selling & Bundle Graphics",
        description: "Visually cross-sell complementary products in your catalog to increase Average Order Value (AOV) and customer basket size.",
      },
    ],
    benefits: [
      {
        title: "Up to 30%+ Conversion Rate Lift",
        description: "A+ content and dedicated brand stores build trust quickly, directly reducing buyer hesitation and return rates.",
      },
      {
        title: "Higher Customer Retention",
        description: "Give shoppers a dedicated space to explore your full product portfolio rather than losing them to competitor ads.",
      },
      {
        title: "Distraction-Free Shopping Zone",
        description: "Amazon Brand Stores eliminate competitor sponsored ads from appearing on your store pages, keeping attention strictly on your brand.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brand Asset Review & Blueprint",
        description: "We review your brand guidelines, logo assets, photography, and catalog structure to plan a custom layout map.",
      },
      {
        step: "02",
        title: "Visual Graphic Design",
        description: "Our graphic designers craft custom banners, infographic modules, and visual product comparison charts.",
      },
      {
        step: "03",
        title: "Store Construction & Upload",
        description: "We assemble the multi-page store layout within Seller Central / Brand Registry and submit for marketplace review.",
      },
      {
        step: "04",
        title: "Approval & Performance Tracking",
        description: "After marketplace approval, we monitor store analytics, visitor metrics, and sales conversions to refine layouts over time.",
      },
    ],
    faqs: [
      {
        question: "Do I need Brand Registry to get a Brand Store or A+ Content?",
        answer: "Yes, marketplaces like Amazon require an active registered trademark or Brand Registry approval to access Brand Storefronts and A+ Content. (We can also assist you with Trademark registration if needed!).",
      },
      {
        question: "How long does it take to design and publish a Brand Store?",
        answer: "Typically, design and publishing takes 5 to 10 business days depending on the number of pages and catalog variations.",
      },
      {
        question: "Can we update the store for seasonal sales like Festive or Diwali offers?",
        answer: "Absolutely! We provide ongoing store management to update seasonal banners, deal highlights, and new product launches.",
      },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortDescription: "Custom eCommerce websites, Shopify stores, and fast web applications built for D2C growth.",
    tagline: "High-Performance Direct-To-Consumer Digital Stores",
    heroDescription: "Establish direct ownership of your customer relationships. We build lightning-fast, conversion-optimized D2C websites and Shopify stores tailored for Indian and global brands.",
    iconName: "Code",
    badge: "Web Engineering",
    highlights: [
      "Custom Shopify & Next.js / React D2C eCommerce Stores",
      "Seamless Payment Gateway Setup (Razorpay, PhonePe, Cashfree, UPI)",
      "Automated Shipping & Courier Logistics Integration (Shiprocket, Delhivery)",
      "Mobile-First Responsive Design & Ultra-Fast Page Speeds",
    ],
    features: [
      {
        title: "Conversion-Focused Store Architecture",
        description: "Custom UI/UX designed specifically to reduce cart abandonment, speed up checkout, and highlight key product benefits.",
      },
      {
        title: "Payment & Cash on Delivery (COD) Setup",
        description: "Complete integration with Indian payment gateways, instant UPI payments, and automated COD verification to reduce fake orders.",
      },
      {
        title: "Logistics & Order Sync",
        description: "Direct API connection with logistics aggregator platforms for automated shipping label printing and real-time order tracking.",
      },
      {
        title: "SEO & Performance Speed Optimization",
        description: "Core Web Vitals compliance, schema markup, and optimized media assets for top search engine rankings and sub-second page loads.",
      },
    ],
    benefits: [
      {
        title: "Zero Commission on Sales",
        description: "Sell directly to your customers without paying 15% to 30% seller commission fees to third-party marketplaces.",
      },
      {
        title: "Full Customer Data Ownership",
        description: "Collect buyer email addresses and phone numbers to build direct SMS/WhatsApp remarketing campaigns.",
      },
      {
        title: "Unlimited Brand Customization",
        description: "Total freedom over layout, promotional popups, customer loyalty points, and custom bundle builder offers.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirement & Architecture Planning",
        description: "We map out your catalog hierarchy, integration requirements, payment gateways, and design preferences.",
      },
      {
        step: "02",
        title: "UI/UX & Interactive Prototyping",
        description: "Designing sleek, modern visual layouts focused on mobile UX, fast product discovery, and one-click checkout.",
      },
      {
        step: "03",
        title: "Development & Integration",
        description: "Building the application code, connecting payment gateways, logistics partners, and inventory sync systems.",
      },
      {
        step: "04",
        title: "Testing, QA & Launch",
        description: "Performing stress testing, payment processing tests, mobile responsiveness checks, and deploying to live servers.",
      },
    ],
    faqs: [
      {
        question: "Which platforms do you use for website development?",
        answer: "We specialize in Shopify, Next.js / React custom web applications, WooCommerce, and custom headless commerce stacks based on your business scale.",
      },
      {
        question: "Can I manage product inventory myself after launch?",
        answer: "Yes! We provide complete administrative dashboard training so you can easily add products, update prices, manage stock, and process orders.",
      },
      {
        question: "Do you integrate Indian payment gateways and UPI?",
        answer: "Yes, we fully integrate Razorpay, PhonePe, PayU, Paytm, Cashfree, and WhatsApp payment links along with COD OTP verification.",
      },
    ],
  },
  {
    slug: "gst-trademark-registration",
    title: "GST & Trademark Registration",
    shortDescription: "Seamless GST registration, Brand Registry support, and legal Trademark filing across India.",
    tagline: "Complete Legal Compliance & Intellectual Property Protection",
    heroDescription: "Launch and protect your seller business without legal hurdles. We handle new GST registration, APOB setup, Brand Registry approval, and Trademark filing from start to finish.",
    iconName: "ShieldCheck",
    badge: "Legal & Compliance",
    highlights: [
      "New GST Registration & Multi-State Additional Place of Business (APOB)",
      "Trademark Application Filing (TM Class Search & Documentation)",
      "Amazon & Flipkart Brand Registry Approval Support",
      "GST Monthly Filing & Seller Tax Compliance Advisory",
    ],
    features: [
      {
        title: "New GST Account Setup",
        description: "Hassle-free application process for new business entities, sole proprietorships, partnerships, and private limited companies.",
      },
      {
        title: "APOB / VPOB Registration for FCs",
        description: "Register Virtual Place of Business (VPOB) or Additional Place of Business (APOB) to store inventory in Amazon FBA / Flipkart Smart warehouses across multiple states.",
      },
      {
        title: "Trademark Filing & Protection",
        description: "Comprehensive TM brand search, class recommendation (Class 35, Class 25, etc.), application drafting, and official registry submission.",
      },
      {
        title: "Brand Registry Onboarding",
        description: "Use your filed TM application number to immediately unlock Amazon Brand Registry and protect your listings from hijackers.",
      },
    ],
    benefits: [
      {
        title: "100% Tax & Legal Compliance",
        description: "Avoid heavy penalties and marketplace seller account holds with error-free tax registrations and filings.",
      },
      {
        title: "Protection Against Counterfeiters",
        description: "Trademark registration gives you legal ownership of your brand name and single-click listing violation report rights.",
      },
      {
        title: "Pan-India Warehouse Expansion",
        description: "Multi-state APOB allows you to place inventory near customers nationwide, unlocking fast Prime & Assured delivery tags.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Document Verification",
        description: "We collect and audit your PAN card, Aadhaar, bank statements, and address verification proofs to ensure zero application rejections.",
      },
      {
        step: "02",
        title: "Application Drafting & Search",
        description: "Conducting thorough government registry database checks and drafting official legal registration forms.",
      },
      {
        step: "03",
        title: "Government Portal Submission",
        description: "Filing directly on the GST portal or IP India TM portal and providing official acknowledgment receipts.",
      },
      {
        step: "04",
        title: "Marketplace Brand Approval",
        description: "Helping you link the issued GST certificate and TM application code to Amazon, Flipkart, and Meesho seller dashboards.",
      },
    ],
    faqs: [
      {
        question: "Is GST mandatory to sell online on Amazon and Flipkart?",
        answer: "Yes, under Indian GST laws, selling goods across state boundaries via eCommerce marketplaces requires a valid GSTIN regardless of turnover.",
      },
      {
        question: "Can I apply for Amazon Brand Registry with a pending Trademark application?",
        answer: "Yes! Amazon accepts TM application numbers (TM pending status) for Brand Registry approval in India and global marketplaces.",
      },
      {
        question: "What documents are required for GST registration?",
        answer: "You will need PAN Card, Aadhaar Card, Passport photo, Business address proof (Rent agreement/Electricity bill), and a cancelled cheque.",
      },
    ],
  },
  {
    slug: "marketplaces-account-management",
    title: "Marketplaces Account Management services",
    shortDescription: "End-to-end account management for Amazon, Flipkart, Meesho, JioMart & Blinkit.",
    tagline: "Dedicated Management to Scale Your Marketplace Revenue",
    heroDescription: "Delegate your complete day-to-day seller operations to specialized account managers. We handle cataloging, PPC optimization, inventory forecasting, and account health maintenance.",
    iconName: "Layers",
    badge: "Full-Service Management",
    highlights: [
      "Dedicated Account Manager for Daily Store Operations",
      "Amazon, Flipkart, Meesho, JioMart & Blinkit Management",
      "Listing Optimization & Catalog SEO Enhancement",
      "PPC Advertising & ACoS Reduction Strategies",
      "Account Health Recovery & Suspension Prevention",
    ],
    features: [
      {
        title: "Full Catalog & Listing Management",
        description: "Error-free bulk product uploads, category mapping, variation family creation, and high-ranking search keyword optimization.",
      },
      {
        title: "Data-Driven PPC Ad Campaigns",
        description: "Hands-on setup, keyword bid adjustments, negative keyword mining, and aggressive ACoS reduction to maximize profit margins.",
      },
      {
        title: "Account Health & Policy Protection",
        description: "Proactive metric monitoring, Plan of Action (POA) drafting for policy warnings, and fast resolution of suppressed listings.",
      },
      {
        title: "Inventory & Fulfillment Strategy",
        description: "Stock out alerts, replenishment planning for FBA / Flipkart Smart, and return order claim reconciliation.",
      },
    ],
    benefits: [
      {
        title: "Dedicated Specialist Focus",
        description: "Get a full team of experienced marketplace managers for a fraction of the cost of hiring internal staff.",
      },
      {
        title: "Consistent Sales & Revenue Growth",
        description: "Systematic SEO, bid management, and deal participation ensure steady growth in monthly order volume.",
      },
      {
        title: "Peace of Mind & Risk Mitigation",
        description: "Protect your seller account metrics from policy strikes, ODR spikes, and unexpected listing suppressions.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Store Audit & Growth Assessment",
        description: "We audit your existing seller accounts to identify listing errors, wasted ad spend, and immediate sales growth levers.",
      },
      {
        step: "02",
        title: "Onboarding & Manager Assignment",
        description: "Assigning your dedicated marketplace manager and establishing a direct WhatsApp / Slack communication channel.",
      },
      {
        step: "03",
        title: "Daily Operations & PPC Management",
        description: "Managing daily listing updates, bid optimizations, case logs with seller support, and promotion submissions.",
      },
      {
        step: "04",
        title: "Weekly Growth Reporting",
        description: "Providing detailed weekly sales, traffic, and ad performance reports with actionable next-quarter roadmap plans.",
      },
    ],
    faqs: [
      {
        question: "Which marketplaces do you support under full account management?",
        answer: "We manage accounts across Amazon.in, Flipkart, Meesho, JioMart, Blinkit, Zepto, Myntra, and Nykaa.",
      },
      {
        question: "How do we communicate with our assigned Account Manager?",
        answer: "You get direct access to your dedicated Account Manager via dedicated WhatsApp group, phone calls, and scheduled weekly review meetings.",
      },
      {
        question: "Do you offer custom service packages if I only need PPC management or Cataloging?",
        answer: "Yes! While we offer full-service management, we can tailor custom packages based on your exact requirements.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}

export function getAllServices(): ServiceDetail[] {
  return SERVICES_DATA;
}
