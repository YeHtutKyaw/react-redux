import { combineReducers } from 'redux'
// reducers
import app from './app'
import user from './user'

export default combineReducers({
    app,
    user
})
