import { IImageSliderItem } from "@/containers/atoms";

interface IHomePageSliderData {
    id: number,
    image: string,
}



export const homePageSliderData: IHomePageSliderData[] = [
    {
        image: '/dummy/home/Clip path group.png',
        id: 1,
    },
    {
        image: "/dummy/home/Clip path group (1).png",
        id: 2,
    },
    {
        image: "/dummy/home/Clip path group (2).png",
        id: 3,
    },
    {
        image: "/dummy/home/Clip path group (3).png",
        id: 4,
    },
    {
        image: "/dummy/destination/Group (1).png",
        id: 5,
    },
    {
        image: "/dummy/destination/Group (2).png",
        id: 6,
    },
];


export const homeContentSliderData: IImageSliderItem[] = [
    {
      id: 'content-slider-1',
      image: {
        src: '/dummy/home/Clip path group.png',
        alt: 'slider 1',
        caption: {
          title: "Full screen slider title",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
          text:"READ MORE"
        }
      },
    },
    {
      id: 'content-slider-2',
      image: {
        src: "/dummy/home/Clip path group (1).png",
        alt: 'slider 2',
      },
    },
    {
      id: 'content-slider-3',
      image: {
        src: "/dummy/home/Clip path group (2).png",
        alt: 'slider 3',
      },
    },
    {
      id: 'content-slider-4',
      image: {
        src: "/dummy/home/Clip path group (3).png",
        alt: 'slider 4',
      },
    },
    {
      id: 'content-slider-5',
      image: {
        src: "/dummy/destination/Group (1).png",
        alt: 'slider 5',      
      },
    },
  ];