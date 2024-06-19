import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="header-container-nav">
            <NavLink exact to="/" activeClassName="active"  className="header-container-nav-item">Accueil</NavLink>
            <NavLink to="/about" activeClassName="active">A propos</NavLink>
        </nav>
    )
}

export default Nav;