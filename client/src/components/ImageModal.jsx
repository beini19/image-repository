import React, { Component } from 'react';
import Image from './Image';

class ImageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      user_id: "",
      image_id: "",
      userData: {},
      imageData: {}
    };
  }
  // runs after the component is rendered
  componentDidMount() {
    console.log("fetching data")
    fetch("http://localhost:3001/users/3",
      { method: 'GET' }
    )
      .then(res => res.json())
      .then(data => 
        this.setState({userData: data.data})
        )
      .catch(err => console.log(err));
    fetch("http://localhost:3001/content/3",
      { method: 'GET' }
    )
      .then(res => res.json())
      .then(data => 
        this.setState({imageData: data.data})
        )
      .catch(err => console.log(err));
  }

  render() {
    console.log("rendering modal")
    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog model-dialog-centered modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Image Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <Image src={this.state.imageData.picture}/>
                  </div>
                  <div className="col-md-6">
                    User Information
                    <p>{JSON.stringify(this.state.userData.data)}</p>
                    <h5>{this.state.userData.name}</h5>
                    <p>Likes: {this.state.imageData.likes}</p>
                    <p>Comments: {this.state.imageData.comments}</p>
                    <p>Tags: {JSON.stringify(this.state.imageData.tags)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

export default ImageModal;

