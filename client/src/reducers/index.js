// Reducers specify how the application's state changes in response to actions
// It takes the previous state and action and returns the next state
// A reducer should not mutate its arguments or have any side effects

import {
    SET_USER_ID,
    SET_USER_DATA,
    SET_IMAGE_ID,
    SET_IMAGE_DATA
  } from './../actions/actions.js'

const initialState = {
    id: "3",
    data: []
}

function contentHubApp(state = initialState, action) {
    switch (action.type) {
        case SET_USER_ID:
            return Object.assign({}, state, {
                id: action.id
            })
        case SET_USER_DATA:
            return Object.assign({}, state, {
                data: action.data
            })
        case SET_IMAGE_ID:
            return Object.assign({}, state, {
                id: action.id
            })
        case SET_IMAGE_DATA:
            return Object.assign({}, state, {
                data: action.data
            })
        default:
            return state
    }
}

export default contentHubApp;