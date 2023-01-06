import React, {FC} from 'react';
import cls from './social.module.scss'
import Image from "next/image";
import {socialLink} from "../../state/state";

interface T {
    children?: any
}



const Social: FC<T> = () => {

    const shareUrl = 'https://trade-adopt-me.ru/'

    return (
        <ul className={cls.list +' _vr'}>
            {
                socialLink && socialLink.map(item=>
                    <li className={cls.item} key={item.id}>
                        <item.teg url={shareUrl} title="Роблокс Адопт Ми трейды 2023 — сайт для проверки">
                            <Image
                                width={30}
                                height={30}
                                src={item.icon}
                                alt={item.alt}
                            />
                        </item.teg>
                    </li>
                )
            }

        </ul>
    );
};

export default Social;