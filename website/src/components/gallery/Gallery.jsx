// import React, { useState } from 'react'
// import Location1 from '../../assets/gallery/location1.jpg'
// import Location2 from '../../assets/gallery/location2.jpg'
// import Location3 from '../../assets/gallery/location3.jpg'

// function GalleryCard({ imgLabel = 'Blank label', img }) {
//     return (
//         <div>
//             <label>{imgLabel}</label>
//             <img src={img} width={200} />
//         </div>
//     )
// }
// export default function Gallery() {
//     const [image, setImage] = useState([
//         { text: 'Location 1', src: Location1 },
//         { text: 'Location 2', src: Location2 },
//         { text: 'Location 3', src: Location3 },
//     ]);
//     let elements = [];
//     for (let i = 0; i < image.length; i++) {
//         elements.push(<GalleryCard imgLabel={image[i].text} img={image[i].src} />)
//     }
//     return <>{elements}</>
// }