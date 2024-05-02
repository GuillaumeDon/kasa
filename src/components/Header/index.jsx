import '../../styles/main.css'
import logoMobile from '../../assets/logo-mobile.png'
import Nav from './../Nav'


function Header() {
    return (
      
        <header className="header-container">
  
          <img className="header-container-logo" src={logoMobile} alt="logo du site"></img>
          <Nav/>
        </header>
        
      
    );
  }
  export default Header;