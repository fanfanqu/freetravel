import React from 'react';
import Tent001Img from '../images/goods/tent-001.jpg';
import Tent02Img from '../images/goods/tent-002.jpg';
import RainCoat01Img from '../images/goods/raincoat-001.jpg';
import Umbrella01Img from '../images/goods/umbrella-001.jpg';
import {Link} from 'react-router';

import '../css/index-rent.css';

export default class RentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrlOne: '../images/goods/tent-001.jpg',
            imgUrlTwo: '../images/goods/tent-002.jpg',
            imgUrlThree: '../images/goods/raincoat-001.jpg',
            imgUrlFour: '../images/goods/umbrella-001.jpg',
        }
    }

    render() {
        return (<div className="main-rent">
            <div className="rent-left">
                <a href="#">出租租赁</a>
            </div>

            <div className="rent-right">

                <div className="img-main">
                    <Link to="/goods-details"><img src={this.state.imgUrlOne}/><p>帐篷001</p></Link>
                </div>
                <div className="img">
                    <a className="img-01" href="#"><img src={this.state.imgUrlTwo}/><p>帐篷002</p></a>
                </div>
                <div className="img">
                    <a className="img-02" href="#"><img src={this.state.imgUrlThree}/><p>雨衣001</p></a>
                </div>
                <div className="img">
                    <a className="img-03" href="#"><img src={this.state.imgUrlFour}/><p>伞001</p></a>
                </div>
            </div>
        </div>)
    }
}

// export default RentIndex;
