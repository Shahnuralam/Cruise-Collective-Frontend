import Link from "next/link";
import CardImage from "./CardImage";
import { useRouter } from "next/router";

const InspirationCard = ({ inspiration }) => {
  const router = useRouter();
  const {
    id,
    title,
    excerpt,
    featured_image: { data },
  } = inspiration?.attributes;
  const featuredImage = data?.length ? data[0]?.attributes?.url : "";

  const navigateToDetailPage = () => {
    router.push(`/inspiration/${id}`);
  };

  return (
    <div className="card">
      <h3 className="text-3xl border-b border-cruise pb-5">{title}</h3>

      <CardImage
        navigateToDetailPage={navigateToDetailPage}
        featuredImage={featuredImage}
        title={title}
        height="328"
      />

      <div>
        <p className="text-sm p-2 line-clamp-3">{excerpt}</p>
        <h5 className="text-xl border-t border-b border-cruise uppercase font-bold mt-4 p-3 apercu_medium">
          <Link href={`/inspiration/${id}`}>Read Full Article</Link>
        </h5>
      </div>
    </div>
  );
};

export default InspirationCard;
