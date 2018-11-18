import React from 'react';
import './UploadImage.css';
import { Icon, Image } from 'semantic-ui-react';

export default function ImageFrame(props) {
    const { id } = props.data;
    return (
        <div className="imageFrame">
            <Image className="innerImage">
            </Image>
            <div className="imageControls">
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
