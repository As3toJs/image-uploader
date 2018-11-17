import React from 'react';
import './UploadImage.css';
import { Icon } from 'semantic-ui-react';

export default function ImageFrame(props) {
    return (
        <div className="imageFrame">
            <p>Image will be here!!</p>
            <Icon name="window close" onClick={props.onCloseImage} />
        </div>
    );
}
