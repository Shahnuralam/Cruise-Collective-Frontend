import Link from "next/link";
import { useRouter } from "next/router";
import CardImage from "./CardImage";

export const DestinationCountryCard = ({ cruise }) => {
  const router = useRouter();
  const { attributes } = cruise;
  const { excerpt, title, featured_image, slug } = attributes;
  const featuredImage = featured_image?.data?.attributes?.url;

  const navigateToDetailPage = () => {
    router.push(`/country/${slug}`);
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
        <div className="h-20 px-4">
          <p
            className="line-clamp-3 mt-4 text-base leading-6"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></p>
        </div>

        <h5 className="text-2xl border-t border-b border-cruise py-2 px-4">
          <Link className=" group-hover:text-cruise" href={`/country/${slug}`}>
            {title}
          </Link>
        </h5>
        <h5 className="uppercase mt-2 py-3 tracking-[2.4px] px-4 text-black text-xs apercu_medium">
          <Link className=" group-hover:text-cruise" href={`/country/${slug}`}>
            EXPLORE HERE
          </Link>
        </h5>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  // const { data } = await axios.get(`${baseUrl}/api/homepage?populate=deep`);

  return {
    props: {},
    revalidate: 1,
  };
};
