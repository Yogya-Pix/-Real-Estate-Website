import React from 'react'
import Footer from '../footer/footer'
import BottomNav from '../bottom_navbar/bottomNav'
import Slider from '../imageSlider/Slider'
import PropertyBtn from '../propertyTypeButton/PropertyBtn'
import './SearchPropertiesPage.css'
import SearchCity from '../filterBox/SearchCity'
import FilterType from '../filterBox/FilterType'
import PropertyFilter from '../filterBox/PropertyFilter'
import { ReactComponent as Search } from '../../assets/search.svg'
import { ReactComponent as Mapicon } from '../../assets/map.svg'
import { ReactComponent as Cross } from '../../assets/cross.svg'
import { ReactComponent as Filter } from '../../assets/filter.svg'

function SearchPropertiesPage() {
  return (
    <>
      <div className="parent-main-filterbox-container">
        <div className="main-filterbox-container">
          <div className="filters-container">
            <div className="filter-types">
              <SearchCity />
              <PropertyFilter />
              <FilterType />
            </div>
            <div className="filter-property-search-bar">
              <input type="text" placeholder='Search for “Residential House in Nantes, France”' />
            </div>
          </div>
          <div className="filter-search-btn-container">
            <Search />
            <p>Search</p>
          </div>
        </div>
        <div className="show-on-map-btn">
          <div className='btm__nav'>
            <div className='btm__nav-btn'>
              <Mapicon />
              Show on Map</div>
          </div>
        </div>
      </div>


      <div className="search-results-container-main">
        <div className="search-results-filters-shown">
          <h1>Search Results </h1>
          <div className="selected-filters">
            <div className="filter">Residential Property
              <Cross />
            </div>
            <div className="filter">United Kingdom
              <Cross />
            </div>
            <div className="filter">Australia
              <Cross />
            </div>
            <div className="filter">Italy
              <Cross />
            </div>
          </div>


        </div>
        <div className="filter-list-btn">
          <Filter />
          Filters</div>
      </div>


      <Slider />
      <PropertyBtn />
      <BottomNav />
      <Footer />
    </>
  )
}

export default SearchPropertiesPage
