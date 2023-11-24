import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    
    <div className='bg-[#f9f9fc] w-full fixed top-0 left-0 opacity-80 text-sm text-[13px]'>
        <div className='container flex justify-center items-center py-2 gap-8 mx-auto'>
            <FontAwesomeIcon icon={faApple} style={{color: "#000000"}} className="w-[13px]" />
            <p>ร้าน</p>
            <p>Mac</p>
            <p>iPad</p>
            <p>iPhone</p>
            <p>Watch</p>
            <p>AirPods</p>
            <p>TV และบ้าน</p>
            <p>ความบันเทิง</p>
            <p>อุปกรณ์เสริม</p>
            <p>บริการช่วยเหลือ</p>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000"}} className="w-[13px]" />
            <FontAwesomeIcon icon={faBagShopping} style={{color: "#000000"}} className="w-[13px]" />
        </div>
    </div>
  )
}

export default Navbar