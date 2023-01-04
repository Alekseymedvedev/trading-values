import cls from './petСategoriesList.module.scss'
import {PetCategoriesArr} from "../../state/state";
import Button from "../UI/Button/Button";
import Link from "next/link";
import {useRouter} from "next/router";


const PetCategoriesList = () => {
    const router = useRouter()

    return (
        <ul className={cls.list}>
            {
                PetCategoriesArr && PetCategoriesArr.map(item =>

                    <li key={item.id}>
                        <Link href={`/categories/${item.name}`}>
                            <Button active={router.query.id === item.name ? true : ''}>{item.title}</Button>
                        </Link>
                    </li>
                )
            }

        </ul>
    );
};

export default PetCategoriesList;