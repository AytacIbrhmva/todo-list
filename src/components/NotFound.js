import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h3 className='text-danger'>not found 404</h3>
        <Link to='/'>back...</Link>
    </div>
  )
}
