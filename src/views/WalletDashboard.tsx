import React from 'react'
import Topbar from '../components/dashboard/Topbar'
import WalletList from '../components/dashboard/WalletList'

const WalletDashboard: React.FC = () => {
    return(
        <div className="bg-gray-200 h-screen w-screen">
            <Topbar />
            <WalletList />
        </div>
    )
}

export default WalletDashboard