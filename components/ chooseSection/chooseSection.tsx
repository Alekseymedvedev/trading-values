import React, {useState} from 'react';
import cls from './chooseSection.module.scss'
import PetCategoriesList from "../petСategoriesList/petСategoriesList";
import PetList from "../petList/petList";



const ChooseSection = ({petList}:any) => {
    return (
     <>
         <div className="flex">
             <PetCategoriesList />
             <PetList petList={petList}/>
         </div>
     </>
    );
};

export default ChooseSection;