import React, { Component } from 'react';
import Image from './Image';
import ImageModal from './ImageModal';

class ImagePreviewTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: [
    {
        picture: "https://via.placeholder.com/500",
        user_id: "4",
        image_id: "4"
    },
    {
        picture: "https://via.placeholder.com/600",
        user_id: "5",
        image_id: "5"
    }]
    };    
  }
  
  componentWillMount() {
    // fetch all content
    fetch("http://localhost:3001/content",
      { method: 'GET' }
    )
      .then(res => res.json())
      .then(data => 
        this.setState({imageData: data.data})
        )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1> Content-Hub </h1>
        <table className="table">
          <tbody>
            {// note: map function can only be used on lists
              this.state.imageData.map((data) => (
            //   <div image-id={data.id} user-id={data.user_id}>
                <tr className="row">
                  <td className="col-md-4" data-toggle="modal" data-target="#exampleModal">
                    {               
                      <Image
                      src={data.picture}
                      image_id={data.id}
                      user_id={data.user_id}
                      />
                    }
                  </td>
                </tr>
            //   </div>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}


export default ImagePreviewTable;

