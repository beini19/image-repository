// actions are used to send data to the store using dispatch
// actionCreators are functions that create and return actions

// Define action types
export const SET_USER_ID = id => ({
    type: 'SET_USER_ID',
    id
})

export const SET_USER_DATA = data => ({
    type: 'SET_USER_DATA',
    data
})

export const SET_IMAGE_ID = id => ({
    type: 'SET_IMAGE_ID',
    id
})

export const SET_IMAGE_DATA = data => ({
    type: 'SET_IMAGE_DATA',
    data
})

// Action creators
export function setUserId(id) {
    return { type: 'SET_USER_ID', id }
}

export function setUserData(data) {
    return { type: 'SET_USER_DATA', data }
}

export function setImageId(id) {
    return { type: 'SET_IMAGE_ID', id }
}

export function setImageData(data) {
    return { type: 'SET_IMAGE_DATA', data }
}

