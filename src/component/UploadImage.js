import React from 'react'
import { Button, Image } from 'semantic-ui-react'
import './UploadImage.css';

const UploadImage = (props) => {
    const uploadButtonClicked = (e) => {
        console.log("upload image button", props);
        props.uploadImageHandler("add-img");
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
