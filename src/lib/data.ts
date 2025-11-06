import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const getImage = (id: string): ImagePlaceholder => {
  const img = PlaceHolderImages.find((img) => img.id === id);
  if (!img) {
    // Fallback to a default image if not found
    return {
      id: 'fallback',
      description: 'Fallback image',
      imageUrl: 'https://picsum.photos/seed/fallback/800/600',
      imageHint: 'abstract',
    };
  }
  return img;
};

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Projects', 
    sublinks: [
      { name: 'Posters', href: '/posters', description: 'Eye-catching poster designs.' },
      { name: 'Logos', href: '/logos', description: 'Memorable and unique brand logos.' },
      { name: 'OBS Overlays', href: '/obs-overlays', description: 'Custom overlays for streamers.' },
      { name: 'Web UI', href: '/web-ui', description: 'Modern and intuitive user interfaces.' },
      { name: 'Video Projects', href: '/video', description: 'Engaging video productions.' },
      { name: 'Websites/Webapps', href: '/websites', description: 'Functional and beautiful websites.' },
    ]
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Affiliates', href: '/affiliates' },
  { name: 'Contact', href: '/contact' },
];

export const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/seph54-ux', icon: 'Github' },
    { name: 'Facebook', href: 'https://www.facebook.com/share/19ZF9GsX6R/', icon: 'Facebook' },
    { name: 'Instagram', href: 'https://www.instagram.com/seph.547?igsh=YWJiNWhyem1vdzM2', icon: 'Instagram' },
    { name: 'Telegram', href: 't.me/seph547', icon: 'Send' },
    { name: 'WhatsApp', href: 'https://wa.me/639941186244?text=Hello%20Philjoseph%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!', icon: 'MessageCircle' },
];

export const techStack = {
  photoshop: { name: 'Adobe Photoshop', category: 'Design Tool' },
  illustrator: { name: 'Adobe Illustrator', category: 'Design Tool' },
  canva: { name: 'Canva', category: 'Design Tool' },
  inkscape: { name: 'Inkscape', category: 'Design Tool' },
  aftereffects: { name: 'Adobe After Effects', category: 'VA Tool' },
  premiere: { name: 'Adobe Premiere Pro', category: 'VA Tool' },
  figma: { name: 'Figma', category: 'Design Tool' },
  obs: { name: 'OBS Studio', category: 'Tool' },
  react: { name: 'React', category: 'Framework' },
  nextjs: { name: 'Next.js', category: 'Framework' },
  tailwind: { name: 'Tailwind CSS', category: 'Framework' },
  typescript: { name: 'TypeScript', category: 'Language' },
  firebase: { name: 'Firebase', category: 'Technology' },
  genkit: { name: 'Genkit', category: 'Technology' },
};

export type ProjectCategory = 'Posters' | 'Logos' | 'OBS Overlays' | 'Web UI' | 'Video Projects' | 'Websites/Webapps';

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  images: { imageUrl: any, imageHint: string }[];
  tech?: (keyof typeof techStack)[];
  variants?: { name: string; images: {imageUrl: any, imageHint: string}[] }[];
  inActionImage?: { imageUrl: any, imageHint: string };
  liveDemoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'proj-poster-1',
    title: 'Music Fest 2024',
    category: 'Posters',
    description: 'A vibrant and energetic poster designed for a summer music festival.',
    images: [getImage('poster-1')],
    tech: ['photoshop', 'illustrator'],
  },
  {
    id: 'proj-poster-2',
    title: 'Retro Cinema Night',
    category: 'Posters',
    description: 'A poster with a vintage aesthetic for a classic movie screening event.',
    images: [getImage('poster-2')],
    tech: ['illustrator'],
  },
  {
    id: 'proj-logo-1',
    title: "Innovate Inc.",
    category: 'Logos',
    description: 'A modern and sleek logo for a technology startup, showcasing different variants for various use cases.',
    images: [],
    variants: [
      { name: 'Main Logo', images: [getImage('logo-1-main')] },
      { name: 'Monochrome', images: [getImage('logo-1-variant-1')] },
      { name: 'Icon Only', images: [getImage('logo-1-variant-2')] },
    ],
    tech: ['illustrator', 'figma'],
  },
  {
    id: 'proj-logo-2',
    title: "Nature's Brew",
    category: 'Logos',
    description: 'An organic and earthy logo for a coffee brand, with a stamp variant for packaging.',
    images: [],
    variants: [
      { name: 'Primary Logo', images: [getImage('logo-2-main')] },
      { name: 'Stamp Version', images: [getImage('logo-2-variant-1')] },
    ],
    tech: ['illustrator'],
  },
  {
    id: 'proj-obs-1',
    title: 'Cyber-Stream Pack',
    category: 'OBS Overlays',
    description: 'A futuristic, cyberpunk-themed overlay pack for streamers.',
    images: [getImage('obs-1-asset')],
    inActionImage: getImage('obs-1-in-action'),
    tech: ['photoshop', 'aftereffects', 'obs'],
  },
  {
    id: 'proj-obs-2',
    title: 'Clean Minimalist Pack',
    category: 'OBS Overlays',
    description: 'A clean and minimalist overlay pack for a professional streaming setup.',
    images: [getImage('obs-2-asset')],
    inActionImage: getImage('obs-2-in-action'),
    tech: ['figma', 'obs'],
  },
  {
    id: 'proj-web-ui-1',
    title: 'Fintech App Dashboard',
    category: 'Web UI',
    description: 'A user-friendly dashboard design for a financial technology application.',
    images: [getImage('web-ui-1')],
    tech: ['figma'],
  },
   {
    id: 'proj-web-ui-2',
    title: 'Social Mobile App',
    category: 'Web UI',
    description: 'UI/UX design for a new mobile social networking app.',
    images: [getImage('web-ui-2')],
    tech: ['figma'],
  },
  {
    id: 'proj-video-1',
    title: 'Startup Promo',
    category: 'Video Projects',
    description: 'An exciting promotional video to attract investors for a new tech startup.',
    images: [getImage('video-1')],
    tech: ['premiere', 'aftereffects'],
  },
  {
    id: 'proj-website-1',
    title: 'Fashion E-commerce Site',
    category: 'Websites/Webapps',
    description: 'A full-featured e-commerce website for an independent fashion brand.',
    images: [getImage('website-1')],
    tech: ['react', 'nextjs', 'tailwind', 'firebase'],
    liveDemoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'proj-website-2',
    title: 'Photographer Portfolio',
    category: 'Websites/Webapps',
    description: 'A visually-driven portfolio site for a professional photographer.',
    images: [getImage('website-2')],
    tech: ['nextjs', 'typescript', 'tailwind'],
    liveDemoUrl: '#',
    githubUrl: '#',
  },
];


