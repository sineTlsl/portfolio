'use client';

import Image from 'next/image';
import styles from './Profile.module.css';

export default function Profile() {
  return (
    <>
      <div
        style={{
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <Image
          src='/assets/images/profile.jpeg'
          width={230}
          height={230}
          alt='profile'
          priority
        />
      </div>
    </>
  );
}
