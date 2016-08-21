import React, {Component} from 'react';
require("./../css/order.css");
class OrderForm extends React.Component {
    render() {
        return (
            <div>
                <div className="input ">
                    <label className="control-label" id="sizing-addon1">商品数量: </label>
                    <input type="text" className="form-control input-lg " placeholder="1" required/>
                    <label className="control-label" id="sizing-addon2">个</label>
                </div>


                <div className="input">
                    <label className="control-label " id="sizing-addon2">租用时间: </label>
                    <input type="text" className="form-control input-lg" placeholder="1" required/>
                    <label className="control-label " id="sizing-addon2">天</label>
                </div>


                <div className="input">
                    <label className="control-label " id="sizing-addon2">提货地址: </label>
                    <input type="text" className="form-control input-lg" placeholder="详情地址:" required/>
                </div>

            </div>
        );
    }
}

class OrderPage extends React.Component {
    render() {
        return (
            <div className="details">
                <p className="p-size"> 亲，填写一下租用信息吧～</p>
                <form>
                    <OrderForm/>
                    <button type="submit" className="btn qqz">提交</button>

                </form>
            </div>
        )
    }
}
export default OrderPage;

