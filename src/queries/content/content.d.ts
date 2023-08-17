export interface IContentImage {
  data?: string;
  alt?: string;
}

export interface IContentType {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface ICategories {
  data: unkown[];
}

export interface IContentAttribute {
  name: string;
  createdAt: string;
  updatedAt: string;
  featured: boolean;
  exclusive?: boolean;
  video?: string;
  description: string;
  images: IContentImage;
  content_type: IContentType;
  categories: ICategories;
  estate_fields?: any;
  experience_fields?: any;
  offer_fields?: any;
}

export interface IContent {
  id: number;
  attributes: IContentAttribute;
}
export interface IContentResponse {
  data: IContent[];
}
