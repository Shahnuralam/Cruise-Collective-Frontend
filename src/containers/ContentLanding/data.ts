import { IBreadcrumbItem } from "@/containers/atoms";
import { IFeatureSliderItem } from "@/containers/atoms/FeatureSlider";

export const contentLandingPageBreadcrumb: IBreadcrumbItem[] = [
  {
    uniqueKey: 1,
    title: "Home",
    href: "/",
  },
  {
    uniqueKey: 2,
    title: "Cruise Line",
    href: "/cruise-line",
  },
];

export const contentLandingFeatureSliderData: IFeatureSliderItem[] = [
  {
    id: "content-slider-1",
    name: "Offer title to go in here, <br /> xxxx xxxx xxxx xxxx",
    description:
      "Desserro videst occume velia quis ipsanti aspersperum fuga. Nequam cusam quis ex essequi ut deliquoditi res et por sequi.",
    content_type: "content",
    images: {
      data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
      alt: "slider 1",
    },
  },
  //
  {
    id: "content-slider-2",
    name: "Offer title to go in here, <br /> xxxx xxxx xxxx xxxx",
    content_type: "content",
    description:
      "Desserro videst occume velia quis ipsanti aspersperum fuga. Nequam cusam quis ex essequi ut deliquoditi res et por sequi.",
    images: {
      data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
      alt: "slider 1",
    },
  },
  //
  {
    id: "content-slider-3",
    name: "Offer title to go in here, <br /> xxxx xxxx xxxx xxxx",
    content_type: "content",
    description:
      "Desserro videst occume velia quis ipsanti aspersperum fuga. Nequam cusam quis ex essequi ut deliquoditi res et por sequi.",
    images: {
      data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
      alt: "slider 1",
    },
  },
];
