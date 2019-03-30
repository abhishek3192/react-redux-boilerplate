import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import productsReducer from './reducers/product_reducers';
import userReducer from './reducers/users_reducers';
import { applMiddleware, compose, combineReducers, createStore} from 'redux';

// Combining reducers
const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

const allStoreEnhancers = compose(
    applMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Store
const store = createStore(
    allReducers,
    {
    products : [{name: 'iphone'}],
    user: 'abhishek'
    },
    
);
console.log('in store', store.getState())


ReactDOM.render(
    <Provider store={store}>
        <App randomProps = "hello"/>

    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