export type Blog = {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: ImagePlaceholder;
  content: string;
};

export const blogPosts: Blog[] = [
  {
    slug: '10-design-trends-to-watch-in-2024',
    title: '10 Design Trends to Watch in 2024',
    author: 'Philjoseph Orlina',
    date: '2024-05-15',
    excerpt: 'From AI-generated art to retro-futurism, here are the top 10 design trends you need to know about this year.',
    image: getImage('blog-1'),
    content: '<p>The design world is constantly evolving. In 2024, we\'re seeing a fascinating mix of high-tech innovation and nostalgic callbacks. Here are ten trends that are shaping the visual landscape...</p><p>1. <strong>AI-Generated Imagery:</strong> Tools like Midjourney and DALL-E are no longer novelties but are becoming integral parts of the creative process.</p><p>2. <strong>Retro-Futurism:</strong> Think 80s sci-fi meets modern design. Grainy textures, neon colors, and chrome are all making a comeback.</p><p>Read more to discover all 10 trends!</p>',
  },
  {
    slug: 'the-ultimate-guide-to-freelancing-for-designers',
    title: 'The Ultimate Guide to Freelancing for Designers',
    author: 'Philjoseph Orlina',
    date: '2024-04-22',
    excerpt: 'Thinking of going solo? This guide covers everything from finding clients to managing your finances as a freelance designer.',
    image: getImage('blog-2'),
    content: '<p>Freelancing can be a rewarding career path, offering flexibility and control over your work. However, it also comes with its own set of challenges...</p><h3>Finding Your First Client</h3><p>Leverage your network. Let friends, family, and former colleagues know you\'re available for freelance work. Online platforms like Upwork and Fiverr can also be a good starting point, but be prepared for stiff competition.</p>',
  },
  {
    slug: 'case-study-rebranding-a-local-cafe',
    title: 'Case Study: Rebranding a Local Cafe',
    author: 'Philjoseph Orlina',
    date: '2024-03-10',
    excerpt: 'A deep dive into the process of rebranding "The Daily Grind," a beloved local coffee shop, for a modern audience.',
    image: getImage('blog-3'),
    content: '<p>The Daily Grind had been a local favorite for 15 years, but its branding felt dated. The goal was to refresh the visual identity without alienating its loyal customer base.</p><h3>The Process</h3><p>We started with a deep dive into the cafe\'s history and its customers. We conducted surveys and interviews to understand what people loved about The Daily Grind. The key takeaway was the sense of community and comfort...</p>',
  },
];


export type AffiliateProduct = {
  id: string;
  name: string;
  description: string;
  marketplace: string;
  url: string;
  image: ImagePlaceholder;
  tags: (keyof typeof techStack)[];
};

export const affiliateProducts: AffiliateProduct[] = [
  {
    id: 'aff-figma',
    name: 'Figma',
    description: 'The collaborative interface design tool. I use it for all my UI/UX work, from wireframing to high-fidelity prototypes.',
    marketplace: 'Figma Partner Program',
    url: '#',
    image: getImage('affiliate-figma'),
    tags: ['figma', 'react', 'nextjs'],
  },
  {
    id: 'aff-photoshop',
    name: 'Adobe Photoshop',
    description: 'The industry-standard for photo editing and raster graphics manipulation. Essential for creating stunning visuals and assets.',
    marketplace: 'Adobe Affiliate Program',
    url: '#',
    image: getImage('affiliate-photoshop'),
    tags: ['photoshop', 'illustrator'],
  },
  {
    id: 'aff-webflow',
    name: 'Webflow',
    description: 'A powerful visual web development platform that allows you to build responsive websites without writing code.',
    marketplace: 'Webflow Affiliate Program',
    url: '#',
    image: getImage('affiliate-webflow'),
    tags: ['nextjs', 'tailwind'],
  },
  {
    id: 'aff-premiere',
    name: 'Adobe Premiere Pro',
    description: 'Professional video editing software that I use for all my video projects, from shorts to promotional content.',
    marketplace: 'Adobe Affiliate Program',
    url: '#',
    image: getImage('affiliate-premiere'),
    tags: ['premiere', 'aftereffects'],
  },
];
