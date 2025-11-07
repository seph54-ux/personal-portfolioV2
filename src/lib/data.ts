
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { websiteProjects, webUiProjects, posterProjects as allPosterProjects } from './websites-data';

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
  canva: { name: 'Canva', category: 'Design Tool' },
  pixellab: { name: 'Pixellab', category: 'Design Tool' },
  inkscape: { name: 'Inkscape', category: 'Design Tool' },
  davinci: { name: 'DaVinci Resolve', category: 'VA Tool' },
  kinemaster: { name: 'KineMaster', category: 'VA Tool' },
  capcut: { name: 'Capcut', category: 'VA Tool' },
  powerdirector: { name: 'PowerDirector', category: 'VA Tool' },
  figma: { name: 'Figma', category: 'Design Tool' },
  obs: { name: 'OBS Studio', category: 'Tool' },
  react: { name: 'React', category: 'Framework' },
  nextjs: { name: 'Next.js', category: 'Framework' },
  tailwind: { name: 'Tailwind CSS', category: 'Framework' },
  typescript: { name: 'TypeScript', category: 'Language' },
  firebase: { name: 'Firebase', category: 'Technology' },
  genkit: { name: 'Genkit', category: 'Technology' },
  python: { name: 'Python', category: 'Language' },
  flask: { name: 'Flask', category: 'Framework'},
  vite: { name: 'Vite', category: 'Framework' },
  html: {name: 'HTML', category: 'Language'},
  css: {name: 'CSS', category: 'Language'},
  javascript: {name: 'JavaScript', category: 'Language'},
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

const placeholderProjects: Project[] = [
  {
    id: 'proj-poster-1',
    title: 'Music Fest 2024',
    category: 'Posters',
    description: 'A vibrant and energetic poster designed for a summer music festival.',
    images: [getImage('poster-1')],
    tech: ['photoshop'],
  },
  {
    id: 'proj-poster-2',
    title: 'Retro Cinema Night',
    category: 'Posters',
    description: 'A poster with a vintage aesthetic for a classic movie screening event.',
    images: [getImage('poster-2')],
    tech: ['inkscape'],
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
    tech: ['inkscape', 'figma'],
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
    tech: ['inkscape'],
  },
  {
    id: 'proj-obs-1',
    title: 'Cyber-Stream Pack',
    category: 'OBS Overlays',
    description: 'A futuristic, cyberpunk-themed overlay pack for streamers.',
    images: [getImage('obs-1-asset')],
    inActionImage: getImage('obs-1-in-action'),
    tech: ['photoshop', 'obs'],
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
    id: 'proj-video-1',
    title: 'Startup Promo',
    category: 'Video Projects',
    description: 'An exciting promotional video to attract investors for a new tech startup.',
    images: [getImage('video-1')],
    tech: ['davinci'],
  },
];

export const projects: Project[] = [
  ...placeholderProjects,
  ...websiteProjects,
  ...webUiProjects,
  ...allPosterProjects
];

export const posterProjects: Project[] = allPosterProjects;

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

export type AffiliateProductTag = 'gaming' | 'productivity' | 'office-setup' | 'streaming' | 'design';

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
    id: 'aff-keyboard',
    name: 'Mechanical Keyboard',
    description: 'A tactile and responsive keyboard that improves typing speed and gaming performance. A must-have for any serious desk setup.',
    marketplace: 'Amazon Associates',
    url: '#',
    image: getImage('affiliate-keyboard'),
    tags: ['react', 'nextjs'],
  },
  {
    id: 'aff-mouse',
    name: 'High-Precision Gaming Mouse',
    description: 'An ergonomic mouse with customizable buttons and high DPI for pixel-perfect accuracy in creative work and competitive gaming.',
    marketplace: 'Lazada Affiliates',
    url: '#',
    image: getImage('affiliate-mouse'),
    tags: ['react'],
  },
  {
    id: 'aff-monitor',
    name: '4K IPS Monitor',
    description: 'Experience stunning color accuracy and clarity with a 4K IPS panel. Perfect for design, video editing, and immersive gaming.',
    marketplace: 'Shopee Affiliate Program',
    url: '#',
    image: getImage('affiliate-monitor'),
    tags: ['figma', 'photoshop'],
  },
  {
    id: 'aff-mic',
    name: 'USB Studio Microphone',
    description: 'Capture crystal-clear audio for streaming, podcasting, or voice-overs. This plug-and-play mic is a game-changer for content creators.',
    marketplace: 'Amazon Associates',
    url: '#',
    image: getImage('affiliate-mic'),
    tags: ['obs'],
  },
];
