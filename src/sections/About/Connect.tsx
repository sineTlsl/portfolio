'use client';

import React, { useState } from 'react';
import ToolTipIconBtn from '@/components/button/ToolTipIconBtn';
import Snackbar from '@mui/material/Snackbar';
import { connectIcon } from './ConnectIcon';

type Success = {
  open: boolean;
  message: string;
};

export default function Connect() {
  const [copySuccess, setCopySuccess] = useState<Success>({
    open: false,
    message: '',
  });

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
      {connectIcon.map(({ nameKr, icon, name, href, copyText }) => (
        <ToolTipIconBtn
          key={name}
          nameKr={nameKr}
          name={name}
          icon={icon}
          href={href}
          onClick={() => {
            copyText && handleCopyClipboard(copyText, nameKr);
          }}
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
