import { CalendarCheck } from 'lucide-react'
import React from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <section id="home" className='scroll-m-20 bg-sky-50 py-16'>
      <div className='container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
        <div className='max-w-xl text-center lg:text-left space-y-6'>
          <h1 className='text-xl sm:text-4xl lg:text-5xl font-bold text-sky-900 leading-tight'>
            Caring for Your Health <br /> at JUIT Infirmary
          </h1>
          <p className='text-gray-700 text-sm lg:text-lg'>
            The JUIT Infirmary is dedicated to ensuring the health and wellbeing 
            of all students and staff. From routine checkups to emergency care, 
            we provide reliable medical support right on campus.
          </p>
          <a
            href="#book"
            className='inline-flex items-center bg-sky-600 text-white px-3 py-1 sm:px-6 sm:py-3 rounded-xl hover:bg-sky-700 transition text-base font-medium'>
            <CalendarCheck className='w-5 h-5 mr-2' />
            Book Appointment
          </a>
        </div>
        <div className='flex justify-center'>
          <img src={hero} alt='JUIT Infirmary' className='w-80 lg:w-[429px] rounded-2xl shadow-lg' />
        </div>
      </div>
    </section>
  )
}

export default Hero
