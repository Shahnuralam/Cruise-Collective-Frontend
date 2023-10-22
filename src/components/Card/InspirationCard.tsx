import Link from "next/link";
import CardImage from "./CardImage";
import { useRouter } from "next/router";

const InspirationCard = ({ inspiration, height }) => {
  const router = useRouter();
  const { id, attributes } = inspiration;
  const {
    title,
    text_editor,
    featured_image: { data },
  } = attributes;
  const featuredImage = data?.attributes.url ? data?.attributes.url : "";
  console.log(inspiration);

  const navigateToDetailPage = () => {
    router.push(`/inspiration/${id}`);
  };

  return (
    <div className="card">
      <div className="h-[120px] mb-5 border-b border-cruise">
        <h3 className="text-3xl line-clamp-3">{title}</h3>
      </div>

      <CardImage
        navigateToDetailPage={navigateToDetailPage}
        featuredImage={featuredImage}
        title={title}
        height={height}
      />

      <div>
        <div className="h-20 mt-4 px-3">
          <p
            dangerouslySetInnerHTML={{ __html: text_editor }}
            className="text-lg line-clamp-3"
          ></p>
        </div>

        <h5 className="text-xl border-t border-b border-cruise uppercase font-bold mt-4 p-3 apercu_medium">
          <Link className="border-b" href={`/inspiration/${id}`}>Read Full Article</Link>
        </h5>
      </div>
    </div>
  );
};

export default InspirationCard;
