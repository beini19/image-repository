import React, { Component } from 'react';
import Image from './Image';
import ImageModal from './ImageModal';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

class ImagePreviewTable extends Component {
  constructor(props) {
    super(props);
    // this.state = {isOpen: false};   // initial state
    // this.toggleModal = this.toggleModal.bind(this);     
  }

  render() {
    return (
      <div>
        <h1> Content-Hub </h1>
        {/* pass state as a prop to ImageModal */}
        {/* <ImageModal show={this.state.isOpen}>
                Modal
        </ImageModal> */}
        
        <table className="table">
          <tbody>
            <tr className="row">
              <td className="col-md-4" onClick={this.props.onClick}>
                {               
                  <Image src="https://via.placeholder.com/500"/>
                }
              </td>
              {/* <td className="col-md-4" onClick={this.toggleModal}>
                {
                  <Image src="https://via.placeholder.com/500"/>
                }
              </td>
              <td className="col-md-4" onClick={this.toggleModal}>
                {
                  <Image src="https://via.placeholder.com/500"/>
                }
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>

    );
  }
}


export default ImagePreviewTable;

