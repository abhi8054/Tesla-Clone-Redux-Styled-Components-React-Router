import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import {getCarDetails} from "../Redux/Actions/action"
import {useParams,useNavigate} from "react-router-dom"
import styled from 'styled-components'

function CarDetails() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCarDetails())
  },[])

  const {carname} = useParams();
  var data = useSelector((allState) => (allState.car));
  // console.log(data.car)

  const goBack = useNavigate(); 
  function handleBack(){
    goBack('/');
  }

  data = data.filter((item) =>{
    return item.title == carname;
  })

  return (
    <Wrapper>
      <CarContent>
        <h1>{data[0].title}</h1>
        <CarImg src={data[0].image} />
        <p><span>Description : -</span> {data[0].description}y</p>
        <DescWrapper>
          <div>
            <h2><span>{data[0].range}</span> mi</h2>
            <p>Range (EPA est.)</p>
          </div>
          <div>
            <h2><span>{data[0].time}</span> s</h2>
            <p>Time 0-60 mph*</p>
          </div>
          <div>
            <h2><span>{data[0].topSpeed}</span> mph</h2>
            <p>Top Speed*</p>
          </div>
          <div>
            <h2><span>{data[0].peakPower}</span> hp</h2>
            <p>Peak Power</p>
          </div>
        </DescWrapper>
        <Backbtn onClick={handleBack}>
          Go Back
        </Backbtn>
     </CarContent>
    </Wrapper>
  )
}

export default CarDetails


const Wrapper = styled.div`
  height:100vh;
  background-color:black;
  opacity:0.8;
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width:600px){
    height:100%;
  }
`

const CarContent = styled.div`
  border:1px solid rgba(255,255,255,.3);
  background-color:transparent;
  width:80%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:1rem;
  padding:1rem 3rem;
  border-radius:20px;
  @media (max-width:600px){
   height:100%;
   > p{
    font-size:1rem;
  }
  }
  p,h1{
    color:white;
  }

  p span{
    font-size:1.2rem;
    color:white;
  }
  @media screen and (max-width:500px){
    padding:1rem 2rem;
    > p{
        font-size:0.9rem;
        text-align:center;
      span{
        font-size:0.9rem;
      }
    }

  }
`
const CarImg = styled.img`
  width:250px;
  height:180px;
  border-radius:50%;

`
const DescWrapper = styled.div`
  width:100%;
  display:grid;
  grid-template-columns: 1fr 1fr;
  div{
    border:1px solid rgba(255,255,255,.3);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:1rem;
    gap:0.5rem;

    h2,p{
      color:white;
    }

    h2 span{
      color:white;
      font-size:2rem;
    }
  }
  div:nth-child(1){
    border-top:none;
    border-left:none;
  }
  div:nth-child(2){
    border-top:none;
    border-right:none;
  }
  div:nth-child(3){
    border-bottom:none;
    border-left:none;
  }
  div:nth-child(4){
    border-bottom:none;
    border-right:none;
  }

  @media (max-width:600px){
    grid-template-columns: 1fr;
    div:nth-child(1),div:nth-child(2),div:nth-child(3),div:nth-child(4){
      border-top:none;
      border-left: none;
      border-bottom: 1px solid white;
      border-right: none;
    }
    
  }
`
const Backbtn = styled.div`
  cursor:pointer;
  color:white;
  animation-name:animateimg;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  
`