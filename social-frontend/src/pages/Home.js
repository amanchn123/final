import React from 'react'
import './Home.css'
// import Profile from '../components/profile/profile'
import Postside from '../components/postSide/Postside'

import Auth from './auth'
import { Link } from 'react-router-dom'
import Suggestion from './suggestion'

export default function Home() {
  return (
    <div className='bg-gradient-to-l Home'>     
      <Postside className='postSide' />
      <div className='right' style={{borderLeft:"3px solid gray",backgroundColor:"rgb(52, 53, 54)"}}><Suggestion /></div>
    </div>
  )
}