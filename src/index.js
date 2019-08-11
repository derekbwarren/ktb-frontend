import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserHistory } from 'history'
import { Router } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const history = createBrowserHistory()

document.title = 'Know Thy Boss'
const { REACT_APP_BASENAME } = process.env

ReactDOM.render(<BrowserRouter history={history} basename={REACT_APP_BASENAME}><App history={history} /></BrowserRouter>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
