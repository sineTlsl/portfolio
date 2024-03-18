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
