import React from 'react'
import Button from '../Button'

const Ctaform = () => {
  return (
    <form action="#" className='ctaform'>
        <p>Register now and become a VIP</p>
        <label htmlFor="#">
            <input type="text" placeholder='Add email here' name="" id="" />
            <Button btype='submit'>Register now!</Button>
        </label>
    </form>
  )
}

export default Ctaform
