import cls from './petСategoriesList.module.scss'
import Button from "../UI/Button/Button";
import Link from "next/link";
import {useRouter} from "next/router";
import {routesPage} from "../../routes/routes";


const PetCategoriesList = () => {
    const router = useRouter()
    return (
        <ul className={cls.list}>
            {
                routesPage && routesPage.map(item =>
                    <li key={item.path}>
                        <Link href={item.path}>
                            <Button active={router.asPath === item.path}>{item.name}</Button>
                        </Link>
                    </li>
                )
            }
        </ul>
    );
};

export default PetCategoriesList;