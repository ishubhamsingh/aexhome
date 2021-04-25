import React, { Component } from 'react'
import ReactGallery from "react-photo-gallery";

const photos = [
    {
      src: require('../images/gallery/gallery_1.png'),
      height: 16,
      width: 9
    },
    {
      src: require('../images/gallery/gallery_2.png'),
      height: 16,
      width: 9

    },
    {
      src: require('../images/gallery/gallery_3.png'),
      height: 16,
      width: 9

    },
    {
      src: require('../images/gallery/gallery_4.png'),
      height: 16,
      width: 9
    },
    {
      src: require('../images/gallery/gallery_5.png'),
      height: 16,
      width: 9

    },
    {
      src: require('../images/gallery/gallery_6.png'),
      height: 16,
      width: 9

    },
    {
      src: require('../images/gallery/gallery_7.png'),
      height: 16,
      width: 9

    },
    {
      src: require('../images/gallery/gallery_8.png'),
      height: 16,
      width: 9

    },
    {
      src: require('../images/gallery/gallery_9.png'),
      height: 16,
      width: 9

    },
    {
      src: require('../images/gallery/gallery_10.png'),
      height: 16,
      width: 9

    },
    {
      src: require('../images/gallery/gallery_11.png'),
      height: 16,
      width: 9

    },
    {
      src: require('../images/gallery/gallery_12.png'),
      height: 16,
      width: 9

    },
    {
      src: require('../images/gallery/gallery_13.png'),
      height: 16,
      width: 9

    },
    {
      src: require('../images/gallery/gallery_14.png'),
      height: 16,
      width: 9

    },
    {
      src: require('../images/gallery/gallery_15.png'),
      height: 16,
      width: 9

    },
    {
      src: require('../images/gallery/gallery_16.png'),
      height: 16,
      width: 9
  
    },
    {
      src: require('../images/gallery/gallery_17.png'),
      height: 16,
      width: 9
  
    },
    {
      src: require('../images/gallery/gallery_18.png'),
      height: 16,
      width: 9
  
    },
    {
      src: require('../images/gallery/gallery_19.png'),
      height: 16,
      width: 9
  
    }
  ];

class Gallery extends Component {
  render() {
    return (
      <div>
      <ReactGallery photos={photos} direction={"column"} />
      </div>
    )
  }
}

export default Gallery;
