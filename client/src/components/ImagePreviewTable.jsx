import React, { Component } from 'react';
import Image from './Image';
import ImageModal from './ImageModal';

class ImagePreviewTable extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};   // initial state
    this.toggleModal = this.toggleModal.bind(this);     
  }

  toggleModal() {
    console.log("toggling modal");
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      // put jsx/html syntax here
      <div>
        <h1> Content-Hub </h1>
        {/* pass state as a prop to ImageModal */}
        <ImageModal show={this.state.isOpen}>
          Modal
        </ImageModal>
        <table className="table">
          <tr className="row">
            <td className="col-md-4" onClick={this.toggleModal}>
              {
                <Image src="https://via.placeholder.com/500"/>
              }
            </td>
            <td className="col-md-4" onClick={this.toggleModal}>
              {
                <Image src="https://via.placeholder.com/500"/>
              }
            </td>
            <td className="col-md-4" onClick={this.toggleModal}>
              {
                <Image src="https://via.placeholder.com/500"/>
              }
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ImagePreviewTable;