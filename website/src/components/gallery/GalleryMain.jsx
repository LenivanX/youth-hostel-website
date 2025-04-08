import React, { useState } from 'react'
import { GalleryProvider } from '../../contexts/GalleryContext'
import GalleryCard from './GalleryCard'
import Location1 from '../../assets/gallery/location1.jpg'
import Location2 from '../../assets/gallery/location2.jpg'
import Location3 from '../../assets/gallery/location3.jpg'
import Location4 from '../../assets/gallery/location4.jpg'
import Location5 from '../../assets/gallery/location5.jpg'
import Location6 from '../../assets/gallery/location6.jpg'

function GalleryMain() {
    const [imgList, setImgList] = useState([
        { id: 1, text: 'Location 1', src: Location1 },
        { id: 2, text: 'Location 2', src: Location2 },
        { id: 3, text: 'Location 3', src: Location3 },
        { id: 4, text: 'Location 4', src: Location4 },
        { id: 5, text: 'Location 5', src: Location5 },
        { id: 6, text: 'Location 6', src: Location6 },
    ]);
    return (
        <GalleryProvider value={{ imgList }}>
            <GalleryCard />
        </GalleryProvider>
    )
}

export default GalleryMain