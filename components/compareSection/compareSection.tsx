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
import Modal from "../modal/modal";

import {useCompare} from "../../hooks/useCompare";
import Link from "next/link";


const CompareSection = () => {
    const {seletedUserPets, seletedGeneralPets} = useAppSelector(state => state.selectedPetsReducer)
    const [userWidth, setUserWidth] = useState(50)
    const [generalWidth, setGeneralWidth] = useState(50)

    // const [modalVisible, setModalVisible] = useState(false)
    // const [modalSmile, setModalSmile] = useState([neutral, 'Fair', 'neutr'])
    // const compareHandler = useCompare(seletedUserPets, seletedGeneralPets, userWidth, setUserWidth, generalWidth, setGeneralWidth, modalVisible, setModalVisible, modalSmile, setModalSmile)

    //
    // function compareHandler() {
    //     let userValue = 1;
    //     let generalValue = 1;
    //
    //     for (let i = 0; i < seletedUserPets.length; i++) {
    //         userValue += seletedUserPets[i].value
    //     }
    //     for (let i = 0; i < seletedGeneralPets.length; i++) {
    //         generalValue += seletedGeneralPets[i].value
    //     }
    //
    //     let sum = +userValue + +generalValue;
    //     let a = +userValue / +sum * 100
    //     let b = +generalValue / +sum * 100
    //     if (a > b) {
    //         setModalSmile([sad, 'Big Lose!','lose'])
    //     } else if (a < b) {
    //         setModalSmile([excited, 'Big Win!','win'])
    //     } else {
    //         setModalSmile([neutral, 'Fair','neutr'])
    //     }
    //     setUserWidth(a)
    //     setGeneralWidth(b)
    //     setModalVisible(true)
    // }
    // const modalHandler = (value: boolean) => {
    //     setModalVisible(value)
    // }
    useCompare(seletedUserPets, seletedGeneralPets,setUserWidth,setGeneralWidth)
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
                    <Link href="/result">
                        <Button>Сравнить</Button>
                    </Link>

                </div>
                <PetCompareList userPets={false} seletedPets={seletedGeneralPets}/>
            </div>
            <TextBlock/>
            {/*<Modal modalSmileContent='modalSmileContent' modalVisible={modalVisible} setModalVisible={modalHandler}>*/}
            {/*    <div className={cls.textModal}>{`${modalSmile[1]}`}</div>*/}
            {/*    {*/}
            {/*        (modalSmile[2] === 'win') ? <audio autoPlay={true} src="/audio/win.mp3"></audio> :*/}
            {/*            (modalSmile[2] === 'lose') ? <audio autoPlay={true} src="/audio/lose.mp3"></audio> :*/}
            {/*                <audio autoPlay={true} src="/audio/btn-sound-2.mp3"></audio>*/}
            {/*    }*/}

            {/*    <Image*/}
            {/*        width={150}*/}
            {/*        height={150}*/}
            {/*        src={modalSmile[0]}*/}
            {/*        alt={`/${modalSmile[1]}`}*/}
            {/*    />*/}
            {/*    <div onClick={() => {*/}
            {/*        setModalVisible(false)*/}
            {/*    }}>*/}
            {/*        <Button white={true}>Close</Button>*/}
            {/*    </div>*/}
            {/*    <ComparisonLine userWidth={userWidth} generalWidth={generalWidth}/>*/}
            {/*</Modal>*/}
        </section>
    );
};
export default CompareSection;