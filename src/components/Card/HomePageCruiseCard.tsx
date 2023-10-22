import { useRouter } from "next/router";
import CardImage from "./CardImage";
import Link from "next/link";

const HomePageCruiseCard = ({ cruise }) => {
  const router = useRouter();
  const { id, featuredImage, title, excerpt } = cruise;

  const navigateToDetailPage = () => {
    router.push(`/cruise-line/${id}`);
  };

  return (
    <div className="card">
      <CardImage
        navigateToDetailPage={navigateToDetailPage}
        featuredImage={featuredImage}
        title={title}
        height={300}
      />
      <div>
        <div className="m-3 h-24">
          <div className="line-clamp-3 text-ellipsis text-black text-sm md:text-xl">
              {excerpt}
           </div>
        </div>
         
        <div className="text-[27px] border-t border-b border-cruise py-2">
          <div className="px-4 hover:bg-cruise py-1">
            <Link className="border-b border-black" href={`/cruise-line/${id}`}>{title}</Link>
          </div>
        </div>
        <h5 className="uppercase mt-2 py-3 px-4 text-black text-base apercu_medium">
          <Link className="border-b border-black"  href={`/cruise-line/${id}`}>EXPIRES 7·31·23</Link>
        </h5>
      </div>
    </div>
  );
};
export default HomePageCruiseCard;
