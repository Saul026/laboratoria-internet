import { useState, useRef, useEffect } from 'react';
import { allFrames } from 'shared/const/Rewiews';
import { useWindowSize } from 'shared/ui/useWindowSize/useWindowSize';

const useSlider = () => {
    const width = useWindowSize();
    const slides: any = useRef();
    const [perPage, setPerPage] = useState(3);
    const [percentToTransform, setPercentToTransform] = useState(33.3);
    const [page, setPage] = useState(0);
    const [touchStart, setTouchStart] = useState(0);

    const prevHandler = () => {
        if (page === 0) return;
        setPage((prevState) => prevState - 1);
    };

    const nextHandler = () => {
        if (page === allFrames.length - 1) return;
        setPage((prevState) => prevState + 1);
    };

    const paginationHandler = (index: number) => {
        if (page === index) return;
        setPage(index);
    };

    const touchHandler = (clientX: number) => {
        if (clientX < touchStart) {
            nextHandler();
        } else {
            prevHandler();
        }
    };

    const changeView = () => {
        if (window.innerWidth >= 1920) {
            setPerPage(3);
            setPercentToTransform(33.3);
        }
        if (window.innerWidth < 1920 && window.innerWidth >= 600) {
            setPerPage(2);
            setPercentToTransform(50);
        } 
        if (window.innerWidth <= 600) {
            setPerPage(1);
            setPercentToTransform(100);
        }
        transform();
    };

    const transform = () => {
        slides.current.style.transform = `translateX(calc(-${percentToTransform * page}% + ${perPage === 1 ? 16 * page : 0}px))`;
    };

    function setActiveSlides(index: number) {
        switch (perPage) {
            case 1:
                if (index === page) {
                    return 1;
                } else {
                    return 0;
                }

            default:
                if (index < page + perPage && index >= page) {
                    return 1;
                } else {
                    return 0;
                }
        }
    }

    useEffect(() => {
        changeView();
    }, [width]);

    useEffect(() => {
        transform();
    }, [page]);

    return {
        slides,
        page,
        perPage,
        touchStart,
        allFrames,
        setTouchStart,
        prevHandler,
        nextHandler,
        paginationHandler,
        touchHandler,
        setActiveSlides,
    };
};

export default useSlider;
