import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Button } from '../UI';
import { ICONS } from '../../styles/icons';

const Header = ({ title = "Lost&Found" }) => {
  const navigate = useNavigate();
  const SlidersIcon = ICONS.SLIDERS;
  const PlusIcon = ICONS.PLUS;
  
  const handleAddNewClick = () => {
    navigate('/register');
  };
  
  const handleCustomizeClick = () => {
    // Add your customize logic here
    console.log('Customize clicked');
  };
  
  return (
    <header className="header">
      <h1>{title}</h1>
      
      <div className="spacer" />
      
      <SearchBar />
      
      <Button icon={SlidersIcon} onClick={handleCustomizeClick}>
        Customize
      </Button>
      
      <Button variant="accent" icon={PlusIcon} onClick={handleAddNewClick}>
        Add New
      </Button>
    </header>
  );
};

export default Header;