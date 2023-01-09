import cls from "./inputSearch.module.scss";
import React, {FC} from "react";
interface T {
    value: any
    onChange: (e:any) => void
    inputSearchHandler: () => void
}

const InputSearch: FC<T> = ({value,onChange,inputSearchHandler}) => {
    return (
        <label className={cls.lab}>
            <input
                className={cls.input}
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                    inputSearchHandler()
                }}
                type="text"
            />
        </label>
    );
};

export default InputSearch;