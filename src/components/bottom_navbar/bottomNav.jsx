import React from 'react'
import './bottomNav.css'

function BottomNav() {
    return (
        <div className='btm__nav'>
            <a href="/properties"><div className='btm__nav-btn'>Search Properties</div></a>
            <a href="/exploreVR"><div className='btm__nav-btn'>Explore in VR</div></a>
            <a href="/about"><div className='btm__nav-btn'>Who We Are</div></a>
            <a href="/yourproperty"><div className='btm__nav-btn'>List your Property</div></a>
        </div>
    )
}

export default BottomNav
