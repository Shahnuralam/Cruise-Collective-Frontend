import Link from "next/link";
import CardImage from "./CardImage";
import { useRouter } from "next/router";

const CruisesCard = ({ cruise }) => {
  const router = useRouter();

  const { id, attributes } = cruise;
  const {
    title,
    excerpt,
    featured_image: { data },
  } = attributes;

  const featuredImage = data?.attributes?.url ? data?.attributes?.url : "";
  console.log(data);

  const navigateToDetailPage = () => {
    router.push(`/cruise-line/${id}`);
  };

  return (
    <div className="card">
      <CardImage
        navigateToDetailPage={navigateToDetailPage}
        featuredImage={featuredImage}
        title={title}
      />
      <div>
        <div className="h-20">
          <p className="p-2 line-clamp-3 text-black text-sm md:text-base">
            {excerpt}
          </p>
        </div>
        <div className="text-3xl border-t border-b border-cruise py-2">
          <div className="px-4 hover:bg-cruise cursor-pointer">
            <Link href={`/cruise-line/${id}`}>{title}</Link>
          </div>
        </div>
        <h5 className="uppercase mt-2 py-3 px-4 text-black text-xl apercu_medium">
          <Link href={`/cruise-line/${id}`}>Explore Here</Link>
        </h5>
      </div>
    </div>
  );
};

export default CruisesCard;
