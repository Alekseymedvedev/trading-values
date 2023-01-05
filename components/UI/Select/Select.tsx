import React, {FC} from 'react';
import cls from './Select.module.scss'

interface T {
    value: number
    onChange: (e: any) => void
    choices: {
        value: string | number | undefined,
        neon: string | number | undefined,
        mega: string | number | undefined
    } | undefined
}

const Select: FC<T> = ({value, onChange, choices}) => {
    return (
        <select
            value={value}
            onChange={(e) => {
                onChange(e.target.value)
            }}
            className={cls.select}
        >
            {choices?.value && <option value={choices?.value}>Regular</option>}
            {choices?.neon && <option value={choices?.neon}>Neon</option>}
            {choices?.mega && <option value={choices?.mega}>Mega Neon</option>}
        </select>
    );
};

export default Select;