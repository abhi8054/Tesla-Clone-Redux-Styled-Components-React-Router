import { GET_USER_DETAILS } from "../Actions/type";

const initialState =[
    {
      "id":0,
      "name":"Abhishek Poddar",
      "image":"/Images/user-avtar.jpg",
      "accType" : "Premium",
      "email" : "abhishek@gmail.com",
      "mobile" : "6239107957",
    }
  ]


const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_DETAILS:
        return state;
    default:
      return state;
    }
  }
  
  export default userReducer