export type Product = {
  id: number;
  name: string;
  description: string;
  prices: {
    discount?: number;
    old?: number;
    current?: number;
  };
  details: {
    category: string;
    system: string;
    release_date?: string;
  };
  media: {
    thumbnail: string;
    cover: string;
    gallery: string[];
  };
};
