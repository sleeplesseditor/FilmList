import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                            <a className="left brand-logo" href="/">FilmList</a>
                    </div>
                </nav>    
            </div>
        );
    }
}

export default Header;