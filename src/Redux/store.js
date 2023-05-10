import {createStore} from "redux"
import rootRed from './Reducers/rootReducer';

const store = createStore(
    rootRed,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;