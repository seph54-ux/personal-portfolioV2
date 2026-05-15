import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://philjosephorlina.vercel.app'),
  title: {
    default: 'Philjoseph Orlina | Designer & Developer Portfolio',
    template: '%s | Philjoseph Orlina',
  },
  description: 'Official portfolio of Philjoseph Orlina, a multidisciplinary designer and developer based in the Philippines specializing in Front-End Development, Graphic Designing, and Virtual Assistance.',
  keywords: [
    'Philjoseph Orlina', 
    'Philjoseph Orlina Designer', 
    'Philjoseph Orlina Developer', 
    'philjoseph orlina', 
    'philjosephorlina',
    'phil orlina',
    'PHILJOSEPH ORLINA',
    'Seph Orlina', 
    'Philjoseph Orlina Portfolio', 
    'Designer Philippines', 
    'Web Developer Philippines', 
    'Esports Designer', 
    'Virtual Assistant', 
    'OBS Overlays', 
    'Next.js Developer'
  ],
  authors: [{ name: 'Philjoseph Orlina' }],
  creator: 'Philjoseph Orlina',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/asset/images/personal-logo/Seph-logo-light.webp',
    shortcut: '/asset/images/personal-logo/Seph-logo-light.webp',
    apple: '/asset/images/personal-logo/Seph-logo-light.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://philjosephorlina.vercel.app',
    siteName: 'Philjoseph Orlina Portfolio',
    title: 'Philjoseph Orlina | Designer & Developer',
    description: 'Transforming ideas into digital reality. Explore the creative work and technical services of Philjoseph Orlina.',
    images: [
      {
        url: '/asset/images/profile-image.png',
        width: 1200,
        height: 630,
        alt: 'Philjoseph Orlina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Philjoseph Orlina | Designer & Developer',
    description: 'Graphic Designer and Front-End Developer based in the Philippines.',
    images: ['/asset/images/profile-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Philjoseph Orlina",
              "alternateName": ["Seph Orlina", "philjoseph orlina", "PHILJOSEPH ORLINA"],
              "url": "https://philjosephorlina.vercel.app",
              "image": "https://philjosephorlina.vercel.app/asset/images/profile-image.png",
              "jobTitle": "Designer and Developer",
              "description": "Graphic Designer and Front-End Developer based in the Philippines specializing in Front-End Development, Graphic Designs, and Virtual Assistance.",
              "sameAs": [
                "https://github.com/seph54-ux",
                "https://www.facebook.com/share/19ZF9GsX6R/",
                "https://www.instagram.com/seph.547?igsh=YWJiNWhyem1vdzM2"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Philippines"
              }
            })
          }}
        />
      </head>
      <body className={cn('font-body antialiased flex flex-col min-h-screen')}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
