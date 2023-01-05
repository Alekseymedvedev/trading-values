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

// Данные для "Поделиться ссылкой"
// https://github.com/nygardk/react-share по этой ссылке можно посмотреть доптупные соцсети
import fb from "../images/social-icon/facebook.svg";
import whatsapp from "../images/social-icon/whatsapp.svg";
import telegram from "../images/social-icon/telegram.svg";
import vk from "../images/social-icon/vk.svg";
import twitter from "../images/social-icon/twitter.svg";

export const socialLink = [
    {id: 1, teg: WhatsappShareButton, icon: whatsapp, alt: 'Whatsapp'},
    {id: 2, teg: FacebookShareButton, icon: fb, alt: 'Facebook'},
    {id: 3, teg: TelegramShareButton, icon: telegram, alt: 'Telegram'},
    {id: 4, teg: TwitterShareButton, icon: twitter, alt: 'Twitter'},
    {id: 5, teg: VKShareButton, icon: vk, alt: 'VK'},
]

export const textArr = [
    {
        id: 1,
        title: 'What Is The Purpose Of This Website?',
        text: 'AdoptMeTradingValues.io exists to help AdoptMe players know the pros and cons of trading. Is trade a big win? Is it fair? Just add your pet or other items to the trading grid on this website, and you’ll get an answer right away. You can also find other details, tips, and techniques you need to know.'
    },
]




