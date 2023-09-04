import { CloseMenu, Hamburger, Search } from '../../assets/icons';
import { navLinks } from '../../assets/data';
import './index.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {

    const [menuActive, setMenuActive] = useState(false);

    return (
        <section className="menu">
            <div className="menu-wrapper">
                <button
                    onClick={() => { setMenuActive(!menuActive); }}
                >
                    <Hamburger />
                </button>

                {menuActive &&
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
                }
            </div>
        </section>
    );
};

export default Menu;