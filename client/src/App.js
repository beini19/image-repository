import React, { Component } from 'react';
import './App.css';
import ImagePreviewTable from './components/ImagePreviewTable';
import ImageModal from './components/ImageModal';
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {isOpen: false};   // initial state
    // this.toggleModal = this.toggleModal.bind(this);   
  } 
  // callback = (onClick) => {
  //   if(onClick) {
  //     console.log("on click")
  //     this.toggleModal()
  //   }
  // }

  // toggleModal() {
  //   console.log("toggling modal");
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  render() {
    return (
      <Provider store={store}>
        <div className="App">  
          <ImageModal user_id="" image_id=""/>
          <ImagePreviewTable />
        </div>
      </Provider>
    );
  }
}

export default App;
