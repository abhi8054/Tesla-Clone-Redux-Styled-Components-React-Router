import { GET_CAR_DETAILS } from "../Actions/type";

const initialState = [
    {
        "id": 0,
        "title": "Model S",
        "description": "Order Online for Touchless Delivery",
        "image": "/Images/model-s.jpg",
        "range": "390",
        "time": "1.99",
        "topSpeed": "200",
        "peakPower": "1,020"
    },
    {
        "id": 1,
        "title": "Model 3",
        "description": "Order Online for Touchless Delivery",
        "image": "/Images/model-3.jpg",
        "range": "400",
        "time": "2.99",
        "topSpeed": "180",
        "peakPower": "900"
    },
    {
        "id": 2,
        "title": "Model X",
        "description": "Order Online for Touchless Delivery",
        "image": "/Images/model-x.jpg",
        "range": "350",
        "time": "1.55",
        "topSpeed": "150",
        "peakPower": "1,130"
    },
    {
        "id": 3,
        "title": "Model Y",
        "description": "Order Online for Touchless Delivery",
        "image": "/Images/model-y.jpg",
        "range": "410",
        "time": "2.05",
        "topSpeed": "190",
        "peakPower": "1,040"
    }
]

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAR_DETAILS :
        return state;
  default:
    return state;
  }
}

export default carReducer
