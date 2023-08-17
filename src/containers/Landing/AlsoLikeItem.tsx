import React from 'react';
import Image from 'next/image';

export const AlsoLikeItem: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 w-[17.5rem] lg:w-[20.5rem] xl:w-[27.5rem]">
      {/** Image */}
      <div className="relative w-full h-[20.5rem] lg:h-[23.5rem] xl:h-[30.5rem]">
        <Image src="/dummy/course/1.jpeg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
      </div>

      {/** Info*/}
      <div className="flex flex-wrap max-w-[90%] font-medium">
        <h3>The best places to see snowdrops in 2023</h3>
      </div>
    </div>
  );
};

export default AlsoLikeItem;
