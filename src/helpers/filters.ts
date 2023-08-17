import { IExperiencePreviewItem } from "@/containers/Experience";

export const filterExclusiveItems = (items: IExperiencePreviewItem[]) =>
  items.filter((item) => item.attributes.exclusive === true);

export const getLimitItems = (items: any[], size: number) =>
  items.slice(0, size);
