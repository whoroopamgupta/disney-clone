import React,{useEffect} from 'react'
import styled from 'styled-components'

const Header = (props) => {



    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="disney" />
            </Logo>
            <>
            
            <NavMenu>
                    <a href="#">
                        <img src="/images/home-icon.svg" alt="HOME" />
                        <span>HOME</span>
                    </a>
                    <a href="#">
                        <img src="/images/search-icon.svg" alt="HOME" />
                        <span>SEARCH</span>
                    </a>
                    <a href="#">
                        <img src="/images/original-icon.svg" alt="HOME" />
                        <span>original</span>
                    </a>
                    <a href="#">
                        <img src="/images/movie-icon.svg" alt="HOME" />
                        <span>movie</span>
                    </a>
                    <a href="#">
                        <img src="/images/series-icon.svg" alt="HOME" />
                        <span>series</span>
                    </a>
            </NavMenu>
            </>
        </Nav>
    )
}

export default Header

const Nav = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;

`

const Logo = styled.a`

    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img{
        display: block;
        width: 100%;
    }

`

const NavMenu = styled.div`

    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;


    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;
            min-width: 20px;
            z-index: auto ;
        }

        span{
            color: rgb(249,249,249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
            text-transform: uppercase;
            
            &:before{
                content: "";
                background-color: rgb(249,249,249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
                visibility: hidden;
                width: auto;
            }
            
        }
            &:hover{
                span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }

    }

    @media (max-width: 768px){
        display: none;
    }

`


const Login = styled.div`

    background-color: rgb(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 200ms ease-out;
    cursor: pointer;


    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }

`

const UserImg = styled.img`
    height: 100%;
`

const DropDown = styled.div`

    position: absolute;
    top: 48px;
    right: 0px;
    background-color: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgba(0 0 0 / 50%) 0px 0px  18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 120px;
    opacity: 0;

`
const SignOut  = styled.div`

    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;


    ${UserImg}{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }

`