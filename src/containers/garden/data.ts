import { IImageSliderItem } from "@/containers/atoms";
import { IArticlePreviewListProps } from "@/components/ArticlePreviewList";
import { IGardenAttribute } from "@/containers/garden/GardenAttribute";

export const gardenSliderData: IImageSliderItem[] = [
  {
    id: "content-slider-1",
    image: {
      src: "/dummy/slider/1.jpg",
      alt: "slider 1",
    },
  },
  {
    id: "content-slider-2",
    image: {
      src: "/dummy/slider/1.jpg",
      alt: "slider 2",
    },
  },
  {
    id: "content-slider-3",
    image: {
      src: "/dummy/slider/1.jpg",
      alt: "slider 3",
    },
  },
];

export const gardenRelatedContentData: IArticlePreviewListProps["items"] = [
  //
  {
    id: "ec-article-4",
    image: {
      src: "/dummy/article/article-4.jpeg",
      alt: "Article 4",
    },
    title: "Interview with <br /> The Pig’s head chef James Goulding",
    shortDescription:
      "Discover the secrets of designing the perfect menu using seasonal kitchen garden produce",
    moreBtn: {
      href: "/article/4",
    },
  },
  //
  {
    id: "ec-article-5",
    image: {
      src: "/dummy/article/article-5.jpeg",
      alt: "Article 5",
    },
    title: "15 jobs every <br /> gardener needs to <br /> do right now",
    shortDescription:
      "Sherbourne Castle’s head gardener Tim Stiles reveals his top tips for spring success",
    moreBtn: {
      href: "/article/5",
    },
  },
  //
  {
    id: "ec-article-6",
    image: {
      src: "/dummy/article/article-6.png",
      alt: "Article 6",
    },
    title: "10 houseplants <br /> to step up the <br /> style",
    shortDescription:
      "Lara Boglione from Petersham Nurseries reveals her favourite showstopping houseplants",
    moreBtn: {
      href: "/article/6",
    },
  },
  //
  {
    id: "ec-article-7",
    image: {
      src: "/dummy/article/article-7.png",
      alt: "Article 7",
    },
    title: "Win a weekend a <br /> away at La Manoir <br /> Aux Quat’Saisons",
    shortDescription:
      "Enter our competition to win an indulgent two night stay in he Oxfordshire countryside",
    moreBtn: {
      href: "/article/7",
    },
  },
];

export const gardenAttributeListData: IGardenAttribute[] = [
  {
    id: "g-attr-1",
    image: {
      src: "/dummy/garden/attributes/attribute-1.png",
      alt: "attr 1",
    },
    title: "Info 1",
    type: "wheel",
  },
  {
    id: "g-attr-2",
    image: {
      src: "/dummy/garden/attributes/attribute-2.png",
      alt: "attr 2",
    },
    title: "Info 2",
    type: "location",
  },
  {
    id: "g-attr-3",
    image: {
      src: "/dummy/garden/attributes/attribute-3.png",
      alt: "attr 3",
    },
    title: "Info 3",
    type: "time",
  },
];
