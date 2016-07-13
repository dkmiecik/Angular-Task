import immutable from 'immutable'
import { combineReducers } from 'redux'
import * as constants from '../constants/actions'

const initialState = immutable.Map()

export default function repo (state = initialState, action) {
    switch (action.type) {
    case constants.SET_REPO_STATE:
        console.info('Store has been updated!')
        return state.set('status', action.state)
    default:
        return state
    }
}

const rootReducer = combineReducers({
    repo
})

export default rootReducer
