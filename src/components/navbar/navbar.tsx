import {Menu} from "./menu/menu";
import {Logo} from "./logo/logo";
import {Addon} from "./addon/addon";

import './navbar.css'

export const Navbar = () => {
    return (
        <nav className="nav-bar-global">
            <Logo />
            <Menu />
            <Addon />
        </nav>
    );
}
