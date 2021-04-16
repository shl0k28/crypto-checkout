import React from 'react'
import { NavLink } from 'react-router-dom'

const PaymentTest: React.FC = () => {
	return(
		<div style={{fontFamily:"'Quicksand', sans-serif"}} className="bg-gray-200 h-screen w-screen lg:space-y-8">
			<nav className="px-8 py-4 lg:px-16">
				<NavLink to="/" style={{fontFamily:"'Krub', sans-serif"}} className="text-3xl">axios</NavLink>
			</nav>
			<section className="px-8 lg:px-16 space-y-4">
				<h1 className="font-bold text-3xl text-gray-800">1-click crypto checkouts for e-commerce.</h1>
			    <p className="text-xl">Easily accept cryptocurrencies and tokens for your ecommerce store and reach the moon <span className="text-3xl">🤑</span></p>
			</section>
			<div className="px-8 py-4 lg:px-16">
				<button className="bg-gray-800 p-2 text-gray-200">Checkout with Crypto</button>
			</div>
		</div>
	)
}

export default PaymentTest