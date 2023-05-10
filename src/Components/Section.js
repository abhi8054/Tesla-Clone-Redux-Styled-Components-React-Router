import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { useNavigate } from 'react-router-dom'

function Section(props) {

    const navigate = useNavigate();

    const handelCar = (carname)=>{
        navigate("/cardetails/"+carname)
    }

  return (
    <Wrap bgImg={props.backimg}>
        <Fade bottom>
            <SectionText>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </SectionText>
        </Fade>
        <SectionCont>
            <Fade bottom>
                <ButtonGroups>
                    <ButtonLeft onClick={()=>{
                        handelCar(props.title)
                    }}>
                        {props.leftbtn}
                    </ButtonLeft>
                    {props.rightbtn &&
                        <ButtonRight>
                            {props.rightbtn}
                        </ButtonRight>
                    }
                </ButtonGroups>
            </Fade>
            <DownArrow src="/Images/down-arrow.svg"/>
        </SectionCont>  
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-image:${props => `url("/Images/${props.bgImg}")`};
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`
const SectionText = styled.div`
    padding-top:7rem;
    width:100%;
    text-align:center;
    font-weight:bold;
`

const ButtonGroups = styled.div`
    display:flex;
    @media (max-width:800px){
        flex-direction:column;
    }
`

const ButtonLeft = styled.div`
    background-color:black;
    color:white;
    padding:0.7rem 4rem;
    opacity:0.75;
    text-transform:uppercase;
    margin:8px;
    text-align:center;
    border-radius:20px;
    cursor:pointer;
    font-size:0.8rem;
    font-weight:bold;
`

const ButtonRight = styled(ButtonLeft)`
    background-color:white;
    color:black;
    opacity:0.65
`

const DownArrow = styled.img`
    margin-bottom:1rem;
    margin-top:1rem;
    height:40px;
    animation-name:animateimg;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
`

const SectionCont = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    
`