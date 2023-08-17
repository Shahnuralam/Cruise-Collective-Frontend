import { IExperiencePreviewItem } from "@/containers/Experience/ExperiencePreview";
import { IArticlePreviewListProps } from "@/components/ArticlePreviewList";

export const experienceItems: IExperiencePreviewItem[] = [
  {
    id: "exp-i-1",
    image: {
      src: "/dummy/experience/1.jpeg",
      alt: "Experience 1",
    },
    localeDateStr: "26 April, 2023, 11am – 4pm\n",
    name: "Member Day at The Newt <br /> in Somerset",
    description:
      "Join Gardens Illustrated editor Stephanie Mahon and The Newt in Somerset’s garden designer Patrice Taravella for a special behind-the-scenes tour of the gardens. Discover the history of this glorious Georgian estate just outside the medieval town of Bruton, the most spectacular areas of the gardens today and the secrets of their growing success. Plus, enjoy access to parts of the estate that are normally off limits to visitors and guests. Your tour will end with a three-course lunch at The Newt’s award-winning restaurant with the option to stay on and take advantage of your exclusive member discounts in the hotel’s spa.",
    badge: "Editor’s choice",
  },
  // --
  {
    id: "exp-i-2",
    image: {
      src: "/dummy/experience/2.jpeg",
      alt: "Experience 2",
    },
    localeDateStr: "26 April, 2023, 11am – 4pm\n",
    name: "Member Day at The Newt <br /> in Somerset",
    description:
      "Join Gardens Illustrated editor Stephanie Mahon and The Newt in Somerset’s garden designer Patrice Taravella for a special behind-the-scenes tour of the gardens. Discover the history of this glorious Georgian estate just outside the medieval town of Bruton, the most spectacular areas of the gardens today and the secrets of their growing success. Plus, enjoy access to parts of the estate that are normally off limits to visitors and guests. Your tour will end with a three-course lunch at The Newt’s award-winning restaurant with the option to stay on and take advantage of your exclusive member discounts in the hotel’s spa.",
  },
  // --
  {
    id: "exp-i-3",
    image: {
      src: "/dummy/experience/3.jpeg",
      alt: "Experience 3",
    },
    localeDateStr: "26 April, 2023, 11am – 4pm\n",
    name: "Member Day at The Newt <br /> in Somerset",
    description:
      "Join Gardens Illustrated editor Stephanie Mahon and The Newt in Somerset’s garden designer Patrice Taravella for a special behind-the-scenes tour of the gardens. Discover the history of this glorious Georgian estate just outside the medieval town of Bruton, the most spectacular areas of the gardens today and the secrets of their growing success. Plus, enjoy access to parts of the estate that are normally off limits to visitors and guests. Your tour will end with a three-course lunch at The Newt’s award-winning restaurant with the option to stay on and take advantage of your exclusive member discounts in the hotel’s spa.",
  },
  // --
  {
    id: "exp-i-4",
    image: {
      src: "/dummy/experience/4.jpeg",
      alt: "Experience 4",
    },
    localeDateStr: "26 April, 2023, 11am – 4pm\n",
    name: "Member Day at The Newt <br /> in Somerset",
    description:
      "Join Gardens Illustrated editor Stephanie Mahon and The Newt in Somerset’s garden designer Patrice Taravella for a special behind-the-scenes tour of the gardens. Discover the history of this glorious Georgian estate just outside the medieval town of Bruton, the most spectacular areas of the gardens today and the secrets of their growing success. Plus, enjoy access to parts of the estate that are normally off limits to visitors and guests. Your tour will end with a three-course lunch at The Newt’s award-winning restaurant with the option to stay on and take advantage of your exclusive member discounts in the hotel’s spa.",
    badge: "Great <br /> day out",
  },
];

export const watchAGardensIllustratedMasterclassData: IArticlePreviewListProps["items"] =
  [
    //
    {
      id: "eope-article-1",
      image: {
        src: "/dummy/article/article-1.png",
        alt: "Article 1",
      },
      video: {
        videoId: "OPf0YbXqDm0",
      },
      title: "The Newt <br /> in Somerset",
      shortDescription:
        "Visit this spectacular Georgian hotel and estate, with acres of gardens, woodland, farmland and cyder orchards to explore",
      moreBtn: {
        action: "play",
        text: "Watch now",
      },
    },
    //
    {
      id: "eope-article-2",
      image: {
        src: "/dummy/article/article-2.png",
        alt: "Article 2",
      },
      video: {
        videoId: "OPf0YbXqDm0",
      },
      title: "Hattingley Valley, <br /> Hampshire",
      shortDescription:
        "Take a tour of one of the UK’s most successful wineries in Hampshire, famed for its award-winning English sparkling wines",
      moreBtn: {
        action: "play",
        text: "Watch now",
      },
    },
    //
    {
      id: "eope-article-3",
      image: {
        src: "/dummy/article/article-3.jpg",
        alt: "Article 3",
      },
      video: {
        videoId: "OPf0YbXqDm0",
      },
      title: "Belvoir Castle, <br /> Leicestershire",
      shortDescription:
        "Meander through established formal gardens and parkland at this extraordinary Regency castle and estate",
      moreBtn: {
        action: "play",
        text: "Watch now",
      },
    },
  ];
