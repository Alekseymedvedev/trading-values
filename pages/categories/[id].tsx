import MainLayout from "../../layout/mainLayout";
import ChooseSection from "../../components/chooseSection/chooseSection";
import React from "react";
import {petArr} from "../../state/petState";

export async function getServerSideProps(context: any) {
    const id = context.query.id
    const res = petArr.filter(item => item.parent === id)
    return {
        props: {petList: res},
    }
}

const PetCategory = ({petList}: any) => {
    return (
        <MainLayout title="Роблокс Адопт Ми трейды 2023 — сайт для проверки">
            <ChooseSection petList={petList}/>
        </MainLayout>
    );
};

export default PetCategory