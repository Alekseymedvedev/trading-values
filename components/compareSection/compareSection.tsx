import React, {useState} from 'react';
import cls from './compareSection.module.scss'
import Button from "../UI/Button/Button";
import PetCompareList from "../petCompareList/petCompareList";
import {useAppSelector} from "../../hooks/useReduser";
import ComparisonLine from "../comparisonLine/comparisonLine";
import Image from "next/image";
import img from '../../images/trade-circle.png'
import TextBlock from "../textBlock/textBlock";
import Social from "../social/social";

import {useCompare} from "../../hooks/useCompare";
import Link from "next/link";
import Script from "next/script";
import Advertisement from "../advertisement/advertisement";


const CompareSection = () => {
    const {seletedUserPets, seletedGeneralPets} = useAppSelector(state => state.selectedPetsReducer)
    const [userWidth, setUserWidth] = useState(50)
    const [generalWidth, setGeneralWidth] = useState(50)

    useCompare(seletedUserPets, seletedGeneralPets, setUserWidth, setGeneralWidth)
    return (
        <section className={cls.section}>
            <Social/>

            <div id="yandex_rtb_R-A-2092130-3"></div>

            <Script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.yaContextCb=window.yaContextCb||[]
                    window.yaContextCb.push(()=>{
                    Ya.Context.AdvManager.render({
                        renderTo: 'yandex_rtb_R-A-2092130-3',
                        blockId: 'R-A-2092130-3'
                    })
                })

              `,
                }}
            />

            <ComparisonLine userWidth={userWidth} generalWidth={generalWidth}/>
            <div className={cls.inner}>

                <PetCompareList userPets={true} seletedPets={seletedUserPets}/>
                <div className={cls.box}>
                    <div className={cls.text}>TRADE</div>
                    <Image
                        className={cls.img}
                        width={180}
                        height={130}
                        placeholder="blur"
                        src={img}
                        alt="trade-cricle"
                    />
                    <Link href="/result">
                        <Button>Сравнить</Button>
                    </Link>

                </div>
                <PetCompareList userPets={false} seletedPets={seletedGeneralPets}/>
            </div>
            <TextBlock/>

        </section>
    );
};
export default CompareSection;