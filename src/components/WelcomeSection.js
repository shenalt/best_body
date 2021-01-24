import React from 'react';
//Import Styled Components
import styled from 'styled-components';
//Import FontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChild} from '@fortawesome/free-solid-svg-icons';
//Import React Router
import { Link } from 'react-router';

const WelcomeSection = () => {
    return( 
        <div>
        <StyledWelcome>
            <StyledTitle>
                <h2 className="app-name">Best Body</h2>
            </StyledTitle>
            <FontAwesomeIcon icon={faChild} size='10x' />
            <StyledDescription>
                <h4 className="app-description">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </h4>
            </StyledDescription>
            <button>Next</button>
        </StyledWelcome>
        <AnimationArea>
            <ul class="box-area">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </AnimationArea>
        </div>
    );
};

const StyledWelcome = styled.div`
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid black;
    background: transparent;
    color: black;
    transition: all 0.5s ease;
        &:hover{
            background-color: black;
            color: white;
        }
    }
`;

const StyledTitle = styled.div`
    font-family: 'Lobster Two', cursive;
    h2{
        font-size: 10em; 
    }
    //padding: 25px 0px 25px 0px;
    //.app-name{
        //text-align: center;
        //padding-bottom: 150px;
        //padding-top: 150px;
    //}
`;

const StyledDescription = styled.div`
    width: 50%;
    //.app-description{
        //text-align: center;
    //}
`;

const AnimationArea = styled.div`
    /* ANIMATION */
    .animation-area{
        background: linear-gradient(to left, #62b847, #3492cb);
        width: 100%;
        height: 100vh;
    }

    .box-area{
        //position: absolute; with this, the button doesn't hover but without, the website bugs out a little bit
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .box-area li{
        position: fixed;
        display: block;
        list-style: none;
        width: 25px;
        height: 25px;
        background: rgba(255, 4, 34, 0.2);
        animation: animate 20s linear infinite;
        bottom: -150px;
    }
    .box-area li:nth-child(1){
        left: 86%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }
    .box-area li:nth-child(2){
        left: 12%;
        width: 30px;
        height: 30px;
        animation-delay: 1.5s;
        animation-duration: 10s;
    }
    .box-area li:nth-child(3){
        left: 70%;
        width: 100px;
        height: 100px;
        animation-delay: 5.5s;
    }
    .box-area li:nth-child(4){
        left: 42%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 15s;
    }
    .box-area li:nth-child(5){
        left: 65%;
        width: 40px;
        height: 40px;
        animation-delay: 0s;
    }
    .box-area li:nth-child(6){
        left: 15%;
        width: 110px;
        height: 110px;
        animation-delay: 3.5s;
    }
    @keyframes animate{
        0%{
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100%{
            transform: translateY(-800px) rotate(360deg);
            opacity: 0;
        }
    }
    /* ANIMATION */
`;

export default WelcomeSection;