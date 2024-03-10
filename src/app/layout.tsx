import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/reset.css';

// components
import Header from '@/sections/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '임시은 포트폴리오',
  description: '프론트엔드 신입 개발자 임시은입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
