import React, {FC} from 'react';
import cls from './comparisonLine.module.scss'

interface T {
    userWidth: any
    generalWidth: any
}

const ComparisonLine: FC<T> = ({userWidth, generalWidth}) => {

    const userClasses = [cls.userItem]
    const generalClasses = [cls.generalItem]
    if (userWidth === 50) {
        userClasses.push(cls.grey);
        generalClasses.push(cls.grey);
    }
    if (userWidth > 50) {
        userClasses.push(cls.red);
        generalClasses.push(cls.red);
    }
    if (generalWidth > 50) {
        userClasses.push(cls.green);
        generalClasses.push(cls.green);
    }

    return (
        <div className="_vr">
            <div className={cls.inner}>
                <div className={userClasses.join(' ')} style={{width: userWidth + '%'}}>
                    <span>Your Value</span>
                </div>
                <div className={generalClasses.join(' ')} style={{width: generalWidth + '%'}}>
                    <span>Their Value</span>
                </div>
            </div>
        </div>
    );
};

export default ComparisonLine;