import cls from './resultSection.module.scss'
import {useAppSelector} from "../../hooks/useReduser";
import React, {useMemo, useState} from "react";
import neutral from "../../public/smile/neutral.png";
import ComparisonLine from "../comparisonLine/comparisonLine";
import Button from "../UI/Button/Button";
import Image from "next/image";
import Link from "next/link";
import {useCompare} from "../../hooks/useCompare";
import Advertisement from "../advertisement/advertisement";
import Script from "next/script";


const ResultSection = () => {
    const {seletedUserPets, seletedGeneralPets} = useAppSelector(state => state.selectedPetsReducer)
    const [userWidth, setUserWidth] = useState(50)
    const [generalWidth, setGeneralWidth] = useState(50)
    const [content, setContent] = useState([neutral, 'Справедливо', 'neutr'])
    useCompare(seletedUserPets, seletedGeneralPets,setUserWidth,setGeneralWidth,setContent)


    return (
        <section className={cls.section}>
            <div className={cls.textModal}>{`${content[1]}`}</div>
            {
                (content[2] === 'win') ? <audio autoPlay={true} src="/audio/win.mp3"></audio> :
                    (content[2] === 'lose') ? <audio autoPlay={true} src="/audio/lose.mp3"></audio> :
                        <audio autoPlay={true} src="/audio/btn-sound-2.mp3"></audio>
            }

            <div id="yandex_rtb_R-A-2092130-3"></div>

            <Script
                dangerouslySetInnerHTML={{
                    __html: `
                   window.yaContextCb.push(()=>{
            Ya.Context.AdvManager.render({
                renderTo: 'yandex_rtb_R-A-2092130-3',
                blockId: 'R-A-2092130-3'
            })

              `,
                }}
            />

            <Image
                width={150}
                height={150}
                src={content[0]}
                alt={`/${content[1]}`}
            />
            <Link href="/">
                <Button white={true}>Закрыть</Button>
            </Link>
            <ComparisonLine userWidth={userWidth} generalWidth={generalWidth}/>
        </section>
    );
};

export default ResultSection;