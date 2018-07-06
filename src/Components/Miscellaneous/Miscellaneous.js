import React from 'react';
// import axios from 'axios';

export default class Miscellaneous extends React.Component {
constructor(){
    super()
    this.state = {
        robo: [],
    }
}
    // componentDidMount(){
    //     axios.get('https://robohash.org/api/?set=set4').then(res => {
    //     let newArr = [...this.state.robo, res.data]    
    //     this.setState({ robo: newArr })}).catch(err => console.log('Oh no', err))
    // }

    render(){
        console.log( this.state.robo)
        return(
            <div>
                <h1>Miscellaneous Stuff</h1>
                {/* <img src={this.state.robo[0]} alt='' /> */}
                {/* <img src='https://robohash.org/api/?set=set4' alt='' /> */}
                
            </div>
        )
    }
}