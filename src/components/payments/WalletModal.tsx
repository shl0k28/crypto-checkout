import React from 'react'
import { BiBitcoin } from 'react-icons/bi'
import { SiEthereum } from 'react-icons/si'
import Web3 from 'web3'
import Portis from '../../assets/portis.png'
import PortisClass from '@portis/web3'
import BN from 'bn.js'

//web3 contract
import Axion from '../../smart-contract/build/contracts/Axion.json'

const WalletModal: React.FC = () => {

    const [paymentCurrency,setPaymentCurrency] = React.useState<string | null>(null)
    const [web3Instance, setWeb3Instance] = React.useState<Web3 | null>(null)
    const [currentAccount, setCurrentAccount] = React.useState<string | null>(null)
    const [transactionStatus, setTransactionStatus] = React.useState<boolean | null>(null)

    const connectToPortis = async () => {
		const portis = new PortisClass('4795aa60-5914-42f2-bc7d-7dacb6e192cf', 'maticMumbai')
		// @ts-ignore
		const web3 = new Web3(portis.provider)
		setWeb3Instance(web3)

		console.log(web3)
		const accounts = await web3.eth.getAccounts()
		console.log('Account', accounts[0])
        setCurrentAccount(accounts[0])
	}

    const sendEth = async (web3: Web3) => {
        //contract instance
        var abi = Axion.abi
        var deployedAddress = Axion.networks[80001].address
        var contract = new web3.eth.Contract(JSON.parse(JSON.stringify(abi)), deployedAddress)
        
        const accounts = await web3.eth.getAccounts()
        var fromAccount = accounts[0]
        var toAccount = '0xf69055901752f8f4f7f5bcc33943911e3f347f7d'
        const amountInBn = new BN(0.001)
        var pay = await contract.methods.sendEther(toAccount, amountInBn).send({
            from: fromAccount,
            value: amountInBn
        })
        console.log('Transaction hash: ', pay.transactionHash)
        if(pay.transactionHash){
            setTransactionStatus(true)       
        }
    }
    return(
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed -inset-10 z-50 outline-none focus:outline-none">
                <div className="bg-white px-8 py-4 rounded-md max-w-screen-sm space-y-8">
                    {
                        paymentCurrency === null
                        ? (
                        <>
                            <div style={{fontFamily:"'Krub', sans-serif"}}>
                                <h1 className="text-center text-2xl">Choose your preferred mode of payment:</h1>
                            </div>
                            <div className="flex items-center justify-evenly" style={{fontFamily:"'Quicksand', sans-serif"}}>
                                <div onClick={() => setPaymentCurrency('BTC')} className="space-y-2 hover:bg-gray-200 w-auto px-4 py-2 rounded-md cursor-pointer">
                                    <BiBitcoin className="text-yellow-400 text-8xl"/>
                                    <p className="text-center">BITCOIN</p>
                                </div>
                                <div onClick={() => setPaymentCurrency('ETH')} className="space-y-2 hover:bg-gray-200 w-auto px-4 py-2 rounded-md cursor-pointer">
                                    <SiEthereum className="text-8xl"/>
                                    <p className="text-center">ETHEREUM</p>
                                </div>
                            </div>
                        </>
                        ) :
                        (
                            <>
                            {
                                currentAccount === null ?
                                (
                                    <>
                                <div style={{fontFamily:"'Krub', sans-serif"}}>
                                    <h1 className="text-center text-2xl">Choose your preferred wallet:</h1>
                                </div>
                                <div className="flex justify-center items-center space-y-2 hover:bg-gray-200 w-auto px-4 py-2 rounded-md cursor-pointer">
                                    <img src={Portis} className="h-24" onClick={connectToPortis}/>
                                    {/* <img src={Portis} className="h-24"/> */}
                                </div>
                                    </>
                                ) : 
                                (
                                    <>
                                        <div style={{fontFamily:"'Krub', sans-serif"}}>
                                            <h1 className="text-center text-2xl">Confirm Payment: </h1>
                                        </div>
                                        <div style={{fontFamily:"'QuickSand', sans-serif"}}>
                                            <p>Your total order: $29.99 </p>
                                        </div>
                                        <div className="space-x-4">
                                            <button onClick={() => {
                                                if(web3Instance){
                                                    sendEth(web3Instance)
                                                }
                                            }} className="bg-black text-gray-100 p-2">Confirm Checkout</button>
                                            <button className="text-red-400" onClick={() => setPaymentCurrency(null)}>CANCEL</button>
                                        </div>
                                    </>
                                )
                            }
                            </>
                        )    
                    }
                </div>
            </div>
        </>
    )
}

export default WalletModal