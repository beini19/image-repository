import React, { Component } from 'react';

class Image extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        // this.setState({ selectedIndex });
        // open modal
        console.log("image clicked")
    }

    render() {

        return (
            <div>
                <img src={this.props.src} alt="" onClick={this.handleClick}/>
            </div>
        );
    }
}
    
export default Image;