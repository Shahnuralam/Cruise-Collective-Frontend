import Link from "next/link";
import { useRouter } from "next/router";
import CardImage from "./CardImage";

export  const  DestinationCountryCard = ({ cruise }) => {
  const router = useRouter();
  const { id, imageUrl, name, excerpt, title, featured_image } =
    cruise?.attributes;
  const featuredImage = featured_image?.data?.attributes?.url;

  const navigateToNextRoute = () => {
    router.push(`/country/${id}`);
  };
  return (
    <div className="card group">
      <CardImage
        navigateToDetailPage={navigateToNextRoute}
        featuredImage={featuredImage}
        title={title}
        height="328px"
      />

      <div>
        <div className="h-20">
          <p
            className="line-clamp-3 mt-4 mx-2 text-base leading-6"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></p>
        </div>

        <h5 className="text-2xl border-t border-b border-cruise py-2 px-4">
          <Link className="group-hover:underline" href={`/country/${id}`}>
            {title}
          </Link>
        </h5>
        <h5 className="uppercase mt-2 py-3 px-4 text-black text-xl apercu_medium">
          <Link className="group-hover:underline" href={`/country/${id}`}>
            Explore Here
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
