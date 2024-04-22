import React from 'react'
import user from '../assets/user.png'
import arrow from '../assets/arrow-bottom.svg'

const Header = () => {
  return (
   <div className="header">
    <div className="container header__container">
       <h2 className="header__org">
         Organisation
       </h2>
       <div className="header__caption">
         <div className="header__user">
           <div className="header__image">
             <img 
             src={user}
              alt="" className="header__img" />
           </div>
           <div className="header__text">
             <span className="header__name">Jeancy dalos  <img src={arrow} alt="" /></span>
             <span className="header__roles">Admin</span>
           </div>
         </div>
         <ul className="header__menu">
           <li className="header__menu__item">jeancy@gmail.com</li>
           <li className="header__menu__item">Quitter</li>
         </ul>
       </div>
    </div>
   </div>
  )
}

export default Header
