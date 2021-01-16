import React from 'react'
import { Link } from "react-router-dom"
import logo from '../Logo3.1.png';
import { useGlobal } from '../state';
import 'antd/dist/antd.css';
import Menu from 'antd/es/menu';



const  Header = (props) => {
  const [global,setGlobal, user] = useGlobal()

    function renderNavItem(name){
      const target = `${name.toLowerCase()}`
      return (
        <Menu.Item key={name} title={name}>
          <Link to={target} onClick={() =>{props.onClick(name)}}> {name}</Link>
        </Menu.Item>
      )
    }

    function authButton() {
      const authenticated = global.user
      const key = authenticated ? 'logout' : 'login'
      const actionHolder = authenticated ?
        <a onClick={() =>{setGlobal({ ...global, user: null, token:null }) }}> LogOut </a>
        :
        <Link to='/login' onClick={() =>{props.onClick('login')}}> Login</Link>

      return (
        <Menu.Item key={key} title={key} style={{float: 'right'}}>
          {actionHolder}
        </Menu.Item>
      )
    }

    var pages = props.pages;
    let navItems = [];
    for (var i = 0; i < pages.length; i++) {
      navItems.push(renderNavItem(pages[i]));
    }

    return (
      <Menu selectedKeys={[props.page]} mode="horizontal" className={'header'}>
          <Menu.Item key='logo' title='logo'>
            <Link to='home' onClick={() =>{props.onClick('Home')}}> <img src={logo} style={{height: '45px'}} /></Link>
          </Menu.Item>
          {navItems}
          {authButton()}
      </Menu>
    )
  }

  export default Header;
