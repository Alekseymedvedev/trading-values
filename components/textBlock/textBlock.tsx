import cls from './textBlock.module.scss'
import {textArr} from "../../state/state";


const TextBlock = () => {
    return (
        <div className={cls.block}>
            {
                textArr && textArr.map(item=>
                    <div key={item.id} className={cls.box}>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </div>
                )
            }
        </div>
    );
};

export default TextBlock;