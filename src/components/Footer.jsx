import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 test-sm'>


            {/* ------Left section---------*/}
            <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 test-gray-600 leading-6'>A doctor appointment system is an online platform for scheduling medical consultations. It allows patients to find doctors by specialty.For healthcare providers, the system simplifies appointment management by displaying schedules, sending reminders.</p>
            </div>
            {/* ------center section---------*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us </li>
                    <li>Contact</li>
                    <li>Privacy policy</li>
                </ul>


            </div>

            {/* ------Right section---------*/}
            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>

                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-977-876-890</li>
                    <li>tarjan@gmail.com</li>
                </ul>

            </div>

        </div>

    <div>
        {/*--------Copyrighy Text-----------*/}
    </div>
    <hr />
    <p className='pt-5 text-sm text-center'> Copyright 2025@ Prescr -All Right Reserved.</p>

    </div>
  )
}

export default Footer