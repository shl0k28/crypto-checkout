import React from 'react'
import Navbar from '../components/landing/Navbar'
import LoginForm from '../components/login/LoginForm'

const Login: React.FC = () => {
    return(
        <div className="h-screen w-screen bg-gray-200">
            <Navbar />
            <LoginForm />
        </div>
    )
}

export default Login