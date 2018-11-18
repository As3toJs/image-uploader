import React from 'react'
import { Button, Image } from 'semantic-ui-react'
import './UploadImage.css';

const UploadImage = (props) => {
    const uploadButtonClicked = (e) => {
        const randNumber = Math.floor((Math.random() * 100) + 1);
        props.uploadImageHandler({
            id: `image-id-${randNumber}`,
            ur: 'image-url'
        });
    }

    return (
        <div className="imageContainer">
            <Image size="medium" />
            <Button className="uploadButton" onClick={() => uploadButtonClicked()}>
                Upload Image
            </Button>
        </div>
    )
}

export default UploadImage;
