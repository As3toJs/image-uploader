import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ImageFrame from './ImageFrame';
import UploadImage from './UploadImage';

export default class ImageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { images: [] };
    }

    imageCloseHandler = () => {
        console.log("close image frame");
        // remove from the state
    }

    renderColumn = () => {
        return this.state.images.map(image => {
            return (
                <Grid.Column>
                    <ImageFrame onCloseImage={this.imageCloseHandler} />
                </Grid.Column>
            )
        })
    }

    handleUploadImage = (img) => {
        const images = this.state.images;
        images.push(img);
        this.setState({ images: images });
        console.log(images);
        this.renderColumn();
    };

    render() {
        return (
            <div>
                <Grid doubling columns={3}>
                    {this.renderColumn()}
                    <Grid.Column>
                        <UploadImage uploadImageHandler={this.handleUploadImage} />
                    </Grid.Column>
                </Grid>
            </div >
        );
    }
};
