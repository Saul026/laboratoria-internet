import classes from './HowItWorks.module.css';
import waiting from 'shared/assets/images/waiting.svg';
import deliveryTruck from 'shared/assets/images/delivery-truck.svg';
import secure from 'shared/assets/images/secure.svg';
import moneyBags from 'shared/assets/images/money-bags.svg';

export const HowItWorks = () => {
    return (
        <section className={[classes['how-it-work'], 'container'].join(' ')} id='hiw'>
            <h2>Как это работает</h2>
            <div className={classes.elements}>
                <div className={classes.element}>
                    <img src={waiting} alt='waiting' />
                    <div>
                        <h3>Прочитай задание внимательно</h3>
                        <p>Думаю у тебя не займет это больше двух-трех минут</p>
                    </div>
                </div>
                <div className={classes.element}>
                    <img src={deliveryTruck} alt='delivery-truck' />
                    <div>
                        <h3>Изучи весь макет заранее</h3>
                        <p>Подумай как это будет работать на разных разрешениях и при скролле</p>
                    </div>
                </div>
                <div className={classes.element}>
                    <img src={secure} alt='secure' />
                    <div>
                        <h3>Сделай хорошо</h3>
                        <p>Чтобы мы могли тебе доверить подобные задачи в будущем</p>
                    </div>
                </div>
                <div className={classes.element}>
                    <img src={moneyBags} alt='money-bags' />
                    <div>
                        <h3>Получи предложение</h3>
                        <p>Ну тут все просто, не я придумал правила, но думаю так и будет)))</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
