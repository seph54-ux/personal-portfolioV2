

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
    slug: 'not-just-a-game-joystick-stories',
    title: 'Not Just a Game: The Stories Behind the Joystick',
    author: 'Philjoseph Orlina',
    date: '2025-06-12',
    excerpt: 'More Than Just Pixels – Personal journeys through gaming memories, exploring how games shape our lives and connections.',
    image: {
      imageUrl: '/asset/images/blog/gaming-journey/gaming-journey.webp',
      imageHint: 'A boy playing a video game',
    },
    content: `
      <p>Games—they're not just apps on my phone or a way to pass the time. They're experiences. They're stories. They're the <strong>memories</strong> that come with every victory, every defeat, and every late-night laugh shared with friends.</p>
      <p>I play not just to win, but to bond—to relive moments, to escape reality, and sometimes, to heal. Below are the games that shaped different chapters of my life. Each has its own story—and if you're curious, feel free to dive into each one.</p>

      <hr />

      <h2>🕹️ Games I Play and Why They Matter to Me</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; text-align: center;">
        <div class="glassmorphic" style="padding: 1rem; border-radius: 0.8rem; display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
            <img src="/asset/images/games-logo/codm_icon.webp" alt="Call of Duty Mobile Icon" style="width:64px; height:64px; margin-bottom: 0.5rem;">
            <h3 style="font-size: 1rem; font-weight: 600;">Call of Duty: Mobile</h3>
            <a href="#codm-story">Read My Story</a>
        </div>
        <div class="glassmorphic" style="padding: 1rem; border-radius: 0.8rem; display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
            <img src="/asset/images/games-logo/mlbb_icon.webp" alt="Mobile Legends Bang Bang Icon" style="width:64px; height:64px; margin-bottom: 0.5rem;">
            <h3 style="font-size: 1rem; font-weight: 600;">Mobile Legends: Bang Bang</h3>
            <a href="#mlbb-story">Read My Story</a>
        </div>
        <div class="glassmorphic" style="padding: 1rem; border-radius: 0.8rem; display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
            <img src="/asset/images/games-logo/bloodstrike_icon.webp" alt="Bloodstrike Icon" style="width:64px; height:64px; margin-bottom: 0.5rem;">
            <h3 style="font-size: 1rem; font-weight: 600;">Bloodstrike</h3>
            <a href="#bloodstrike-story">Read My Story</a>
        </div>
        <div class="glassmorphic" style="padding: 1rem; border-radius: 0.8rem; display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
            <img src="/asset/images/games-logo/hok_icon.webp" alt="Honor of Kings Icon" style="width:64px; height:64px; margin-bottom: 0.5rem;">
            <h3 style="font-size: 1rem; font-weight: 600;">Honor of Kings</h3>
            <a href="#hok-story">Read My Story</a>
        </div>
        <div class="glassmorphic" style="padding: 1rem; border-radius: 0.8rem; display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
            <img src="/asset/images/games-logo/minecraft_icon.webp" alt="Minecraft Icon" style="width:64px; height:64px; margin-bottom: 0.5rem;">
            <h3 style="font-size: 1rem; font-weight: 600;">Minecraft</h3>
            <a href="#minecraft-story">Read My Story</a>
        </div>
        <div class="glassmorphic" style="padding: 1rem; border-radius: 0.8rem; display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
            <img src="/asset/images/games-logo/rusted-warfare_icon.webp" alt="Rusted Warfare Icon" style="width:64px; height:64px; margin-bottom: 0.5rem;">
            <h3 style="font-size: 1rem; font-weight: 600;">Rusted Warfare</h3>
            <a href="#rusted-story">Read My Story</a>
        </div>
        <div class="glassmorphic" style="padding: 1rem; border-radius: 0.8rem; display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
            <img src="/asset/images/games-logo/cooking-fever_icon.webp" alt="Cooking Fever Icon" style="width:64px; height:64px; margin-bottom: 0.5rem;">
            <h3 style="font-size: 1rem; font-weight: 600;">Cooking Fever</h3>
            <a href="#cooking-story">Read My Story</a>
        </div>
      </div>
      
      <div class="not-prose space-y-8 mt-12">
      <section id="codm-story" class="glassmorphic p-6 rounded-lg">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <img src="/asset/images/games-logo/codm_icon.webp" alt="codm_icon" style="width:64px; height:64px;">
          <h2 class="font-headline text-2xl m-0">Call of Duty: Mobile — "Where It All Began"</h2>
        </div>
        <div>
          <p>It all started during the pandemic. <strong>November 13, 2020</strong>, to be exact.</p>
          <p>While everyone else was adjusting to online classes, I was just trying to keep up—without even owning a smartphone. Every day, my friend would invite me to play <em>CODM</em>, and every day, I'd decline. I only had a laptop for school, so mobile gaming seemed out of the question.</p>
          <p>But curiosity won.</p>
          <p>I discovered <strong>Gameloop</strong>, an emulator that allowed me to play CODM on my laptop. That one download sparked something incredible. Every task done early meant more playtime. We bonded over matches, laughed over clutches, and slowly, CODM became our daily ritual.</p>
          <p>Another big reason I jumped into the game? <strong>My brother.</strong> He was always bragging about his plays, and I didn't want to be left behind. Eventually, it became our bonding activity—we'd talk strats, share highlights, and team up. CODM didn't just connect me with friends; it brought me closer to my own blood.</p>
          <p>Want to connect with the community? <a href="https://www.facebook.com/groups/garenacodmph/?ref=share&mibextid=WaXdOe/" target="_blank">Join CODM PH Community →</a></p>
        </div>
      </section>

      <section id="mlbb-story" class="glassmorphic p-6 rounded-lg">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <img src="/asset/images/games-logo/mlbb_icon.webp" alt="mlbb_icon" style="width:64px; height:64px;">
          <h2 class="font-headline text-2xl m-0">Mobile Legends: Bang Bang — "The House That Held Our Friendship"</h2>
        </div>
        <div>
          <p>Before the pandemic, <em>MLBB</em> was already huge. I'd casually play on my friends' phones, but I never got into it. That changed around <strong>May 2021</strong>, when I finally got my own smartphone.</p>
          <p>With no internet at home, I took online classes at a friend's house. That place became our unofficial HQ. There were four of us, and <em>MLBB</em> was our go-to game.</p>
          <p>We played, we studied heroes, and we climbed the ranks together.<br>We lost a lot—but we laughed harder.<br>That game didn't just fill time—it filled our days with stories, jokes, and shared goals.</p>
        </div>
      </section>

      <section id="bloodstrike-story" class="glassmorphic p-6 rounded-lg">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <img src="/asset/images/games-logo/bloodstrike_icon.webp" alt="bloodstrike_icon" style="width:64px; height:64px;">
          <h2 class="font-headline text-2xl m-0">Bloodstrike — "The FPS Flame Rekindled"</h2>
        </div>
        <div>
          <p>By <strong>January 2022</strong>, I had stopped playing CODM due to personal reasons. MLBB kept me going—but something was missing.</p>
          <p>Then came <strong>Bloodstrike</strong>, launched globally in 2024. The moment I saw the teaser, I felt that old flame return. It looked like Warzone, felt like CODM, and played like a fast-paced thrill ride.</p>
          <p>It didn't take long before my friends joined in. We called shots, planned positions, and lived for that rush. Bloodstrike didn't just fill a gaming void—it revived a part of me that I thought I'd left in the past.</p>
        </div>
      </section>

      <section id="hok-story" class="glassmorphic p-6 rounded-lg">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <img src="/asset/images/games-logo/hok_icon.webp" alt="hok_icon" style="width:64px; height:64px;">
          <h2 class="font-headline text-2xl m-0">Honor of Kings — "The Persistent Invitation"</h2>
        </div>
        <div>
          <p>My friend tried for months to get me into <em>Honor of Kings</em>.<br>But I kept saying, "Maybe later."<br>My phone couldn't handle it, and I wasn't ready for another MOBA.</p>
          <p>But eventually, I upgraded. I downloaded. I played.<br>And guess what? I loved it.</p>
          <p><em>HoK</em> has its own mechanics, heroes, and systems—different from MLBB. I'm still learning, still exploring. But I can already see the passion behind its community, especially with <strong>HoKPH</strong> hosting tournaments and celebrating its players. It's a game I'm still getting to know—but it's one worth learning.</p>
          <p>Connect with the community: <a href="https://www.facebook.com/groups/hokphofficial/?ref=share&mibextid=WaXdOe/" target="_blank">Join HoKPH Community →</a></p>
        </div>
      </section>

      <section id="minecraft-story" class="glassmorphic p-6 rounded-lg">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <img src="/asset/images/games-logo/minecraft_icon.webp" alt="minecraft_icon" style="width:64px; height:64px;">
          <h2 class="font-headline text-2xl m-0">Minecraft — "Creativity and Connection"</h2>
        </div>
        <div>
          <p>Ah, <em>Minecraft</em>—the iconic block game.<br>I first played it back in Grade 7 with my classmates and brother.<br>No ender dragon, no serious survival. Just pure creativity.</p>
          <p>Then I stopped for years.</p>
          <p>But recently, my <strong>partner</strong> reintroduced me to it. Now, we play it together when we're apart. We build, explore, and laugh—because in a world made of blocks, we find something real: <strong>peace, therapy, and time together</strong>.</p>
          <p>Except creepers. Creepers ruin everything.💀</p>
        </div>
      </section>
      </div>

      <blockquote style="margin-top: 2rem; margin-bottom: 2rem;"><p>The time you spend playing with someone might be the memory they cherish most tomorrow.</p></blockquote>

      <div class="not-prose space-y-8">
      <section id="rusted-story" class="glassmorphic p-6 rounded-lg">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <img src="/asset/images/games-logo/rusted-warfare_icon.webp" alt="rusted-warfare_icon" style="width:64px; height:64px;">
          <h2 class="font-headline text-2xl m-0">Rusted Warfare — "Nostalgia in Pixels"</h2>
        </div>
        <div>
          <p>I overheard my friends one day talking about this game with helicopters, explosions, and units moving everywhere.</p>
          <p>It was <strong>Rusted Warfare</strong>.<br>At first, I thought, "This looks childish."<br>But once I understood the mechanics, I was hooked.</p>
          <p>It reminded me so much of <strong>Red Alert 2 and Yuri&#39;s Revenge</strong>, games I used to play with my dad. That top-down strategy vibe, the sound of war machines, the modding community—it brought back childhood joy with a new layer of competitive fun.</p>
        </div>
      </section>

      <section id="cooking-story" class="glassmorphic p-6 rounded-lg">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <img src="/asset/images/games-logo/cooking-fever_icon.webp" alt="cooking-fever_icon" style="width:64px; height:64px;">
          <h2 class="font-headline text-2xl m-0">Cooking Fever — "Comfort in Chaos"</h2>
        </div>
        <div>
          <p><strong>April 2025</strong> was rough.<br>I had chickenpox, a bad flu, and I was quarantined at home—stuck, tired, and missing out on my internship.</p>
          <p>None of the usual games felt right.</p>
          <p>Then I found <em>Cooking Fever</em> on Play Store. It looked like a kid's game, but something about it clicked. The rush of managing orders, upgrading kitchens, and beating levels—it gave me joy at a time when I needed it most.</p>
          <p>It wasn't just a game. It was my escape during one of my most physically draining moments.</p>
        </div>
      </section>
      </div>
      
      <hr />

      <h2>🎮 Final Thoughts: Games as Memories, Not Just Entertainment</h2>
      <p>Every game I've played tells a story.<br>Some of them brought me closer to family.<br>Others were the reason I stayed sane during hard times.<br>Some helped me bond with friends in ways that conversations alone couldn't.</p>
      <p>Whether I'm building in Minecraft, sniping in Bloodstrike, or running a digital kitchen in Cooking Fever—<strong>I play to connect</strong>.</p>
      <p>And maybe that's the greatest gift gaming has given me.</p>
      
      <blockquote><p>You never really know when it will be the last match, the last round, the last laugh. So always play with heart, play with love, and most of all—play together.</p></blockquote>
    `,
    seo: {
      metaDescription: 'Explore the personal stories and memories behind the games I play, from competitive shooters like CODM to creative sandboxes like Minecraft. A journey through how video games shape our connections and lives.',
      keywords: 'gaming stories, personal blog, CODM, Mobile Legends, Minecraft, Bloodstrike, gaming memories, video games, community'
    }
  },
  {
    slug: 'passion-projects-to-professional-portfolio',
    title: 'From Passion Projects to Professional Portfolio',
    author: 'Philjoseph Orlina',
    date: '2025-06-10',
    excerpt: 'How I Turned My Free-Time Designs Into Career Assets.',
    image: {
      imageUrl: '/asset/images/blog/design-journey/esports.webp',
      imageHint: 'esports design',
    },
    content: `
      <p>In a world saturated with templates and AI-generated content, one thing still stands out: <strong>authentic passion</strong>. For me, what began as hobby-level graphic design during esports tournaments and late-night concept sketches quickly evolved into a professional portfolio that now speaks for my skills better than any résumé can. Whether you&#39;re a student, freelancer, or aspiring creative professional, I&#39;ll share how I transformed my free-time projects into powerful tools that opened career doors—and how you can do the same.</p>
      
      <hr />

      <h4>The Power of Starting With What You Love</h4>
      <p>My first designs weren&#39;t for clients. They were for friends, gaming teams, and for fun. I created <strong>OBS overlays</strong>, <strong>YouTube thumbnails</strong>, and <strong>fan posters</strong> simply because I loved it. These early works weren&#39;t polished, but they reflected one key thing: <strong>drive</strong>. When employers and collaborators saw my raw projects, they saw <strong>initiative and creativity</strong>—two traits that are always in demand.</p>
      
      <h4>Document Everything: Behind the Scenes Matters</h4>
      <p>Instead of only showing finished designs, I documented my process. From <strong>wireframes and thumbnails</strong> to <strong>toolkits</strong> and <strong>revisions</strong>, I showcased how I think, not just what I make. This gave potential employers insight into how I solve problems—something no static portfolio image can fully explain.</p>
      
      <img src="/asset/images/blog/design-journey/foundation-day1.webp" alt="Foundation Day event poster" />

      <blockquote>Don&#39;t hide your side projects—they might be the reason someone hires you.</blockquote>

      <h4>Tell a Story, Not Just a Skillset</h4>
      <p>Each section of my portfolio became more than just visuals. I added short captions about <strong>why I made it</strong>, <strong>what challenge it solved</strong>, and <strong>what I learned</strong>. This storytelling approach made my work relatable—even to those outside the design world.</p>
      
      <img src="/asset/images/blog/design-journey/foundation-day2.webp" alt="Foundation Day event poster part 2" />
      
      <h4>SEO Meets Personal Branding</h4>
      <p>I embedded blog posts (like this one) in my portfolio site with well-researched keywords, natural language, and internal links. For example, my OBS work links to a blog about the rise of live-streaming aesthetics. This keeps users browsing and boosts search engine rankings.</p>
      
      <h4>Final Result: A Living, Breathing Portfolio</h4>
      <p>Now, my site isn&#39;t just a gallery. It&#39;s a <strong>living blog</strong>, an <strong>archive of design evolution</strong>, and a <strong>journal of creative growth</strong>. It turns clicks into conversations—and those into opportunities.</p>
      
      <hr />

      <h4>Closing Thoughts</h4>
      <p>If you&#39;re reading this, you&#39;re already halfway there. Passion, persistence, and storytelling are your biggest assets. Don&#39;t hide your side projects—they might be the reason someone hires you.</p>

      <blockquote>“Design is not just what it looks like and feels like. Design is how it works.” — Steve Jobs</blockquote>

      <div>
        <h5>Ready to explore my design work?</h5>
        <p>Check out my portfolio to see these passion projects in action and discover how they evolved into professional assets. Or you can check our school&#39;s esports page <a href="https://www.facebook.com/share/1QqMtitQzF/" target="_blank">ACCESs - Tanauan City College</a>.</p>
         <a href="/posters" class="no-underline">
          Explore My Portfolio <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
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
    date: '2025-06-05',
    excerpt: 'How a simple college request to edit photos sparked a lifelong passion for esports production, design, and community building.',
    image: {
      imageUrl: '/asset/images/blog/esports-journey/esports1.webp',
      imageHint: 'esports event'
    },
    carouselImages: [
      { title: 'Behind the Scenes - Production Setup', url: '/asset/images/blog/esports-journey/esports2.webp' },
      { title: 'E-Sports Organization Group Picture - After 2023 Finals Tournament 1', url: '/asset/images/blog/esports-journey/Edays-2k22-1.webp' },
      { title: 'E-Sports Organization Group Picture - After 2023 Finals Tournament 2', url: '/asset/images/blog/esports-journey/Edays-2k22.webp' },
      { title: 'E-Sports Organization Group Picture - After 2024 Championship Match Group Picture 1', url: '/asset/images/blog/esports-journey/group-esports1.webp' },
      { title: 'E-Sports Organization Group Picture - After 2024 Championship Match Group Picture 2', url: '/asset/images/blog/esports-journey/group-esports2.webp' }
    ],
    content: `
      <h5>The Unexpected Beginning</h5>
      <p>It was 2022—my first year in college. Just like most freshies, I had no clear path yet, no big plans. I was simply navigating college life, one assignment at a time. Then out of nowhere on our second semester, our section chairperson casually asked me:</p>
      
      <blockquote>Do you know how to edit photos?</blockquote>
      
      <p>I said yes. That one answer unknowingly lit the first spark of what would later become a blazing passion for <strong>esports</strong>.</p>
      
      <hr />

      <h4>Chapter 1: Pressures, Posters, and Professor Visaya</h4>
      <p>That simple editing request led me into the inner workings of our school&#39;s esports organization. Suddenly, I was part of something bigger—<strong>creating graphics</strong>, <strong>supporting tournaments</strong>, <strong>designing livestream overlays</strong>. I became one of the "go-to" graphics guys.</p>
      <p>But it wasn't always fun and games.</p>
      <p>Under the intense guidance of our esports adviser, <strong>Mr. Ralph Visaya</strong>, we were pushed hard—<strong>tight deadlines, last-minute edits, nonstop revisions</strong>. I remember how often I'd feel frustrated, overwhelmed, even angry.</p>
      
      <img src="/asset/images/blog/esports-journey/esports3.webp" alt="Designing an esports poster" />

      <blockquote>Growth begins where comfort ends.</blockquote>
      
      <p>At the time, I didn't see the value of the pressure. I only saw the clock ticking and a demanding professor expecting me to deliver. But despite the frustration, I still found a way to <strong>get things done—on time, every time</strong>.</p>
      <p>And looking back now, I realize: <strong>I wouldn't have it any other way</strong>.</p>

      <hr />
      
      <h4>Chapter 2: Passion Beyond Posters</h4>
      <p>What started with simple posters quickly evolved into something far greater. Thanks to Mr. Visaya and our tech-savvy mentor, Mr. Daniel Bermodez, I was introduced to the technical side of esports:</p>
      <ul>
        <li>Setting up <strong>OBS for livestreams</strong></li>
        <li>Handling <strong>virtual event layouts</strong></li>
        <li>Laying down <strong>Cat6 fiber optic cables</strong> for our gym&#39;s esports events</li>
      </ul>
      <p>These were tasks I never imagined doing as a student. And yet, I found myself enjoying every bit of the chaos—every cable plugged, every livestream scene configured, every digital backdrop designed. It wasn't just about aesthetics anymore. It was about <strong>bringing esports to life</strong>.</p>

      <img src="/asset/images/blog/esports-journey/LED-truck.webp" alt="Setting up an LED truck for an event" />

      [[CAROUSEL]]

      <hr />

      <h4>Chapter 3: The Flame Ignites</h4>
      <p>The stress, the pressure, the unexpected responsibilities—they didn't break me. They built me. Somewhere in the middle of all that tension, I discovered something I never expected:</p>
      
      <blockquote>Sometimes, the fire that burns you is the same fire that forges you.</blockquote>
      
      <p>I was no longer just a student assigned to make posters. I was now a creative lead, a production tech, a broadcast organizer—someone who could imagine, design, and execute an entire <strong>esports event</strong> from scratch.</p>

      <img src="/asset/images/blog/esports-journey/esports4.webp" alt="Behind the scenes at an esports tournament" />

      <hr />

      <h4>Gratitude in Hindsight</h4>
      <p>Yes, I once got mad at Mr. Visaya. Yes, I was stressed beyond belief. But if I met him again today, I would thank him.</p>
      <p>Because <strong>he saw a spark in me that I didn't yet recognize myself.</strong></p>
      <p>Because he pressured me, challenged me, and pushed me to grow.</p>
      <p>Because of him and Mr. Bermodez, I now hold a burning passion not just for playing games—but for <strong>building the very stages where they're played.</strong></p>
      <p>This is more than just a story about esports. It's the story of how I found my path—one deadline, one design, one livestream at a time.</p>

      <div>
        <h5>Ready to see my esports work in action?</h5>
        <p>Explore my portfolio to see how these college experiences shaped my design philosophy and technical skills in the gaming industry.</p>
        <a href="/obs-overlays" class="no-underline">
          View My Gaming Projects <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    `,
    seo: {
        metaDescription: "Follow my journey from a casual photo editor in college to an esports visionary, handling everything from graphic design to live event production. A story of passion, pressure, and growth.",
        keywords: "esports journey, graphic design, event production, student passion, OBS, livestream, career development, gaming community"
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
    id: 'aff-mouse-1',
    name: 'Logitech B170 Wireless Mouse',
    description: 'A reliable and affordable wireless mouse for everyday productivity and light gaming.',
    marketplace: 'Lazada',
    url: 'https://c.lazada.com.ph/t/c.cdc1HS',
    image: getImage('aff-logitech-mouse'),
    tags: ['gaming'],
  },
  {
    id: 'aff-keyboard-1',
    name: 'Zeus K-198 Series Gaming Keyboard',
    description: 'An entry-level gaming keyboard with durable keys and a comfortable layout for long gaming sessions.',
    marketplace: 'Lazada',
    url: 'https://c.lazada.com.ph/t/c.cdc1UN',
    image: getImage('aff-zeus-keyboard'),
    tags: ['gaming', 'streaming'],
  },
    {
    id: 'aff-headset-1',
    name: 'Inplay S500 RGB Wired Stereo Gaming Headset',
    description: 'Immersive stereo sound with RGB lighting to enhance your gaming setup.',
    marketplace: 'Lazada',
    url: 'https://c.lazada.com.ph/t/c.cdcccQ',
    image: getImage('aff-inplay-headset'),
    tags: ['gaming', 'streaming'],
  },
  {
    id: 'aff-keyboard-2',
    name: 'FIREWOLF Rainbow LED Gaming Keyboard',
    description: 'A vibrant keyboard with rainbow backlighting and responsive keys for a better gaming feel.',
    marketplace: 'Lazada',
    url: 'https://c.lazada.com.ph/t/c.cdccWB',
    image: getImage('aff-firewolf-keyboard'),
    tags: ['gaming'],
  },
  {
    id: 'aff-monitor-1',
    name: "ARZOPA A1 15.6' 60Hz Portable Gaming Monitor",
    description: 'A portable monitor with a built-in kickstand, perfect for gaming on the go or as a second screen.',
    marketplace: 'Lazada',
    url: 'https://c.lazada.com.ph/t/c.cdccrX',
    image: getImage('aff-arzopa-a1-monitor'),
    tags: ['gaming', 'streaming'],
  },
  {
    id: 'aff-monitor-2',
    name: 'Nvision 24 Inch 100Hz Frameless Gaming Monitor',
    description: 'A smooth 100Hz refresh rate and frameless design make this a great choice for immersive FHD gaming.',
    marketplace: 'Lazada',
    url: 'https://c.lazada.com.ph/t/c.cdccH6',
    image: getImage('aff-nvision-monitor'),
    tags: ['gaming'],
  },
    {
    id: 'aff-monitor-3',
    name: 'ARZOPA 14" A1S Portable Laptop Monitor',
    description: 'A compact and lightweight FHD portable monitor with dual speakers, ideal for productivity and travel.',
    marketplace: 'Lazada',
    url: 'https://c.lazada.com.ph/t/c.c7mbm2',
    image: getImage('aff-arzopa-a1s-monitor'),
    tags: ['streaming'],
  },
  {
    id: 'aff-monitor-4',
    name: 'EXPOSE ZEUSLAP P15A Portable Touch Screen Monitor',
    description: 'A 15.6-inch 4K portable monitor with touch screen capabilities for an interactive experience.',
    marketplace: 'Lazada',
    url: 'https://c.lazada.com.ph/t/c.c7mbNh',
    image: getImage('aff-expose-monitor'),
    tags: ['gaming'],
  },
  {
    id: 'aff-monitor-5',
    name: 'KAMPEON Gaming Monitor 24" Curve',
    description: 'A 24-inch curved 4K monitor that provides an immersive viewing experience for gaming and media.',
    marketplace: 'Lazada',
    url: 'https://c.lazada.com.ph/t/c.c7mbMa',
    image: getImage('aff-kampeon-monitor'),
    tags: ['gaming'],
  },
    {
    id: 'aff-headset-2',
    name: 'Allan Gaming Headset with Microphone',
    description: 'A budget-friendly gaming headset with noise cancellation for clear communication.',
    marketplace: 'Lazada',
    url: 'https://c.lazada.com.ph/t/c.c7mbLo',
    image: getImage('aff-allan-headset'),
    tags: ['gaming'],
  },
  {
    id: 'aff-headset-3',
    name: 'INPLAY H20 Dynamic Driver RGB Gaming Headset',
    description: 'Features dynamic drivers and noise cancellation for high-quality audio and clear chat.',
    marketplace: 'Lazada',
    url: 'https://c.lazada.com.ph/t/c.c7mbsF',
    image: getImage('aff-inplay-h20-headset'),
    tags: ['gaming'],
  },
  {
    id: 'aff-headset-4',
    name: 'Awei GM-6 HIFI Super Bass Wired Headphone',
    description: 'Delivers super bass and high-fidelity sound with anti-noise features for an immersive audio experience.',
    marketplace: 'Lazada',
    url: 'https://c.lazada.com.ph/t/c.c7mbx2',
    image: getImage('aff-awei-headset'),
    tags: ['gaming'],
  },
];



    