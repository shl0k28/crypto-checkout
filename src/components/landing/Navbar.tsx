import React from 'react'

const Navbar: React.FC = () => {
    return(
        <nav className="px-8 py-4 lg:px-16 flex items-center justify-between">
            <div>
                <h1 style={{fontFamily:"'Krub', sans-serif"}} className="text-3xl text-gray-800">
                    axion
                </h1>
            </div>
            <div style={{fontFamily:"'Quicksand', sans-serif"}}>
                <button className="bg-gray-800 p-2 text-gray-200">Get Started</button>
            </div>
        </nav>
    )
}

export default Navbar