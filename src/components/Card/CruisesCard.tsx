import Link from "next/link";
import CardImage from "./CardImage";
import { useRouter } from "next/router";
import Image from "next/image";

const CruisesCard = ({ cruise }) => {
  const router = useRouter();

  const { id, attributes } = cruise;
  const {
    title,
    excerpt,
    featured_image: { data },
    logo,
  } = attributes;


  const featuredImage = data?.attributes?.url ? data?.attributes?.url : "";

  const navigateToDetailPage = () => {
    router.push(`/cruise-line/${id}`);
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
          <div className="p-3 absolute top-0">
            <Image
              width={70}
              height={50}
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
        <div className="text-3xl border-t border-b border-cruise py-2">
          <div className="px-4 group-hover:underline">
            <Link href={`/cruise-line/${id}`}>{title}</Link>
          </div>
        </div>
        <div className="uppercase mt-2 tracking-[3px] py-3 px-4 text-black text-xl apercu_medium">
          <Link className="group-hover:border-b" href={`/cruise-line/${id}`}>
            Explore Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CruisesCard;
