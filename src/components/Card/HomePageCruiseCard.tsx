import { useRouter } from "next/router";
import CardImage from "./CardImage";
import Link from "next/link";
import { formatDate } from "@/utils";

const HomePageCruiseCard = ({ cruise }) => {
 
  const router = useRouter();

  const { attributes } = cruise;
  const {
    slug,
    title,
    expiry_date,
    excerpt,
    featured_image: { data },
  } = attributes;
  const logo =
    cruise?.attributes?.cruise_line?.data?.attributes?.logo?.data?.attributes
      ?.url;
  const featuredImage = data[0]?.attributes?.url
    ? data[0]?.attributes?.url
    : "";

  const formattedExpiryDate = formatDate(expiry_date);
  const navigateToDetailPage = () => {
    router.push(`/cruise-line-offer/${slug}`);
  };
  return (
    <div className="card group">
      <div className="w-full h-[17.875rem] relative">
        <CardImage
          navigateToDetailPage={navigateToDetailPage}
          featuredImage={featuredImage}
          title={title}
        />
        <div
          className="absolute top-0 px-0 bg-transparent cursor-pointer z-40"
          onClick={navigateToDetailPage}
        >
          {logo && (
            <img
              className="w-20 md:w-36 logo-background-color"
              src={logo}
              alt=""
            />
          )}
        </div>
      </div>

      <div>
        <div className="h-20 mt-4 px-4">
          <p
            dangerouslySetInnerHTML={{ __html: excerpt }}
            className="line-clamp-3 text-black text-sm md:text-base"
          ></p>
        </div>
        <div className="text-2xl border-t border-b border-cruise py-2">
          <div className="px-4 line-clamp-3 h-auto md:h-24 items-center flex hover:text-cruise">
            <Link
              className="text-2xl"
              href={`/cruise-line-offer/${slug}`}
            >
              {title}
            </Link>
          </div>
        </div>

        <div className="uppercase mt-2 py-3 px-4 text-black text-xl apercu_medium">
          <button className="px-3 py-2 font-semibold text-sm tracking-[1.54px] text-center apercu_medium uppercase hover:bg-cruise">
            EXPIRES {formattedExpiryDate}
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomePageCruiseCard;
