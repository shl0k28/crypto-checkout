import React from 'react'

const WalletList: React.FC = () => {
    
    const [walletAccounts, setWalletAccounts] = React.useState<Array<string> | null>(null)
    return(
        <div className="lg:px-16 py-4 " style={{fontFamily:"'Quicksand', sans-serif"}}>
            {
                walletAccounts === null 
                ? (
                    <div className="bg-gray-200 rounded-md shadow-lg py-2 px-8 space-y-8">
                        <p className="text-center text-xl font-semibold">You haven't created any wallets.</p>
                        <div className="flex justify-center">
                            <button 
                                className="p-2 bg-gray-700 text-gray-200 hover:bg-gray-900"
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