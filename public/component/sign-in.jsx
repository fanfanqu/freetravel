import React from 'react';
import request from 'superagent';
import {hashHistory} from 'react-router'
import _ from 'lodash';
import '../css/sign-in.css';

export default class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }

    }

    render() {
        return (<form onSubmit={this._onSubmit.bind(this)}>
            <div className="content">
                <div className="top-part">
                    <div className="tou-img"></div>
                    <div className="left-hand"></div>
                    <div className="right-hand"></div>
                </div>
                <p className="username">
                    <span className="user-logo"></span>
                    <input className="input-field" type="text" placeholder="请输入用户名或邮箱" id="name"
                           value={this.state.name}
                           onChange={this._onNameChange.bind(this)}/>
                </p>
                <p className="password">
                    <span className="password-logo"></span>
                    <input className="input-field" id="password" type="password" placeholder="请输入密码"
                           value={this.state.password}
                           onChange={this._onPasswordChange.bind(this)}/>
                </p>
                <div className="down-footer">
                    <p className="footer-text">
                        <span className="pull-right">
                            <a className="setTextColor">忘记密码?</a>
                        </span>
                        <span className="pull-right">
                            <a className="setTextColor">注册</a>
                            <input type="submit" value="登录" className="btn btn-primary"/>

                        </span>
                    </p>
                </div>
            </div>
        </form>)
    }

    _onNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    _onPasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    _onSubmit(event) {
        event.preventDefault();
        request.post('/api/sessions')
            .send({
                name: this.state.name,
                password: this.state.password
            })
            .end((err, res) => {
                if (res.statusCode === 201) {
                    alert('login success');
                    let string = document.cookie;
                    const separatorIndex = _.lastIndexOf(document.cookie, '%');
                    $("#div1").html('Welcome:' + string.substring(6, separatorIndex));
                    hashHistory.push('/index-rent');
                } else if (res.statusCode === 400 && res.text == 'name and password can not be null') {
                    alert(res.text);
                }
                else if (res.statusCode === 401 && res.text === 'name or password is wrong') {
                    alert(res.text);
                }
            })
    }
}

