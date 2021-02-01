import React from 'react'
import ReactDOM from 'react-dom'
import {reducers} from "./reducers"
import App from "./App"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {createStore,applyMiddleware,compose} from "redux"
import "./index.css";
const store=createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')
);
