// actions are used to send data to the store using dispatch
// actionCreators are functions that create and return actions
import store from '../store'
// Define action types

export const SET_USER_ID = 'SET_USER_ID';
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_IMAGE_ID = 'SET_IMAGE_ID';
export const SET_IMAGE_DATA = 'SET_IMAGE_DATA';
// export const SET_USER_ID = id => ({
//     type: 'SET_USER_ID',
//     id
// })

// export const SET_USER_DATA = data => ({
//     type: 'SET_USER_DATA',
//     data
// })

// export const SET_IMAGE_ID = id => ({
//     type: 'SET_IMAGE_ID',
//     id
// })

// export const SET_IMAGE_DATA = data => ({
//     type: 'SET_IMAGE_DATA',
//     data
// })

const URL = "http://localhost:3001/";
// Action creators
export const setUserId = (userId) => dispatch => {
    fetch(URL + userId)
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: SET_USER_ID,
            payload: data
        })}
    );
}

export const setUserData = (userId) => dispatch =>  {
    console.log("fetching data for userid=" + userId)
    fetch(URL + "users/" + userId, {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => dispatch({
            type: SET_USER_DATA,
            payload: data
        })
    );
    
}

export function setImageId(id) {
    return { type: 'SET_IMAGE_ID', id }
}

export const setImageData = (imageId) => dispatch => {
    console.log("fetching data for imageId=" + imageId)
    fetch(URL + "content/" + imageId, {
        method: "GET"
    })
    .then(res => res.json())
    .then(data =>
        dispatch({
            type: SET_IMAGE_DATA,
            imageData: data
        })
    );
}

