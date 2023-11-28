import React from "react";
import { NextPage } from "next";
import LandingImage from "@/components/LandingImage";
import { Quote } from "@/containers/atoms";
import {
  ContentContainer,
  ContentNumberList,
  contentNumberListData,
  ContentQuote,
} from "@/containers/content";
import TitleWithBorderY from "@/atoms/TitleWithBorderY";
import dynamic from "next/dynamic";

const ImageSlider = dynamic(() => import("@/containers/atoms/ImageSlider"), {
  ssr: false,
  loading: () => null,
});

const ContentPage: NextPage = () => {
  return (
    <main className="flex flex-col">
      <LandingImage src="/dummy/content/1.png" alt="Landing Image 2" />

      <div className="flex flex-col py-6 gap-4">
        <h1 className="font-serif text-[2.75rem] text-center text-[#36453b]">
          {"Penelope Hobhouse's design principles"}
        </h1>

        <ContentQuote
          text="As the grande dame of garden design, Penelope Hobhouse, prepares to celebrate her 90th birthday, she talks to Stephanie Mahon about her life in gardens."
          source="Portrait Jason Ingram"
        />

        <ContentContainer className="my-5">
          <span className="leading-tight text-black text-opacity-90">
            Few gardeners are famous enough to have been on Desert Island Discs,
            or to have worked with Audrey Hepburn, but Penelope Hobhouse has
            done both. And now, {"she's"} planning a party. The grand dame of
            gardening turns 90 in November, and she will celebrate with as many
            friends as can squeeze into her son’s barn conversion in Somerset. A
            true Renaissance woman – gardener, writer, designer, lecturer, TV
            presenter – Penelope Hobhouse has enjoyed a stellar career. Here she
            talks through her design principles
          </span>
        </ContentContainer>
      </div>

      <LandingImage
        src="/dummy/content/2.jpg"
        alt="Landing Image 2"
        priority={false}
      />
      <Quote
        text="The cardinal rule for planting is to use bright colours sparingly. Form is much more important than colour, and flowers are fleeting"
        source="Penelope Hobhouse"
      />

      <ContentContainer className="my-16">
        <TitleWithBorderY
          title="Penelope Hobhouse’s six design principles"
          size="big"
        />

        <ContentNumberList list={contentNumberListData} />
      </ContentContainer>

      <h1 className="font-serif text-[2.75rem] text-center text-[#36453b] max-w-[90%] mx-auto mb-2">
        {"See the Penelope Hobhouse's gardens"}
      </h1>

      {/* <ImageSlider sliderItems={contentSliderData} /> */}

      <ContentContainer className="mt-10 mb-20">
        <div className="flex flex-col gap-6">
          <TitleWithBorderY
            title="Two of Penelope Hobhouse's <br /> creations"
            size="big"
          />

          <div className="flex flex-col gap-4 leading-tight text-black text-opacity-90">
            <p>
              Few gardeners are famous enough to have been on Desert Island
              Discs, or to have worked with Audrey Hepburn, but Penelope
              Hobhouse has done both. And now, {"she's"}
              planning a party. The grand dame of gardening turns 90 in
              November, and she will celebrate with as many friends as can
              squeeze into her son’s barn conversion in Somerset. A true
              Renaissance woman – gardener, writer, designer, lecturer, TV
              presenter – Penelope Hobhouse has enjoyed a stellar career. Here
              she talks through her design principles
            </p>

            <p>
              Penelope was hugely proud to be asked to create a garden for The
              Queen Mother at Walmer Castle. She drew on her knowledge of
              Islamic Paradise gardens, which strongly influenced the central
              reflecting pool and arched pavilion at the far end.
            </p>
          </div>

          <div className="flex flex-col gap-4 leading-tight text-[#36453b] text-opacity-90">
            <p>
              Penelope Hobhouse’s The Story of Gardening, revised with Ambra
              Edwards, has been reissued by Pavilion Books. Buy {"September's"}{" "}
              Gardens Illustrated for our full feature on Penelope Hobhouse.
            </p>
          </div>
        </div>
      </ContentContainer>
    </main>
  );
};

export default ContentPage;
