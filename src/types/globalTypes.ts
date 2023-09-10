export interface IProduct {
  _id?: number;
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
  reviews?: string[];
  finish?: boolean;
  creator?: any;
}
