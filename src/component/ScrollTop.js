import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

export default React.memo(function ScrollTop () {
    // Support safari scroll behavior
    smoothscroll.polyfill();
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 'top',
            behavior: 'smooth'
        });
    }
    return <button className="scroll-top-btn" onClick={scrollToTop}></button>
});
