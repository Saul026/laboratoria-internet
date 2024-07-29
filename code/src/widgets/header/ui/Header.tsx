import { memo, useState } from 'react';
import classes from './Header.module.css';
import bg from 'shared/assets/images/main-bg.png';
import logo from 'shared/assets/images/logo.svg';
import logoBlack from 'shared/assets/images/logo-black.svg';
import open from 'shared/assets/images/burger-open.svg';
import close from 'shared/assets/images/burger-close.svg';
import arrow from 'shared/assets/images/burger-arrow.svg';

export const Header = memo(() => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={[classes.header, 'container'].join(' ')} style={{ backgroundImage: `url('${bg}')` }}>
            <nav className={[classes.nav, `${isOpen ? classes.active : ''}`].join(' ')}>
                <div className={classes.menu}>
                    <a href='#!' className={classes.logo}>
                        <img src={!isOpen ? logo : logoBlack} alt='logo' />
                    </a>
                    <div className={classes.open} onClick={() => setIsOpen((prevState) => !prevState)}>
                        <img src={open} alt='open' />
                    </div>
                    <div className={classes.close} onClick={() => setIsOpen((prevState) => !prevState)}>
                        <img src={close} alt='close' />
                    </div>
                </div>

                <div className={classes.links}>
                    <ul>
                        <li>
                            <a href='#hiw' onClick={() => setIsOpen((prevState) => !prevState)}>
                                Как это работает
                            </a>
                            <div>
                                <img src={arrow} alt='arrow' />
                            </div>
                        </li>
                        <li>
                            <a href='#third-block' onClick={() => setIsOpen((prevState) => !prevState)}>
                                3-й блок
                            </a>
                            <div>
                                <img src={arrow} alt='arrow' />
                            </div>
                        </li>
                        <li>
                            <a href='#faq' onClick={() => setIsOpen((prevState) => !prevState)}>
                                Вопросы и ответы
                            </a>
                            <div>
                                <img src={arrow} alt='arrow' />
                            </div>
                        </li>
                        <li>
                            <a href='#form' onClick={() => setIsOpen((prevState) => !prevState)}>
                                Форма
                            </a>
                            <div>
                                <img src={arrow} alt='arrow' />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={classes.info}>
                <h1>Говорят, никогда не поздно сменить профессию</h1>
                <p>Сделай круто тестовое задание и у тебя получится</p>
                <button>Проще простого!</button>
            </div>
        </header>
    );
});
