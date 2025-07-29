import React from 'react'
import { FaInstagram, FaMapMarkedAlt, FaPhone, FaRegClock, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md';
import { GiMedicines } from 'react-icons/gi';

const socialLinks = [
    {
        icon: <FaInstagram className='text-xl' />,
        href: 'https://www.instagram.com/juitofficial/'
    },
    {
        icon: <FaWhatsapp className='text-xl' />,
        href: 'https://wa.me/917807673100'
    },
    {
        icon: <FaTelegram className='text-xl' />,
        href: 'https://t.me/juitbiotech'
    },
];

const clinicHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', time: 'Closed (Emergency Only)' }
];

const contactInfo = [
    {
        icon: <FaPhone className='mr-4 text-white/70' />,
        text: <a href="tel:+919882633742" className='hover:text-sky-300 transition-colors'>+91 98826 33742</a>
    },
    {
        icon: <MdOutlineEmail className='mr-4 text-white/70' />,
        text: <a href="mailto:infirmary@juit.ac.in" className='hover:text-sky-300 transition-colors'>infirmary@juit.ac.in</a>
    },
    {
        icon: <FaMapMarkedAlt className='mr-4 text-white/70' />,
        text: <span>JUIT Campus, Waknaghat, Solan, Himachal Pradesh</span>
    },
];

const Footer = () => {
    return (
        <footer className='bg-gradient-to-b from-blue-950 to-blue-950 text-white pt-16 pb-12 relative overflow-hidden'>
            <div className='absolute bottom-0 left-0 right-0 h-20 bg-cover opacity-20'></div>
            <div className='container mx-auto px-6 relative z-10'>
                <div className='flex flex-col items-center mb-14'>
                    <div className='flex items-center mb-6'>
                        <div className='bg-white/20 p-3 rounded-full mr-4'>
                            <GiMedicines className='text-2xl text-sky-300' />
                        </div>
                        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to to-blue-200'>
                            JUIT Infirmary
                        </h2>
                    </div>
                    <div className='flex space-x-6 mb-8'>
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className='bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:-translate-y-1'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
                    <div className='bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors'>
                        <h3 className='text-xl font-semibold mb-5 flex items-center'>
                            <FaRegClock className='mr-3 text-sky-300' />
                            Infirmary Hours
                        </h3>
                        <ul className='space-y-3'>
                            {clinicHours.map((item, index) => (
                                <li key={index} className='flex justify-between'>
                                    <span className='text-white/70'>{item.day}</span>
                                    <span>{item.time}</span>
                                </li>
                            ))}
                            <li className='pt-3 mt-3 border-t border-white/10 text-sky-300 font-medium'>
                                Emergency medical support available 24/7
                            </li>
                            <li className='pt-2'>
                                <a
                                    href="https://www.juit.ac.in/aspirant-dispensary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sky-300 hover:underline"
                                >
                                    Learn more about JUIT Infirmary Services
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors'>
                        <h3 className='text-xl font-semibold mb-5 flex items-center'>
                            <FaPhone className='mr-3 text-sky-300' />
                            Contact Us
                        </h3>
                        <ul className='space-y-4'>
                            {contactInfo.map((item, index) => (
                                <li key={index} className='flex items-center'>
                                    {item.icon}
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors'>
                        <h3 className='text-xl font-semibold mb-5'>Health Updates Newsletter</h3>
                        <p className='text-white/70 mb-5'>Subscribe to receive campus health updates and wellness tips</p>
                        <form
                            action="https://formsubmit.co/ayushthakur09051982@gmail.com"
                            method="POST"
                            className="flex w-full"
                        >
                            {/* Disable captcha and redirect back to the page */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value={window.location.href} />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your email address"
                                required
                                className="bg-white/10 border border-white/20 text-white px-5 py-3 rounded-r-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-300 w-full placeholder-white/50"
                            />
                            <button
                                type="submit"
                                className="bg-sky-500 hover:bg-sky-400 text-blue-900 font-medium px-5 py-3 rounded-l-none rounded-r-lg transition-colors flex items-center"
                            >
                                Subscribe
                            </button>
                        </form>

                    </div>
                </div>
                <div className='pt-8 flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-white/50 text-sm mb-3 md:mb-0'>
                        &copy; {new Date().getFullYear()} JUIT Infirmary. All Rights Reserved.
                    </p>
                    <div className='flex space-x-6'>
                        <a href="https://www.juit.ac.in/terms-conditions" target="_blank" rel="noopener noreferrer" className='text-white/50 hover:text-sky-300 text-sm transition-colors'>
                            Terms of Use
                        </a>
                        <a href="https://www.juit.ac.in/privacy-policy" target="_blank" rel="noopener noreferrer" className='text-white/50 hover:text-sky-300 text-sm transition-colors'>
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
