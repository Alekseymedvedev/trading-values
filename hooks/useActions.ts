import {useAppDispatch} from "./useReduser";
import {bindActionCreators} from "redux";
import {selectedPetsAction} from "../store/reducers";

const allActions={
    ...selectedPetsAction
}

export const useActions=()=>{
    const dispatch = useAppDispatch()

    return bindActionCreators(allActions,dispatch)
}