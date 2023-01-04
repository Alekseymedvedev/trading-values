import React, {FC, useState} from 'react';
import cls from './petList.module.scss'
import {IPetType} from "../../types/type";
import Image from "next/image";
import Modal from "../modal/modal";
import Select from "../UI/Select/Select";
import InputCheckbox from "../UI/inputCheckbox/inputCheckbox";
import Button from "../UI/Button/Button";
import {useActions} from "../../hooks/useActions";
import {useAppSelector} from "../../hooks/useReduser";

interface T {
    petList: IPetType[]
}

const PetList: FC<T> = ({petList}) => {
    const {userPets, seletedUserPets, seletedGeneralPets} = useAppSelector(state => state.selectedPetsReducer)
    const {addUserPet, addGeneralPet} = useActions()
    const [modalVisible, setModalVisible] = useState(false)
    const [select, setSelect] = useState(1)
    const [input, setInput] = useState(false)

    const [pet, setPet] = useState<IPetType>()
    const modalHandler = (value: boolean) => {
        setModalVisible(value)
    }

    const addPetHandler = () => {
        let date = Number(new Date())
        if (pet && userPets && seletedUserPets.length < 9) {
            addUserPet({ id: +pet?.id  + +date, name: pet.name, image: pet?.image, status:'F',value: +pet?.value  + +select})
        } else if (pet && !userPets && seletedGeneralPets.length < 9) {
            addGeneralPet({ id: +pet?.id  + +date, name: pet.name, image: pet?.image, status:'F',value: +pet?.value  + +select})
        }
        setModalVisible(false)
    }
    return (
        <>
            <div className={cls.list}>
                {
                    petList && petList.map(item =>
                        <div
                            className={cls.item}
                            key={item?.id}
                            onClick={() => {
                                setModalVisible(true)
                                setPet(item)
                            }}
                        >
                            <Image
                                width={100}
                                height={100}
                                src={item.image && item.image}
                                alt={item.name && item.name}
                                placeholder="blur"
                            />
                            <span className={cls.name}>{item?.name && item?.name}</span>
                        </div>
                    )
                }
            </div>
            <Modal modalVisible={modalVisible} setModalVisible={modalHandler}>
                <div className={cls.inner}>
                    <Select
                        value={select}
                        onChange={setSelect}
                        megaNeon={pet && pet.megaNeon}
                        neon={pet && pet.neon}
                        regular={pet && pet.regular}
                    />
                    <InputCheckbox text="Fly" value={input} onChange={setInput}/>

                    <div onClick={addPetHandler}>
                        <Button>Добавить</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default PetList;