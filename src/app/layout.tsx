import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export const metadata: Metadata = {
  title: 'Philjoseph Orlina | Portfolio',
  description: 'A portfolio showcasing design and development projects by Philjoseph Orlina.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY;

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased flex flex-col min-h-screen')}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {recaptchaSiteKey ? (
            <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
              <Toaster />
            </GoogleReCaptchaProvider>
          ) : (
            <>
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
              <Toaster />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
