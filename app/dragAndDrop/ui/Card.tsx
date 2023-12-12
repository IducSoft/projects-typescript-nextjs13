import React from 'react'
import   "../../globals.css";


type CardProps = {
    text: string
}

const Card = ({text}: CardProps) => {
  return (
    <div className='CardContainer'>{text}</div>
  )
}

export default Card