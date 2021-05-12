import React, {useState} from 'react'

import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from 'react-icons';

import './Navbar.css';

import Logo from '../Logo6.png';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <>
        <IconContext.Provider value={{color: 'white'}}> 
            <div className="navbar">
                <div className="logo">
              <img src={Logo} alt="Logo" />
              </div>
              
              <div className="bars">
             <Link to="#" className="menu-bars">
                 <FaIcons.FaBars onClick={showSidebar} />
             </Link>
             </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                       <Link to="#" className="menu-bars">
                           <AiIcons.AiOutlineClose />
                       </Link>
                    </li>
                    {SidebarData.map((items, index) => {
                        return (
                            <li key={index} className={items.cName}>
                                <Link to={items.path}>
                                    {items.icon}
                                    <span>{items.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>  
        </>
    )
}

export default Navbar;
