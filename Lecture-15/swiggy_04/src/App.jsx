import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { Outlet } from 'react-router-dom'
import appStore from './utils/appStore'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        {/* <Body /> */}
        <Outlet />
        <Footer />
      </div>
    </Provider>
  )
}

export default App