import React from 'react';
import ImgMain from '../images/rent-details/tent-01.jpg';
import Img01 from '../images/rent-details/tent-details-001.jpg';
import Img02 from '../images/rent-details/tent-details-002.jpg';
import Img03 from '../images/rent-details/tent-details-003.jpg';
import IntroduceImg01 from '../images/rent-details/tent-01.jpg';
import IntroduceImg02 from '../images/rent-details/tent-details-001.jpg';
import IntroduceImg03 from '../images/rent-details/tent-details-002.jpg';
import IntroduceImg04 from '../images/rent-details/tent-01.jpg';
import {Link} from 'react-router';


import '../css/rent-details.css';

class GoodsDetails extends React.Component {
    render() {
        return (
            <div className="goods-details">
                <div className="goods-header">
                    <div className="left-pic">
                        <div className="img-main-rent">
                            <img className="main-img" src={ImgMain}/>
                        </div>
                        <div className="img-other">
                            <img src={Img03}/>
                            <img src={Img02}/>
                            <img src={Img01}/>
                        </div>
                    </div>
                    <div className="goods-information">
                        <p className="goods-name">旅游帐篷A1</p><br/>
                        <div className="separate-left"></div>
                        <div className="separate-right"></div>
                        <p className="goods-price">商品租价：<b>50</b>元/天</p>
                        <p className="goods-address">商品所在地：<span>陕西省 西安市 长安区</span></p>
                        <Link to='/orderPage'>
                            <button type="submit" className="enter-renter">
                                确认租用
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="goods-introduce">
                    <div className="goods-text-wall">
                        <h1>商品介绍：</h1>
                        <h2>商品描述：</h2>
                        <p>
                            3人-4人双层帐; 展开尺寸：240*210*140；内帐材料: 190T透气涤纶布+高密网纱；空间结构: 一居室；帐底材质:
                            210D牛津布；外帐材质:190T防水涤塔夫；外帐防水指数: 2000mm(含)-3000mm(含)；帐底防水指数: 2000mm(含)-3000mm(含)；支架材质:
                            玻璃钢；适应季节: 三季帐全自动速开：全自动面搭建帐篷，开蓬只需要一人一提一拉即可完成,3秒速开。
                        </p>
                        <h2>商品其他信息：</h2>
                        <p>
                            外帐添加特殊防紫外线图层，外帐添加特殊防紫外线图层—PU3000mm，190T涤纶+PU3000，经过多次防水测试，防水指数2000mm(含)-3000mm(含)（可防小到中雨），同时采用多股搅合工艺制作，提高了帐篷的抗风受力性配置POM，单独使用时，可做遮阳蓬，有效阻挡紫外线或者挡雨，公园游玩、沙滩休闲、户外垂钓、露营方便实用内帐加防紫外线涤纶，190T透气涤纶布+高密网纱，加细密纱网，透气性好，夏天使用也不会觉得闷；帐篷撑杆为实心伞架结构复合纤维杆，更轻，更耐用帐底材料为210D牛津布，耐磨防水防虫；可对叠成拎包状态，牛津提带，牢固、方便便携
                        </p>
                        <h2>一句话描述：</h2>
                        <p>
                            出门旅游，必备良品！*-*
                        </p>
                    </div>
                    <div className="goods-pictures-wall">
                        <img className="img-start-end" src={IntroduceImg01}/>
                        <img src={IntroduceImg02}/>
                        <img src={IntroduceImg03}/>
                        <img className="img-start-end" src={IntroduceImg04}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoodsDetails;
