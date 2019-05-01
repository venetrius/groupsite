import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {

    render() {
      return (
            <header>
                <nav>
                    <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/tutorial'>Tutorial</Link></li>
                    <li><Link to='/events'>Events</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    </ul>
                </nav>
            </header>
      );
    }
  }

export default Header;
