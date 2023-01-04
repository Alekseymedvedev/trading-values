import img1 from "../images/owl.png";
import {IPetCategoriesType} from "../types/type";
//Список доступных соцсетей
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share"
import fb from "../images/social-icon/facebook.svg";
import whatsapp from "../images/social-icon/whatsapp.svg";
import telegram from "../images/social-icon/telegram.svg";
import vk from "../images/social-icon/vk.svg";
import twitter from "../images/social-icon/twitter.svg";

export const socialLink = [
    {id:1,teg:WhatsappShareButton, icon: whatsapp, alt:'Whatsapp'},
    {id:2,teg:FacebookShareButton, icon: fb, alt:'Facebook'},
    {id:3,teg:TelegramShareButton, icon: telegram, alt:'Telegram'},
    {id:4,teg:TwitterShareButton, icon: twitter, alt:'Twitter'},
    {id:5,teg:VKShareButton, icon: vk, alt:'VK'},
]
export const textArr = [
    {id: 1, title: 'What Is The Purpose Of This Website?', text: 'AdoptMeTradingValues.io exists to help AdoptMe players know the pros and cons of trading. Is trade a big win? Is it fair? Just add your pet or other items to the trading grid on this website, and you’ll get an answer right away. You can also find other details, tips, and techniques you need to know.'},
]
export const PetCategoriesArr: IPetCategoriesType[] = [
    {
        id: 1,
        name:'pets',
        title: 'Домашние питомцы',
        active: true,
        pet: [
            {id: 1, name: 'Сова', image: img1, value:1, regular: {name:'Regular',value:12.75}, neon: {name:'Neon',value: 51.1}, megaNeon: {name:'Mega Neon',value: 41.1}},
            {id: 2, name: 'не Сова', image: img1, value:2, regular: {name:'Regular',value:1}, neon: {name:'Neon',value:3}, megaNeon: {name:'Mega Neon',value:3}},
            {id: 3, name: 'совсем не Сова', image: img1, value:3, regular: {name:'Regular',value:1}, neon: {name:'Neon',value:3}, megaNeon: {name:'Mega Neon',value:3}},
            {id: 4, name: 'Сова', image: img1, value:4, regular: {name:'Regular',value:1}, neon: {name:'Neon',value:3}, megaNeon: {name:'Mega Neon',value:3}},
            {id: 5, name: 'Сова', image: img1, value:5, regular: {name:'Regular',value:1}, neon: {name:'Neon',value:3}, megaNeon: {name:'Mega Neon',value:3}},
            {id: 6, name: 'Сова', image: img1, value:6, regular: {name:'Regular',value:1}, neon: {name:'Neon',value:3}, megaNeon: {name:'Mega Neon',value:3}},
            {id: 7, name: 'Сова', image: img1, value:7, regular: {name:'Regular',value:1}, neon: {name:'Neon',value:3}, megaNeon: {name:'Mega Neon',value:3}},
            {id: 8, name: 'Сова', image: img1, value:8, regular: {name:'Regular',value:1}, neon: {name:'Neon',value:3}, megaNeon: {name:'Mega Neon',value:3}},
            {id: 9, name: 'Сова', image: img1, value:9, regular: {name:'Regular',value:1}, neon: {name:'Neon',value:3}, megaNeon: {name:'Mega Neon',value:3}},
            {id: 10, name: 'Сова', image: img1, value:10, regular: {name:'Regular',value:1}, neon: {name:'Neon',value:3}, megaNeon: {name:'Mega Neon',value:3}},
        ],
    },
    {
        id: 2,
        name:'food',
        title: 'Еда',
        active: false,
        pet: [
            {id: 1, name: 'Сова', image: img1, value:1, regular: {name:'Regular',value:1}, neon: {name:'Neon',value:3}, megaNeon: {name:'Mega Neon',value:3}},
            {id: 2, name: 'Сова', image: img1, value:1,regular: {name:'Regular',value:1}, neon: {name:'Neon',value:3}, megaNeon: {name:'Mega Neon',value:3}},
            {id: 3, name: 'Сова', image: img1, value:1, regular: {name:'Regular',value:1}, neon: {name:'Neon',value:3}, megaNeon: {name:'Mega Neon',value:3}},
        ],
    },

]