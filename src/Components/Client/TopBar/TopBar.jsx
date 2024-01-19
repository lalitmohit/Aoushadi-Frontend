import React from 'react'
import Account from "../../../Assets/Account.svg"
import "./TopBar.css"

const TopBar = ({username}) => {
  return (
    <div className='TopBar'>
        <div className='Image-TopBar'>
            <img src={Account} alt='Account' />
            <p>{username}</p>
        </div>
    </div>
  )
}

export default TopBar