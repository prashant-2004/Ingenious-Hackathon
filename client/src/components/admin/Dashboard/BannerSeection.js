import React from 'react'
import pic from '../../../assets/banner/banner.webp'
import '../../../style/admin/dashboard/banner.css'
const BannerSeection = () => {
  return (
    <div className='banner-container'>
        <div className='card1'>
            <p className='head'>How it works</p>
            <div className='subhead'>
               <div className='srno'><span>1</span></div>
               <p className='subword'>Choose a Tasker by price, skills, and reviews.</p>

               <div className='srno2'><span>2</span></div>
               <p className='subword2'>Schedule a Tasker as early as today.</p>
               <div className='srno3'><span>3</span></div>
               <p className='subword3'>Chat, pay, tip, and review all in one place.</p>
               
            </div>

        </div>
        <div className='banner'>
        <img src={pic}></img>
        </div>

    </div>
  )
}

export default BannerSeection