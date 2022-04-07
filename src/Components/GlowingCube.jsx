import React from 'react'
import '../Style/GlowingCube.scss'

function GlowingCube() {
  return (
      <>
    <div className='cube'>
        <div className="top"></div>
        <div className="top"></div>
        <div>
        <span style={{'--c':0}}></span>
        <span style={{'--c':1}}></span>
        <span style={{'--c':2}}></span>
        <span style={{'--c':3}}></span>
        <span style={{'--c':4}}></span>
        <span style={{'--c':5}}></span>
        <span style={{'--c':6}}></span>
        <span style={{'--c':7}}></span>
        </div>
    </div>
   
    </>
  )
}

export default GlowingCube;