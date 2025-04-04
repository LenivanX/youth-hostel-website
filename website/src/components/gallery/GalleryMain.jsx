import React, { useState } from 'react'
import { GalleryProvider } from '../../contexts/GalleryContext'
import GalleryCard from './GalleryCard'
import Location1 from '../../assets/gallery/location1.jpg'
import Location2 from '../../assets/gallery/location2.jpg'
import Location3 from '../../assets/gallery/location3.jpg'

function GalleryMain() {
    const [imgList, setImgList] = useState([
        { id: 1, text: 'Location 1', src: Location1 },
        { id: 2, text: 'Location 2', src: Location2 },
        { id: 3, text: 'Location 3', src: Location3 },
    ]);
    return (
        <GalleryProvider value={{ imgList }}>
            <GalleryCard />
        </GalleryProvider>
    )
}

export default GalleryMain