export const site = {
    name: 'FG Wedding',
    tagline: 'Your Wedding, Beautifully Planned.',
    phone: '+62 812 3456 7890',
    email: 'hello@fgwedding.id',
    address: 'Jakarta, Indonesia',
    instagram: 'https://instagram.com',
};

export const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/packages', label: 'Packages' },
    { href: '/partners', label: 'Partners' },
    { href: '/weddings', label: 'Weddings' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
];

export const services = [
    {
        slug: 'wedding-organizer',
        name: 'Wedding Organizer',
        short: 'Full coordination from concept to the final toast.',
        description:
            'End-to-end wedding organizing with a dedicated planner who keeps every detail on track — vendors, timeline, and on-the-day flow.',
        benefits: [
            'Dedicated wedding planner',
            'Vendor coordination',
            'Run-of-show & rehearsals',
            'On-the-day management',
        ],
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop',
    },
    {
        slug: 'full-wedding-planning',
        name: 'Full Wedding Planning',
        short: 'From first vision to finished celebration.',
        description:
            'Complete planning for couples who want a clear concept, curated vendors, and a seamless guest experience.',
        benefits: [
            'Concept & styling',
            'Package recommendations',
            'Budget guidance',
            'Guest experience planning',
        ],
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1400&auto=format&fit=crop',
    },
    {
        slug: 'day-of-coordination',
        name: 'Day-of Coordination',
        short: 'Calm execution when it matters most.',
        description:
            'You plan ahead — we take the reins on the wedding day so you can stay present with family and guests.',
        benefits: [
            'Vendor briefings',
            'Timeline management',
            'Ceremony & reception flow',
            'Problem-solving on site',
        ],
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1400&auto=format&fit=crop',
    },
    {
        slug: 'wedding-consultation',
        name: 'Wedding Consultation',
        short: 'Clarity before you commit.',
        description:
            'A focused session to refine your vision, priorities, and next steps with an experienced organizer.',
        benefits: [
            'Vision workshop',
            'Priority mapping',
            'Package matching',
            'Actionable next steps',
        ],
        image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1400&auto=format&fit=crop',
    },
    {
        slug: 'vendor-coordination',
        name: 'Vendor Coordination',
        short: 'One trusted network, one clear conversation.',
        description:
            'We coordinate with FG Wedding partner vendors so you never juggle conflicting schedules and briefings.',
        benefits: [
            'Partner vendor network',
            'Unified briefing',
            'Schedule alignment',
            'Quality oversight',
        ],
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop',
    },
    {
        slug: 'concept-styling',
        name: 'Wedding Concept & Styling',
        short: 'A look that feels intentional and yours.',
        description:
            'Mood, palette, and styling direction that ties venue, décor, and details into one coherent story.',
        benefits: [
            'Moodboard & palette',
            'Styling direction',
            'Décor guidance',
            'Detail consistency',
        ],
        image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1400&auto=format&fit=crop',
    },
];

export const packages = [
    {
        slug: 'essential',
        name: 'Essential',
        description:
            'A focused foundation for couples who want professional organizing with carefully chosen inclusions.',
        price: 'Rp 95.000.000',
        guests: '80–150 guests',
        featured: false,
        highlights: [
            'Wedding Organizer',
            'Day-of Coordination',
            'Decoration (Intimate)',
            'Photography',
            'Consultation Session',
        ],
        partnerSlugs: [
            'lumina-decorations',
            'frame-folio',
            'the-glass-house',
        ],
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
    },
    {
        slug: 'classic',
        name: 'Classic',
        description:
            'For couples looking for a complete and elegant wedding experience.',
        price: 'Rp 175.000.000',
        guests: '200–400 guests',
        featured: true,
        highlights: [
            'Wedding Organizer',
            'Decoration',
            'Catering Coordination',
            'Photography',
            'MUA',
            'Entertainment',
        ],
        partnerSlugs: ['seruni-catering', 'aura-bridal', 'gema-harmoni'],
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
    },
    {
        slug: 'premium',
        name: 'Premium',
        description:
            'A elevated celebration with fuller styling, documentation, and guest experience.',
        price: 'Rp 275.000.000',
        guests: '250–500 guests',
        featured: false,
        highlights: [
            'Full Wedding Planning',
            'Premium Decoration',
            'Photography & Videography',
            'MUA & Attire Guidance',
            'Entertainment',
            'Guest Concierge Support',
        ],
        partnerSlugs: [
            'atelier-noir-decor',
            'lens-cinema-studio',
            'ballroom-emerald',
        ],
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    },
];

