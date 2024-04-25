import Banner from '../../components/Banner'
import Card from '../../components/Card'
import CoverPictureHome from '../../assets/img-home-contrasted.png'

function Home(){

    const title = "Bienvenue sur la page d'accueil";
  
  
    return(
        <div className="home-container">
        <Banner title={title} imageUrl={CoverPictureHome}  />
        <Card/>
        </div>
    )
}

export default Home;