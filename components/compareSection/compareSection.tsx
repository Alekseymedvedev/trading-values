import React, {FC, useState} from 'react';
import cls from './compareSection.module.scss'
import Button from "../UI/Button/Button";
import PetCompareList from "../petCompareList/petCompareList";
import {useAppSelector} from "../../hooks/useReduser";
import ComparisonLine from "../comparisonLine/comparisonLine";
import Image from "next/image";
import img from '../../images/trade-circle.png'
import TextBlock from "../textBlock/textBlock";
import Social from "../social/social";

interface T {
    children?: any
}

const CompareSection: FC<T> = ({children}) => {
    const {seletedUserPets, seletedGeneralPets} = useAppSelector(state => state.selectedPetsReducer)
    const [userWidth, setUserWidth] = useState(50)
    const [generalWidth, setGeneralWidth] = useState(50)

    function compareHandler() {
        let userValue = 1;
        let generalValue = 1;

        for (let i = 0; i < seletedUserPets.length; i++) {
            userValue += seletedUserPets[i].value
        }
        for (let i = 0; i < seletedGeneralPets.length; i++) {
            generalValue += seletedGeneralPets[i].value
        }

        let sum = +userValue + +generalValue;
        let a = +userValue / +sum * 100
        let b = +generalValue / +sum * 100
        setUserWidth(a)
        setGeneralWidth(b)
    }

    return (
        <section className={cls.section}>
<Social/>
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
                    <div onClick={compareHandler}>
                        <Button>Сравнить</Button>
                    </div>
                </div>
                <PetCompareList userPets={false} seletedPets={seletedGeneralPets}/>
            </div>
            <TextBlock/>
        </section>
    );
};
export default CompareSection;