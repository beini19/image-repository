import React, { Component } from 'react';
import Image from './Image';

class ImageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      userData: "no data to display"
    };
  }

  // runs after the component is rendered
  componentDidMount() {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("returning data")
          this.setState({
            isLoaded: true,
            userData: "asfklj"
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    console.log("rendering modal")
    console.log(this.props.userData)
    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog model-dialog-centered modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <Image src="https://via.placeholder.com/500"/>
                  </div>
                  <div className="col-md-6">
                    User Information
                    {this.props.userData}
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

