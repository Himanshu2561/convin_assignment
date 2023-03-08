import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CreateCard = () => {
  const CARD_URL = `https://convin-assign-himanshu.onrender.com/cards`
  const [cardName, setCardName] = useState('')
  const [cardLink, setCardLink] = useState('')
  const { state } = useLocation()
  const navigate = useNavigate()

  const createCard = async () => {
    try {
      await axios.post(CARD_URL, {
        name: cardName,
        link: cardLink,
        bucketId: state.bucketId,
      })
    } catch (error) {
      console.log(error.message)
    }
    navigate('/')
  }

  return (
    <div className='flex justify-center items-center mt-20'>
      <div className='text-center h-[24rem] w-[24rem] p-4 text-lg font-semibold rounded-md flex justify-evenly flex-col gap-6 bg-white text-blue-600'>
        <div>
          <p>Card Name</p>
          <input
            className='bg-blue-200 my-2 w-full h-8 text-black rounded-sm'
            onChange={(e) => {
              setCardName(e.target.value)
            }}
            type='text'
            name='cardName'
            id='cardName'
          />
        </div>
        <div>
          <p>
            <a href='http://'>Video/Audio Link</a>
          </p>
          <input
            className='bg-blue-200 my-2 w-full h-8 text-black rounded-sm'
            onChange={(e) => {
              setCardLink(e.target.value)
            }}
            type='text'
            name='cardLink'
            id='cardLink'
          />
        </div>
        <button
          onClick={createCard}
          className='bg-blue-400 text-white py-2 rounded-sm'
        >
          Create Card
        </button>
      </div>
    </div>
  )
}

export default CreateCard
