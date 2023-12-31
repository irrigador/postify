import React from 'react'; 
import { Link } from 'react-router-dom';
import backIcon from '../../assets/icons/back.svg';
import logoImg from '../../assets/logo.svg';

import './styles.css';

interface PageHeaderProps {
    title: string;
    children: React.ReactNode;
    description?: string;
}


const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (    
        <header className='page-header'>
        <div className='top-bar-container'>
            <Link to="/">
                <img src={backIcon} alt=""/>
                
            </Link>
            <img src={logoImg} alt=""/>
        </div>

        <div className='header-content'>
            <strong>{props.title}</strong>
            {  props.description &&  <p>{props.description}</p> }
            
            {props.children}
        </div>
    
    
    
    </header>
    );
}

export default PageHeader; 