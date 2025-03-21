import React from 'react'

const Navbar = () => {
    return (
        <nav className='fixed top-0 w-full bg-white shadow-md dark:bg-gray-900'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a href="#" className="text-xl text-gray-900 dark:text-white">
                        Xhemal Kodragjini
                    </a>

                    <div className="hidden md:flex space-x-6">
                        <a href='#top' className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Home</a>
                        <a href='#about' className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a>
                        <a href='#experience' className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Experience</a>
                        <a href='#education' className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Education</a>
                        <a href='#projects' className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Projects</a>
                        <a href='#contact' className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a>
                    </div>
                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-600 dark:text-white">
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
