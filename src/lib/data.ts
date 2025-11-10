

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
  { name: 'Virtual Assistance', href: '/virtual-assistance' },
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
    { name: 'Email', href: 'mailto:philjoseph547@gmail.com', icon: 'Mail' },
];

export const techStack = {
  photoshop: { name: 'Adobe Photoshop', category: 'Design Tool' },
  canva: { name: 'Canva', category: 'Design Tool' },
  pixellab: { name: 'Pixellab', category: 'Design Tool' },
  inkscape: { name: 'Inkscape', category: 'Design Tool' },
  davinci: { name: 'DaVinci Resolve', category: 'VA Tool' },
  kinemaster: { name: 'KineMaster', category: 'VA Tool' },
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
  gaming: { name: 'Gaming', category: 'Hobby'},
  streaming: { name: 'Streaming', category: 'Hobby'},
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
    tech: ['photoshop', ],
  },
  {
    id: 'proj-poster-2',
    title: 'Retro Cinema Night',
    category: 'Posters',
    description: 'A poster with a vintage aesthetic for a classic movie screening event.',
    images: [getImage('poster-2')],
    tech: [],
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
    tech: ['figma'],
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
    tech: [],
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
    description: 'A clean and minimalist overlay pack for a professional str.',
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
  image: {
    imageUrl: string;
    imageHint: string;
  };
  content: string;
  seo?: {
    metaDescription: string;
    keywords: string;
  };
  carouselImages?: {
    title: string;
    url: string;
  }[];
};

