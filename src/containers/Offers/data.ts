import { IBreadcrumbItem } from "@/containers/atoms";
import { IFeatureSliderItem } from "@/containers/atoms/FeatureSlider";
import { IOfferItem } from "@/containers/Offers/OfferItem";

export const offersPageBreadcrumb: IBreadcrumbItem[] = [
  {
    uniqueKey: 1,
    title: "Home",
    href: "/",
  },
  {
    uniqueKey: 2,
    title: "Offers",
    href: "/offers",
  },
];

export const searchPageBreadcrumb: IBreadcrumbItem[] = [
  {
    uniqueKey: 1,
    title: "Home",
    href: "/",
  },
  {
    uniqueKey: 2,
    title: "Search",
    href: "/",
  },
];

export const offersFeatureSliderData: IFeatureSliderItem[] = [
  {
    id: "content-slider-1",
    name: "Offer title to go in here, <br /> xxxx xxxx xxxx xxxx",
    description:
      "Desserro videst occume velia quis ipsanti aspersperum fuga. Nequam cusam quis ex essequi ut deliquoditi res et por sequi.",
    content_type: "offer",
    images: {
      data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
      alt: "slider 1",
    },
  },
  //
  {
    id: "content-slider-2",
    name: "Offer title to go in here, <br /> xxxx xxxx xxxx xxxx",
    description:
      "Desserro videst occume velia quis ipsanti aspersperum fuga. Nequam cusam quis ex essequi ut deliquoditi res et por sequi.",
    content_type: "offer",
    images: {
      data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
      alt: "slider 1",
    },
  },
  //
  {
    id: "content-slider-3",
    name: "Offer title to go in here, <br /> xxxx xxxx xxxx xxxx",
    description:
      "Desserro videst occume velia quis ipsanti aspersperum fuga. Nequam cusam quis ex essequi ut deliquoditi res et por sequi.",
    content_type: "offer",
    images: {
      data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
      alt: "slider 1",
    },
  },
];

export const offerListData: IOfferItem[] = [
  {
    id: 1,
    title: "House & garden",
    href: "/offers/competition",
  },
  {
    id: 2,
    title: "Travel",
    href: "/offers/competition",
  },
  {
    id: 3,
    title: "Lifestyle",
    href: "/offers/competition",
  },
  {
    id: 4,
    title: "Explore all offers",
    href: "/offers/competition",
  },
];
