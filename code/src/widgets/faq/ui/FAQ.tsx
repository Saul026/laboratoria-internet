import { faqItems } from 'shared/const/FAQ';
import classes from './FAQ.module.css';
import { FAQItem } from './FAQItem';

export const FAQ = () => {
    return (
        <section className={[classes.faq, 'container'].join(' ') } id='faq'>
            <h4>Вопросы и ответы</h4>

            {faqItems.map((el, index) => (
                <FAQItem body={el.body} title={el.title} key={index} />
            ))}
        </section>
    );
};