export const partners = [
    {
        slug: 'lumina-decorations',
        name: 'Lumina Decoration',
        category: 'Decoration',
        location: 'Jakarta',
        short: 'Garden-elegant installations with warm lighting.',
        about: 'Lumina specializes in botanical décor and ambient lighting for indoor and outdoor celebrations.',
        services: ['Pelaminan', 'Table styling', 'Floral aisle', 'Lighting'],
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop',
        ],
    },
    {
        slug: 'the-glass-house',
        name: 'The Glass House',
        category: 'Venue',
        location: 'Jakarta',
        short: 'Light-filled indoor venue for elegant receptions.',
        about: 'A refined venue partner with natural light, flexible layout, and capacity for mid-to-large receptions.',
        services: ['Indoor reception', 'Akad space', 'Bridal room'],
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1519167758481-83f150824042?q=80&w=1000&auto=format&fit=crop',
        ],
    },
    {
        slug: 'frame-folio',
        name: 'Frame & Folio',
        category: 'Photography',
        location: 'Jakarta',
        short: 'Editorial documentation with cinematic warmth.',
        about: 'Documentary and editorial wedding photography trusted across FG Wedding celebrations.',
        services: ['Wedding day', 'Prewedding', 'Family formals'],
        image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1200&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop',
        ],
    },
    {
        slug: 'seruni-catering',
        name: 'Seruni Catering',
        category: 'Catering',
        location: 'Jakarta',
        short: 'Indonesian fusion menus for memorable receptions.',
        about: 'Partner catering focused on taste consistency, presentation, and seamless service flow.',
        services: ['Buffet', 'Plated dining', 'Live stations'],
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop',
        ],
    },
    {
        slug: 'aura-bridal',
        name: 'Aura Bridal Makeup',
        category: 'MUA',
        location: 'Jakarta',
        short: 'Bridal beauty that lasts from akad to last dance.',
        about: 'Makeup and hair artistry for bride and family, designed for long reception days.',
        services: ['Bridal MUA', 'Family package', 'Retouch'],
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
        ],
    },
    {
        slug: 'gema-harmoni',
        name: 'Gema Harmoni',
        category: 'Entertainment',
        location: 'Jakarta',
        short: 'Live strings and ceremony soundscapes.',
        about: 'From intimate acoustic sets to chamber ensembles for formal receptions.',
        services: ['String quartet', 'Acoustic duo', 'Ceremony music'],
        image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop',
        ],
    },
    {
        slug: 'atelier-noir-decor',
        name: 'Atelier Noir Decor',
        category: 'Decoration',
        location: 'Jakarta',
        short: 'Luxury floral architecture for statement celebrations.',
        about: 'High-concept décor studio for premium receptions — sculptural florals, custom structures, and dramatic lighting.',
        services: ['Statement pelaminan', 'Ceiling install', 'VIP lounge styling'],
        image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1200&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop',
        ],
    },
    {
        slug: 'lens-cinema-studio',
        name: 'Lens & Cinema Studio',
        category: 'Videography',
        location: 'Jakarta',
        short: 'Cinematic films and multi-cam wedding coverage.',
        about: 'Premium photo + video team for couples who want full documentation with a film-forward aesthetic.',
        services: ['Cinematic film', 'Same-day edit', 'Drone highlights'],
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop',
        ],
    },
    {
        slug: 'ballroom-emerald',
        name: 'Ballroom Emerald',
        category: 'Venue',
        location: 'Jakarta',
        short: 'Grand ballroom capacity with hotel-grade service.',
        about: 'A luxury ballroom partner suited for large Premium receptions with polished guest flow and F&B flexibility.',
        services: ['Grand reception', 'VIP suite', 'On-site kitchen'],
        image: 'https://images.unsplash.com/photo-1519167758481-83f150824042?q=80&w=1200&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop',
        ],
    },
];

export const partnerCategories = [
    'All',
    'Venue',
    'Catering',
    'Decoration',
    'Photography',
    'Videography',
    'MUA',
    'Entertainment',
    'Invitation',
    'Souvenir',
    'Transportation',
];

