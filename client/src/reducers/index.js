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
    userId: "3",
    imageId: "3",
    userData: [],
    imageData: []
}

function contentHubApp(state = initialState, action) {
    switch (action.type) {
        case SET_USER_ID:
            return Object.assign({}, state, {
                userId: action.id
            })
        case SET_USER_DATA:
            return Object.assign({}, state, {
                userData: action.userData
            })
        case SET_IMAGE_ID:
            return Object.assign({}, state, {
                imageId: action.id
            })
        case SET_IMAGE_DATA:
            return Object.assign({}, state, {
                imageData: action.userData
            })
        default:
            return state
    }
}

export default contentHubApp;