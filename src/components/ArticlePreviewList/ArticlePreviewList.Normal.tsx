import React, { useMemo } from "react";
import { IArticlePreviewListProps } from "@/components/ArticlePreviewList/index";
import { ArticlePreviewNormal } from "@/components/ArticlePreview";

export const ArticlePreviewListNormal: React.FC<any> = (props) => {
  const { items } = props;

  // const safelyData = useMemo(() => {
  //   if (!items || !Array.isArray(items)) return [];
  //   if (items.length < 4) return items;

  //   return items.slice(0, 4);
  // }, [items]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.data.map((item, itemIdx) => (
        <ArticlePreviewNormal
          key={`article-${item.id}-${itemIdx}`}
          item={item}
        />
      ))}
    </div>
  );
};
