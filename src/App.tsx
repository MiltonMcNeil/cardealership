import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Header from './components/Header.tsx'
import routes from './config/routes'
import { auth0Config } from './config/auth0.config';
import { Auth0Provider } from '@auth0/auth0-react'
import  LoginComponent  from './components/LoginComponent.tsx'

function App() {

  return (
    <>
      <Auth0Provider
        domain={auth0Config.domain}
        clientId={auth0Config.clientId}
        authorizationParams={{redirect_uri: 'https://tubular-genie-273434.netlify.app/dashboard'}}
        >
        <BrowserRouter>
          <Header/>
            <Routes>
            {routes.map((route: any, index: any) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <route.component />
                }
                />
            )) }
            </Routes>
        </BrowserRouter>
      </Auth0Provider>
    </>
  )
}

export default App
