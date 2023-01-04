import React, {FC} from 'react';
import cls from './inputCheckbox.module.scss'

interface T {
    value: any
    onChange: (e:any) => void
    text:string
}

const InputCheckbox: FC<T> = ({value,onChange,text}) => {
    return (
        <label className={cls.label}>
            <input
                className={cls.input}
                value={value}
                onChange={(e) => { onChange(e.target.checked) }}
                type="checkbox"
            />
            <span className={cls.text}>{text}</span>
        </label>
    );
};

export default InputCheckbox;