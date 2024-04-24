// import '../styles/Header.css'
import logo from '../assets/logo.png'
import Nav from './nav'


function Header() {
    return (
      <div className="Header">
        <header className="Header-header">
  
          <h1>
            Début du projet Kasa
          </h1>
          <img src={logo} alt="logo du site" className='logo-site'></img>
  
        </header>
        <Nav/>
      </div>
    );
  }
  export default Header;