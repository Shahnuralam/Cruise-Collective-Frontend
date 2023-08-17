import { IFeatureSliderItem } from "@/containers/atoms/FeatureSlider";

export const mapDynamicGallery = (data) => {
  return data.map((item) => ({
    id: item.id,
    image: {
      src: item.attributes.url,
      alt: item.attributes.name,
      caption: item.attributes.caption,
    },
  }));
};

export function mapFeaturedSlider(estates: any): IFeatureSliderItem[] {
  return estates.map((estate) => {
    return {
      id: estate.id,
      name: estate?.attributes.name,
      description: estate?.attributes?.description,
      content_type: estate?.attributes?.content_type?.data?.attributes?.name,
      images: {
        data: estate?.attributes?.images?.data,
        alt:
          estate?.attributes?.images?.alt ||
          `image from ${estate?.attributes.name}`,
      },
    };
  });
}
