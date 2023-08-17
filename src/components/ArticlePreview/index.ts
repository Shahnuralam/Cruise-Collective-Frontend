export interface IArticlePreview {
  id: string | number;
  image: {
    alt?: string;
    src: string;
  };

  video?: {
    videoId: string;
  };

  title: string;
  shortDescription: string;

  moreBtn?: {
    action?: 'play';
    text?: string; // default: Read more
    href?: string;
  };
}

export interface IArticlePreviewProps {
  item: IArticlePreview;
}

export * from './ArticlePreview.Big';
export * from './ArticlePreview.Normal';
