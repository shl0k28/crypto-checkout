import React from 'react'
import { NavLink } from 'react-router-dom'
import nakamoto from '../../assets/nakamoto.svg'

const msg = `
    Quickly setup crypto payments for your e-commerce store,
    1-click React JS API to revolutionize payments across all sectors.
`

const Hero: React.FC = () => {
    return(
        <div className="px-8 py-4 lg:px-16" style={{fontFamily:"'Rubik', sans-serif"}}>
            <div className="lg:flex justify-around items-center px-16">
                <div className="space-y-4">
                    <h1 className="text-4xl">Hassle-free crypto payments.</h1>
                    <p className="text-left mr-32 text-gray-700 text-lg">{msg}</p>
                </div>
                <img src={nakamoto} alt="" className="h-64"/>
            </div>
            <div className="px-16">
                <p className="text-2xl text-blueGray-600">Test the client demo <NavLink to='/payments' className="italic underline font-bold">here</NavLink></p>
            </div>
        </div>
    )
}

export default Hero