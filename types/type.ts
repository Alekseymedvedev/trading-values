import {StaticImageData} from "next/image";

export interface IPetCompareType {
    id: number | string;
    name: string;
    image: string | StaticImageData;
    status: string;
    value: number
}

export interface IPetType {
    id: string | number;
    name: string;
    image: string | StaticImageData;
    regular: { name: string, value: number };
    neon: { name: string, value: number };
    megaNeon: { name: string, value: number };
    value: number
}

export interface IPetCategoriesType {
    id: number | string;
    name: string;
    title: string;
    active: boolean;
    pet: IPetType[];

}