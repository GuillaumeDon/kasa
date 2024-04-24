import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Nav from './nav'


function Banner() {
    return (
      <div className="Banner">
        <header className="Banner-header">
  
          <h1>
            Début du projet Kasa
          </h1>
          <img src={logo} alt="logo du site" className='logo-site'></img>
  
        </header>
        <Nav/>
      </div>
    );
  }
  export default Banner;