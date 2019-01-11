import React, { Component } from 'react';
import ImageModal from './ImageModal';

class Image extends Component {
    constructor(props) {
        super(props);
        // this.onClick = this.onClick.bind(this);
        this.state = { isOpen: false };
    }

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    // onClick() {
    //     // this.setState({ selectedIndex });
    //     // open modal
    //     console.log("image clicked")
    // }

    render() {
        return (
            <div>
                <img src={this.props.src} alt="" onClick={this.toggleModal}/>
                <ImageModal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    Modal
                </ImageModal>
            </div>
        );
    }
}
    
export default Image;