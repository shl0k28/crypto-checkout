import React from 'react'

const LoginForm: React.FC = () => {
    return(
        <div className="px-8 py-4 lg:px-16" style={{fontFamily:"'Rubik', sans-serif"}}>
            <div className="flex items-center justify-center">
                <div className="space-y-8 py-4 bg-gray-100 rounded-lg shadow-lg px-2">
                    <h1 className="uppercase text-center text-xl mx-24">Login to axion</h1>
                    <div>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            className="px-2 py-1 text-lg rounded-md text-gray-800 items-center font-mono w-full"
                            placeholder="john.doe@company.com"
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            className="px-2 py-1 text-lg rounded-md text-gray-800 font-mono w-full"
                            placeholder="***********"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-gray-900 p-2 text-gray-200 ">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default LoginForm