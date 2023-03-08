import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBucket = () => {
  const CARD_URL = `http://localhost:3000/buckets`
  const [bucketName, setBucketName] = useState('')
  const navigate = useNavigate()

  const createBucket = async () => {
    try {
      await axios.post(CARD_URL, {
        name: bucketName,
      })
    } catch (error) {
      console.log(error.message)
    }
    navigate('/')
  }

  return (
    <div className='flex justify-center items-center mt-20'>
      <div className='text-center h-[20rem] w-[20rem] p-4 text-lg font-semibold rounded-md flex justify-evenly flex-col gap-6 bg-white text-blue-600'>
        <div>
          <p>Bucket Name</p>
          <input
            className='bg-blue-200 my-2 w-full h-8 text-black rounded-sm'
            onChange={(e) => {
              setBucketName(e.target.value)
            }}
            type='text'
            name='cardName'
            id='cardName'
          />
        </div>
        <button
          onClick={createBucket}
          className='bg-blue-400 text-white py-2 rounded-sm'
        >
          Create Bucket
        </button>
      </div>
    </div>
  )
}

export default CreateBucket
