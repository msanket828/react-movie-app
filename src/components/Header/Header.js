import React from 'react'
import './Header.css';

const Header=()=> {

    const handleScrollToTop=()=> {
        window.scroll(0,0);
    }
    return (
        <header onClick={handleScrollToTop}>
            <h3>Movie App</h3>
        </header>
    )
}

export default Header;