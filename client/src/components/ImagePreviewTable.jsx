import React, { Component } from 'react';
import Image from './Image';

class ImagePreviewTable extends Component {
    render() {
        return (
            // put jsx/html syntax here
            <div>
                <h1> asdfjkg </h1>
                
                <table className="table">
                    <tr className="row">
                        <td className="col-md-4">
                            {
                                <Image src="https://via.placeholder.com/500" />
                            }
                        </td>
                        <td className="col-md-4">
                            {
                                <Image src="https://via.placeholder.com/500" />
                            }
                        </td>
                        <td className="col-md-4">
                            {
                                <Image src="https://via.placeholder.com/500" />
                            }
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default ImagePreviewTable;