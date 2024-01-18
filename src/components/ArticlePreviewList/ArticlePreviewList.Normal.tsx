import { ArticlePreviewNormal } from "@/components/ArticlePreview";

export const ArticlePreviewListNormal: React.FC<any> = (props) => {
  const { items } = props;


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
