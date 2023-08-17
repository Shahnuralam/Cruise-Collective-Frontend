import React from 'react';
import { CompetitionCourseItem } from '@/containers/Competition/CompetitionCourseItem';

export interface ICompetitionCourseListProps {
  items: CompetitionCourseItem[];
}

export const CompetitionCourseList: React.FC<ICompetitionCourseListProps> = (props) => {
  const { items } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-12 pb-4">
      {items.map((item, itemIdx) => (
        <CompetitionCourseItem item={item} key={`cci-${item.id}-${itemIdx}`} />
      ))}
    </div>
  );
};
