import React from 'react'
import Footer from '../footer/footer'
import BottomNav from '../bottom_navbar/bottomNav'
import Slider from '../imageSlider/Slider'
import PropertyBtn from '../propertyTypeButton/PropertyBtn'
import FilterBox from '../filterBox/FilterBox'
import './SearchPropertiesPage.css'

function SearchPropertiesPage() {
  return (
    <>
      <div className="super-super-parent-filter-box">
            <div className="filter-box-container-super-parent">
                <div className="filter-box-container-parent">
                   <div className='filter-box-container-combined'>
                      <div className="filter-box-container">
                            <FilterBox id = 'city' title = 'Select City'/>
                            <FilterBox id= 'propertytype' title = 'Property Type'/>
                           <FilterBox id = 'filter' title = 'Filters'/>
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

        {/* <div className="search-results-parent">
            <div className="search-results">
                <h4>Search Results </h4>
                <div className="filter1"><p></p></div>
                <div className="filter2"><p></p></div>
                <div className="filter3"><p></p></div>
                <div className="filter4"><p></p></div>
            </div>
        </div> */}

        <div className='btm__nav'>
            <a href="/properties"><div className='btm__nav-btn'>Show on Map</div></a>
            </div>
            </div>
        </div>
      <Slider/>
      <PropertyBtn/>
      <BottomNav/>
      <Footer/>
    </>
  )
}

export default SearchPropertiesPage
