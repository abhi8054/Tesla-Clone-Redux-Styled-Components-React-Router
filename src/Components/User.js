import React ,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getUserDetails } from '../Redux/Actions/action';
import {useNavigate} from "react-router-dom"
import styled from 'styled-components'

function User() {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getUserDetails())
  },[])

  const userData = useSelector(
    (allState) => (allState.user)
  )

  const goBack = useNavigate(); 
  function handleBack(){
    goBack('/');
  }

  return (
    <UserWrapper>
      <UserContent>
        <h1>{userData[0].name}</h1>
        <UserImg src={userData[0].image} />
        <p><span>Account Type : -</span> {userData[0].accType}</p>
        <DescWrapper>
          <div>
            <h2>Contact No.</h2>
            <p>{userData[0].mobile}</p>
          </div>
          <div>
            <h2>Email Address</h2>
            <p>{userData[0].email}</p>
          </div>
        </DescWrapper>
        <Backbtn onClick={handleBack}>
          Go Back
        </Backbtn>
     </UserContent>
    </UserWrapper>
  )
}

export default User


const UserWrapper = styled.div`
  height:100vh;
  background-color:black;
  opacity:0.8;
  display:flex;
  justify-content:center;
  align-items:center;
  
`

const UserContent = styled.div`
  border:1px solid rgba(255,255,255,.3);
  background-color:transparent;
  width:80%;
  height:85vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:1rem;
  padding:1rem 3rem;
  border-radius:20px;
  @media (max-width:700px){
    h1{
      font-size:1.5rem;
    }
    height:100vh;

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
const UserImg = styled.img`
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
  }
  div:nth-child(1){
    border-top:none;
    border-left:none;
  }
  div:nth-child(2){
    border-top:none;
    border-right:none;
  }
  @media (max-width:700px){
    grid-template-columns: 1fr;
    div:nth-child(1),div:nth-child(2){
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
  margin:1rem;
  
`