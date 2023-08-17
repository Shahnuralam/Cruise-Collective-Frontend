import React from 'react';
import Image from 'next/image';

export interface CompetitionCourseItem {
  id: string | number;
  image: {
    src: string;
    alt?: string;
  };
  bottomLeftBadge?: string;
  title: string;
  description: string;
}

export interface ICompetitionCourseItemProps {
  item: CompetitionCourseItem;
}

export const CompetitionCourseItem: React.FC<ICompetitionCourseItemProps> = (props) => {
  const { item } = props;
  return (
    <div className="flex flex-col gap-6 w-[17.5rem] lg:w-[27.5rem] xl:w-[40.5rem]">
      {/** Image */}
      <div className="flex relative h-[10rem] lg:h-[17.5rem] xl:h-[30.5rem]">
        <Image src={item.image.src} alt={item.image?.alt || item.title} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />

        {item.bottomLeftBadge && (
          <div className="absolute left-4 bottom-4 px-4 py-3 bg-white text-black text-sm">
            <span>{item.bottomLeftBadge}</span>
          </div>
        )}
      </div>

      {/** Info*/}
      <div className="flex flex-col gap-4 max-w-[90%]">
        {/** Name */}
        <h3 className="lg:text-[1.25rem] xl:text-[2rem] text-[#607b53] text-opacity-90 font-thin leading-tight" dangerouslySetInnerHTML={{ __html: item.title }} />
        {/** Description */}
        <p className="" dangerouslySetInnerHTML={{ __html: item.description }} />
      </div>
    </div>
  );
};
