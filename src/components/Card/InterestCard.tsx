import { useRouter } from "next/router";
import CardImage from "./CardImage";
import Link from "next/link";

const InterestCard = ({ interest }) => {
  const router = useRouter();
  const { id, attributes } = interest;
  const {
    title,
    slug,
    excerpt,
    featured_image: { data },
  } = attributes;
  const featuredImage = data?.length ? data[0]?.attributes?.url : "";

  const navigateToDetailPage = () => {
    router.push(`/interest/${slug}`);
  };

  return (
    <div className="card group">
      <div className="w-full h-[20.475rem] relative">
        <CardImage
          navigateToDetailPage={navigateToDetailPage}
          featuredImage={featuredImage}
          title={title}
        />
      </div>

      <div>
        <div className="h-20 mt-4 px-4">
          <p
            dangerouslySetInnerHTML={{ __html: excerpt }}
            className="line-clamp-3 text-black text-base"
          ></p>
        </div>
        <div className="text-2xl border-t border-b border-cruise py-2">
          <div className="px-4">
            <Link className="group-hover:border-b" href={`/interest/${slug}`}>
              {title}
            </Link>
          </div>
        </div>
        <div className="uppercase tracking-[3px] mt-2 py-3 px-4 text-black text-xl apercu_medium">
          <Link className="group-hover:border-b" href={`/interest/${slug}`}>
            Explore Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InterestCard;
