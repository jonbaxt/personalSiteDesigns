import React from "react";
import Slider from "react-slick";
import './HomeScreen.css'
import ProfileImg from '../../Resources/Resized.PNG'

class SlickCaras extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };
    return (
      <Slider className='caraResize' {...settings}>
        <div>
          <img style={{ width: '100%'}} src="http://www.gettingsmart.com/wp-content/uploads/2017/06/Program-Code-Feature-Image.jpg" alt='' />
          {/* <h3>Coding</h3> */}
          {/* <p>Works on a problem till a solution can be reached.</p> */}

          {/* <h3>1</h3> */}
        </div>
        <div>
          <img style={{ width: '100%'}} src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350" alt='' />
          {/* <h3>Dedicated</h3> */}
          {/* <p>Team player, doesn't quit</p> */}

          {/* <h3>2</h3> */}
        </div>
        <div>
          <img style={{ width: '100%'}}  src="https://assets.entrepreneur.com/content/3x2/1300/20150708172005-coding-working-workspace-apple-macintosh.jpeg?width=700&crop=2:1" alt='' />
          {/* <h3>3</h3> */}
        </div>
        <div>
          <img style={{ width: '100%'}} src="http://ksusentinel.com/wp-content/uploads/2016/02/20445410520_97a11633c7_o.jpg" alt='' />
          {/* <h3>4</h3> */}
        </div>
        <div>

          <img style={{ width: '100%'}} src={ProfileImg} alt='' />
    {/* <h3>Jonathan Baxter</h3>
    <p>Web Developer | HTML | CSS | REACT | etc</p> */}
          {/* <h3>5</h3> */}
        </div>

        {/*  <div>
          <h3>6</h3>
        </div> */}
      </Slider>
    );
  }
}
export default SlickCaras;