import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

function Header(): ReactElement {
    return (
        <header>
            <div>
                <nav>
                    <NavLink>Home</NavLink>
                    <NavLink>Shop</NavLink>
                </nav>
            </div>
            <div>
                <nav>
                    <NavLink>Cart</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;