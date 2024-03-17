'use client';

import Image from 'next/image';

export default function Profile() {
  return (
    <div
      style={{
        position: 'relative',
        width: '210px',
        height: '210px',
        borderRadius: '50%',
        overflow: 'hidden',
      }}
    >
      <Image
        src="/assets/images/profile.jpeg"
        layout="fill"
        objectFit="cover"
        alt="profile"
        priority
      />
    </div>
  );
}
