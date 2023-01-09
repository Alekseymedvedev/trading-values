import ResultSection from "../components/resultSection/resultSection";
import MainLayout from "../layout/mainLayout";
import CompareSection from "../components/compareSection/compareSection";
import React from "react";


const Result = () => {
    return (
        <MainLayout title="Результат сравнения ценностей">
            <ResultSection/>
        </MainLayout>

    );
};

export default Result;