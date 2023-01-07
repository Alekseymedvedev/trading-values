import cls from './resultSection.module.scss'
import {useAppSelector} from "../../hooks/useReduser";
import React, {useMemo, useState} from "react";
import neutral from "../../public/smile/neutral.png";
import ComparisonLine from "../comparisonLine/comparisonLine";
import Button from "../UI/Button/Button";
import Image from "next/image";
import Link from "next/link";
import {useCompare} from "../../hooks/useCompare";


const ResultSection = () => {
    const {seletedUserPets, seletedGeneralPets} = useAppSelector(state => state.selectedPetsReducer)
    const [userWidth, setUserWidth] = useState(50)
    const [generalWidth, setGeneralWidth] = useState(50)
    const [content, setContent] = useState([neutral, 'Fair', 'neutr'])
    useCompare(seletedUserPets, seletedGeneralPets,setUserWidth,setGeneralWidth,setContent)


    return (
        <section className={cls.section}>
            <div className={cls.textModal}>{`${content[1]}`}</div>
            {
                (content[2] === 'win') ? <audio autoPlay={true} src="/audio/win.mp3"></audio> :
                    (content[2] === 'lose') ? <audio autoPlay={true} src="/audio/lose.mp3"></audio> :
                        <audio autoPlay={true} src="/audio/btn-sound-2.mp3"></audio>
            }

            <Image
                width={150}
                height={150}
                src={content[0]}
                alt={`/${content[1]}`}
            />
            <Link href="/">
                <Button white={true}>Close</Button>
            </Link>
            <ComparisonLine userWidth={userWidth} generalWidth={generalWidth}/>
        </section>
    );
};

export default ResultSection;