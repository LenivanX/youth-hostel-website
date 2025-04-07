import React, { useContext } from 'react'
import { GalleryContext } from '../../contexts/GalleryContext'

function GalleryCard() {
    const { imgList } = useContext(GalleryContext);
    return (
        <div className='gallery-div'>
            {imgList.map((img) => (
                <figure className='gallery-card' key={img.id}>
                    <figcaption className='gallery-card-caption'>{img.text}</figcaption>
                    <img className='gallery-card-img' src={img.src} width={200} />
                </figure>))}
        </div>
    )
}

export default GalleryCard