import React from 'react'
import aboutImg from '../assets/About.png'
import { FaUserMd } from 'react-icons/fa'

const About = () => {
    return (
        <section id="about" className='py-20 scroll-mt-20 bg-sky-50'>
            <div className='container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12'>
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <img src={aboutImg} alt="JUIT Infirmary" className='w-80 lg:w-[420px] rounded-full shadow-md' />
                </div>
                <div className='w-full lg:w-1/2 space-y-6 text-center lg:text-left'>

                    <div className='flex items-center justify-center lg:justify-start space-x-2'>
                        <FaUserMd className='text-sky-600 w-7 h-7' />
                        <h2 className='text-3xl font-bold text-sky-900'>About JUIT Infirmary</h2>
                    </div>
                    <p className='text-gray-700 text-lg leading-relaxed'>
                        The JUIT Infirmary serves as a dedicated healthcare facility for our students, faculty, 
                        and staff. Designed as a mini-hospital within the campus, it ensures that quality 
                        medical support is always available when needed.
                    </p>
                    <p className='text-gray-700 text-lg leading-relaxed'>
                        Equipped with modern medical facilities and staffed by qualified healthcare 
                        professionals, the infirmary provides regular checkups, emergency care, and 
                        first-aid services. At JUIT, we prioritize the health and well-being of our 
                        students so they can focus on their academic and personal growth with confidence.
                    </p>

                </div>
            </div>

        </section>
    )
}

export default About
