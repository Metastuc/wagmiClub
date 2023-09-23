import { CloseMenu, Hamburger, Search } from '../../assets/icons';
import { navLinks } from '../../assets/data';
import { Toggle } from '../../hooks';
import './index.scss';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Menu = () => {

    const { status: menuActive, toggleStatus } = Toggle();

    useEffect(
        // toggle background vertical scroll when menu is active
        () => {
            const scroll = menuActive ? "hidden" : "visible";
            document.body.style.overflowY = scroll;
        },

        [menuActive]
    );

    return (
        <section className="menu">
            <div className="menu-wrapper">
                <button
                    onClick={() => { toggleStatus(); }}
                >
                    <Hamburger />
                </button>

                {menuActive &&
                    <section className='active-menu-background'>
                        <div className='menu-content'>
                            <div className='content-wrapper'>

                                <div className="close-menu">
                                    <button
                                        onClick={() => { toggleStatus(); }}
                                    >
                                        <CloseMenu />
                                    </button>
                                </div>

                                <ul className='navigation'>
                                    {
                                        navLinks.map((item) => {
                                            const { id, value: { title, to } } = item;

                                            return (
                                                <li key={id}>
                                                    <Link to={to}>
                                                        {title}
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>

                                <div className="search">
                                    <input type="text" placeholder='search' />

                                    <span>
                                        <Search />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </div>
        </section>
    );
};

export default Menu;