import React, { useState } from 'react'
import student1 from '../assets/s1.png'
import student2 from '../assets/s2.png'
import student3 from '../assets/s3.png'
import student4 from '../assets/s4.png'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from 'react-icons/fa'

const Testimonials = () => {
    const [currIndex, setcurrIndex] = useState(0)

    const testimonials = [
        {
            id: 1,
            name: 'Annanya',
            role: 'Student',
            content: 'The JUIT Infirmary has been a lifesaver! The doctors are friendly and supportive, and I got immediate care when I was unwell during exams.',
            rating: 5,
            image: student1
        },
        {
            id: 2,
            name: 'Ritika',
            role: 'Student',
            content: 'Very professional and caring staff. The emergency support is excellent — I was taken care of quickly when I had a sports injury.',
            rating: 4,
            image: student2
        },
        {
            id: 3,
            name: 'Saurav',
            role: 'Student',
            content: 'The infirmary provides great general checkups and vaccinations. It makes me feel safe knowing that healthcare is always accessible on campus.',
            rating: 5,
            image: student3
        },
        {
            id: 4,
            name: 'Hardik',
            role: 'Student',
            content: 'I had a minor accident in the lab, and the infirmary staff responded quickly with first aid. Really thankful for the 24/7 availability!',
            rating: 4,
            image: student4
        }
    ];

    const nextTestimonial = () => {
        setcurrIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setcurrIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section id='testimonials' className='scroll-mt-20 relative py-16 bg-gradient-to-r from-blue-50 to-sky-50 overflow-hidden'>
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute inset-y-0 left-0 w-1/2 bg-sky-300'></div>
                <div className='absolute inset-y-0 right-0 w-1/2 bg-blue-300'></div>
            </div>

            <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl font-extrabold text-sky-800 sm:text-4xl'>Student Testimonials</h2>
                    <p className='mt-4 text-lg text-gray-600'>Here’s what our students say about the JUIT Infirmary.</p>
                </div>

                <div className='relative'>
                    <div className='flex transition-transform duration-500 ease-in-out'
                        style={{ transform: `translateX(-${currIndex * 100}%)` }}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className='w-full flex-shrink-0 px-4'>
                                <div className='bg-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center'>
                                    <div className='md:w-1/3 mb-8 md:mb-0 flex justify-center'>
                                        <div className='relative'>
                                            <img className='w-40 h-40 rounded-full object-contain border-4 border-sky-100 shadow-lg'
                                                src={testimonial.image} alt={testimonial.name} />
                                            <div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-medium'>
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:w-2/3 md:pl-12'>
                                        <div className='relative'>
                                            <FaQuoteLeft className='text-sky-200 text-2xl md:text-3xl absolute -top-2 -left-7 md:-left-10' />
                                            <p className='text-lg text-gray-700 mb-6 relative z-10'>
                                                {testimonial.content}
                                            </p>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <div>
                                                <h3 className='text-xl font-bold text-sky-800'>
                                                    {testimonial.name}
                                                </h3>
                                                <div className='flex mt-1'>
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar key={i} className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className='hidden md:flex space-x-2'>
                                                <button onClick={prevTestimonial}
                                                    className='p-2 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors'>
                                                    <FaChevronLeft />
                                                </button>
                                                <button onClick={nextTestimonial}
                                                    className='p-2 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors'>
                                                    <FaChevronRight />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center mt-8 space-x-4 md:hidden'>
                        {testimonials.map((_, index) => (
                            <button key={index} onClick={() => setcurrIndex(index)}
                                className={`w-3 h-3 rounded-full ${currIndex === index ? 'bg-sky-600' : 'bg-gray-300'}`}>
                            </button>
                        ))}
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default Testimonials
