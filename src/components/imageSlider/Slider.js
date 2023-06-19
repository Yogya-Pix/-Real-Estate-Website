import React from 'react'
import './Slider.css'
import VRimg from '../../assets/VRimg.png'
import ARimg from '../../assets/ARimg.png'
import mimg from '../../assets/Mimg.png'
import ImageSlider from './ImageSlider'

function Slider() {

    const slider = [
    {
      "src": "https://picsum.photos/seed/img1/600/400",
      "alt": "Image 1 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img2/600/400",
      "alt": "Image 2 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img3/600/400",
      "alt": "Image 3 for carousel"
    }
  ];

  return (
    <>
    <div className="super-parent-slider">
      <div className="parent-slider">
        <div className="slider-content">
        <div className="slider-image">
            <div className='slider-image-bgimg'>
            <ImageSlider data={slider} />
            </div>
            <div className='slider-image-vrimages'>
                <div className="vrimages">
                    <h4>VR</h4>
                    <img src={VRimg} alt="" />
                </div>
                <div className="vrimages">
                    <h4>AR</h4>
                    <img src={ARimg} alt="" />
                </div>
                <div className="vrimages">
                    <h4>M</h4>
                    <img src={mimg} alt="" />
                </div>
            </div>
        </div>
        <div className="slider-content-information"><p>information goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis, expedita tempore doloribus asperiores illo minima hic. Veritatis, deleniti? Dolorem delectus et expedita tenetur vel nemo sit quisquam quasi quidem.
        A cumque quam optio error tempore fugiat pariatur, explicabo itaque incidunt illo ad. Tenetur magnam ipsum exercitationem tempore quo minima illo voluptatum a aspernatur, ut odio officia, minus</p>  </div>
        </div>
      </div>
      <div className="parent-slider">
        <div className="slider-content">
        <div className="slider-image">
            <div className='slider-image-bgimg'>
            <ImageSlider data={slider} />
            </div>
            <div className='slider-image-vrimages'>
                <div className="vrimages">
                    <h4>VR</h4>
                    <img src={VRimg} alt="" />
                </div>
                <div className="vrimages">
                    <h4>AR</h4>
                    <img src={ARimg} alt="" />
                </div>
                <div className="vrimages">
                    <h4>M</h4>
                    <img src={mimg} alt="" />
                </div>
            </div>
        </div>
        <div className="slider-content-information"><p>information goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis, expedita tempore doloribus asperiores illo minima hic. Veritatis, deleniti? Dolorem delectus et expedita tenetur vel nemo sit quisquam quasi quidem.
        A cumque quam optio error tempore fugiat pariatur, explicabo itaque incidunt illo ad. Tenetur magnam ipsum exercitationem tempore quo minima illo voluptatum a aspernatur, ut odio officia, minus</p>  </div>
        </div>
      </div>
      <div className="parent-slider">
        <div className="slider-content">
        <div className="slider-image">
            <div className='slider-image-bgimg'>
            <ImageSlider data={slider} />
            </div>
            <div className='slider-image-vrimages'>
                <div className="vrimages">
                    <h4>VR</h4>
                    <img src={VRimg} alt="" />
                </div>
                <div className="vrimages">
                    <h4>AR</h4>
                    <img src={ARimg} alt="" />
                </div>
                <div className="vrimages">
                    <h4>M</h4>
                    <img src={mimg} alt="" />
                </div>
            </div>
        </div>
        <div className="slider-content-information"><p>information goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis, expedita tempore doloribus asperiores illo minima hic. Veritatis, deleniti? Dolorem delectus et expedita tenetur vel nemo sit quisquam quasi quidem.
        A cumque quam optio error tempore fugiat pariatur, explicabo itaque incidunt illo ad. Tenetur magnam ipsum exercitationem tempore quo minima illo voluptatum a aspernatur, ut odio officia, minus</p>  </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Slider

