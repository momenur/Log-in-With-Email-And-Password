import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/" className='me-4'>Home</Link>
            <Link to="/register" className='me-4'>Register</Link>
            <Link to="/login" className='me-4'>Login</Link>
        </div>
    );
};

export default Header;