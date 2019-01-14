import React, { Component } from 'react';
import Image from './Image';
import ImageModal from './ImageModal';

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
        <table className="table">
          <tbody>
            <tr className="row">
              <td className="col-md-4" data-toggle="modal" data-target="#exampleModal">
                {               
                  <Image src="https://via.placeholder.com/500"/>
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default ImagePreviewTable;

