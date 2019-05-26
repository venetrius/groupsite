import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Nav } from './StyledSideMenu';

export function SideMenu({ menuItems }) {
  const [hidden, setHidden] = useState(false);

  function toggleHide() {
    setHidden(!hidden);
  }

  const navItems = menuItems.map(item => {
    const ref = '#' + item[1];

    return (
      <Button key={ref} variant="link" href={ref}>
        {item[0]}
      </Button>
    );
  });

  return (
    <>
      {hidden && (
        <Button
          style={{ height: 'max-content' }}
          type="button"
          onClick={toggleHide}
        >
          {hidden ? 'Show menu' : 'Hide menu'}
        </Button>
      )}
      {!hidden && (
        <Nav>
          <Button type="button" onClick={toggleHide}>
            {hidden ? 'Show menu' : 'Hide menu'}
          </Button>
          {navItems}
        </Nav>
      )}
    </>
  );
}

export default SideMenu;
