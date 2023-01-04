import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {selectedPetsReducer, selectedPetsSlice} from "./reducers";
// import {categoriesApi} from "./categoriesApi";

// const rootReducer = combineReducers({
//     selectedPetsReducer
// })

export const makeStore = () =>
    configureStore({
        reducer: {
            selectedPetsReducer,
        }
    });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });