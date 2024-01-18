import { ArticlePreviewBig } from "@/components/ArticlePreview";

export const ArticlePreviewListBig: React.FC<any> = (props) => {
  const { items } = props;



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items?.data.map((item, itemIdx) => (
        <ArticlePreviewBig key={`article-${item.id}-${itemIdx}`} item={item} />
      ))}
    </div>
  );
};
