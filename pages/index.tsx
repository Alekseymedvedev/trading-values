import MainLayout from "../layout/mainLayout";
import CompareSection from "../components/compareSection/compareSection";
import React from "react";


export default function Home() {
    return (
        <MainLayout title="Главная страница">
            <CompareSection/>
        </MainLayout>
    )
}
