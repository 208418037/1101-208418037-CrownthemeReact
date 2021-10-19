import React, { useState } from 'react';
import MenuItem_37 from '../components/MenuItem_37'
import './Directory_37.scss'
import items from './menu-item-data'
const Directory_37 = () => {
    const [menuItems, setMenuItems] =useState(items);
    console.log('menuItems', menuItems);
    return (
        <div className="directory-menu">
          { menuItems.map( item => {
              const {id, name, remoteUrl, size} = item;
              return(
                <MenuItem_37                  
                  key={id}
                  name={name}
                  remoteUrl={remoteUrl}
                  size={size}
                />
              )
          })
          
          }
       </div>
    )
}

export default Directory_37;
