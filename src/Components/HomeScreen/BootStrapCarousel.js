import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { StyleSheet, css} from 'aphrodite';
import ProfileImg from '../../Resources/Resized.PNG'

export default class BootStrapCarousel extends React.Component {
// export default function BootStrapCarousel(){
render(){
    return (
        <div>
        <Carousel>
             <Carousel.Item>
                <Image src="http://www.gettingsmart.com/wp-content/uploads/2017/06/Program-Code-Feature-Image.jpg" responsive />
            </Carousel.Item>
            <Carousel.Item>
                <Image className={css(st.imgResize)} src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350" responsive />
                <Carousel.Caption>
                    <h3>Coding</h3>
                    <p>Works on a problem till a solution can be reached.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className={css(st.imgResize)} src="https://assets.entrepreneur.com/content/3x2/1300/20150708172005-coding-working-workspace-apple-macintosh.jpeg?width=700&crop=2:1" responsive />
                <Carousel.Caption>
                    <h3>Dedicated</h3>
                    <p>Team player, doesn't quit</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src="http://ksusentinel.com/wp-content/uploads/2016/02/20445410520_97a11633c7_o.jpg" responsive />
            </Carousel.Item>
            
             <Carousel.Item>
                 <Image src={ProfileImg} className={css(st.imgResize2)} responsive />
                {/* <img className={css(st.imgResize2)} alt="900x500" src={ProfileImg} /> */}
                <Carousel.Caption>
                    <h3>Jonathan Baxter</h3>
                    <p>Web Developer | HTML | CSS | REACT | etc</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}
}

const st = StyleSheet.create({
    imgResize: {
        margin: '0 auto',
        width: '80%',
    },
    imgResize2: {
        margin: '0 auto',
        width: '60%'
    },
})