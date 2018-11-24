import React from 'react';
import './UploadImage.css';
import { Icon } from 'semantic-ui-react';

export default function ImageFrame(props) {
    const { id, url } = props.data;
    return (
        <div className="imageFrame">
            <img
                className="uploadedImage"
                src={url}
                alt={id}
                width="100%"
                height="100%"
            >
            </img>
            <div className="imageControls">
                <Icon name="caret square left" disabled size="big" />
                <Icon name="caret square right" disabled size="big" />
                <Icon
                    className="closeIcon"
                    size="big"
                    name="window close"
                    onClick={() => props.onCloseImage(props.data.id)}
                />
            </div>
        </div>
    );
}
