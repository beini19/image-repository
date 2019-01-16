import React, { Component } from 'react';
import './App.css';
import ImagePreviewTable from './components/ImagePreviewTable';
import ImageModal from './components/ImageModal';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {isOpen: false};   // initial state
  //   // this.toggleModal = this.toggleModal.bind(this);   
  // } 

  // toggleModal() {
  //   console.log("toggling modal");
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  render() {
    return (
      <div className="App">  
        <ImageModal/>
        <ImagePreviewTable />
      </div>
    );
  }
}

export default App;
