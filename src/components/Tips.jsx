import React, { useState } from 'react'
import { FaAppleAlt, FaBed, FaHandsWash, FaHeartbeat } from 'react-icons/fa'
import { GiMeditation, GiWaterBottle } from 'react-icons/gi'

const Tips = () => {
    const [activeTip, setactiveTip] = useState(0);

    const tips = [
        {
            title: "Stay Hydrated",
            content: "Drink at least 8 glasses of water daily. Staying hydrated improves focus, energy, and overall health, especially during long study hours.",
            icon: <GiWaterBottle className='w-8 h-8 text-sky-500' />
        },
        {
            title: "Balanced Diet",
            content: "Include fruits, vegetables, proteins, and whole grains in your meals. A balanced diet helps maintain energy and boosts your immune system.",
            icon: <FaAppleAlt className='w-8 h-8 text-green-500' />
        },
        {
            title: "Regular Sleep",
            content: "Aim for 7-8 hours of sleep each night. Good sleep enhances memory, learning, and reduces stress during exams.",
            icon: <FaBed className='w-8 h-8 text-purple-500' />
        },
        {
            title: "Exercise & Fitness",
            content: "Engage in at least 30 minutes of physical activity daily — walking, jogging, or yoga. It keeps you fit and relieves stress.",
            icon: <FaHeartbeat className='w-8 h-8 text-red-500' />
        },
        {
            title: "Mental Well-being",
            content: "Practice meditation, deep breathing, or hobbies you enjoy. Mental health is as important as physical health.",
            icon: <GiMeditation className='w-8 h-8 text-amber-500' />
        },
    ]

    return (
        <section id='tips' className='scroll-mt-20 max-w-6xl mx-auto px-4 py-12'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-3'>Student Health Tips</h2>
                <p className='text-lg text-gray-600 max-w-2xl mx-auto mb-6'>
                    Simple wellness tips to help you stay healthy, active, and stress-free at JUIT.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-6 mb-8'>
                    {tips.map((tip, index) => (
                        <button
                            key={index}
                            onClick={() => setactiveTip(index)}
                            className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center ${activeTip === index ? 'bg-white shadow-lg border-b-4 border-sky-400' : 'bg-gray-100 hover:bg-blue-200'}`}
                        >
                            <div className='mb-2'>{tip.icon}</div>
                            <h3 className='font-medium text-gray-800 text-sm md:text-base text-center'>{tip.title}</h3>
                        </button>
                    ))}
                </div>
                <div className='bg-gradient-to-r from-sky-50 to-blue-100 rounded-2xl p-8 shadow-sm'>
                    <div className='flex flex-col md:flex-row items-center gap-6'>
                        <div className='flex-shrink-0 bg-white p-6 rounded-xl shadow-md'>
                            {tips[activeTip].icon}
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-gray-800 mb-3'>{tips[activeTip].title}</h3>
                            <p className='text-gray-600 text-lg leading-relaxed'>{tips[activeTip].content}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 flex justify-center'>
                <div className='flex space-x-2'>
                    {tips.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setactiveTip(index)}
                            className={`w-3 h-3 rounded-full transition-all ${activeTip === index ? 'bg-sky-500 w-6' : 'bg-gray-300'}`}
                            aria-label={`Go to tip ${index + 1}`}
                        >
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Tips