export const blogPosts: Blog[] = [
  {
    slug: 'passion-projects-to-professional-portfolio',
    title: 'From Passion Projects to Professional Portfolio',
    author: 'Philjoseph Orlina',
    date: '2024-07-29',
    excerpt: 'How I Turned My Free-Time Designs Into Career Assets.',
    image: {
      imageUrl: '/asset/images/blog/design-journey/esports.webp',
      imageHint: 'esports design',
    },
    content: `
      <p>In a world saturated with templates and AI-generated content, one thing still stands out: <strong>authentic passion</strong>. For me, what began as hobby-level graphic design during esports tournaments and late-night concept sketches quickly evolved into a professional portfolio that now speaks for my skills better than any résumé can. Whether you're a student, freelancer, or aspiring creative professional, I'll share how I transformed my free-time projects into powerful tools that opened career doors—and how you can do the same.</p>
      
      <div class="my-6 border-b"></div>

      <h4>The Power of Starting With What You Love</h4>
      <p>My first designs weren't for clients. They were for friends, gaming teams, and for fun. I created <strong>OBS overlays</strong>, <strong>YouTube thumbnails</strong>, and <strong>fan posters</strong> simply because I loved it. These early works weren't polished, but they reflected one key thing: <strong>drive</strong>. When employers and collaborators saw my raw projects, they saw <strong>initiative and creativity</strong>—two traits that are always in demand.</p>
      
      <h4>Document Everything: Behind the Scenes Matters</h4>
      <p>Instead of only showing finished designs, I documented my process. From <strong>wireframes and thumbnails</strong> to <strong>toolkits</strong> and <strong>revisions</strong>, I showcased how I think, not just what I make. This gave potential employers insight into how I solve problems—something no static portfolio image can fully explain.</p>
      
      <img src="/asset/images/blog/design-journey/foundation-day1.webp" alt="Foundation Day event poster" class="rounded-lg my-8 w-full md:w-2/3 mx-auto" />

      <blockquote class="border-l-4 border-primary pl-4 italic my-6">
        Don't hide your side projects—they might be the reason someone hires you.
      </blockquote>

      <h4>Tell a Story, Not Just a Skillset</h4>
      <p>Each section of my portfolio became more than just visuals. I added short captions about <strong>why I made it</strong>, <strong>what challenge it solved</strong>, and <strong>what I learned</strong>. This storytelling approach made my work relatable—even to those outside the design world.</p>
      
      <img src="/asset/images/blog/design-journey/foundation-day2.webp" alt="Foundation Day event poster part 2" class="rounded-lg my-8 w-full md:w-2/3 mx-auto" />
      
      <h4>SEO Meets Personal Branding</h4>
      <p>I embedded blog posts (like this one) in my portfolio site with well-researched keywords, natural language, and internal links. For example, my OBS work links to a blog about the rise of live-streaming aesthetics. This keeps users browsing and boosts search engine rankings.</p>
      
      <h4>Final Result: A Living, Breathing Portfolio</h4>
      <p>Now, my site isn't just a gallery. It's a <strong>living blog</strong>, an <strong>archive of design evolution</strong>, and a <strong>journal of creative growth</strong>. It turns clicks into conversations—and those into opportunities.</p>
      
      <div class="my-6 border-b"></div>

      <h4>Closing Thoughts</h4>
      <p>If you're reading this, you're already halfway there. Passion, persistence, and storytelling are your biggest assets. Don't hide your side projects—they might be the reason someone hires you.</p>

      <blockquote class="border-l-4 border-primary pl-4 italic my-6">
        “Design is not just what it looks like and feels like. Design is how it works.” — Steve Jobs
      </blockquote>

      <div class="bg-card/50 p-6 rounded-lg my-6">
        <h5 class="font-bold mb-3">Ready to explore my design work?</h5>
        <p class="text-muted-foreground">Check out my portfolio to see these passion projects in action and discover how they evolved into professional assets. Or you can check our school's esports page <a href="https://www.facebook.com/share/1QqMtitQzF/" target="_blank" class="text-primary hover:underline">ACCESs - Tanauan City College</a>.</p>
        <a href="/posters" class="inline-flex items-center mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors">
          Explore My Portfolio <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    `,
    seo: {
        metaDescription: "Learn how passion projects in graphic design for esports and fun can be transformed into a professional portfolio that opens career doors. A personal journey of creative growth.",
        keywords: "passion projects, design portfolio, career growth, graphic design, esports, freelancing, creative professional"
    }
  },
  {
    slug: 'esports-journey-from-photo-editor-to-visionary',
    title: 'From a Simple Photo Editor to an Esports Visionary',
    author: 'Philjoseph Orlina',
    date: '2024-07-20',
    excerpt: 'How a simple college request to edit photos sparked a lifelong passion for esports production, design, and community building.',
    image: {
      imageUrl: '/asset/images/blog/esport-journey/esports1.webp',
      imageHint: 'esports event'
    },
    carouselImages: [
      { title: 'Behind the Scenes - Production Setup', url: '/asset/images/blog/esport-journey/esports2.webp' },
      { title: 'Live Event - In Action', url: '/asset/images/blog/esport-journey/esports5.webp' },
      { title: 'Finals Night - On Stage', url: '/asset/images/blog/esport-journey/esports6.webp' },
      { title: 'Team working on the event', url: '/asset/images/blog/esport-journey/esports7.webp' },
      { title: 'Championship Match', url: '/asset/images/blog/esport-journey/esports8.webp' }
    ],
    content: `
      <h5>The Unexpected Beginning</h5>
      <p>It was 2022—my first year in college. Just like most freshies, I had no clear path yet, no big plans. I was simply navigating college life, one assignment at a time. Then out of nowhere on our second semester, our section chairperson casually asked me:</p>
      
      <blockquote class="border-l-4 border-primary pl-4 italic my-6">Do you know how to edit photos?</blockquote>
      
      <p>I said yes. That one answer unknowingly lit the first spark of what would later become a blazing passion for <strong>esports</strong>.</p>
      
      <div class="my-6 border-b"></div>

      <h4>Chapter 1: Pressures, Posters, and Professor Visaya</h4>
      <p>That simple editing request led me into the inner workings of our school's esports organization. Suddenly, I was part of something bigger—<strong>creating graphics</strong>, <strong>supporting tournaments</strong>, <strong>designing livestream overlays</strong>. I became one of the "go-to" graphics guys.</p>
      <p>But it wasn't always fun and games.</p>
      <p>Under the intense guidance of our esports adviser, <strong>Mr. Ralph Visaya</strong>, we were pushed hard—<strong>tight deadlines, last-minute edits, nonstop revisions</strong>. I remember how often I'd feel frustrated, overwhelmed, even angry.</p>
      
      <img src="/asset/images/blog/esport-journey/esports3.webp" alt="Designing an esports poster" class="rounded-lg my-8 w-full md:w-2/3 mx-auto" />

      <blockquote class="border-l-4 border-primary pl-4 italic my-6">Growth begins where comfort ends.</blockquote>
      
      <p>At the time, I didn't see the value of the pressure. I only saw the clock ticking and a demanding professor expecting me to deliver. But despite the frustration, I still found a way to <strong>get things done—on time, every time</strong>.</p>
      <p>And looking back now, I realize: <strong>I wouldn't have it any other way</strong>.</p>

      <div class="my-6 border-b"></div>
      
      <h4>Chapter 2: Passion Beyond Posters</h4>
      <p>What started with simple posters quickly evolved into something far greater. Thanks to Mr. Visaya and our tech-savvy mentor, Mr. Daniel Bermodez, I was introduced to the technical side of esports:</p>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li>Setting up <strong>OBS for livestreams</strong></li>
        <li>Handling <strong>virtual event layouts</strong></li>
        <li>Laying down <strong>Cat6 fiber optic cables</strong> for our gym's esports events</li>
      </ul>
      <p>These were tasks I never imagined doing as a student. And yet, I found myself enjoying every bit of the chaos—every cable plugged, every livestream scene configured, every digital backdrop designed. It wasn't just about aesthetics anymore. It was about <strong>bringing esports to life</strong>.</p>

      <img src="/asset/images/blog/esport-journey/LED-truck.webp" alt="Setting up an LED truck for an event" class="rounded-lg my-8 w-full md:w-2/3 mx-auto" />

      [[CAROUSEL]]

      <div class="my-6 border-b"></div>

      <h4>Chapter 3: The Flame Ignites</h4>
      <p>The stress, the pressure, the unexpected responsibilities—they didn't break me. They built me. Somewhere in the middle of all that tension, I discovered something I never expected:</p>
      
      <blockquote class="border-l-4 border-primary pl-4 italic my-6">Sometimes, the fire that burns you is the same fire that forges you.</blockquote>
      
      <p>I was no longer just a student assigned to make posters. I was now a creative lead, a production tech, a broadcast organizer—someone who could imagine, design, and execute an entire <strong>esports event</strong> from scratch.</p>

      <img src="/asset/images/blog/esport-journey/esports4.webp" alt="Behind the scenes at an esports tournament" class="rounded-lg my-8 w-full md:w-2/3 mx-auto" />

      <div class="my-6 border-b"></div>

      <h4>Gratitude in Hindsight</h4>
      <p>Yes, I once got mad at Mr. Visaya. Yes, I was stressed beyond belief. But if I met him again today, I would thank him.</p>
      <p>Because <strong>he saw a spark in me that I didn't yet recognize myself.</strong></p>
      <p>Because he pressured me, challenged me, and pushed me to grow.</p>
      <p>Because of him and Mr. Bermodez, I now hold a burning passion not just for playing games—but for <strong>building the very stages where they're played.</strong></p>
      <p>This is more than just a story about esports. It's the story of how I found my path—one deadline, one design, one livestream at a time.</p>

      <div class="bg-card/50 p-6 rounded-lg my-6">
        <h5 class="font-bold mb-3">Ready to see my esports work in action?</h5>
        <p class="text-muted-foreground">Explore my portfolio to see how these college experiences shaped my design philosophy and technical skills in the gaming industry.</p>
        <a href="/obs-overlays" class="inline-flex items-center mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors">
          View My Gaming Projects <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    `,
    seo: {
        metaDescription: "Follow my journey from a casual photo editor in college to an esports visionary, handling everything from graphic design to live event production. A story of passion, pressure, and growth.",
        keywords: "esports journey, graphic design, event production, student passion, OBS, livestream, career development, gaming community"
    }
  },
  {
    slug: 'the-ultimate-guide-to-freelancing-for-designers',
    title: 'The Ultimate Guide to Freelancing for Designers',
    author: 'Philjoseph Orlina',
    date: '2024-04-22',
    excerpt: 'Thinking of going solo? This guide covers everything from finding clients to managing your finances as a freelance designer.',
    image: getImage('blog-2'),
    content: '<p>Freelancing can be a rewarding career path, offering flexibility and control over your work. However, it also comes with its own set of challenges...</p><h3>Finding Your First Client</h3><p>Leverage your network. Let friends, family, and former colleagues know you\'re available for freelance work. Online platforms like Upwork and Fiverr can also be a good starting point, but be prepared for stiff competition.</p>',
    seo: {
        metaDescription: "A comprehensive guide for designers looking to start a freelance career. Covers finding clients, pricing, and managing finances.",
        keywords: "freelancing, design, freelance guide, finding clients, graphic design business"
    }
  },
  {
    slug: 'case-study-rebranding-a-local-cafe',
    title: 'Case Study: Rebranding a Local Cafe',
    author: 'Philjoseph Orlina',
    date: '2024-03-10',
    excerpt: 'A deep dive into the process of rebranding "The Daily Grind," a beloved local coffee shop, for a modern audience.',
    image: getImage('blog-3'),
    content: '<p>The Daily Grind had been a local favorite for 15 years, but its branding felt dated. The goal was to refresh the visual identity without alienating its loyal customer base.</p><h3>The Process</h3><p>We started with a deep dive into the cafe\'s history and its customers. We conducted surveys and interviews to understand what people loved about The Daily Grind. The key takeaway was the sense of community and comfort...</p>',
    seo: {
        metaDescription: "A case study on the rebranding process for a local coffee shop, from research and strategy to final visual identity.",
        keywords: "rebranding, case study, brand identity, logo design, local business, cafe branding"
    }
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
    id: 'aff-keyboard',
    name: 'Mechanical Keyboard',
    description: 'A tactile and responsive keyboard that improves typing speed and gaming performance. A must-have for any seriou.',
    marketplace: 'Amazon Associates',
    url: '#',
    image: getImage('affiliate-keyboard'),
    tags: ['gaming'],
  },
  {
    id: 'aff-mouse',
    name: 'High-Precision Gaming Mouse',
    description: 'An ergonomic mouse with customizable buttons and high DPI for pixel-perfect accuracy in creative work and competitive gaming.',
    marketplace: 'Lazada Affiliates',
    url: '#',
image: getImage('affiliate-mouse'),
    tags: ['gaming', 'streaming'],
  },
  {
    id: 'aff-monitor',
    name: '4K IPS Monitor',
    description: 'Experience stunning color accuracy and clarity with a 4K IPS panel. Perfect for design, video editing, and immersive gaming.',
    marketplace: 'Shopee Affiliate Program',
    url: '#',
    image: getImage('affiliate-monitor'),
    tags: ['gaming', 'streaming'],
  },
  {
    id: 'aff-mic',
    name: 'USB Studio Microphone',
    description: 'Capture crystal-clear audio for streaming, podcasting, or voice-overs. This plug-and-play mic is a game-changer for content creators.',
    marketplace: 'Amazon Associates',
    url: '#',
    image: getImage('affiliate-mic'),
    tags: ['streaming'],
  },
];

    
