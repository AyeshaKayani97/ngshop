import { Category } from "./category";

export class Product{
    id?:string;
    name?:string;
    description?:string;
    richDescription?:string;
    image?: string | ArrayBuffer;
    images?:string[];
    category?:Category;
    price?:number;
    countInStock?:number;
    brand?:string;
    rating?:number;
    numReviews?:number;
    isFeatured?:boolean;
    dateCreated?:string;

    




}