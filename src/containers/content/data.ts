import { IContentNumberListItem } from '@/containers/content/ContentNumberListItem';
import { IImageSliderItem } from '@/containers/atoms';

export const contentNumberListData: IContentNumberListItem[] = [
  {
    id: 'content-l-1',
    title: 'Think about backgrounds',
    description:
      'Large trees can be used to frame the sky; hedges provide vertical and horizontal lines as well as a background for planting; while small trees with broad, globular or pyramidal heads act as ‘ceilings’. Low continuous hedging can be used to frame pathways.',
  },
  {
    id: 'content-l-2',
    title: 'Create a strong framework',
    description:
      'I have been inspired by places such as Hidcote and Tintinhull, but also by garden history, especially by Italian Renaissance and Islamic gardens. I tend to create a strong structure or framework for my gardens, with looser planting within. The architecture can be supplied by buildings, walls, steps and pergolas, but also by plant.',
  },
];

export const contentSliderData: IImageSliderItem[] = [
  {
    id: 'content-slider-1',
    image: {
      src: '/dummy/slider/1.jpg',
      alt: 'slider 1',
    },
  },
  {
    id: 'content-slider-2',
    image: {
      src: '/dummy/slider/1.jpg',
      alt: 'slider 2',
      caption:"hello "
    },
  },
  {
    id: 'content-slider-3',
    image: {
      src: '/dummy/slider/1.jpg',
      alt: 'slider 3',
      caption:"hello dsfsd vedsfvsd"
    },
  },
];
