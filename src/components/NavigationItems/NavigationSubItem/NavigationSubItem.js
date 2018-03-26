import React from 'react';


const navigationSubItem = (props) => (
        <li className="NavigationSubItem">
            <a  
            href={props.link}>
            {props.children}
            </a>
        </li>

        
);

export default navigationSubItem;