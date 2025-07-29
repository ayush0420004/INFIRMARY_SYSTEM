import React, { useState } from 'react'
import { FaCalendarAlt, FaChevronRight, FaClock, FaPhone, FaStethoscope } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'
import { GiMedicines } from 'react-icons/gi'

const BookAppointment = () => {
    const [activeStep, setActiveStep] = useState(1)
    const [formData, setformData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        service: 'General Checkup',
    })

    const [errors, setErrors] = useState({})

    const services = [
        'General Checkup',
        'First Aid & Emergency Care',
        'Health Consultation',
        'Laboratory Test Referral',
        'Counseling Session',
        'Vaccination Support'
    ]

    const availableTimes = [
        '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '2:00 PM', '3:00 PM', '4:00 PM'
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setformData(prev => ({ ...prev, [name]: value }))
        setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const validateStep = () => {
        let newErrors = {}
        if (activeStep === 1) {
            if (!formData.name.trim()) {
                newErrors.name = "Please enter your full name."
            } else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
                newErrors.name = "Name can only contain alphabets and spaces."
            }
            if (!formData.phone.trim()) {
                newErrors.phone = "Please enter your phone number."
            } else if (!/^\d{10}$/.test(formData.phone.trim())) {
                newErrors.phone = "Phone number must be 10 digits."
            }
        }
        if (activeStep === 2) {
            if (!formData.date) newErrors.date = "Please select a date."
            if (!formData.time) newErrors.time = "Please choose a time."
            if (!formData.service) newErrors.service = "Please choose a service."
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const nextStep = () => {
        if (validateStep()) {
            setActiveStep(prev => prev + 1)
        }
    }

    const prevStep = () => setActiveStep(prev => prev - 1)

    return (
        <div id='book' className='scroll-mt-20 min-h-screen bg-gradient-to-br from-sky-50 to-sky-50 py-12 px-4'>
            <div className='max-w-4xl mx-auto'>
                <div className='text-center mb-12'>
                    <h1 className='text-4xl font-bold text-gray-800 mb-3'>Book Your Appointment at JUIT Infirmary</h1>
                    <p className='text-lg text-gray-600'>
                        The JUIT Infirmary is committed to providing quality healthcare and emergency
                        support to all students and staff. Schedule your appointment today.
                    </p>
                </div>

                {/* Multi-Step Form */}
                <form 
                    action="https://formsubmit.co/ayushthakur09051982@gmail.com" 
                    method="POST"
                    className='bg-white rounded-3xl shadow-xl overflow-hidden'
                >
                    {/* To disable CAPTCHA and redirect */}
                    


                    {activeStep === 1 && (
                        <div className='p-8'>
                            <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
                                <FaUser className='mr-3 text-sky-500' />
                                Personal Information
                            </h2>
                            <div className='space-y-6'>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        className={`w-full p-4 pl-12 border-2 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none transition ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                                    />
                                    <FaUser className="absolute left-4 top-0 mt-6 bottom-0 my-auto text-gray-400 pointer-events-none" />
                                    <div className="min-h-[20px] mt-1">
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                    </div>
                                </div>

                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone Number"
                                        className={`w-full p-4 pl-12 border-2 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none transition ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                                    />
                                    <FaPhone className="absolute left-4 top-0 mt-6 bottom-0 my-auto text-gray-400 pointer-events-none" />
                                    <div className="min-h-[20px] mt-1">
                                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeStep === 2 && (
                        <div className='p-8'>
                            <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
                                <FaCalendarAlt className='mr-3 text-sky-500' />
                                Appointment Details
                            </h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='relative'>
                                    <input 
                                        type="date" 
                                        name='date' 
                                        value={formData.date} 
                                        onChange={handleInputChange}
                                        className={`w-full p-4 pl-12 border-2 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none transition ${errors.date ? 'border-red-400' : 'border-gray-200'}`}
                                        min={new Date().toISOString().split('T')[0]} 
                                    />
                                    <FaCalendarAlt className='absolute left-4 top-0 mt-6 bottom-0 my-auto text-gray-400 pointer-events-none' />
                                    {errors.date && <p className='text-red-500 text-sm mt-1'>{errors.date}</p>}
                                </div>
                                <div className='relative'>
                                    <select 
                                        name="time" 
                                        value={formData.time} 
                                        onChange={handleInputChange}
                                        className={`w-full p-4 pl-12 border-2 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none appearance-none transition ${errors.time ? 'border-red-400' : 'border-gray-200'}`}
                                    >
                                        <option value="">Select Time</option>
                                        {availableTimes.map(time => (
                                            <option key={time} value={time}>{time}</option>
                                        ))}
                                    </select>
                                    <FaClock className='absolute left-4 top-0 mt-6 bottom-0 my-auto text-gray-400 pointer-events-none' />
                                    <FaChevronRight className='absolute right-4 top-0 mt-6 bottom-0 my-auto text-gray-400 pointer-events-none rotate-90' />
                                    {errors.time && <p className='text-red-500 text-sm mt-1'>{errors.time}</p>}
                                </div>
                                <div className='relative md:col-span-2'>
                                    <select 
                                        name="service" 
                                        value={formData.service} 
                                        onChange={handleInputChange}
                                        className={`w-full p-4 pl-12 border-2 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none appearance-none transition ${errors.service ? 'border-red-400' : 'border-gray-200'}`}
                                    >
                                        {services.map(service => (
                                            <option key={service} value={service}>{service}</option>
                                        ))}
                                    </select>
                                    <FaStethoscope className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
                                    <FaChevronRight className='absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400' />
                                    {errors.service && <p className='text-red-500 text-sm mt-1'>{errors.service}</p>}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeStep === 3 && (
                    <div className='p-8 text-center'>
                        {/* Hidden inputs for FormSubmit */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://infirmary-system-2ope.vercel.app/" />
                        <input type="hidden" name="name" value={formData.name} />
                        <input type="hidden" name="phone" value={formData.phone} />
                        <input type="hidden" name="date" value={formData.date} />
                        <input type="hidden" name="time" value={formData.time} />
                        <input type="hidden" name="service" value={formData.service} />

                        <div className='inline-flex items-center justify-center bg-sky-100 p-6 rounded-full mb-6'>
                            <GiMedicines className='text-4xl text-sky-500' />
                        </div>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Confirm Your Appointment</h2>
                        <div className='bg-sky-50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto'>
                            {/* Confirmation details */}
                            <div className='flex justify-between py-2 border-b border-sky-100'>
                                <span className='text-gray-600'>Name:</span>
                                <span className='font-medium'>{formData.name}</span>
                            </div>
                            <div className='flex justify-between py-2 border-b border-sky-100'>
                                <span className='text-gray-600'>Phone:</span>
                                <span className='font-medium'>{formData.phone}</span>
                            </div>
                            <div className='flex justify-between py-2 border-b border-sky-100'>
                                <span className='text-gray-600'>Date:</span>
                                <span className='font-medium'>{formData.date}</span>
                            </div>
                            <div className='flex justify-between py-2 border-b border-sky-100'>
                                <span className='text-gray-600'>Time:</span>
                                <span className='font-medium'>{formData.time}</span>
                            </div>
                            <div className='flex justify-between py-2 border-b border-sky-100'>
                                <span className='text-gray-600'>Service:</span>
                                <span className='font-medium'>{formData.service}</span>
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className='w-full max-w-xs py-4 bg-gradient-to-r from-sky-500 to-sky-500 text-white font-bold rounded-xl shadow-xl transition-all transform hover:scale-105'>
                            Confirm & Book Appointment
                        </button>
                    </div>
)}


                    <div className='px-8 pb-8 flex justify-between'>
                        {activeStep > 1 && (
                            <button type="button" onClick={prevStep} className='px-6 py-3 text-gray-600 font-medium rounded-lg hover:bg-gray-100 transition'>Back</button>
                        )}
                        {activeStep < 3 && (
                            <button type="button" onClick={nextStep} className='ml-auto px-6 py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition flex items-center'>Next</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookAppointment



// import { FaCalendarAlt, FaChevronRight, FaClock, FaPhone, FaStethoscope } from 'react-icons/fa'
// import { FaUser } from 'react-icons/fa6'
// import { GiMedicines } from 'react-icons/gi'

// const BookAppointment = () => {
//     const [activeStep, setActiveStep] = useState(1)
//     const [formData, setformData] = useState({
//         name: '',
//         phone: '',
//         date: '',
//         time: '',
//         service: 'General Checkup',
//     })

//     const [errors, setErrors] = useState({})

//     const services = [
//         'General Checkup',
//         'First Aid & Emergency Care',
//         'Health Consultation',
//         'Laboratory Test Referral',
//         'Counseling Session',
//         'Vaccination Support'
//     ]

//     const availableTimes = [
//         '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
//         '2:00 PM', '3:00 PM', '4:00 PM'
//     ]

//     const handleInputChange = (e) => {
//         const { name, value } = e.target
//         setformData(prev => ({ ...prev, [name]: value }))
//         setErrors(prev => ({ ...prev, [name]: '' }))
//     }

//     const validateStep = () => {
//         let newErrors = {}
//         if (activeStep === 1) {
//             if (!formData.name.trim()) {
//                 newErrors.name = "Please enter your full name."
//             } else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
//                 newErrors.name = "Name can only contain alphabets and spaces."
//             }
//             if (!formData.phone.trim()) {
//                 newErrors.phone = "Please enter your phone number."
//             } else if (!/^\d{10}$/.test(formData.phone.trim())) {
//                 newErrors.phone = "Phone number must be 10 digits."
//             }
//         }
//         if (activeStep === 2) {
//             if (!formData.date) newErrors.date = "Please select a date."
//             if (!formData.time) newErrors.time = "Please choose a time."
//             if (!formData.service) newErrors.service = "Please choose a service."
//         }
//         setErrors(newErrors)
//         return Object.keys(newErrors).length === 0
//     }

//     const nextStep = () => {
//         if (validateStep()) {
//             setActiveStep(prev => prev + 1)
//         }
//     }

//     const prevStep = () => setActiveStep(prev => prev - 1)

//     return (
//         <div id='book' className='scroll-mt-20 min-h-screen bg-gradient-to-br from-sky-50 to-sky-50 py-12 px-4'>
//             <div className='max-w-4xl mx-auto'>
//                 <div className='text-center mb-12'>
//                     <h1 className='text-4xl font-bold text-gray-800 mb-3'>Book Your Appointment at JUIT Infirmary</h1>
//                     <p className='text-lg text-gray-600'>
//                         The JUIT Infirmary is committed to providing quality healthcare and emergency
//                         support to all students and staff. Schedule your appointment today.
//                     </p>
//                 </div>

//                 {/* Multi-Step Form */}
//                 <form
//                     action="https://formsubmit.co/ayushthakur09051982@gmail.com"
//                     method="POST"
//                     className='bg-white rounded-3xl shadow-xl overflow-hidden'
//                 >
//                     {/* Hidden inputs for FormSubmit config */}
//                     <input type="hidden" name="_captcha" value="false" />
//                     <input type="hidden" name="_subject" value="New JUIT Infirmary Appointment" />
//                     <input type="hidden" name="_template" value="table" />
//                     <input type="hidden" name="_next" value={window.location.href} />
//                     <input type="hidden" name="Full Name" value={formData.name} />
//                     <input type="hidden" name="Phone Number" value={formData.phone} />
//                     <input type="hidden" name="Appointment Date" value={formData.date} />
//                     <input type="hidden" name="Appointment Time" value={formData.time} />
//                     <input type="hidden" name="Service Required" value={formData.service} />

//                     {activeStep === 1 && (
//                         <div className='p-8'>
//                             <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
//                                 <FaUser className='mr-3 text-sky-500' />
//                                 Personal Information
//                             </h2>
//                             <div className='space-y-6'>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         name="name"   // ✅ correct name
//                                         value={formData.name}
//                                         onChange={handleInputChange}
//                                         placeholder="Full Name"
//                                         required
//                                         className={`w-full p-4 pl-12 border-2 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none transition ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
//                                     />
//                                     <FaUser className="absolute left-4 top-0 mt-6 bottom-0 my-auto text-gray-400 pointer-events-none" />
//                                     <div className="min-h-[20px] mt-1">
//                                         {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                                     </div>
//                                 </div>

//                                 <div className="relative">
//                                     <input
//                                         type="tel"
//                                         name="phone"   // ✅ correct name
//                                         value={formData.phone}
//                                         onChange={handleInputChange}
//                                         placeholder="Phone Number"
//                                         required
//                                         className={`w-full p-4 pl-12 border-2 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none transition ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
//                                     />
//                                     <FaPhone className="absolute left-4 top-0 mt-6 bottom-0 my-auto text-gray-400 pointer-events-none" />
//                                     <div className="min-h-[20px] mt-1">
//                                         {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {activeStep === 2 && (
//                         <div className='p-8'>
//                             <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
//                                 <FaCalendarAlt className='mr-3 text-sky-500' />
//                                 Appointment Details
//                             </h2>
//                             <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//                                 <div className='relative'>
//                                     <input
//                                         type="date"
//                                         name='date'   // ✅ correct name
//                                         value={formData.date}
//                                         onChange={handleInputChange}
//                                         required
//                                         className={`w-full p-4 pl-12 border-2 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none transition ${errors.date ? 'border-red-400' : 'border-gray-200'}`}
//                                         min={new Date().toISOString().split('T')[0]}
//                                     />
//                                     <FaCalendarAlt className='absolute left-4 top-0 mt-6 bottom-0 my-auto text-gray-400 pointer-events-none' />
//                                     {errors.date && <p className='text-red-500 text-sm mt-1'>{errors.date}</p>}
//                                 </div>
//                                 <div className='relative'>
//                                     <select
//                                         name="time"   // ✅ correct name
//                                         value={formData.time}
//                                         onChange={handleInputChange}
//                                         required
//                                         className={`w-full p-4 pl-12 border-2 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none appearance-none transition ${errors.time ? 'border-red-400' : 'border-gray-200'}`}
//                                     >
//                                         <option value="">Select Time</option>
//                                         {availableTimes.map(time => (
//                                             <option key={time} value={time}>{time}</option>
//                                         ))}
//                                     </select>
//                                     <FaClock className='absolute left-4 top-0 mt-6 bottom-0 my-auto text-gray-400 pointer-events-none' />
//                                     <FaChevronRight className='absolute right-4 top-0 mt-6 bottom-0 my-auto text-gray-400 pointer-events-none rotate-90' />
//                                     {errors.time && <p className='text-red-500 text-sm mt-1'>{errors.time}</p>}
//                                 </div>
//                                 <div className='relative md:col-span-2'>
//                                     <select
//                                         name="service"   // ✅ correct name
//                                         value={formData.service}
//                                         onChange={handleInputChange}
//                                         required
//                                         className={`w-full p-4 pl-12 border-2 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none appearance-none transition ${errors.service ? 'border-red-400' : 'border-gray-200'}`}
//                                     >
//                                         {services.map(service => (
//                                             <option key={service} value={service}>{service}</option>
//                                         ))}
//                                     </select>
//                                     <FaStethoscope className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
//                                     <FaChevronRight className='absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400' />
//                                     {errors.service && <p className='text-red-500 text-sm mt-1'>{errors.service}</p>}
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {activeStep === 3 && (
//                         <div className='p-8 text-center'>
//                             <div className='inline-flex items-center justify-center bg-sky-100 p-6 rounded-full mb-6'>
//                                 <GiMedicines className='text-4xl text-sky-500' />
//                             </div>
//                             <h2 className='text-2xl font-bold text-gray-800 mb-4'>Confirm Your Appointment</h2>
//                             <div className='bg-sky-50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto'>
//                                 <div className='flex justify-between py-2 border-b border-sky-100'>
//                                     <span className='text-gray-600'>Name:</span>
//                                     <span className='font-medium'>{formData.name}</span>
//                                 </div>
//                                 <div className='flex justify-between py-2 border-b border-sky-100'>
//                                     <span className='text-gray-600'>Phone:</span>
//                                     <span className='font-medium'>{formData.phone}</span>
//                                 </div>
//                                 <div className='flex justify-between py-2 border-b border-sky-100'>
//                                     <span className='text-gray-600'>Date:</span>
//                                     <span className='font-medium'>{formData.date}</span>
//                                 </div>
//                                 <div className='flex justify-between py-2 border-b border-sky-100'>
//                                     <span className='text-gray-600'>Time:</span>
//                                     <span className='font-medium'>{formData.time}</span>
//                                 </div>
//                                 <div className='flex justify-between py-2 border-b border-sky-100'>
//                                     <span className='text-gray-600'>Service:</span>
//                                     <span className='font-medium'>{formData.service}</span>
//                                 </div>
//                             </div>

                            

//                             <button type="submit" className='w-full max-w-xs py-4 bg-gradient-to-r from-sky-500 to-sky-500 text-white font-bold rounded-xl shadow-xl transition-all transform hover:scale-105'>
//                                 Confirm & Book Appointment
//                             </button>
//                         </div>
//                     )}


//                     <div className='px-8 pb-8 flex justify-between'>
//                         {activeStep > 1 && (
//                             <button type="button" onClick={prevStep} className='px-6 py-3 text-gray-600 font-medium rounded-lg hover:bg-gray-100 transition'>Back</button>
//                         )}
//                         {activeStep < 3 && (
//                             <button type="button" onClick={nextStep} className='ml-auto px-6 py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition flex items-center'>Next</button>
//                         )}
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default BookAppointment

