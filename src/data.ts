import { ServiceItem, PartnerItem, TestimonialItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'operations',
    title: 'Operations & Menu Engineering',
    description: 'Helping hospitality businesses improve systems, service, and day-to-day operations and menu engineering & execution.',
    longDescription: 'We conduct forensic audits of your floor operations, back-of-house flows, and menu metrics. By balancing culinary craft with rigid kitchen margin controls, we optimize prep cycles, glass/plate ware sourcing, and menu layout layout psychology to drive efficiency and average guest cover spends.',
    icon: 'Sparkles',
    category: 'Operations',
    deliverables: [
      'Day-to-Day Floor Operational Streamlining',
      'Menu Costing & Forensic Cost of Goods Sold (COGS)',
      'Service Standards & High-Motivation Kitchen Manuals',
      'Kitchen Prep Sheets & Wastage Control Systems'
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management & Launches',
    description: 'Launching concepts, managing complex projects, and coordinating cross-functional teams smoothly.',
    longDescription: 'From subterranean cocktail bars in London to high-volume pop-ups and restaurant openings internationally, we manage the full lifecycle. We coordinate contractors, designer briefs, launch rosters, and suppliers, ensuring your concept opens on schedule and operates flawlessly from night one.',
    icon: 'Compass',
    category: 'Launches',
    deliverables: [
      'Concept Feasibility & Launch Timelines',
      'Designer & Contractor Coordination Briefs',
      'Supplier Sourcing & Vendor Procurement Setup',
      'Roster & Recruitment Planning Sheets'
    ]
  },
  {
    id: 'events',
    title: 'Events & Experiences',
    description: 'Planning, structuring, and delivering highly memorable, hospitality-led events.',
    longDescription: 'Hospitality is live theater. We conceive, program, and manage bespoke sensory events, brand pop-ups, and culinary activations. We handle logistics, team coordination, guest curation, and live operations management so your brand leaves a lasting cultural impression.',
    icon: 'GlassWater',
    category: 'Experiences',
    deliverables: [
      'End-to-End Event Operations & Logistics Map',
      'Pop-up Venue Coordination & Licensing Advisory',
      'Bespoke Sensory & Beverage Program Activation',
      'Live Guest Flow & Service Direction'
    ]
  },
  {
    id: 'content',
    title: 'Content & Storytelling',
    description: 'Photography, video direction, professional copywriting, and tailored social media support.',
    longDescription: 'A premium venue deserves high-identity storytelling. We deliver photography, cinematic video direction, copywriting, and social media framework plans that capture the soul of your physical environment and menu, translating digital engagement into offline seat bookings.',
    icon: 'BarChart3',
    category: 'Creative',
    deliverables: [
      'Aesthetic Photography & Video Directives',
      'Brand Tone-of-Voice & Creative Copywriting Guides',
      'Social Media Engagement & Content Frameworks',
      'Press Release & PR Story Kits'
    ]
  },
  {
    id: 'business-development',
    title: 'Business Development',
    description: 'Strategic industry partnerships, expansion strategies, and commercial growth opportunities.',
    longDescription: 'We help hospitality groups scale. From identifying high-value brand collaborations to scouting prime locations, advising on franchising, and connecting you with strategic suppliers, we unlock new pathways to sustainable revenue growth and margin protection.',
    icon: 'Compass',
    category: 'Growth',
    deliverables: [
      'Brand Collaboration & Partnership Blueprints',
      'Operational Expansion & Franchise Feasibility',
      'Supplier Network & Key-Account Introductions',
      'Commercial Sourcing & Venue Location Advisory'
    ]
  }
];

export const PARTNERS: PartnerItem[] = [
  {
    id: 'partner-1',
    name: 'Marriott USA Culinary',
    role: 'International Recruitment & Placement Support',
    location: 'United States',
    logoText: 'MARRIOTT',
    accentColor: '#3E63DD'
  },
  {
    id: 'partner-2',
    name: 'Michelin Restaurant Group',
    role: 'Operations & Service Standards Redesign',
    location: 'London, UK',
    logoText: 'MICHELIN',
    accentColor: '#D4F446'
  },
  {
    id: 'partner-3',
    name: 'Boutique Pop-up Series',
    role: 'Concept Launch & Project Delivery',
    location: 'Australia / Türkiye',
    logoText: 'BOUTIQUE',
    accentColor: '#F75A5A'
  },
  {
    id: 'partner-4',
    name: 'Eroglu Family Kitchens',
    role: 'Legacy Operations & Menu Execution',
    location: 'Türkiye',
    logoText: 'EROGLU',
    accentColor: '#AF52DE'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: "Bilge's hands-on background working at every single level of hospitality — from pot wash to Michelin-starred kitchens — is incredibly obvious. She doesn't just hand over spreadsheets; she works on the floor, identifies bottlenecks, and simplifies our systems completely. A game changer.",
    author: 'Saskia Eroglu-Vance',
    role: 'Director of Operations',
    business: 'Bespoke Dining Group',
    location: 'London',
    rating: 5
  },
  {
    id: 'test-2',
    quote: "By redesigning our tech stack integrations across Lightspeed, Deputy, and Tebi, IUMEA trimmed our weekly scheduling admin time by 80% and minimized our roster leaks. Bilge's people-first approach and professional work ethic are absolutely outstanding.",
    author: 'Marcus Thorne',
    role: 'Managing Director',
    business: 'Linden House Hotels',
    location: 'New York / London',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'Her outside perspective was exactly what we needed. She analyzed our menu engineering and floor flows, resulting in a direct improvement in our table turnover and guest dwell-time. Practical, solution-focused, and highly recommended.',
    author: 'Chef David Chen',
    role: 'Executive Chef & Owner',
    business: 'The Charcoal Hearth',
    location: 'Sydney',
    rating: 5
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How do we start working together?',
    answer: 'We begin with a 45-minute discovery consultation to discuss your hospitality business, operational pain points, and current tech stack. If there is a mutual fit, we agree on a site visit or systems audit followed by a bespoke proposal tailored to your operations, project delivery, or launch goals.'
  },
  {
    question: 'What is your operational philosophy?',
    answer: 'We believe in a hands-on, practical, and solution-focused approach. Because we have worked in every role from pot wash and front-of-house to operating in Michelin-starred environments, we understand both the crew perspective and the high-level P&L requirements. We aim to simplify, not complicate.'
  },
  {
    question: 'Which tech stacks and POS systems do you consult on?',
    answer: 'We are certified systems experts and official ambassadors. We specialize in configuring, auditing, and integrating systems like Lightspeed, Deputy, Square, Tebi, Blinq, Predicomm, Micros, Ordermate, Toast, and Zonal to ensure smooth communication between FOH, kitchen, and administration.'
  },
  {
    question: 'Do you consult outside of the UK?',
    answer: 'Yes. Our founder has extensive hands-on experience operating in restaurants and recruiting across Türkiye, the United States, Africa, Australia, and the UK. We consult for bespoke hospitality businesses and concept launches globally.'
  }
];
