import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui menu">
            <Link href="/" className="active red item">
                Accordion
            </Link>
            <Link href="/list" className="active blue item">
                Search
            </Link>
            <Link href="/dropdown" className="active green item">
                Dropdown
            </Link>
            <Link href="/translate" className="active yellow item">
                Translate
            </Link>
        </div>
    )
}

export default Header;