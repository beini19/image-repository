import React, { Component } from 'react';

class Image extends Component {
  // onClick() {
  //     // this.setState({ selectedIndex });
  //     // open modal
  //     console.log("image clicked")
  // }

  render() {
    // console.log(this.props)
    return (
      <div>
        <img src={this.props.src} alt=""/>
      </div>
    );
  }
}
    
export default Image;