export const weddings = [
    {
        slug: 'fadila-sarah',
        couple: 'Fadila & Sarah',
        concept: 'Modern Elegant Wedding',
        location: 'Jakarta',
        date: 'December 2025',
        venue: 'The Glass House Menteng',
        tagline: 'Modern elegance meets intimate celebration.',
        story: 'A refined indoor celebration with soft botanical details, warm lighting, and a calm ceremony-to-reception flow curated by FG Wedding.',
        services: ['Full Planning', 'Decoration', 'Photography', 'Coordination'],
        tags: ['Wedding', 'Indoor', 'Decoration'],
        cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1200&auto=format&fit=crop',
        ],
    },
    {
        slug: 'raya-dimas',
        couple: 'Raya & Dimas',
        concept: 'Garden Romance',
        location: 'Bandung',
        date: 'September 2025',
        venue: 'Savanna Chapel',
        tagline: 'Soft light, open air, and quiet joy.',
        story: 'An outdoor ceremony framed by greenery and sunset tones, with FG Wedding handling styling and day-of flow.',
        services: ['Day-of Coordination', 'Concept & Styling', 'Vendor Coordination'],
        tags: ['Wedding', 'Outdoor', 'Ceremony'],
        cover: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1600&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
        ],
    },
    {
        slug: 'alya-rafi',
        couple: 'Alya & Rafi',
        concept: 'Classic Ballroom Reception',
        location: 'Surabaya',
        date: 'June 2025',
        venue: 'Grand Ballroom',
        tagline: 'Timeless formality with warm hospitality.',
        story: 'A large family reception with classic tablescapes and a precise run-of-show for speeches, dinner, and entertainment.',
        services: ['Wedding Organizer', 'Catering Coordination', 'Entertainment'],
        tags: ['Wedding', 'Reception', 'Indoor'],
        cover: 'https://images.unsplash.com/photo-1519167758481-83f150824042?q=80&w=1600&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
        ],
    },
    {
        slug: 'nina-arya',
        couple: 'Nina & Arya',
        concept: 'Intimate Destination',
        location: 'Bali',
        date: 'March 2025',
        venue: 'Cliffside Villa',
        tagline: 'A quiet celebration above the sea.',
        story: 'An intimate destination wedding with tropical styling and carefully curated guest experience.',
        services: ['Full Planning', 'Decoration', 'Photography'],
        tags: ['Wedding', 'Outdoor', 'Details'],
        cover: 'https://images.unsplash.com/photo-1537633552985-df8429e804ab?q=80&w=1600&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop',
        ],
    },
];

export const galleryItems = [
    {
        id: 1,
        category: 'Ceremony',
        src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
        alt: 'Ceremony moment',
    },
    {
        id: 2,
        category: 'Decoration',
        src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
        alt: 'Floral decoration',
    },
    {
        id: 3,
        category: 'Reception',
        src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
        alt: 'Reception venue',
    },
    {
        id: 4,
        category: 'Details',
        src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1200&auto=format&fit=crop',
        alt: 'Table details',
    },
    {
        id: 5,
        category: 'Wedding',
        src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
        alt: 'Couple portrait',
    },
    {
        id: 6,
        category: 'Reception',
        src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
        alt: 'Celebration',
    },
    {
        id: 7,
        category: 'Decoration',
        src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop',
        alt: 'Outdoor décor',
    },
    {
        id: 8,
        category: 'Details',
        src: 'https://images.unsplash.com/photo-1535254973040-607b474cb63f?q=80&w=1200&auto=format&fit=crop',
        alt: 'Wedding cake',
    },
    {
        id: 9,
        category: 'Ceremony',
        src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
        alt: 'Rings and vows',
    },
];

export const testimonials = [
    {
        quote: 'FG Wedding made the entire process feel effortless — calm, clear, and beautifully executed.',
        couple: 'Fadila & Sarah',
        date: 'December 2025',
    },
    {
        quote: 'We always knew what came next. That clarity made our wedding day feel truly ours.',
        couple: 'Raya & Dimas',
        date: 'September 2025',
    },
    {
        quote: 'Professional without being cold. Every vendor brief and timeline was handled with care.',
        couple: 'Alya & Rafi',
        date: 'June 2025',
    },
];
