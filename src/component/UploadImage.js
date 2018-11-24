import React from 'react'
import { Button } from 'semantic-ui-react'
import './UploadImage.css';
import { storage } from '../firebase';

const STATE_CHANGED = 'state_changed';

const UploadImage = (props) => {

    const uploadButtonClicked = (name, url) => {
        // const randNumber = Math.floor((Math.random() * 100) + 1);
        props.uploadImageHandler({ id: name, url: url });
    }

    const selectFileUploadHandler = (event) => {
        const image = event.target.files[0];
        if (image) {
            // Upload image to Firebase storage account.
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(STATE_CHANGED,
                (snapshot) => {
                    console.log(snapshot.bytesTransferred / snapshot.totalBytes);
                }, (error) => {
                    console.log(error.message);
                }, () => {
                    // get uploaded image on successfull upload
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        uploadButtonClicked(image.name, url)
                    })
                })
        }
    }

    return (
        <div className="imageContainer">
            <div className="imagePlaceholder centre">
                Upload image...
            </div>
            <input
                type="file"
                style={{ display: 'none' }}
                ref={fileInput => this.fileInput = fileInput}
                onChange={selectFileUploadHandler}>
            </input>
            <Button
                className="uploadButton"
                onClick={() => this.fileInput.click()}>
                Upload Image
            </Button>
        </div >
    )
}

export default UploadImage;
