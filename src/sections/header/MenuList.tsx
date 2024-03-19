import { MENUS } from '@/constants/menu';
import MenuItem from './MenuItem';

export default function MenuList() {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        {MENUS.map(({ href, tab }) => (
          <MenuItem key={tab} href={href} tab={tab} />
        ))}
      </ul>
    </nav>
  );
}
