import Link from "next/link";
import CardImage from "./CardImage";
import { useRouter } from "next/router";

const InspirationCard = ({ inspiration }) => {
  const router = useRouter();
  const { id, attributes } = inspiration;
  const { title, slug, text_editor, featured_image } = attributes;
  const featuredImage = featured_image?.data?.length
    ? featured_image?.data[0]?.attributes.url
    : "";

  const navigateToDetailPage = () => {
    router.push(`/inspiration/${slug}`);
  };

  return (
    <div className="group card">
      <h3 className=" h-[90px] text-2xl border-b border-cruise pb-5 mb-4   group-hover:text-cruise decoration-2">
        <Link href={`/inspiration/${slug}`}>{title}</Link>
      </h3>

      <div className="w-full h-[18.725rem] relative">
        <CardImage
          navigateToDetailPage={navigateToDetailPage}
          featuredImage={featuredImage}
          title={title}
        />
      </div>

      <div>
        <div className="h-20 mt-4 px-4">
          <p
            dangerouslySetInnerHTML={{ __html: text_editor }}
            className="text-lg line-clamp-3"
          ></p>
        </div>

        <div className=" tracking-[2.7px] border-t border-b border-cruise uppercase font-bold mt-4 p-4 apercu_medium_pro text-xs">
          <Link className=" group-hover:text-cruise" href={`/inspiration/${slug}`}>
            Read Full Article
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InspirationCard;
