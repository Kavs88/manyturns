import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Manrope } from 'next/font/google';
import './globals.css';

const ui = Manrope({
  variable: '--font-ui',
  subsets: ['latin'],
  display: 'swap',
});

const body = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  variable: '--font-mono-face',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Many Turns',
    template: '%s | Many Turns',
  },
  description:
    'Different paths. One journey. Manyturns OÜ — operator house for critical turns across Europe and Southeast Asia.',
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
      className={`${ui.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-mt-midnight text-mt-ivory font-body">
        {children}
      </body>
    </html>
  );
}
