import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import landingImg from '../../assets/landing.svg'

import studyIcon from '../../assets/icons/study.svg'
import giveClassIcon from '../../assets/icons/give-classes.svg'
import purpleHeart from '../../assets/icons/purple-heart.svg'

import './style.css';
import api from '../../services/api'

function Landing () {
    const [totalConnections, setTotalConnections] = useState();

    useEffect(() => {
        api.get('connections').then(response => {
            const {total} = response.data;

            setTotalConnections(total);
        })
    });

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
               <div className="logo-container">
                <img src={logoImg} alt="" />
                <h2>Um sistema de analise online</h2>
                </div> 
                
                <img 
                    src={landingImg}
                    alt=''
                    className="hero-image"
                />

        <div className='buttons-container'>
            <Link to='/study' className='study'>
            <img src={studyIcon} alt="" />
            Sistema
            </Link>

            <Link to='/cadastro' className='give-classes' >
            <img src={giveClassIcon} alt="" />
            Cadastro
            </Link>
        </div>

        <span className='total-connections'>
            Total de {totalConnections} conexões já realizadas <img src={purpleHeart} alt=''/>
        </span>
            </div>
        </div>
        
    )
}

export default Landing;