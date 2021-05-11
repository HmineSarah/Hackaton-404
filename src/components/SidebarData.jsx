import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";


export const SidebarData = [
    {
       title: 'Home',
       path: '/',
       icon: <AiIcons.AiFillHome />,
       cName: 'nav-text'
    },
    {
        title: 'Search',
        path: '/search',
        icon: <RiIcons.RiZoomInFill/>,
        cName: 'nav-text'
     },
     {
        title: 'Likes',
        path: '/likes',
        icon: <BsIcons.BsHeartFill/>,
        cName: 'nav-text'
     },
]