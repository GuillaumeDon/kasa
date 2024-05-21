import React from 'react';
import Collapse from '../../components/Collapse';
import Banner from '../../components/Banner'; 
import CoverPictureAbout from '../../assets/picture-about.png';

function About() {
    const title = "";
    return (
        <div className='about-container'>
            <Banner title={title} imageUrl={CoverPictureAbout}  />
            
            <div className='collapse-container'>
                <Collapse title="Fiabiité">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus perspiciatis, ex neque hic quam dolor itaque voluptatum laborum cum similique optio accusantium temporibus, aliquid necessitatibus. Aliquid at temporibus quam?
                </Collapse>
            </div>
            <div className='collapse-container'>
                <Collapse title="Respect">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus perspiciatis, ex neque hic quam dolor itaque voluptatum laborum cum similique optio accusantium temporibus, aliquid necessitatibus. Aliquid at temporibus quam?
                </Collapse>
            </div>
            <div className='collapse-container'>
                <Collapse title="Service">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus perspiciatis, ex neque hic quam dolor itaque voluptatum laborum cum similique optio accusantium temporibus, aliquid necessitatibus. Aliquid at temporibus quam?
                </Collapse>
            </div>
            <div className='collapse-container'>
                <Collapse title="Sécurité">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus perspiciatis, ex neque hic quam dolor itaque voluptatum laborum cum similique optio accusantium temporibus, aliquid necessitatibus. Aliquid at temporibus quam?
                </Collapse>
            </div>
        </div>
    )
}

export default About;
