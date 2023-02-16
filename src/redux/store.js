import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { listReducer } from './reducers/ListReducer';

const reducer = combineReducers({
    todoItems: listReducer,
});

const middleware = [thunk];

const todoItemFromStorage = localStorage.getItem('listItems') ? JSON.parse(localStorage.getItem('listItems')) : [];

const initialState = {
    todoItems: { todoList: todoItemFromStorage },
};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
