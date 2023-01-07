import {useMemo} from "react";
import {IPetCompareType} from "../types/type";
import sad from "../public/smile/sad.png";
import neutral from "../public/smile/neutral.png";
import excited from "../public/smile/excited.png";

export const useCompare = (
    seletedUserPets: IPetCompareType[],
    seletedGeneralPets: IPetCompareType[],
    userWidth: (a: any) => void,
    generalWidth: (b: any) => void,
    setContent?: (c: any) => void,
) => {
    return useMemo(() => {
        let userValue = 1
        let generalValue = 1
        for (let i = 0; i < seletedUserPets.length; i++) {
            userValue += seletedUserPets[i].value
        }
        for (let i = 0; i < seletedGeneralPets.length; i++) {
            generalValue += seletedGeneralPets[i].value
        }

        let sum = +userValue + +generalValue
        let a = +userValue / +sum * 100
        let b = +generalValue / +sum * 100
        userWidth(a)
        generalWidth(b)


        if (setContent && (a > b)) {
            setContent([sad, 'Big Lose!', 'lose'])
        } else if (setContent && (a < b)) {
            setContent([excited, 'Big Win!', 'win'])
        } else {
            setContent && setContent([neutral, 'Fair', 'neutr'])
        }
    }, [seletedGeneralPets, seletedUserPets]);
}