import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  return (
    <div className='text-right bg-blue-400 py-4 px-8'>
      <div className='mx-20 flex justify-between'>
        <div>
          <p
            className='cursor-pointer text-lg text-white font-semibold hover:text-black'
            onClick={() => {
              navigate('/createbucket')
            }}
          >
            Create Bucket
          </p>
        </div>
        <div>
          {window.location.pathname == '/' ? (
            <p
              className='cursor-pointer text-lg text-white font-semibold hover:text-black'
              onClick={() => {
                navigate('/history')
              }}
            >
              History
            </p>
          ) : (
            <p
              className='cursor-pointer text-lg text-black font-semibold hover:text-black'
              onClick={() => {
                navigate('/')
              }}
            >
              Home
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Nav
