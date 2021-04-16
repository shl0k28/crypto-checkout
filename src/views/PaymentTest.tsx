import React from 'react'
import { NavLink } from 'react-router-dom'

//Web3 stuff
import Web3Modal from 'web3modal'
import Web3 from 'web3'
import Portis from '@portis/web3'

const PaymentTest: React.FC = () => {
	
	const [completePayment, setCompletePayment] = React.useState(false)
	
	const providerOptions = {
		portis: {
			package: Portis, // required
			options: {
			  id: "4795aa60-5914-42f2-bc7d-7dacb6e192cf" // required
			}
		}
	}

	const web3modal = new Web3Modal({
		providerOptions
	})

	
	const connectToPortis = async () => {
		const provider = await web3modal.connect()
		const web3 = new Web3(provider)
		console.log(web3)
		const accounts = await web3.eth.getAccounts()
		console.log('Account', accounts[0])
		if(accounts){
			setCompletePayment(true)
		}
	}

	return(
		<div style={{fontFamily:"'Quicksand', sans-serif"}} className="bg-gray-200 h-screen w-screen lg:space-y-8">
			<nav className="px-8 py-4 lg:px-16">
				<NavLink to="/" style={{fontFamily:"'Krub', sans-serif"}} className="text-3xl">axios</NavLink>
			</nav>
			<section className="px-8 lg:px-16 space-y-4">
				<h1 className="font-bold text-3xl text-gray-800">1-click crypto checkouts for e-commerce.</h1>
			    <p className="text-xl">Easily accept cryptocurrencies and tokens for your ecommerce store.</p>
			</section>
			<div className="px-8 py-4 lg:px-16">
				<button onClick={connectToPortis} className="bg-gray-800 p-2 text-gray-200">Checkout with Crypto</button>
			</div>
			{
				completePayment && <>Transaction Modal</>
			}
		</div>
	)
}

const TransactionModal: React.FC = () => {
	return(
		<></>
	)
}

export default PaymentTest