import Footer from '@/ui/layout/Footer';
import Header from '@/ui/layout/Header';
import type { Metadata } from 'next';
import { Google_Sans_Flex } from 'next/font/google';
import './globals.css';

const googleFSansFlex = Google_Sans_Flex({
  variable: '--font-google-sans-flex',
  subsets: ['latin'],
  adjustFontFallback: false,
  fallback: ['sans-serif', 'Arial', 'Helvetica'],
});

export const metadata: Metadata = {
  title: 'Matheus Ramyres',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${googleFSansFlex.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
