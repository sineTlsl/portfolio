import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/global.css';

import Header from '@/sections/header';
import Footer from '@/sections/footer';

const pretendard = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Pretendard-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Pretendard-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Pretendard-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Pretendard-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
});
export const metadata: Metadata = {
  title: '임시은 포트폴리오',
  description: '프론트엔드 신입 개발자 임시은입니다.',
  openGraph: {
    images: ['https://www.sieun-lim-portfolio.com/assets/images/profile.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
