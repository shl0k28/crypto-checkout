import React from 'react'
import { BiBitcoin } from 'react-icons/bi'
import { SiEthereum } from 'react-icons/si'

const WalletModal: React.FC = () => {

    const [paymentCurrency,setPaymentCurrency] = React.useState<string | null>(null)
    return(
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed -inset-10 z-50 outline-none focus:outline-none">
                <div className="bg-white px-8 py-4 rounded-md max-w-screen-sm space-y-8">
                    <div>
                        <h1 className="text-center text-2xl">Choose your preferred mode of payment:</h1>
                    </div>
                    <div className="flex items-center justify-evenly">
                        <div onClick={() => setPaymentCurrency('BTC')} className="space-y-2 hover:bg-gray-200 w-auto px-4 py-2 rounded-md cursor-pointer">
                            <BiBitcoin className="text-yellow-400 text-8xl"/>
                            <p className="text-center">BITCOIN</p>
                        </div>
                        <div onClick={() => setPaymentCurrency('ETH')} className="space-y-2 hover:bg-gray-200 w-auto px-4 py-2 rounded-md cursor-pointer">
                            <SiEthereum className="text-8xl"/>
                            <p className="text-center">ETHEREUM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}


export default WalletModal