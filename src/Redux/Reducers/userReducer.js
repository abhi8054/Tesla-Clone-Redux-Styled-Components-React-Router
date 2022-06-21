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
    default:
      return state;
    }
  }
  
  export default userReducer