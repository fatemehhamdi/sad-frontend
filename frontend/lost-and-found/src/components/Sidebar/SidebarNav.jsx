import React from 'react';
import { ICONS } from '../../styles/icons';

const SidebarNav = () => {
  const navItems = [
    { icon: ICONS.HOUSE, active: true },
    { icon: ICONS.CHART },
    { icon: ICONS.USERS },
    { icon: ICONS.LAYERS },
    { icon: ICONS.GEAR },
  ];

  return (
    <nav className="sidebar-nav">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <Icon 
            key={index}
            className={item.active ? 'active' : ''}
          />
        );
      })}
    </nav>
  );
};

export default SidebarNav;