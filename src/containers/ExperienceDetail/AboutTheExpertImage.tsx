import React from 'react';
import Image from 'next/image';

export const AboutTheExpertImage: React.FC = () => {
  return (
    <div className="flex relative w-[17.5rem] h-[12.5rem] lg:w-[18.125rem] lg:h-[13.75rem] xl:w-[23.75rem] xl:h-[16.25rem] bg-[#d1d1d1]">
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        alt=""
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
    </div>
  );
};
