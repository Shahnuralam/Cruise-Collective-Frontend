import React, { useMemo } from "react";
import { IArticlePreviewListProps } from "./index";
import { ArticlePreviewBig } from "@/components/ArticlePreview";

export const ArticlePreviewListBig: React.FC<any> = (props) => {
  const { items } = props;

  // const safelyData = useMemo(() => {
  //   if (!items || !Array.isArray(items)) return [];
  //   if (items.length < 3) return items;

  //   return items.slice(0, 3);
  // }, [items]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items?.data.map((item, itemIdx) => (
        <ArticlePreviewBig key={`article-${item.id}-${itemIdx}`} item={item} />
      ))}
    </div>
  );
};
