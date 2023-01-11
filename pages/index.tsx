import MainLayout from "../layout/mainLayout";
import CompareSection from "../components/compareSection/compareSection";
import React from "react";


export default function Home() {
    return (
        <MainLayout title="Роблокс Адопт Ми трейды 2023 — сайт для проверки"
        content="Roblox Adopt Me trading - обменивайте своих питомцев, предметы и аксессуары Adopt Me, чтобы создать идеальную коллекцию виртуальных питомцев на популярной игровой платформе Roblox"
        >
            <CompareSection/>
        </MainLayout>
    )
}
