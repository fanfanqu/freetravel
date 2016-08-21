import React from 'react';
import {Link} from 'react-router';

class LoginAndRegisterNav extends React.Component {
    render() {
        return (<div id="div1">
            <ul className="nav nav-pills pull-right">
                <li role="presentation" className="active"><Link to="login">登录</Link></li>
                <li role="presentation"><Link to="/register">注册</Link></li>
            </ul>
        </div>)
    }
}

export default LoginAndRegisterNav;
