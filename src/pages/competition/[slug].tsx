import FullScreenHeader from "@/components/FullScreenHeader";
import PageHeading from "@/components/PageHeading";
import React, { useRef, useState } from "react";
import { baseUrl } from "@/utils";
import styles from "../../styles/editor.module.css";
import CompetitionCard from "@/components/Card/CompetitionCard";
import Head from "next/head";
import Seo from "@/components/Seo";
import ReplaceGalleryTag from "@/components/ReplaceGalleryTag";
import { useSession } from "next-auth/react";
import LoginModal from "@/components/Modal/LoginModal";
const CompetitionDetailPage = ({ competition, competitions }) => {
  const { data: session } = useSession();
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const scrollIntoViewRef = useRef(null);

  const createdAt = new Date(competition?.attributes?.createdAt);

  const options: any = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options)?.format(
    createdAt
  );
  const uppercaseFormattedDate = formattedDate.toUpperCase();

  const status = competition?.attributes?.status;

  const fullScreenHeader = {
    sliders: competition?.attributes?.featured_image?.data,
    heading: competition?.attributes?.title,
    date: uppercaseFormattedDate,
    text: `COMPETITION CLOSES ON: ${competition?.attributes?.close_date || ""}`,
    btnText: status ? "ENTER BELOW" : !status ? "VIEW DETAILS" : "ENTER BELOW",
    scrollIntoViewRef,
  };

  const getRandomCompetitions = (
    count,
    currentCompetitionSlug,
    allCompetitions
  ) => {
    const shuffledCompetitions = [...allCompetitions];

    // Filter out the current competition based on its slug
    const filteredCompetitions = shuffledCompetitions.filter(
      (item) => item?.attributes?.slug !== currentCompetitionSlug
    );

    // Shuffle the filtered competitions
    for (let i = filteredCompetitions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredCompetitions[i], filteredCompetitions[j]] = [
        filteredCompetitions[j],
        filteredCompetitions[i],
      ];
    }

    // Return the sliced array of competitions
    return filteredCompetitions.slice(0, count);
  };

  // Usage in your component
  const relatedCompetitions = getRandomCompetitions(
    4,
    competition?.attributes?.slug,
    competitions.data
  );

  return (
    <>
    {/* <title>{competition.title}</title> */}
      {competition?.attributes?.seo && (
        <Seo data={competition.attributes.seo} />
      )}

      <section className="relative">
        <FullScreenHeader fullScreenHeader={fullScreenHeader}>
          <div className="absolute top-0 p-4 md:p-6 lg:p-8 xl:p-12 z-40">
            {competition?.attributes?.logo?.data?.attributes?.url && (
              <img
                src={competition?.attributes?.logo?.data?.attributes?.url}
                alt={competition?.attributes?.logo?.data?.attributes?.name}
                className="w-16 md:w-28 lg:w-36 xl:w-48"
              />
            )}
          </div>
        </FullScreenHeader>
      </section>

      <div
        className="flex flex-col gap-4 px-4 md:px-8 lg:px-16 xl:px-32"
        ref={scrollIntoViewRef}
      >
        <div
          className={`${styles.editorContainer} page-details-container pt-3 md:pt-12`}
        >
          {/* {} */}
          {session?.user?.email ? (
            ReplaceGalleryTag(
              competition?.attributes?.text_editor.replace(
                
                "<iframe" ,
                `<iframe class="${session?.user?.email ? "" : "hidden"}"`
              ).replace( "{login}", ""),
              competition?.attributes?.gallery?.data
            )
          ) : (
            <>
              {/* Check for the presence of the {login} shortcode */}
              {competition?.attributes?.text_editor.includes("{login}") && (
                /* Display the login section only if {login} shortcode is found and user is not logged in */
                <p>
                  Please <a href="/register">sign up</a> or{" "}
                  <label
                    onClick={(e) => {
                      setOpenLoginModal(true);
                      e.stopPropagation();
                    }}
                    className="cursor-pointer text-cruise underline hover:text-black"
                    htmlFor="login_modal_id"
                  >
                    Login
                  </label>{" "}
                  to enter this competition.
                </p>
              )}
            </>
          )}
        </div>
      </div>

      <section className="p-3 md:p-12">
        <PageHeading
          pageHeaderData={{ heading: "You may also like", text: "" }}
        />

        <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {relatedCompetitions.map((item, i) => (
            <CompetitionCard key={i} competition={item} />
          ))}
        </div>
      </section>

      {openLoginModal && (
        <LoginModal
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}
    </>
  );
};
export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.slug;

  // Fetch product data from API based on productId
  const res = await fetch(
    `${baseUrl}/api/competitions?populate=deep&filters[slug][$eq]=${slug}`
  );
  const { data: competition } = await res.json();

  const competitionRes = await fetch(
    `${baseUrl}/api/competitions?populate=deep`
  );
  const competitions = await competitionRes.json();

  return {
    props: {
      competition: competition[0],
      competitions,
    },
  };
}
export default CompetitionDetailPage;
