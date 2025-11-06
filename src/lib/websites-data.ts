import { Project } from './data';

import fourcoreWeb from '@/app/asset/images/works-web/4core-web.webp';
import aquavendWeb from '@/app/asset/images/works-web/aquavend-web.webp';
import browzioWeb from '@/app/asset/images/works-web/browzio-web.webp';
import budgetwiseWeb from '@/app/asset/images/works-web/budgetwise-web.webp';
import cloudcallWeb from '@/app/asset/images/works-web/cloudcall-web.webp';
import hopeangelsWeb from '@/app/asset/images/works-web/hopeangels-web.webp';
import imgcleanerWeb from '@/app/asset/images/works-web/imgcleaner-web.webp';
import inoutcleaningWeb from '@/app/asset/images/works-web/inoutcleaning-web.webp';
import pydocgenWeb from '@/app/asset/images/works-web/pydocgen-web.webp';

export const websiteProjects: Project[] = [
  {
    id: 'proj-website-1',
    title: '4core',
    category: 'Websites/Webapps',
    description: '4CORE is a responsive single-page agency site built with Next.js and Tailwind CSS. It showcases VA, dev, and creative services with smooth animations, a tech stack section, testimonials, and a contact form via EmailJS. Clean TypeScript architecture makes it easy to deploy and scale.',
    images: [{ imageUrl: fourcoreWeb, imageHint: 'website' }],
    tech: ['nextjs', 'typescript', 'tailwind'],
    liveDemoUrl: 'https://4core.vercel.app/',
  },
  {
    id: 'proj-website-2',
    title: 'AquaVend',
    category: 'Websites/Webapps',
    description: 'AquaVend is a React + Vite mobile-first web app built for the capstone project of students from Batangas State University – Malvar Campus. It enables admins to remotely monitor IoT water dispenser machines via a Firebase-powered dashboard, offering real-time data once devices are registered to an account.',
    images: [{ imageUrl: aquavendWeb, imageHint: 'website' }],
    tech: ['react', 'vite', 'firebase', 'tailwind'],
    liveDemoUrl: 'https://aquavend-e3d60.web.app/',
  },
  {
    id: 'proj-website-3',
    title: 'Browzio',
    category: 'Websites/Webapps',
    description: 'Browzio is your curated gateway to the internet’s most useful websites — all in one place. Whether you’re a designer, developer, content creator, or just a curious explorer, Browzio helps you discover the tools you need without the endless scrolling and guesswork.',
    images: [{ imageUrl: browzioWeb, imageHint: 'website' }],
    tech: ['nextjs', 'typescript', 'tailwind'],
    liveDemoUrl: 'https://browzio.vercel.app',
    githubUrl: 'https://github.com/seph54-ux/browzio',
  },
  {
    id: 'proj-website-4',
    title: 'BudgetWise',
    category: 'Websites/Webapps',
    description: 'BudgetWise is a modern and intuitive web application designed to help you take control of your finances. Track your income and expenses, set budgets, manage savings goals, and get smart, AI-powered suggestions to optimize your spending.',
    images: [{ imageUrl: budgetwiseWeb, imageHint: 'website' }],
    tech: ['nextjs', 'typescript', 'tailwind'],
    liveDemoUrl: 'https://budgetwise-ph.vercel.app/',
    githubUrl: 'https://github.com/seph54-ux/budgetwise',
  },
  {
    id: 'proj-website-5',
    title: 'CloudCall',
    category: 'Websites/Webapps',
    description: 'CloudCall is a modern and user-friendly weather application that provides real-time weather information for any location worldwide. It is built with HTML, CSS, and vanilla JavaScript, leveraging modern web APIs to deliver a seamless and interactive experience.',
    images: [{ imageUrl: cloudcallWeb, imageHint: 'website' }],
    tech: ['html', 'css', 'javascript'],
    liveDemoUrl: 'https://cloudcall.vercel.app',
    githubUrl: 'https://github.com/seph54-ux/cloudcall',
  },
  {
    id: 'proj-website-6',
    title: 'Hope Angels Homecare Agency',
    category: 'Websites/Webapps',
    description: 'This is the official website of Hope Angels Home Care Agency LLC. The website is designed to be a modern, responsive, and user-friendly platform that provides information about the agency services, mission, and values.',
    images: [{ imageUrl: hopeangelsWeb, imageHint: 'website' }],
    tech: ['nextjs', 'typescript', 'tailwind'],
    liveDemoUrl: 'https://hopeangels.vercel.app',
  },
  {
    id: 'proj-website-7',
    title: 'Background Remover',
    category: 'Websites/Webapps',
    description: 'The Background Remover is a sleek, Streamlit-powered web app that automates background removal from images using the rembg library. Designed for both single and batch processing, it supports JPG, PNG, WebP, and more, delivering clean, transparent PNG outputs. With optional preprocessing features like resizing, cropping, and alpha matting, it offers users enhanced control over image quality. The app’s tab-based interface and session-aware state management make it intuitive and efficient—perfect for quick edits or bulk tasks without the need for complex tools or manual masking.',
    images: [{ imageUrl: imgcleanerWeb, imageHint: 'website' }],
    tech: ['python'],
    liveDemoUrl: 'https://image-cleaner.streamlit.app/',
    githubUrl: 'https://github.com/seph54-ux/background-remover',
  },
  {
    id: 'proj-website-8',
    title: 'In Out Cleaning Experts',
    category: 'Websites/Webapps',
    description: 'This is the official website for "In & Out Cleaning Experts," your trusted partner for a spotless home or workspace. This project is a responsive, single-page application designed to showcase the company services and provide an easy way for customers to get in touch.',
    images: [{ imageUrl: inoutcleaningWeb, imageHint: 'website' }],
    tech: ['nextjs', 'typescript', 'tailwind'],
    liveDemoUrl: 'https://inout-clean.vercel.app',
  },
  {
    id: 'proj-website-9',
    title: 'Pydocgen',
    category: 'Websites/Webapps',
    description: 'A beautiful Flask-based web application that allows you to create custom Microsoft Word documents by executing your own Python scripts. This personal document generator features a modern neumorphism design with an uplifting animated gradient background, providing an elegant interface for programmatic document creation using the python-docx library.',
    images: [{ imageUrl: pydocgenWeb, imageHint: 'website' }],
    tech: ['python', 'flask', 'html'],
    liveDemoUrl: 'https://pydocgen.up.railway.app',
    githubUrl: 'https://github.com/seph54-ux/pydocgen',
  },
];
