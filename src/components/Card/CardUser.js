import React from 'react'
import Image from 'next/image'

const CardUser = (props) => {
  return (
    <div>
        {/* <p>Name : {props.name}</p>

        <p>Email : {props.email}</p>
         */}
            <div className='w-[450px] h-[200px] bg-white rounded-md flex text-black font-bold text-xs mt-4'>
                <Image
                src='https://www.computerhope.com/jargon/g/guest-user.png'
                width={150}
                height={150}
                alt='Picture'
                className='py-5 mx-[50px]'
                />
                <div className='mt-[75px]'>
                <div>ชื่อผู้ใช้ : {props.name}</div>
                <div>Age : {props.age}</div>
                <div>Email : {props.email}</div>
                <div>Address : {props.address}</div>
                </div>
            </div>
           
    </div>
  )
}

export default CardUser