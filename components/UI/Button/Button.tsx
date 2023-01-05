import React, {FC, useState} from 'react';
import cls from './Button.module.scss'

interface T {
    children?: string
    plus?: boolean
    active?: boolean | string
    white?:boolean
}

const Button: FC<T> = ({children,plus,active,white}) => {
    const [audio,setAudio]= useState(false)
    const buttonClass = [cls.button]
    if (plus) {
        buttonClass.push(cls.plus)
    }
    if (active) {
        buttonClass.push(cls.active)
    }
    if (white) {
        buttonClass.push(cls.white)
    }
    return (
        <button className={buttonClass.join(' ')} onClick={()=>setAudio(true)}>
            {audio && <audio autoPlay={true} src="/audio/btn-sound-1.mp3"></audio>}
            {
                children ?
                    children
                    : <svg stroke="currentColor" fill="#fff" strokeWidth="0" viewBox="0 0 24 24" height="1em"
                         width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z"></path>
                    </svg>
            }
            <span className={cls.bg}></span>
        </button>
    );
};

export default Button;