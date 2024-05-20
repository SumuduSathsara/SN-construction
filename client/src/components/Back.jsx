import React from 'react'
import { useLocation } from 'react-router-dom'

import './Back.css'

export default function Back({title}) {
    const location = useLocation()
  return (
    <div>
       <div className="page-header">  
      <section className='back'>
      <h1>{title}</h1>
      <h2>Home / {location.pathname.split("/")[1]}</h2>
      
      </section>
       </div>
    </div>

    
  )
}
