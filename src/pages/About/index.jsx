import React from 'react';
import Collapse from '../../components/Collapse';
import Banner from '../../components/Banner';
import CoverPictureAbout from '../../assets/picture-about.png';

function About() {
    const title = "";
    return (
        <div className='about-container'>
            <Banner title={title} imageUrl={CoverPictureAbout} />


            <Collapse className ="collapse-about" title="Fiabiité">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus perspiciatis, ex neque hic quam dolor itaque voluptatum laborum cum similique optio accusantium temporibus, aliquid necessitatibus. Aliquid at temporibus quam?
            </Collapse>


            <Collapse title="Respect" className ="collapse-about">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus perspiciatis, ex neque hic quam dolor itaque voluptatum laborum cum similique optio accusantium temporibus, aliquid necessitatibus. Aliquid at temporibus quam?
            </Collapse>


            <Collapse title="Service" className ="collapse-about">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus perspiciatis, ex neque hic quam dolor itaque voluptatum laborum cum similique optio accusantium temporibus, aliquid necessitatibus. Aliquid at temporibus quam?
            </Collapse>


            <Collapse title="Sécurité" className ="collapse-about">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus perspiciatis, ex neque hic quam dolor itaque voluptatum laborum cum similique optio accusantium temporibus, aliquid necessitatibus. Aliquid at temporibus quam?
            </Collapse>

        </div>
    )
}

export default About;
