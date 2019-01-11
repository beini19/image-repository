import React, { Component } from 'react';
import Image from './Image';
// import ImageModal from './ImageModal';

class ImagePreviewTable extends Component {
  constructor(props) {
    super(props);
    // this.onClick = this.onClick.bind(this);     
  }

  render() {
    return (
      // put jsx/html syntax here
      <div>
        <h1> asdfjkg </h1>
        <table className="table">
          <tr className="row">
            <td className="col-md-4">
              {
                  <Image src="https://via.placeholder.com/500" onClick={this.toggleModal}/>
              }
            </td>
            <td className="col-md-4">
              {
                  <Image src="https://via.placeholder.com/500" onClick={this.toggleModal}/>
              }
            </td>
            <td className="col-md-4">
              {
                  <Image src="https://via.placeholder.com/500" onClick={this.toggleModal}/>
              }
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ImagePreviewTable;