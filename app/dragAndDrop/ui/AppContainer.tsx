import React from 'react'
import   "../../globals.css"

const AppContainer = ({children}) => {
  return (
    <div className='appContainer'>
      {children}
    </div>
  )
}

export default AppContainer;