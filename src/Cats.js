import React, { useRef } from 'react';
import logo from './assets/akqa-outline-white.svg';
import { Carousel } from 'antd';

import {
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons';
export default function Cats() {
    const sliderEl = useRef({});
    const catsSliders = [1,2,3,4,5];
    const next = () => { sliderEl.current.next() };
    const prev = () => { sliderEl.current.prev() };
    return (
        <>
            <img className="titleLogo" src={logo} />
            <div className="carouselPanel">
                <LeftOutlined className="sliderArrow" onClick={prev}/>
                <Carousel ref={sliderEl} onClick={next}>
                    {catsSliders.map(i => <img src={`/assets/cat-${i}.jpg`} key={i} />)}
                </Carousel>
                <RightOutlined className="sliderArrow" onClick={next}/>
            </div>
        </>
    )
}
