import React, {FC, useState} from 'react';
import cls from './modal.module.scss'
import Button from "../UI/Button/Button";

interface type {
    children?: any
    modalVisible: boolean
    setModalVisible: (value: boolean) => void
    modalSmileContent?: string
}

const Modal: FC<type> = ({children, modalVisible, setModalVisible, modalSmileContent}) => {

    const rootClasses = [cls.modal]
    const modalSmileClasses = [cls.modalContent]
    if (modalVisible) {
        rootClasses.push(cls.active);
    }
    if (modalSmileContent) {
        modalSmileClasses.push(cls.modalSmileContent);
    }

    return (
        <>
            <div className={rootClasses.join(' ')} onClick={() => {
                setModalVisible(false)
            }}>
                <div className={modalSmileClasses.join(' ')}
                     onClick={(e) => e.stopPropagation()}>
                    <button className={cls.btn} onClick={() => {
                        setModalVisible(false)
                    }}>
                        <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="35.4683" height="9.21254" rx="3"
                                  transform="matrix(0.705326 0.708883 -0.705326 0.708883 6.5 0.328125)" fill="#212121"/>
                            <rect width="35.4683" height="9.21254" rx="3"
                                  transform="matrix(-0.705326 0.708883 -0.705326 -0.708883 31.5156 6.53125)"
                                  fill="#212121"/>
                        </svg>
                    </button>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;