import React, { useContext } from 'react'
import { GalleryContext } from '../../contexts/GalleryContext'

function GalleryCard() {
    const { imgList } = useContext(GalleryContext);
    return imgList.map((img) => (
        <figure key={img.id}>
            <figcaption>{img.text}</figcaption>
            <img src={img.src} width={200} />
        </figure>
    ));
}

export default GalleryCard