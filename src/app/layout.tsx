import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import '../styles/reset.css';

import Header from '@/sections/header';

const notoKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

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
    <html lang="ko">
      <body className={notoKr.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
