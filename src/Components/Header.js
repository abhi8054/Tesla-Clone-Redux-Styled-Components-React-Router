import React, { useState } from "react"
import styled from 'styled-components'
import {Link} from "react-router-dom"

function Header(){
const [btn,setBtn] = useState(false);
    return(
        <Container>
            <Logo src="/Images/logo.svg" />
            <LeftMenu>
                <Link to="cardetails/Model S">Model S</Link>
                <Link to="cardetails/Model 3">Model 3</Link>
                <Link to="cardetails/Model X">Model X</Link>
                <Link to="cardetails/Model Y">Model Y</Link>
                <Link to="/notbuild">Solar Roof</Link>
                <Link to="/notbuild">Solar Panels</Link>
            </LeftMenu>
            <RightMenu>
                <Link to="/notbuild">Shop</Link>
                <Link to="useraccount">Account</Link>
                <CustomMenuIcon className="fa-solid fa-bars" onClick={()=>setBtn(true)}></CustomMenuIcon>
            </RightMenu>
            <HiddenMenu status={btn}>
                <SubMenu status={btn}>
                    <Closebtn>
                        <CustomCloseIcon className="fa-solid fa-xmark" onClick={()=>setBtn(false)} ></CustomCloseIcon>
                    </Closebtn>
                    <li><Link to="useraccount">Account</Link></li>
                    <li><Link to="/notbuild">Shop</Link></li>
                    <li><Link to="/notbuild">Existing Inventory</Link></li>
                    <li><Link to="/notbuild">Used Inventory</Link></li>
                    <li><Link to="/notbuild">Semi</Link></li>
                    <li><Link to="/notbuild">Charging</Link></li>
                    <li><Link to="/notbuild">Powerwall</Link></li>
                    <li><Link to="/notbuild">Cybertruck</Link></li>
                    <li><Link to="/notbuild">Investor Relations</Link></li>
                    <li><Link to="/notbuild">Roadster</Link></li>
                    <li><Link to="/notbuild">Commercial Energy</Link></li>
                    <li><Link to="/notbuild">Test Drive</Link></li>
                    <li><Link to="/notbuild">Insurance</Link></li>
                    <li><Link to="/notbuild">Utilities</Link></li>
                    <li><Link to="/notbuild">Find Us</Link></li>
                    <li><Link to="/notbuild">Support Us</Link></li>
                </SubMenu>   
            </HiddenMenu>
        </Container>
    )
}

export default Header
const Logo = styled.img`
    color:black;
`

const Container = styled.div`
    background-color:white;
    opacity:0.8;
    position:fixed;
    padding:0 1.6rem;
    min-height:60px;
    width:100%;
    left:0;
    top:0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    z-index:5
`

const LeftMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    a{  
        text-decoration:none;
        text-transform:uppercase;
        font-weight:bold;
        padding:0.3rem 0.7rem;
    }

    a:hover{
        background-color:rgba(0,0,0,0.1);
        border-radius:20px;
    }
    @media (max-width:1190px){
        display:none;
    }
    

`
const RightMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    a{  
        text-decoration:none;
        text-transform:uppercase;
        font-weight:bold;
        padding:0.3rem 0.7rem;
    }
    a:hover{
        background-color:rgba(0,0,0,0.1);
        border-radius:20px;
    }
    @media (max-width:500px){
        a:nth-child(1),a:nth-child(2){
            display:none;
        }
    }
`
const SubMenu = styled.div`
    background-color:white;
    overflow-Y:auto;
    position:absolute;
    right:0;
    top:0;
    bottom:0;
    width:30%;
    padding:1rem;
    opacity:1;
    transform:${props => props.status ? 'translateX(0)':'translateX(100%)'};
    transition:all 0.5s;
    
    li{
        margin:0.7rem;
        list-style-type:none;
    }

    li:hover{
        border-radius:20px;
    }
    li:hover a{
        color:black;
        background-color:rgba(0,0,0,0.1);
        border-radius:20px;
    }

    li a{
        display:block;
        text-decoration:none;
        font-weight:bold;
        padding:0.2rem 0.5rem;
        width:100%;
    }
    @media (max-width:800px){
        width:40%;
    }
    @media (max-width:700px){
        width:70%;
    }
`


const HiddenMenu = styled.div`
    background-color:rgba(0,0,0,0.9);
    position:fixed;
    right:0;
    top:0;
    bottom:0;
    left:0;
    transform:${props => props.status ? 'translateX(0)':'translateX(100%)'};

`
const Closebtn = styled.div`
    display:flex;
    justify-content:flex-end;

    span{
        color:white;
        cursor:pointer;
    }
`

const CustomMenuIcon = styled.i`
    cursor:pointer;
    margin-left:0.5rem;
`
const CustomCloseIcon = styled.i`
    cursor:pointer;
    margin-right:1rem;
`