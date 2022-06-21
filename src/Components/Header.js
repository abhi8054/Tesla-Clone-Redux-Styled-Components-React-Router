import React, { useState } from "react"
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom"

function Header(){
const [btn,setBtn] = useState(false);
    return(
        <Container>
            <Logo src="/Images/logo.svg" />
            <LeftMenu>
                <Link to="/model-s/Model S">Model S</Link>
                <Link to="model-3/Model 3">Model 3</Link>
                <Link to="model-x/Model X">Model X</Link>
                <Link to="model-y/Model Y">Model Y</Link>
                <Link to="model-y/Model Y">Solar Roof</Link>
                <Link to="model-y/Model Y">Solar Panels</Link>
            </LeftMenu>
            <RightMenu>
                <a href="#">Shop</a>
                <Link to="useraccount">Account</Link>
                <CustomMenuIcon onClick={()=>setBtn(true)} />
            </RightMenu>
            <HiddenMenu status={btn}>
                <SubMenu status={btn}>
                    <Closebtn>
                        <CustomCloseIcon onClick={()=>setBtn(false)} />
                    </Closebtn>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Semi</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Powerwall</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">Test Drive</a></li>
                    <li><a href="#">Insurance</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">Find Us</a></li>
                    <li><a href="#">Support Us</a></li>
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
        padding:0.5rem 0.7rem;
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
        padding:0.5rem 0.7rem;
    }
    a:hover{
        background-color:rgba(0,0,0,0.1);
        border-radius:20px;
    }
`
const SubMenu = styled.div`
    background-color:white;
    position:absolute;
    right:0;
    top:0;
    bottom:0;
    width:20%;
    padding:1rem;
    opacity:1;
    transform:${props => props.status?'translateX(0)':'translateX(100%)'};
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
        padding:0.4rem 0.5rem;
        width:100%;
    }
    @media (max-width:800px){
        width:50%;
    }
`


const HiddenMenu = styled.div`
    background-color:rgba(0,0,0,0.9);
    position:fixed;
    right:0;
    top:0;
    bottom:0;
    left:0;
    transform:${props => props.status?'translateX(0)':'translateX(100%)'};

`
const Closebtn = styled.div`
    display:flex;
    justify-content:flex-end;

    span{
        color:white;
        cursor:pointer;
    }
`

const CustomMenuIcon = styled(MenuIcon)`
    cursor:pointer;
    margin-left:0.5rem;
`
const CustomCloseIcon = styled(CloseIcon)`
    cursor:pointer;
`