import { Tooltip } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  name: string;
  children: ReactNode;
};

export default function ToolTipIcon({ name, children }: Props) {
  return (
    <Tooltip title={name}>
      <div>{children}</div>
    </Tooltip>
  );
}
