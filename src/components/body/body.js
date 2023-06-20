import React from 'react'
import './body.css';
import Footer from '../footer/footer';
import BottomNav from '../bottom_navbar/bottomNav';
import FlexboxSlider from '../flexboxSlider/flexboxSlider';
import mglass1 from '../../assets/mglass1.png'
import VRbox1 from '../../assets/VRbox1.png'
import userlike from '../../assets/userlike.png'
import PropertyBtn from '../propertyTypeButton/PropertyBtn';
import FilterBox from '../filterBox/FilterBox';

function Body() {
    return (
        <>
        <div className="super-super-parent-filter-box">
            <div className="filter-box-container-super-parent">
                <div className="filter-box-container-parent">
                   <div className='filter-box-container-combined'>
                      <div className="filter-box-container">
                            <FilterBox title = 'Select City'/>
                            <FilterBox title = 'Property Type'/>
                           <FilterBox title = 'Filters'/>
                     </div>
                   <div className="filter-box-container-searchbar">
                         <input type="text"  placeholder='Search for “Residential House in Nantes, France”'/>
                     </div>
                 </div>
                    <div className='filter-box-search-btn'>
                     <p>Search</p>
                    </div>
                </div>
      
        </div>
        <div className="show-on-map-btn">
        <div className='btm__nav'>
            <a href="/properties"><div className='btm__nav-btn'>Show on Map</div></a>
            </div>
            </div>
        </div>
            
            <PropertyBtn />

            <div className='features_parent-div'>
                <div className='features-div'>
                    <div className='features-child-div'>
                        <h1>01</h1>
                        <div className="features-details">
                            <h4>Find What You are Looking for</h4>
                            <p>Discover your dream home or ideal commercial space worldwide. Our user-friendly search feature lets you effortlessly browse properties by city and type. Simply select your desired location and property category, and find your next real estate gem with ease.</p>
                            <a href="/property">
                                <div className="features-details-search-btn"><p>Search properties</p></div>
                            </a>
                        </div>
                        <div className="features-image">
                            <img src={mglass1} alt="" />
                        </div>
                    </div>
                </div>
                <div className='features-div'>
                    <div className="features-child-div">
                        <h1>02</h1>

                        <div className="features-image">
                            <img src={VRbox1} alt="" />
                        </div>
                        <div className="features-details">
                            <h4>The VR Experience of Buying!</h4>
                            <p>Enter a new era of property buying. Experience augmented reality, virtual reality, and Matterport tours to explore properties like never before, regardless of your location. Engage with international real estate through immersive virtual tours.</p>
                            <a href="/VR">
                                <div className="features-details-AR-btn"><p>Explore in VR</p></div>
                            </a>
                        </div>
                    </div>

                </div>
                <div className='features-div'>
                    <div className="features-child-div">
                        <h1>03</h1>
                        <div className="features-details">
                            <h4>Browsing Convenience</h4>
                            <p>Save properties for future browsing convenience. Join us now and gain the ability to bookmark your favorite properties!</p>

                            <div className="features-details-input-signup">
                                <input type="text" placeholder='Enter Your E-mail ID Here' />
                                <a href="/signup"><div className='features-details-input-signup-btn'>Sign Up</div></a>
                            </div>

                        </div>
                        <div className="features-image">
                            <img src={userlike} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <FlexboxSlider />
            <div className='horizontal-break'>
                <div className='horizontal-break-div'></div>
            </div>
            <BottomNav />
            <Footer />
        </>
    )
}

export default Body
