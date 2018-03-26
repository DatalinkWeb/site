import React from 'react';


import NavigationSubItem from '../NavigationSubItem/NavigationSubItem';

const navigationSubItems = () => (
    <ul className="NavigationSubItems">
        <NavigationSubItem link="/" >Per User</NavigationSubItem>
        <NavigationSubItem link="/" >Per Expertise</NavigationSubItem>
        <NavigationSubItem link="/" >Per Enterprise</NavigationSubItem>
        
        
    </ul>
);

export default navigationSubItems;