import React from 'react';
import Collapse from '../../components/Collapse';
import Banner from '../../components/Banner'; 
import CoverPictureAbout from '../../assets/picture-about.png'


function About() {

    const title = "Bienvenue sur la page A propos";
    return (
        <div className='about-container'>
            <Banner title={title} imageUrl={CoverPictureAbout}  />
            <h1>A propos</h1>
            <Collapse title="Fiabiité">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus perspiciatis, ex neque hic quam dolor itaque voluptatum laborum cum similique optio accusantium temporibus, aliquid necessitatibus. Aliquid at temporibus quam?
            </Collapse>
            <Collapse title="Respect">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus perspiciatis, ex neque hic quam dolor itaque voluptatum laborum cum similique optio accusantium temporibus, aliquid necessitatibus. Aliquid at temporibus quam?
            </Collapse>
            <Collapse title="Service">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus perspiciatis, ex neque hic quam dolor itaque voluptatum laborum cum similique optio accusantium temporibus, aliquid necessitatibus. Aliquid at temporibus quam?
            </Collapse>
            <Collapse title="Sécurité">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus perspiciatis, ex neque hic quam dolor itaque voluptatum laborum cum similique optio accusantium temporibus, aliquid necessitatibus. Aliquid at temporibus quam?
            </Collapse>
        </div>
    )
}

export default About;
