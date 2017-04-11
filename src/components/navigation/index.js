import React, {Component} from "react";
import Search from '../search'

class Navigation extends Component {
    render() {
        return (
            <div className="navigationMainBlock">
               <div className="container">
                   <div className="row">
                       <div className="col-xs-12 col-sm-6">
                           <ul className="uList">
                               <li>
                                   <a href="#">HOME</a>
                               </li>
                               <li>
                                   <a href="#">ABOUT</a>
                               </li>
                               <li>
                                   <a href="#">NEWS</a>
                               </li>
                               <li>
                                   <a href="#">PORTFOLIO</a>
                               </li>
                               <li>
                                   <a href="#"> BLOG</a>
                               </li>
                           </ul>
                       </div>
                       <div className="col-xs-12 col-sm-6">
                            <Search />
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}

export default Navigation;