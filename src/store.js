import { createStore, combineReducers } from 'redux'
import homepage from './containers/homepage/reducers'


const reducers = combineReducers({ homepage });

export default createStore(reducers);