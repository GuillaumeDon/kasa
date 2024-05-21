// import '../../styles/main.css'
import logoFooter from '../../assets/logo-footer.png'



function Footer() {
    return (
      
        <footer className="footer-container">
  
            <img className="footer-container-img" src={logoFooter} alt="Logo du footer"></img>
            <p className="footer-container-txt">© 2020 Kasa. All<br className="mobile-only"/> rights reserved</p>
        </footer>
        
      
    );
  }
  export default Footer;