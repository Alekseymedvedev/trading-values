import PetCategoriesList from "../../components/petСategoriesList/petСategoriesList";
import React from "react";
import MainLayout from "../../layout/mainLayout";
import ResultSection from "../../components/resultSection/resultSection";


const Index = () => {
    return (
        <MainLayout title="Категории">
            <PetCategoriesList />
        </MainLayout>

    );
};

export default Index;