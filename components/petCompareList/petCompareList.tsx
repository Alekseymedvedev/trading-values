import cls from './petCompareList.module.scss'
import Image from "next/image";
import Button from "../UI/Button/Button";
import Link from "next/link";
import {useActions} from "../../hooks/useActions";
import {FC} from "react";
import {IPetCompareType} from "../../types/type";
import {petArr} from "../../state/petState";
import {routesPage} from "../../routes/routes";

interface T {
    seletedPets: IPetCompareType[];
    userPets: boolean
}

const PetCompareList: FC<T> = ({seletedPets, userPets}) => {
    // const aaa = petArr.filter(item => item === item.parent)
    // const categoriesArr=[]
    // for (let i = 0; i < petArr.length; i++){
    //     const obj ={
    //         name: petArr[i].parent
    //     }
    //     categoriesArr.push(obj)
    // }
    // console.log(aaa)
    const {removeUserPet, removeGeneralPet, petChoose} = useActions()
    const catUrl = petArr[0].parent

    const removeHandler = (item: any) => {
        const index = seletedPets.indexOf(item)

        if (userPets) {
            removeUserPet(index)

        } else {
            removeGeneralPet(index)
        }
    }
    const rows = [];
    for (let i = 0; i < 9 - seletedPets.length - 1; i++) {
        rows.push(i + 1);
    }

    return (
        <ul className={cls.list}>
            {
                seletedPets && seletedPets.map((item: any) =>
                    <li key={item.id} className={cls.item}>
                    <span className={cls.blur}>
                    <Image
                        width={140}
                        height={140}
                        src={item?.img.src && `/images/${item.img.src}`}
                        placeholder="blur"
                        blurDataURL={`/images/${item.img.src}`}
                        alt={item?.img?.alt}
                        title={item?.img?.title}
                    />
                        </span>
                        <span className={cls.status}>{item.status}</span>
                        <span className={cls.name}>{item.name}</span>

                        <button className={cls.remove} onClick={() => removeHandler(item)}>-</button>
                    </li>
                )
            }
            {
                seletedPets.length < 9 ?
                    <>
                        <li className={cls.item} onClick={() => petChoose(userPets)}>
                            <Link href={routesPage[0].path}>
                                <Button plus={true}/>
                            </Link>
                        </li>
                        {
                            rows.map((item) =>
                                <li key={item} className={cls.item}></li>
                            )
                        }
                    </>
                    : null
            }
        </ul>
    );
};

export default PetCompareList;