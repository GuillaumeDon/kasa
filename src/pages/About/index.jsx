import React from 'react';
import Collapse from '../../components/Collapse';
import Banner from '../../components/Banner'; // Assure-toi que le chemin d'importation est correct


function About() {
    return (
        <div>
            <Banner/>
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
