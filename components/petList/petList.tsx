import React, {FC, useState} from 'react';
import cls from './petList.module.scss'
import {IPetType} from "../../types/type";
import Image from "next/image";
import Modal from "../modal/modal";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";
import {useActions} from "../../hooks/useActions";
import {useAppSelector} from "../../hooks/useReduser";
import Link from "next/link";


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
        if (pet) {
            const obj = {
                id: pet?.id + '-' + date,
                name: pet.name,
                img: {
                    src: pet.img.src,
                    alt: pet.img.alt,
                    title: pet.img.title
                },
                status: 'F',
                value: +select,
            }

            if (userPets && seletedUserPets.length < 9) {
                addUserPet(obj)
            } else if (pet && !userPets && seletedGeneralPets.length < 9) {
                addGeneralPet(obj)
            }
        }
        setModalVisible(false)
    }
    return (
        <>
            <div className={cls.list}>
                {
                    petList && petList.map((item: any) =>
                        <div
                            className={cls.item}
                            key={item?.id}
                            onClick={() => {
                                setModalVisible(true)
                                setPet(item)
                                setSelect(item.choices.value)
                            }}
                        >
                            <Image
                                width={100}
                                height={100}
                                src={item?.img.src && `/images/${item.img.src}`}
                                blurDataURL={`/images/${item.img.src}`}
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
                        choices={pet?.choices}
                    />
                    {/*<InputCheckbox text="Fly" value={input} onChange={setInput}/>*/}

                    <div onClick={addPetHandler}>
                        <Link href='/'>
                            <Button>Send</Button>
                        </Link>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default PetList;