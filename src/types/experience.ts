export interface Experience {
  name: string;
  createdAt: string;
  updatedAt: string;
  featured: boolean;
  exclusive: boolean;
  video: any;
  description: string;
  images: Images;
  content_type: ContentType;
  categories: Categories;
  estate_fields: any;
  experience_fields: ExperienceFields;
  offer_fields: any;
}

export interface Images {
  data: Daum[];
}

export interface Daum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  thumbnail: Thumbnail;
  small: Small;
  medium: Medium;
  large: Large;
}

export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Medium {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface ContentType {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Categories {
  data: any[];
}

export interface ExperienceFields {
  id: number;
  button_text: string;
  find_out_url: string;
  terms_url: string;
  book_now_description: string;
  experience_period: string;
}
