import React from 'react';

//import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/" >Programs</NavigationItem>
        <NavigationItem link="/" >About</NavigationItem>
        <NavigationItem link="/" >Blog</NavigationItem>
        <NavigationItem link="/" >Contact</NavigationItem>
        
    </ul>
);

export default navigationItems;