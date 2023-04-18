import React, { useContext } from 'react';
import './Header.css';
import Logo from '../../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }

    return (
        <nav className='header'>
            <img src={Logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="inventory">Inventory</Link>
                {
                    !user ? <Link to="/login">Login</Link> : ''
                }
                {
                    !user ? <Link to="/signup">Sign up</Link> : ''
                }
                
                {
                user && <span className='text-white'>Welcome {user.email} <button className='btn-logout' onClick={handleLogOut}>Sign out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;