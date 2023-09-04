import { Menu } from '../index';
import './index.scss';


const Navbar = () => {
    return (
        <section className="navbar">
            <div className="navbar-wrapper">

                <div className="logo-wrapper">
                    <span>wagmi</span>
                    <span>club</span>
                </div>

                <div className="menu-container">
                    <Menu />
                </div>

            </div>
        </section>
    );
};

export default Navbar;