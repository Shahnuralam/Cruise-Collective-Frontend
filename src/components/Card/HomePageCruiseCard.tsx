import { useRouter } from "next/router";
import CardImage from "./CardImage";
import Link from "next/link";

const HomePageCruiseCard = ({ cruise }) => {
  const router = useRouter();

  const { id, attributes } = cruise;
  const {
    slug,
    title,
    expiry_date,
    excerpt,
    featured_image: { data },
  } = attributes;

  const featuredImage = data?.attributes?.url ? data?.attributes?.url : "";

  const navigateToDetailPage = () => {
    router.push(`/cruise-line-card-detail/${slug}`);
  };
 // Check if the current date is after the expiry date
 const isExpired = new Date() > new Date(expiry_date);

 if (isExpired) {
   // Return null if the post has expired
   return null;
 }
  return (
    <div className="card group">
      <div className="w-full h-[17.875rem] relative">
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
            className="line-clamp-3 text-black text-sm md:text-base"
          ></p>
        </div>
        <div className="text-2xl border-t border-b border-cruise py-2">
          <div className="px-4 group-hover:underline">
            <Link
              className="apercu_regular_pro"
              href={`/cruise-line-card-detail/${slug}`}
            >
              {title}
            </Link>
          </div>
        </div>

        <div className="uppercase mt-2 py-3 px-4 text-black text-xl apercu_medium">
          <button className="px-3 py-2 font-semibold text-sm tracking-[1.54px] text-center apercu_medium uppercase hover:bg-cruise">
            EXPIRES {expiry_date}
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomePageCruiseCard;
