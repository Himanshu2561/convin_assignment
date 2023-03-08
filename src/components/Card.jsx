import React, { useState } from 'react'
import { BsFillTrash2Fill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import Select from 'react-select'
import axios from 'axios'
import EditCard from '../components/EditCard'

const Card = ({ card, buckets, setVideoLink, setShowModal }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [editToggle, setEditToggle] = useState(false)

  const deleteCard = async (id) => {
    const CARD_URL = `http://localhost:3000/cards/${id}`
    await axios.delete(CARD_URL).catch((err) => {
      console.log(err)
    })
    location.reload()
  }

  const moveCard = async () => {
    try {
      const CARD_URL = `http://localhost:3000/cards/${card.id}`
      await axios.patch(CARD_URL, {
        bucketId: selectedOption.value,
      })
    } catch (error) {
      console.log(error.message)
    }
    location.reload()
  }

  const handlePlay = () => {
    const playedCards = JSON.parse(localStorage.getItem('playedCards')) || []
    playedCards.push({
      name: card.name,
      link: card.link,
      timePlayed: new Date().toLocaleString(),
    })
    localStorage.setItem('playedCards', JSON.stringify(playedCards))
    setVideoLink(card.link)
    setShowModal(true)
  }

  const options = [
    ...buckets.map((bucket) => ({ value: bucket.id, label: bucket.name })),
  ]

  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles) => ({ ...styles, color: 'black' }),
  }

  return (
    <>
      {editToggle ? (
        <EditCard
          id={card.id}
          editToggle={editToggle}
          setEditToggle={setEditToggle}
        />
      ) : (
        <div className='text-center h-[18rem] w-[18rem] p-4 text-sm rounded-md flex justify-evenly flex-col gap-6 bg-white text-blue-600'>
          <p className='break-words'>{card.name}</p>
          <p className='cursor-pointer break-words' onClick={handlePlay}>
            {card.link}
          </p>
          <div className='flex justify-around gap-2 text-xl items-center text-black'>
            <div
              className='edit-btn cursor-pointer'
              onClick={() => {
                setEditToggle(!editToggle)
              }}
            >
              <AiFillEdit />
            </div>
            <div
              className='delete-btn cursor-pointer'
              onClick={() => {
                deleteCard(card.id)
              }}
            >
              <BsFillTrash2Fill />
            </div>
          </div>
          <div className='flex justify-around items-center'>
            <div>
              <p>Move to : </p>
            </div>
            <div className='w-1/2'>
              <Select
                options={options}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                styles={colorStyles}
              />
            </div>
          </div>
          <button
            onClick={moveCard}
            className='bg-blue-400 text-white py-2 rounded-sm'
          >
            Move
          </button>
        </div>
      )}
    </>
  )
}

export default Card
