import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Welcome To Software Learning School</h2>
            <h6>“Programming isnt about what you know; its about what you can figure out.” — Chris Pine</h6>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            {/* <Link to="/"></Link> */}

        </div>
    );
};

export default Header;