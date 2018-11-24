import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ImageFrame from './ImageFrame';
import UploadImage from './UploadImage';

export default class ImageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { images: [] };
    }

    imageCloseHandler = (id) => {
        let images = this.state.images;
        const remainingImages = images.filter(image => image.id !== id);
        this.setState({ images: remainingImages });
    }

    renderColumn = () => {
        return this.state.images.map(image => {
            return (
                <Grid.Column key={image.id}>
                    <ImageFrame
                        data={image}
                        onCloseImage={this.imageCloseHandler}
                    />
                </Grid.Column>
            )
        })
    }

    handleUploadImage = (imageObject) => {
        const images = this.state.images;
        images.push(imageObject);
        this.setState({ images });
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
