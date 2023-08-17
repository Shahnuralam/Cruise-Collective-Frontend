import { IArticlePreviewListProps } from '@/components/ArticlePreviewList';

export const exploreOurPartnerEstatesData: IArticlePreviewListProps['items'] = [
  //
  {
    id: 'eope-article-1',
    image: {
      src: '/dummy/article/article-1.png',
      alt: 'Article 1',
    },
    video: {
      videoId: 'OPf0YbXqDm0',
    },

    title: 'The Newt <br /> in Somerset',
    shortDescription: 'Visit this spectacular Georgian hotel and estate, with acres of gardens, woodland, farmland and cyder orchards to explore',
    moreBtn: {
      text: 'Book now',
      href: '/article/1',
    },
  },
  //
  {
    id: 'eope-article-2',
    image: {
      src: '/dummy/article/article-2.png',
      alt: 'Article 2',
    },
    title: 'Hattingley Valley, <br /> Hampshire',
    shortDescription: 'Take a tour of one of the UK’s most successful wineries in Hampshire, famed for its award-winning English sparkling wines',
    moreBtn: {
      text: 'Book now',
      href: '/article/2',
    },
  },
  //
  {
    id: 'eope-article-3',
    image: {
      src: '/dummy/article/article-3.jpg',
      alt: 'Article 3',
    },
    title: 'Belvoir Castle, <br /> Leicestershire',
    shortDescription: 'Meander through established formal gardens and parkland at this extraordinary Regency castle and estate',
    moreBtn: {
      text: 'Book now',
      href: '/article/3',
    },
  },
];

export const exclusiveContentData: IArticlePreviewListProps['items'] = [
  //
  {
    id: 'ec-article-4',
    image: {
      src: '/dummy/article/article-4.jpeg',
      alt: 'Article 4',
    },
    title: 'Interview with <br /> The Pig’s head chef James Goulding',
    shortDescription: 'Discover the secrets of designing the perfect menu using seasonal kitchen garden produce',
    moreBtn: {
      href: '/article/4',
    },
  },
  //
  {
    id: 'ec-article-5',
    image: {
      src: '/dummy/article/article-5.jpeg',
      alt: 'Article 5',
    },
    title: '15 jobs every <br /> gardener needs to <br /> do right now',
    shortDescription: 'Sherbourne Castle’s head gardener Tim Stiles reveals his top tips for spring success',
    moreBtn: {
      href: '/article/5',
    },
  },
  //
  {
    id: 'ec-article-6',
    image: {
      src: '/dummy/article/article-6.png',
      alt: 'Article 6',
    },
    title: '10 houseplants <br /> to step up the <br /> style',
    shortDescription: 'Lara Boglione from Petersham Nurseries reveals her favourite showstopping houseplants',
    moreBtn: {
      href: '/article/6',
    },
  },
  //
  {
    id: 'ec-article-7',
    image: {
      src: '/dummy/article/article-7.png',
      alt: 'Article 7',
    },
    title: 'Win a weekend a <br /> away at La Manoir <br /> Aux Quat’Saisons',
    shortDescription: 'Enter our competition to win an indulgent two night stay in he Oxfordshire countryside',
    moreBtn: {
      href: '/article/7',
    },
  },
];
