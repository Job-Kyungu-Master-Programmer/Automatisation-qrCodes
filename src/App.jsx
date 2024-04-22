import React, { useState } from 'react'
import CreateQrCode from './pages/CreateQrCode'
import { Routes,Route } from 'react-router'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import ListQrCode from './pages/ListQrCode'

const App = () => {
  const [qrCodes, setQrCodes] = useState([])
  const [creatQr, setCreatQr] = useState('create')



  return (
    <div className="app">
      <div className="container app__container">
        <Dashboard />
        <div className="app__body">
           <Header />
           <Routes>
             <Route
              path='/'
              element={
              <CreateQrCode
                creatQr={creatQr}
                setCreatQr={setCreatQr}
                qrCodes={qrCodes}
                setQrCodes={setQrCodes}
               />}
               />
             <Route path='/qrcode' element={<ListQrCode />} />
           </Routes>
        </div>
       </div>
    </div>
  )
}

export default App
