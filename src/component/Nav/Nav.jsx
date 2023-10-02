import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true)
      }else setShow(false)
      
    })
  },[])
  return (
    <div className={`nav ${show&& 'nav__black'}`}>
          <img className='nav__logo '
              src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
              alt='Netflix Logo'
          />
        <img className='nav__avatar'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwMI7pnu3PeC9Csr4bUfIgQxrboO8jOhOQQYbAgw&s'
              alt='Avatar Logo'
          />
    </div>
  )
}

export default Nav
