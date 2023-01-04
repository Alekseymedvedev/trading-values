import MainLayout from "../layout/mainLayout";
import PetCompareList from "../components/petCompareList/petCompareList";
import {useAppSelector} from "../hooks/useReduser";
import Button from "../components/UI/Button/Button";
import CompareSection from "../components/compareSection/compareSection";
import React from "react";


export default function Home() {

    return (

        <MainLayout title="Главная страница">
            <CompareSection/>
        </MainLayout>

    )
}
