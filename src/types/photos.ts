import type { Nullable } from './helpers';
import type { ITag } from './interfaces';
import type { UserBasic } from './user';

interface Collection {
  id: number;
  title: string;
  cover_photo: Photo;
  preview_photos: PhotoVeryBasic[];
}
interface StatValue {
  value: number;
  date: string;
}

interface Stat {
  total: number;
  historical: {
    change: number;
    quantity: number;
    resolution: string;
    values: StatValue[];
  };
}

export interface Stats {
  views: Stat;
  downloads: Stat;
}
export interface PhotoVeryBasic {
  id: string;
  created_at: string;
  updated_at: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    medium: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
}
export interface PhotoBasic extends PhotoVeryBasic {
  alt_description: Nullable<string>;
  blur_hash: Nullable<string>;
  color: Nullable<string>;
  description: Nullable<string>;
  height: number;
  likes: number;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  promoted_at: Nullable<string>;
  width: number;
  user: UserBasic;
}

export interface Photo extends PhotoBasic {
  width: number;
  height: number;
  exif: {
    make: Nullable<string>;
    model: Nullable<string>;
    name: Nullable<string>;
    exposure_time: Nullable<string>;
    aperture: Nullable<string>;
    focal_length: Nullable<string>;
    iso: Nullable<number>;
  };
  location: {
    title: Nullable<string>;
    name: Nullable<string>;
    city: Nullable<string>;
    country: Nullable<string>;
    position: {
      latitude: Nullable<number>;
      longitude: Nullable<number>;
    };
  };
  meta: {
    index: boolean;
  };
  public_domain: boolean;
  tags: ITag[];
  tags_preview: ITag[];
  views: number;
  downloads: number;
  topics: string[];
  related_collections: {
    total: number;
    results: Collection[];
  };
}
