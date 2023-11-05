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


  const navigateToDetailPage = () => {
    router.push(`/inspiration/${id}`);
  };

  return (
    <div className="group card">
      <div className="h-[90px] mb-5 border-b border-cruise">
        <h3 className="line-clamp-2 group-hover:underline decoration-2">
          <Link className="text-2xl apercu_regular_pro" href={`/inspiration/${id}`}>
            {title}
          </Link>
        </h3>
      </div>

      <CardImage
        navigateToDetailPage={navigateToDetailPage}
        featuredImage={featuredImage}
        title={title}
        height={height}
      />

      <div>
        <div className="h-20 mt-4 px-4">
          <p
            dangerouslySetInnerHTML={{ __html: text_editor }}
            className="text-lg line-clamp-3"
          ></p>
        </div>

        <div className="text-xl tracking-[2.7px] border-t border-b border-cruise uppercase font-bold mt-4 p-4 apercu_medium">
          <Link className="group-hover:border-b" href={`/inspiration/${id}`}>
            Read Full Article
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InspirationCard;
