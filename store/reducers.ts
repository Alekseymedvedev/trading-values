import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPetCompareType} from "../types/type";


interface ISelectedPets {
    seletedUserPets: IPetCompareType[];
    seletedGeneralPets: IPetCompareType[];
    userPets: boolean
}

const initialState: ISelectedPets = {
    seletedUserPets: [],
    seletedGeneralPets: [],
    userPets: true
}

export const selectedPetsSlice = createSlice({
    name: 'selected',

    initialState,

    reducers: {
        petChoose(state, action) {
            state.userPets = action.payload
        },
        addUserPet(state, action: PayloadAction<IPetCompareType>) {
            state.seletedUserPets.push(action.payload)
        },
        removeUserPet(state, action) {
            state.seletedUserPets.splice(action.payload, 1)
        },
        addGeneralPet(state, action: PayloadAction<IPetCompareType>) {
            state.seletedGeneralPets.push(action.payload)
        },
        removeGeneralPet(state, action) {
            state.seletedGeneralPets.splice(action.payload, 1)
        },
    },

});
export const selectedPetsReducer = selectedPetsSlice.reducer
export const selectedPetsAction = selectedPetsSlice.actions