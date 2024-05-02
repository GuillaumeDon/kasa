import { Link } from 'react-router-dom'
 
function Nav() {
    return (
        <nav className="header-container-nav">
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
            {/* <Link to="/renting">A Louer</Link> */}
        </nav>
    )
}

export default Nav