import Banner from '../../components/Banner'
import Card from '../../components/Card'
import CoverPictureHome from '../../assets/img-home-contrasted.png'

function Home(){
    const title = (
        <>
          Chez vous, <br className="mobile-only" /> partout et ailleurs
        </>
      );
    
  
    return(
        <div className="home-container">
        <Banner title={title} imageUrl={CoverPictureHome}  />
        <Card/>
        </div>
    )
}

export default Home;