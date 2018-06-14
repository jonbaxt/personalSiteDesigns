import React from 'react';
import { Carousel } from 'react-bootstrap';
import { StyleSheet, css} from 'aphrodite';

import ProfileImg from '../../Resources/Resized.PNG'

// export default class BootStrapCarousel extends React.Component {
export default function BootStrapCarousel(){
// render(){
    return (
        <Carousel>
            <Carousel.Item>
                <img className={css(st.imgResize)} alt="900x500" src="http://www.gettingsmart.com/wp-content/uploads/2017/06/Program-Code-Feature-Image.jpg" />
            </Carousel.Item>
            <Carousel.Item>
                <img className={css(st.imgResize)} alt="900x500" src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350" />
                <Carousel.Caption>
                    <h3>Coding</h3>
                    <p>Works on a problem till a solution can be reached.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className={css(st.imgResize)} alt="900x500" src="https://assets.entrepreneur.com/content/3x2/1300/20150708172005-coding-working-workspace-apple-macintosh.jpeg?width=700&crop=2:1" />
                <Carousel.Caption>
                    <h3>Dedicated</h3>
                    <p>Team player, doesn't quit</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className={css(st.imgResize)} alt="900x500" src="http://ksusentinel.com/wp-content/uploads/2016/02/20445410520_97a11633c7_o.jpg" />
            </Carousel.Item>
            <Carousel.Item>
                {/* <img width={900} height={500} alt="900x500" src={ProfileImg} /> */}
                <img className={css(st.imgResize2)} alt="900x500" src={ProfileImg} />
                <Carousel.Caption>
                    <h3>Jonathan Baxter</h3>
                    <p>Web Developer | HTML | CSS | REACT | etc</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
// }
}

const st = StyleSheet.create({
    imgResize: {
        margin: '0 auto',
        width: '80%',
    },
    imgResize2: {
        margin: '0 auto',
        width: '60%',
    }
})