import React from "react";
import {
  GardenAttribute,
  IGardenAttribute,
} from "@/containers/garden/GardenAttribute";

export interface IGardenAttributeListProps {
  items: IGardenAttribute[];
  facilities: any;
}
export const GardenAttributeList: React.FC<IGardenAttributeListProps> = (
  props
) => {
  const { items, facilities } = props;
  if (!facilities) return <></>;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map(
        (attribute, attributeIdx) =>
          facilities[attribute.type] && (
            <GardenAttribute
              key={`g-attr-${attribute.id}-${attributeIdx}`}
              item={attribute}
            />
          )
      )}
    </div>
  );
};
