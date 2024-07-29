import classes from './Slider.module.css';
import arrow from 'shared/assets/images/arrow.svg';
import ActiveArrow from 'shared/assets/images/active-acrrov.svg';
import useSlider from '../model/useSlider';

export const Slider = () => {
    const {
        slides,
        page,
        allFrames,
        setTouchStart,
        prevHandler,
        nextHandler,
        paginationHandler,
        touchHandler,
        setActiveSlides,
    } = useSlider();

    return (
        <section className={[classes.slider, classes.container].join(' ')}>
            <h2>Отзывы</h2>

            <div className={classes['carousel-wrapper']}>
                <div className={classes['carousel-container']}>
                    <img
                        src={page === 0 ? arrow : ActiveArrow}
                        alt="prev"
                        className={[classes.arrow, classes.prev].join(' ')}
                        onClick={prevHandler}
                    />
                    <div className={classes.carousel}>
                        <div
                            className={classes.slides}
                            ref={slides}
                            onTouchStart={(el) => {
                                setTouchStart(el.touches.item(0).clientX);
                            }}
                            onTouchEnd={(el) => {
                                touchHandler(el.changedTouches.item(0).clientX);
                            }}
                        >
                            {allFrames.map((el, index) => (
                                <div
                                    className={classes.review}
                                    key={index}
                                    style={{
                                        opacity: setActiveSlides(index),
                                    }}
                                >
                                    <div className={classes['review-header']}>
                                        <img src={el.avatar} alt="avatar" />
                                        <div>
                                            <h3 className={classes.name}>{el.name}</h3>
                                            <p className={classes.city}>{el.city}</p>
                                        </div>
                                    </div>
                                    <p className={classes.desc}>{el.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img
                        src={page === allFrames.length - 1 ? arrow : ActiveArrow}
                        alt="next"
                        className={[classes.arrow, classes.next].join(' ')}
                        onClick={nextHandler}
                    />
                </div>
            </div>
            <div className={classes.pagination}>
                {allFrames.map((_el, index) => (
                    <div
                        key={index}
                        className={classes['pagination-element']}
                        style={{ background: `${page === index ? 'rgb(42, 108, 234)' : 'rgb(194, 200, 205)'}` }}
                        onClick={() => {
                            paginationHandler(index);
                        }}
                    ></div>
                ))}
            </div>
        </section>
    );
};
