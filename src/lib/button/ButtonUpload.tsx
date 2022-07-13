import React from 'react'
import { Button, message, Upload, UploadProps } from 'antd';

const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

function ButtonUpload() {

    return (
        <Upload {...props}>
            <Button icon={<i className="fa-solid fa-upload"></i>}>Click to Upload</Button>
        </Upload>
    )
}

export default ButtonUpload