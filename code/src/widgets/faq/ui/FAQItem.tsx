import { FC, useState } from 'react';
import classes from './FAQ.module.css';
import { LuPlusCircle } from 'react-icons/lu';
import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface Props {
    title: string;
    body: string;
}

export const FAQItem: FC<Props> = ({ title, body }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);

    const handleClick = () => {
        setIsActive((prevState) => !prevState);
    };

    return (
        <div
            className={classes['faq-item']}
            onClick={handleClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className={classes.link}>
                <a style={{ color: `${isHover ? '#2A6CEA' : '#191C1F'}` }}>{title}</a>
                {!isActive ? (
                    <IconContext.Provider value={{ color: `${isHover ? '#2A6CEA' : '#191C1F'}`, size: '24px' }}>
                        <span>
                            <LuPlusCircle />
                        </span>
                    </IconContext.Provider>
                ) : (
                    <IconContext.Provider value={{ color: `${isHover ? '#2A6CEA' : '#191C1F'}`, size: '25px' }}>
                        <span>
                            <AiOutlineCloseCircle />
                        </span>
                    </IconContext.Provider>
                )}
            </div>

            <div className={[`${classes['faq-item_content']} ${isActive ? classes.active : ''}`].join(' ')}>
                <p>{body}</p>
            </div>
        </div>
    );
};
