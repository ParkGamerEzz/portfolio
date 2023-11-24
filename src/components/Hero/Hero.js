"use client";
import React , { useState } from 'react'

const Hero = () => {
    const [value , setValue] = useState(0)

    const addValue =()=> {
        setValue(value + 1)
    }

    const removeValue =()=>{
        setValue(value - 1)
    }
    
    return (
        <div className='mt-10'>
            <button className=' bg-red-300' onClick={addValue}>ADD VALUE</button>
            
            <button className=' bg-red-300 mx-5' onClick={removeValue}>Remove VALUE</button>
            <p>{value}</p>
        </div>
    )
}

export default Hero