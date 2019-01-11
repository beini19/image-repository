import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ImagePreviewTable from './components/ImagePreviewTable';
import ImageModal from './components/ImageModal';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};   // initial state
    this.toggleModal = this.toggleModal.bind(this);   
  } 
  // callback = (onClick) => {
  //   if(onClick) {
  //     console.log("on click")
  //     this.toggleModal()
  //   }
  // }

  toggleModal() {
    console.log("toggling modal");
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
  
        {/* <ImageModal onClick={() => this.toggleModal()}>
          {
            // Modal 
            
          }
        </ImageModal> */}
        <ImagePreviewTable />
        <Modal show={true}>
        <p> dsfdsafadsfadsfadsfadsfdsfdsfadsfadsfadsfadsfadsfdfsf  </p>
      </Modal>
      </div>
    );
  }
}

export default App;
