import React from 'react'
import Hero from '../components/landing/Hero'
import Navbar from '../components/landing/Navbar'

const Landing: React.FC = () => {
    return(
        <div className="bg-gray-100 h-screen w-screen space-y-4">
            <Navbar />
            <Hero />
        </div>
    )
}

export default Landing