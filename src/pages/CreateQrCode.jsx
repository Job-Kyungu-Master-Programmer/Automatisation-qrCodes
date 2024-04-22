import React from 'react'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import qr from '../assets/qr.png'

const CreateQrCode = ({ qrCodes, setQrCodes, creatQr, setCreatQr }) => {

  const addQr = (e) => {
     e.preventDefault()
     console.log('Bien soumis')
    
  }

  return (
    <div className="createQrCode">
        <div className="container createQrCode__container">
           <h2 className="createQrCode__title">Automatisation qr code</h2>
           <form onSubmit={addQr} className="createQrCode__form">
           <button className="createQrCode__button">Générer des QR Codes</button>
           </form>
           <div className="createQrCode__images">
            <div className="createQrCode__image">
                <img src={qr} alt="" className="createQrCode__img" />
                <div className="createQrCode__id">BS342 04723</div>
            </div>
            <button className="createQrCode__print">
              <LocalPrintshopIcon className="createQrCode__print__icon" />
            </button>
           </div>
        </div>
    </div>
  )
}

export default CreateQrCode
