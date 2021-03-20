import 'antd/dist/antd.css'
import "../styles.css";
import {Layout, Menu} from 'antd';
import React from "react"
import { Link, withRouter } from "react-router-dom";
//import { History } from 'history';
const { Header } = Layout;






// interface Props1 {
//     history: History,
//     path: string
// }


// history must match with path which is /signup e.g
const isActive = (history, path) => {

    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

// { history} = props.history
const Menu1 = ({ history }) => {
    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">
                    <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>nav 2</Menu.Item>
                <Menu.Item>nav 3</Menu.Item>
            </Menu>
        </Header>

    )
}



export default withRouter(Menu1)