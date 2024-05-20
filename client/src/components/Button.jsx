import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
import { useSelector } from 'react-redux';


export default function Button() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    
    <Link to='/profile'>
      {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <button className='btn'>Sign In</button>
            )}
       
        
    </Link>
    
    
  )
}
