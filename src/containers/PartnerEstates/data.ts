import { IBreadcrumbItem } from "@/containers/atoms";
import { IFeatureSliderItem } from "@/containers/atoms/FeatureSlider";

export const partnerEstatesBreadCrumb: IBreadcrumbItem[] = [
  {
    uniqueKey: 1,
    title: "Home",
    href: "/",
  },
  {
    uniqueKey: 2,
    title: "Partner Gardens",
    href: "/partner-estates",
  },
];

export const partnerEstatesFeatureSliderData: IFeatureSliderItem[] = [
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
