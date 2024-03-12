'use client';

import React, { useState } from 'react';
import { ConnectIcon } from '@/types/icon';
import Snackbar from '@mui/material/Snackbar';

import ToolTipIconBtn from '@/components/button/ToolTipIconBtn';
import GithubFillIcon from '@/components/ui/icons/GithubFillIcon';
import BlogFillIcon from '@/components/ui/icons/BlogFillIcon';
import CallFillIcon from '@/components/ui/icons/CallFillIcon';
import EmailFillIcon from '@/components/ui/icons/EmailFillIcon';

export const BLOGICONS: Icon[] = [
  {
    nameKr: '깃허브',
    name: 'Github',
    icon: <GithubFillIcon />,
    href: 'https://sinetlsl.github.io',
  },
  {
    nameKr: '기술 블로그',
    name: 'TechBlog',
    icon: <BlogFillIcon />,
    href: 'https://github.com/sineTlsl',
  },
  {
    nameKr: '전화번호',
    name: 'Call',
    icon: <CallFillIcon />,
    copyText: '010-9929-1927',
  },
  {
    nameKr: '이메일',
    name: 'Email',
    icon: <EmailFillIcon />,
    copyText: 'limsieun0313@gmail.com',
  },
];

type Success = {
  open: boolean;
  message: string;
};

export default function Connect() {
  const [copySuccess, setCopySuccess] = useState<Success>({
    open: false,
    message: '',
  });

  const handleToLink = (href: string) => {
    window.open(href);
  };

  const handleCopyClipboard = async (text: string, nameKr: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess({
        open: true,
        message: `${nameKr} 복사 성공`,
      });
    } catch {
      setCopySuccess({
        open: true,
        message: `${nameKr} 복사 실패`,
      });
    }
  };

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {BLOGICONS.map(({ nameKr, icon, name, href, copyText }) => (
        <ToolTipIconBtn
          key={name}
          name={name}
          icon={icon}
          href={href}
          onClick={
            copyText ? () => handleCopyClipboard(copyText, nameKr) : undefined
          }
        />
      ))}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={1200}
        open={copySuccess.open}
        onClose={() => setCopySuccess({ ...copySuccess, open: false })}
        message={copySuccess.message}
      />
    </div>
  );
}
