import { createStore, applyMiddleware } from 'redux'
import contentHubApp from './reducers'
import thunk from 'redux-thunk'

/* 
states:
- image data
- user data
- all iamge data
*/

const store = createStore(contentHubApp, applyMiddleware(thunk))

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Sample dispatch (changes data in the store)
// store.dispatch(setUserId("3"))

unsubscribe()

export default store