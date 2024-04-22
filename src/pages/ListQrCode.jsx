import React from 'react'
import qr from '../assets/qr.png'

const ListQrCode = () => {
  return (
   <div className="listqrCode">
     <div className="container listqrCode__container">
        <h2 className="listqrCode__title">Qr Codes</h2>
        <ul className="listqrCode__list">
            <li className="listqrCode__item">
                <div className="listqrCode__image">
                    <img src={qr} alt="" className="listqrCode__img" />
                </div>
                <div className="listqrCode__id">BS342 04723</div>
                <button className="listqrCode__delete">Supprimer</button>
            </li>
            
        </ul>
     </div>
   </div>
  )
}

export default ListQrCode
