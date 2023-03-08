import React, { useState } from 'react'
import axios from 'axios'

const EditCard = (props) => {
  const { id, editToggle, setEditToggle, card } = props
  const [cardName, setCardName] = useState(card.name)
  const [cardLink, setCardLink] = useState(card.link)

  const updateCard = async (id) => {
    try {
      const CARD_URL = `https://convin-assign-himanshu.onrender.com/cards/${id}`
      await axios.patch(CARD_URL, {
        name: cardName,
        link: cardLink,
      })
    } catch (error) {
      console.log(error.message)
    }
    location.reload()
  }

  return (
    <div className='text-center h-[18rem] w-[18rem] p-4 text-sm rounded-md flex justify-evenly flex-col gap-6 bg-white text-blue-600'>
      <div>
        <p>New Name</p>
        <input
          className='bg-blue-200 my-2 w-full h-6 text-black rounded-sm'
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
          <a href='http://'>New Link</a>
        </p>
        <input
          className='bg-blue-200 my-2 w-full h-6 text-black rounded-sm'
          onChange={(e) => {
            setCardLink(e.target.value)
          }}
          type='text'
          name='cardLink'
          id='cardLink'
        />
      </div>
      <div className='flex justify-between gap-2 items-center'>
        <button
          onClick={() => {
            updateCard(id)
          }}
          className='bg-blue-400 text-white py-2 rounded-sm w-1/4'
        >
          Save
        </button>
        <button
          onClick={() => {
            setEditToggle(!editToggle)
          }}
          className='bg-blue-400 text-white py-2 rounded-sm w-1/4'
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default EditCard
