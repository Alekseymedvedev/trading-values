import React, {FC} from 'react';
import cls from './Select.module.scss'

interface T {
    value: number
    onChange: (e: any) => void
    regular: { value: number, name: string } | undefined
    neon: { value: number, name: string } | undefined
    megaNeon: { value: number, name: string } | undefined
}

const Select: FC<T> = ({
                           value,
                           onChange,
                           regular,
                           neon,
                           megaNeon
                       }) => {
    return (
        <select
            value={value}
            onChange={(e) => {onChange(e.target.value)
                console.log(e.target.value) }}
            className={cls.select}
        >
            <option value={regular?.value}>{regular?.name}</option>
            <option value={neon?.value}>{neon?.name}</option>
            <option value={megaNeon?.value}>{megaNeon?.name}</option>
        </select>
    );
};

export default Select;