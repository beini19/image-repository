import { createStore } from 'redux'
import contentHubApp from './reducers'
import {
    setUserId,
    setUserData,
    setImageId,
    setImageData
  } from './actions/actions'
/* 
states:
- image data
- user data
- image id
- user id
*/

const store = createStore(contentHubApp)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Sample dispatch (changes data in the store)
store.dispatch(setUserId("3"))

unsubscribe()


export default store