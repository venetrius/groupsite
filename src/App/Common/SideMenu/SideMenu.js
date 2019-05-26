import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './SideMenu.css';

export function SideMenu({ menuItems }) {
  const [hidden, setHidden] = useState(false);

  function toggleHide() {
    setHidden(!hidden);
  }

  const navItems = menuItems.map(item => {
    const ref = '#' + item[1];

    return (
      <Button key={ref} className="side-menu-item" variant="link" href={ref}>
        {item[0]}
      </Button>
    );
  });

  if (hidden) {
    return (
      <div className="CCsideButton">
        <button type="button" className="btn btn-info" onClick={toggleHide}>
          Show menu
        </button>
      </div>
    );
  } else {
    return (
      <div className="col-3 col-md-2">
        <div className="CCsidemenu fixed-top ">
          <button
            type="button"
            className="btn btn-info side-menu-item"
            onClick={toggleHide}
          >
            Hide menu
          </button>
          {navItems}
        </div>
      </div>
    );
  }
}

export default SideMenu;
