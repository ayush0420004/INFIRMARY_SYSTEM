import { motion } from 'framer-motion';
import { FaStethoscope, FaAmbulance, FaUserMd, FaSyringe } from 'react-icons/fa';

const services = [
    {
        icon: <FaStethoscope className='w-10 h-10 text-sky-500' />,
        title: "General Health Checkups",
        desc: "Regular medical checkups and consultations to ensure students' wellbeing."
    },
    {
        icon: <FaUserMd className='w-10 h-10 text-green-500' />,
        title: "Doctor Consultation",
        desc: "Experienced medical officers available for diagnosis and treatment of common illnesses."
    },
    {
        icon: <FaSyringe className='w-10 h-10 text-yellow-500' />,
        title: "First Aid & Vaccinations",
        desc: "Immediate first aid care and routine vaccination support for students."
    },
    {
        icon: <FaAmbulance className='w-10 h-10 text-red-500' />,
        title: "24/7 Emergency Support",
        desc: "Round-the-clock ambulance and emergency services available on campus."
    },
];

const Services = () => {
    return (
        <section id='services' className='scroll-mt-20 py-24 bg-gradient-to-br from-white to-sky-50'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-sky-900 mb-4'>Our Medical Services</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        The JUIT Infirmary is committed to providing quality healthcare and medical support 
                        for all students and staff within the campus.
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {services.map((service, index) => (
                        <motion.div key={index}
                            className='bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all border border-sky-100 hover:border-sky-300'
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className='flex items-center justify-center mb-4'>{service.icon}</div>
                            <h3 className='text-lg font-semibold text-sky-800 mb-2 text-center'>{service.title}</h3>
                            <p className='text-gray-600 text-sm text-center'>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;
