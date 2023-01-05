import { configureStore} from "@reduxjs/toolkit";
import {Context, createWrapper} from "next-redux-wrapper";
import {selectedPetsReducer} from "./reducers";


export const makeStore = (context: Context) =>
    configureStore({
        reducer: {
            selectedPetsReducer,
        }
    });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });