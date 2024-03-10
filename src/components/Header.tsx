'use client';

import styled from 'styled-components';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

const menuTabs = [
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/project',
    title: 'Project',
  },
  {
    href: '/study',
    title: 'Study',
  },
];

function Header() {
  const [prevScrollTop, setPrevScrollTop] = useState<number>(0);
  const [isHeaderActive, setIsHeaderActive] = useState<boolean>(false);

  useEffect(() => {
    /* 스크롤 시 헤더 보여줬다가 숨기기 */
    const handleScroll = () => {
      const nowScrollTop = window.scrollY;

      setIsHeaderActive(nowScrollTop > prevScrollTop);
      setPrevScrollTop(nowScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollTop]);

  return (
    <HeaderContainer
      className={`${inter.className} ${isHeaderActive ? 'active' : ''}`}
    >
      <LeftLogoText>
        <Link className='a-comm-text' href='/'>
          <span>{`Sieun's`}</span>Portfolio
        </Link>
      </LeftLogoText>
      <RightMenu>
        <ul>
          {menuTabs.map(({ href, title }) => (
            <MenuItem key={title}>
              <Link className='a-comm-text' href={href} aria-label={title}>
                {title}
              </Link>
            </MenuItem>
          ))}
        </ul>
      </RightMenu>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  padding: 30px 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  &.active {
    transform: translateY(-100%);
  }
  .a-comm-text {
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const LeftLogoText = styled.div`
  > a {
    color: #fff;
    font-weight: 600;
    font-size: 20px;
  }
  > a > span {
    margin-right: 8px;
  }
`;

const RightMenu = styled.nav`
  > ul {
    display: flex;
    justify-content: space-between;
  }
`;

const MenuItem = styled.li`
  margin-left: 30px;

  > a {
    -webkit-transition: color 0.3s;
    -moz-transition: color 0.3s;
    transition: color 0.3s;
    color: rgba(255, 255, 255, 0.8);
    font-size: 12pt;
    font-weight: 400;
    position: relative;
    display: block;
  }
  > a:before {
    position: absolute;
    top: 100%;
    left: 50%;
    color: transparent;
    content: '•';
    text-shadow: 0 0 transparent;
    font-size: 10pt;
    -webkit-transition: text-shadow 0.3s, color 0.3s;
    -moz-transition: text-shadow 0.3s, color 0.3s;
    transition: text-shadow 0.3s, color 0.3s;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    transform: translateX(-50%);
    pointer-events: none;
  }
  > a:hover:before,
  > a:focus:before {
    color: #fff;
    text-shadow: 10px 0 #fff, -10px 0 #fff;
  }
  > a:hover,
  a:focus {
    color: #fff;
  }
`;
