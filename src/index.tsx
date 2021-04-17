import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
//contexts
import UserContextProvider from './context/AuthContext'
//pages
import Landing from './views/Landing'
import PaymentTest from './views/PaymentTest'
import WalletDashboard from './views/WalletDashboard'
import Login from './views/Login'
import PrivateRoute from './routes/PrivateRoute'

const App: React.FC = () => {
    return(
      <>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Krub&family=Quicksand&family=Roboto&family=Rubik&display=swap');
        </style>
        <UserContextProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route path='/payments' component={PaymentTest} />
                <Route path='/auth' component={Login} />
                <PrivateRoute path='/dashboard' component={WalletDashboard}/>
            </Switch>
        </BrowserRouter>
        </UserContextProvider>
      </>
    )
}

const root = document.getElementById('root')
render(<App />, root)