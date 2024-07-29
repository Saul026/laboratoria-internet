import classes from './ThirdBlock.module.css';
import phone from 'shared/assets/images/Group 254.png';

export const ThirdBlock = () => {
    return (
        <section className={[classes['third-block'], 'container'].join(' ')} id='third-block'>
            <div className={classes.info}>
                <h3>Круто, ты дошел до третьего блока</h3>
                <div>
                    <span>
                        63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы
                        свыше 15 000 ₽.
                    </span>
                    <span>
                        Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и
                        штрафах.
                    </span>
                </div>
            </div>
            <img src={phone} alt='phone' />
        </section>
    );
};
