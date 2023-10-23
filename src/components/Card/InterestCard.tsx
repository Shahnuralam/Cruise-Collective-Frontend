import { useRouter } from "next/router";
import CardImage from "./CardImage";
import Link from "next/link";

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

    <div className="card group">
      <CardImage
        navigateToDetailPage={navigateToDetailPage}
        featuredImage={featuredImage}
        title={title}
        height="328px"
      />
      <div>
        <div className="h-20 mt-4 px-3">
          <p
            dangerouslySetInnerHTML={{ __html: excerpt }}
            className="line-clamp-3 text-black text-sm md:text-base"
          ></p>
        </div>
        <div className="text-3xl border-t border-b border-cruise py-2">
          <div className="px-4">
            <Link className="group-hover:border-b" href={`/interest/${id}`}>{title}</Link>
          </div>
        </div>
        <h5 className="uppercase mt-2 py-3 px-4 text-black text-xl apercu_medium">
          <Link className="group-hover:border-b" href={`/interest/${id}`}>
            Explore Here
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default InterestCard;
