import sgLogo from '../../../assets/sg_logo.png'

import './logo.css'

export const Logo = () => {
    return (
        <div className="navbar-logo-global">
            <img className="navbar-logo" src={sgLogo}/>
        </div>
    );
}