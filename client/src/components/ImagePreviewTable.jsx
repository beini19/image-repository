import React, { Component } from 'react';
import { connect } from "react-redux";
import Image from './Image';
import {
  setUserData,
  setImageData,
} from '../actions/actions'

class ImagePreviewTable extends Component {
  constructor(props) {
    super(props);
    // this.setId = this.setId.bind(this);
    this.state = {
      imageData: []
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
    console.log(this.props)
    
    return (
      <div>
        <h1> Content-Hub </h1>
        <div className="col-md-2"/>
        {/* <div className="col-md-10"> */}
          {// note: map function can only be used on lists
            this.state.imageData.map((data) => (
              <div className="col-md-2" data-toggle="modal" data-target="#exampleModal" image-id={data.id} user-id={data.user_id} 
                    onClick={() => {this.props.setUserData(data.user_id); this.props.setImageData(data.id)}}>
                {               
                  <Image
                  src={data.picture}
                  image_id={data.id}
                  user_id={data.user_id}                 
                  />
                }
              </div>
          ))}
        {/* </div> */}
        <div className="col-md-2"/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUserData: data => dispatch(setUserData(data)),
    setImageData: data => dispatch(setImageData(data))
  };
}
// export default ImagePreviewTable;
export default connect(
  null, mapDispatchToProps
)(ImagePreviewTable);


