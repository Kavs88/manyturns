import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono, Manrope } from 'next/font/google';
import './globals.css';

const display = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

/** Stage 5 board lock — parent UI / nav / CTA */
const ui = Manrope({
  variable: '--font-ui',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

/** Stage 5 board lock — body / supporting copy */
const body = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  variable: '--font-mono-face',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Many Turns',
    template: '%s | Many Turns',
  },
  description:
    'Polytropos — the man of many turns. An operator house whose path composed the offering across Europe and Southeast Asia.',
  metadataBase: new URL('https://manyturns.co'),
  openGraph: {
    title: 'Many Turns',
    description: 'Different paths. One journey.',
    siteName: 'Many Turns',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${ui.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-mt-oxblood text-mt-white font-body">
        {children}
      </body>
    </html>
  );
}
