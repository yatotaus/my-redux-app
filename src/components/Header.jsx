import React from 'react';

const Header = () => (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/#">
            <img 
                src="https://www.intellisense.io/cms-files/5cda/5cdaa81e79991.png" 
                width="200" 
                height="40" 
                className="d-inline-block align-top" 
                alt="intellisense.io"
                style={{marginLeft: '30px'}}
            />
        </a>
    </nav>
);

export default Header;