import {StaticImageData} from "next/image";



// export interface IPetType {
//     id: string | number;
//     name: string;
//     image: string | StaticImageData;
//     regular: { name: string, value: number };
//     neon: { name: string, value: number };
//     megaNeon: { name: string, value: number };
//     value: number
// }

export interface Choices {
    value: string;
    neon: string;
    mega: string;
}

export interface Img {
    src: string;
    alt: string;
    title: string;
}

export interface Info {
    rarity: string;
    origin: string;
}

export interface IPetType {
    id: string;
    choiceType: string;
    choices: Choices;
    name: string;
    parent: string;
    img: Img;
    info: Info;
}
export interface IPetCompareType {
    id: number | string;
    name: string;
    img: Img;
    status: string;
    value: number
}
export interface IPetCategoriesType {
    id: number | string;
    name: string;
    title: string;
    active: boolean;
    pet: IPetType[];

}