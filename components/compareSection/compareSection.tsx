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
import sad from "../../public/smile/sad.png";
import neutral from "../../public/smile/neutral.png";
import excited from "../../public/smile/excited.png";


const CompareSection = () => {
    const {seletedUserPets, seletedGeneralPets} = useAppSelector(state => state.selectedPetsReducer)
    const [userWidth, setUserWidth] = useState(50)
    const [generalWidth, setGeneralWidth] = useState(50)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalSmile, setModalSmile] = useState([neutral, 'Fair'])

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
        if (a > b) {
            setModalSmile([sad,'Big Lose!'])
        } else if (a < b) {
            setModalSmile([excited,'Big Win!' ])
        }else{
            setModalSmile([neutral, 'Fair'])
        }
        setUserWidth(a)
        setGeneralWidth(b)
        setModalVisible(true)
    }

    const modalHandler = (value: boolean) => {
        setModalVisible(value)
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
                        <Button>Compare</Button>
                    </div>
                </div>
                <PetCompareList userPets={false} seletedPets={seletedGeneralPets}/>
            </div>
            <TextBlock/>
            <Modal modalSmileContent='modalSmileContent' modalVisible={modalVisible} setModalVisible={modalHandler}>
                <div className={cls.textModal}>{modalSmile[1]}</div>
                <Image
                    width={150}
                    height={150}
                    // sizes="(max-width: 768px) width={50} height={50},(max-width: 1200px) width={250} height={250}"
                    src={modalSmile[0]}
                    alt={modalSmile[1]}
                    // blurDataURL={`/images/${modalSmile[0]}`}
                    // placeholder="blur"
                />
                <div onClick={() => {
                    setModalVisible(false)
                }}>
                    <Button white={true}>Close</Button>
                </div>
                <ComparisonLine userWidth={userWidth} generalWidth={generalWidth}/>
            </Modal>
        </section>
    );
};
export default CompareSection;