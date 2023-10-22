import { useRouter } from "next/router";
import CardImage from "./CardImage";

const InterestCard = ({ interest }) => {
  const router = useRouter();
  const { id, attributes } = interest;
  const {
    title,
    excerpt,
    featured_image: { data },
  } = attributes;
  const featuredImage = data?.length ? data[0]?.attributes?.url : "";

  const navigateToDetailPage = () => {
    router.push(`/interest/${id}`);
  };

  return (
    // <div className="flex flex-col">
    <div className="card">
      <CardImage
        navigateToDetailPage={navigateToDetailPage}
        featuredImage={featuredImage}
        title={title}
      />
      <div>
        <p className="p-2 text-black text-sm md:text-base">{excerpt}</p>
        <h5 className="text-3xl border-t border-b border-cruise py-2 px-4">
          {title}
        </h5>
        <h5 className="uppercase mt-2 py-3 px-4 text-black text-xl apercu_medium">
          Explore Here
        </h5>
      </div>
    </div>
    // </div>
  );
};

export default InterestCard;
