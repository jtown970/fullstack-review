import React from 'react';
import {Link} from 'react-router-dom';

const Header = props => {
    return (
        <nav>
            <h1>Welcome to Twitumrechan™</h1>
            <div>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
    )
}

export default Header;