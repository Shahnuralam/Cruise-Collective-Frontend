import React, { useMemo } from "react";
import {
  ExperiencePreview,
  IExperiencePreviewItem,
} from "@/containers/Experience/ExperiencePreview";
import { filterExclusiveItems, getLimitItems } from "@/helpers/filters";

export interface IExperiencePreviewListProps {
  items: IExperiencePreviewItem[];
}
export const ExperiencePreviewList: React.FC<IExperiencePreviewListProps> = ({
  items,
}) => {
  const exclusiveItems = getLimitItems(filterExclusiveItems(items), 3);

  return (
    <div className="flex justify-center items-center xl:justify-start xl:items-start flex-wrap gap-10">
      {exclusiveItems.map((experienceItem, experienceItemIdx) => (
        <ExperiencePreview
          item={experienceItem}
          key={`_e-${experienceItem.id}-${experienceItemIdx}`}
          rtl={!((experienceItemIdx + 1) % 2)}
        />
      ))}
    </div>
  );
};
