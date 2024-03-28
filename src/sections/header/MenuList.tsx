import { MENUS } from '@/constants/menu';
import MenuItem from './MenuItem';

export default function MenuList() {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        {MENUS.map(({ tab }) => (
          <MenuItem key={tab} tab={tab} />
        ))}
      </ul>
    </nav>
  );
}
