import React, {Component} from "react";
import Logo from '../logo'
import Login from '../login'
import Navigation from "../navigation/index";

class Header extends Component {
    render() {
        return (
            <header className='header'>
               <div className="container">
                   <div className="row">
                       <div className="col-xs-12 col-sm-6">
                           <Logo />
                       </div>
                       <div className="col-xs-12 col-sm-6">
                           <Login />
                       </div>
                   </div>
               </div>
               <Navigation />
            </header>
        )
    }
}

export default Header;