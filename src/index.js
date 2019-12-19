import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Routers } from 'react-router-dom';
import Navbar from './components/Navbar';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ProductListReducer from './store/reducers/ProductListReducer'
import cartListReducer from './store/reducers/CartListReducer'

const allReducers = combineReducers({ProductListReducer, cartListReducer});

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <Routers>
            <Navbar />
            <App />
        </Routers>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
