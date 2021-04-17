import React from 'react'
import Web3 from 'web3'

const WalletList: React.FC = () => {
    
    const [walletAccounts, setWalletAccounts] = React.useState<Array<string> | null>(null)

    const createWallet = async () => {
        var web3 = new Web3(Web3.givenProvider)
        var newAccount = await web3.eth.accounts.create()
        console.log(newAccount)
    }
    
    return(
        <div className="lg:px-16 py-4" style={{fontFamily:"'Quicksand', sans-serif"}}>
            {
                walletAccounts === null 
                ? (
                    <div className="bg-gray-100 rounded-md shadow-lg py-2 px-8 space-y-4">
                        <p className="text-center text-2xl font-semibold mt-4">You haven't created any wallets.</p>
                        <div className="flex justify-center">
                            <button 
                                className="p-2 bg-gray-800 text-gray-200 hover:bg-gray-900"
                                onClick={createWallet}
                            >
                                Create
                            </button>
                        </div>
                    </div>
                ) : (
                    <></>
                )
            }
        </div>
    )
}

export default WalletList