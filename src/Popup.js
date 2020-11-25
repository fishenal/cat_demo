import React, { useState, useEffect } from 'react'
import { Modal } from 'antd';

const visitedTag = 'catVisited';
export default function Popup() {
    const [ isShow, setIsShow ] = useState(false);

    useEffect(() => {
        const visited = sessionStorage.getItem(visitedTag);
        if (visited === null) {
            sessionStorage.setItem(visitedTag, true);
            setIsShow(true);
        }
    }, []);

    if (!isShow) {
        return null;
    }
    return (
        <Modal 
            footer={null}
            title={null}
            visible={isShow}
            onCancel={() => { setIsShow(false) }}
            style={{ width: '90vw', height: '90vh' }}
        >
            <h1>Welcome!</h1>
            <video src="/assets/cat-video.mp4" controls/>
        </Modal>
            
    )
}
