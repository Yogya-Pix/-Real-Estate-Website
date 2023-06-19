import React, { useState } from 'react'
import './filterSearchBox.css';

function FilterSearchBox() {

    const [isActive, setIsActive] = useState(false);

    return (

        <>


            {/* filter-search-box-parent = wrapper */}
            <div className="filter-search-box-parent">
                <div className="select-btn" onClick={e => setIsActive(!isActive)}>
                    <span>Select City</span>
                </div>

                {isActive && (

                    <div className="filter-search-box-content">
                        <div className="filter-search-box-content-search">
                            <input type="text" placeholder='Search' />
                        </div>
                        <ul className='filter-search-box-content-search-options'>
                            <li>india</li>
                            <li>india</li>
                            <li>india</li>
                            <li>india</li>
                            <li>india</li>
                            <li>india</li>
                            <li>india</li>
                            <li>india</li>
                            <li>india</li>
                            <li>india</li>
                            <li>india</li>
                            <li>india</li>
                            <li>india</li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default FilterSearchBox
