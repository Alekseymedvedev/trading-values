import React, {useState} from 'react';
import cls from './chooseSection.module.scss'
import PetCategoriesList from "../petСategoriesList/petСategoriesList";
import PetList from "../petList/petList";
import Link from "next/link";
import Button from "../UI/Button/Button";


const ChooseSection = ({category}:any) => {

    return (
     <>
         <Link href='/'>
             <Button>HOME</Button>
         </Link>
         <div className="flex">
             <PetCategoriesList />
             <PetList petList={category}/>
         </div>
     </>
    );
};

export default ChooseSection;