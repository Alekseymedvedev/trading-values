import MainLayout from "../../layout/mainLayout";
import ChooseSection from "../../components/ chooseSection/chooseSection";
import React from "react";
import {PetCategoriesArr} from "../../state/state";

export async function getServerSideProps(context: any) {
    const id = context.query.id
    const res = PetCategoriesArr.filter(item => item.name == id)
    const [data] = res
    return {
        props: {category: data},
    }
}

const PetCategory = ({category}: any) => {
    return (
        <MainLayout title="Главная страница">
            <ChooseSection category={category.pet}/>
        </MainLayout>
    );
};

export default PetCategory