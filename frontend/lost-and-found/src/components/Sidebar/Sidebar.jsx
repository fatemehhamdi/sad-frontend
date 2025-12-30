import React from 'react';
import SidebarNav from './SidebarNav';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">logo</div> {/* Updated class name */}
      <SidebarNav />
      <div className="avatar" />
    </aside>
  );
};

export default Sidebar;