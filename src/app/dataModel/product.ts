import { Image } from './Image';

export class Product {
  id: number;
  title: string;
  handle?: string;
  body_html?: string;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
  vendor?: string;
  product_type?: string;
  tags?: any;
  variants?: any;
  options?: object;
  images?: Array<Image>;
};
