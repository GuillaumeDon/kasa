import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="header-container-nav">
            <NavLink exact to="/" activeClassName="active">Accueil</NavLink>
            <NavLink to="/about" activeClassName="active">A propos</NavLink>
        </nav>
    )
}

export default Nav;