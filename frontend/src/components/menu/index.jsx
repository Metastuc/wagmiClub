import { CloseMenu, Hamburger, Search } from '../../assets/icons';
import { navLinks } from '../../assets/data';
import './index.scss';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Menu = () => {

    const [menuActive, setMenuActive] = useState(false);

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
                    onClick={() => { setMenuActive(!menuActive); }}
                >
                    <Hamburger />
                </button>

                {menuActive &&
                    <section className='active-menu-background'>
                        <div className='menu-content'>
                            <div className='content-wrapper'>

                                <div className="close-menu">
                                    <button
                                        onClick={() => { setMenuActive(!menuActive); }}
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