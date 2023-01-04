import cls from './petCompareList.module.scss'
import Image from "next/image";
import Button from "../UI/Button/Button";
import Link from "next/link";
import {PetCategoriesArr} from "../../state/state";
import {useActions} from "../../hooks/useActions";
import {FC} from "react";
import {IPetCompareType} from "../../types/type";

interface T {
    seletedPets: IPetCompareType[];
    userPets: boolean
}

const PetCompareList: FC<T> = ({seletedPets, userPets}) => {
    const {removeUserPet, removeGeneralPet, petChoose} = useActions()
    const catUrl = PetCategoriesArr[0].name

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
                        placeholder="blur"
                        src={item.image}
                        alt={item.name}
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
                            <Link href={`/categories/${catUrl}`}>
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