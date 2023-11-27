import Link from "next/link";
import CardImage from "./CardImage";
import { useRouter } from "next/router";
import Image from "next/image";

const CruisesCard = ({ cruise }) => {
  const router = useRouter();

  const { id, attributes } = cruise;
  const { title, slug, excerpt, featured_image, logo } = attributes;

  const featuredImage = featured_image?.data?.length
    ? featured_image?.data[0]?.attributes?.url
    : "";

  const navigateToDetailPage = () => {
    router.push(`/cruise-line/${slug}`);
  };

  return (
    <div className="card group">
      <div className="w-full">
        <div className="w-full h-[20.475rem] relative">
          <CardImage
            navigateToDetailPage={navigateToDetailPage}
            featuredImage={featuredImage}
            title={title}
          />
        </div>

        {logo?.data?.attributes?.url && (
          <div className=" 	 absolute top-0 cursor-pointer" onClick={navigateToDetailPage}>
            <Image
              width={150}
              height={100}
              style={{
                background: "rgba(255, 255, 255, 0.3)",
                width: "95%",
              }}
              
              src={logo?.data?.attributes?.url}
              alt={logo?.data?.attributes?.name}
            />
          </div>
        )}
      </div>

      <div>
        <div className="h-20 mt-4 px-4">
          <p
            dangerouslySetInnerHTML={{ __html: excerpt }}
            className="line-clamp-3 text-black text-base"
          ></p>
        </div>
        <div className="text-2xl border-t border-b border-cruise py-2">
          <div className="px-4  hover:text-cruise">
            <Link href={`/cruise-line/${slug}`}>{title}</Link>
          </div>
        </div>
        <div className="uppercase mt-2 tracking-[3px] py-3 px-4 text-black text-xs apercu_medium_pro">
          <Link className="hover:text-cruise" href={`/cruise-line/${slug}`}>
             
             EXPLORE HERE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CruisesCard;
