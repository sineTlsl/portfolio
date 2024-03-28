'use client';

import Image from 'next/image';
import styles from './css/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles['profile-wrap']}>
      <Image
        src="/assets/images/profile.jpeg"
        fill
        style={{
          objectFit: 'cover',
        }}
        alt="profile"
        sizes="100%"
        priority
      />
    </div>
  );
}
