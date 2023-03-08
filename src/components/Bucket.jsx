import React, { useState } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
import VideoModal from './VideoModal'

const Bucket = (props) => {
  const { bucket, cards, buckets } = props
  const [selectedOption, setSelectedOption] = useState(null)
  const [rename, setRename] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [videoLink, setVideoLink] = useState('')
  const navigate = useNavigate()

  const deleteCards = () => {
    selectedOption.map(async (item) => {
      try {
        const CARD_URL = `https://convin-assign-himanshu.onrender.com/cards/${item.value}`
        await axios.delete(CARD_URL)
      } catch (error) {
        console.log(error.message)
      }
    })
    location.reload()
  }

  const deleteBucket = async () => {
    try {
      const CARD_URL = `https://convin-assign-himanshu.onrender.com/buckets/${bucket.id}`
      await axios.delete(CARD_URL)
    } catch (error) {
      console.log(error.message)
    }
    location.reload()
  }

  const renameBucket = async (e) => {
    e.preventDefault()
    try {
      const BUCKET_URL = `https://convin-assign-himanshu.onrender.com/buckets/${bucket.id}`
      await axios.patch(BUCKET_URL, {
        name: rename,
      })
    } catch (error) {
      console.log(error.message)
    }
    location.reload()
  }

  const newCards = cards.filter(function (card) {
    return card.bucketId == bucket.id
  })

  const options = [
    ...newCards.map((card) => ({ value: card.id, label: card.name })),
  ]

  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles) => ({ ...styles, color: 'black' }),
    multiValueLabel: (styles) => ({ ...styles, color: '#fff' }),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: '#60a5fa',
      color: 'white',
    }),
  }

  return (
    <>
      {showModal ? (
        <VideoModal
          showModal={showModal}
          setShowModal={setShowModal}
          videoLink={videoLink}
          setVideoLink={setVideoLink}
        />
      ) : (
        <div className='min-h-[10rem] py-5 px-10 my-14 text-white text-lg font-semibold bg-blue-300 w-full mx-auto'>
          <div className='bucket-name py-5 text-center'>
            <p className='text-2xl py-2'>{bucket.name}</p>
          </div>
          <div className='cards flex justify-around flex-wrap'>
            {newCards.map((card) => {
              const filterdBuckets = buckets.filter(function (item) {
                return item.id != bucket.id
              })
              return (
                <div key={card.id} className='my-5'>
                  <Card
                    card={card}
                    buckets={filterdBuckets}
                    videoLink={videoLink}
                    setVideoLink={setVideoLink}
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />
                </div>
              )
            })}
          </div>
          <div className='flex justify-center gap-20 items-center py-10'>
            <div className='w-1/4'>
              <Select
                options={options}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                styles={colorStyles}
                isMulti
              />
            </div>
            <div className='bg-white text-blue-600 rounded-md'>
              <button onClick={deleteCards} className='py-1 px-3'>
                Delete cards
              </button>
            </div>
          </div>
          <div className='options flex justify-around my-5 items-center'>
            <div className='bg-white text-blue-400 py-1 px-3 rounded-lg'>
              <button
                onClick={() => {
                  navigate('/createcard', {
                    state: { bucketId: bucket.id },
                  })
                }}
              >
                Create new card
              </button>
            </div>
            <div className='bg-white text-blue-400 py-1 px-3 rounded-lg'>
              <button onClick={deleteBucket}>Delete this bucket</button>
            </div>
            <form onSubmit={renameBucket}>
              <div className='flex gap-4'>
                <input
                  onChange={(e) => {
                    setRename(e.target.value)
                  }}
                  type='text'
                  name='newBucketName'
                  id='rename'
                  className='bg-white text-black rounded-sm'
                />
                <button
                  type='submit'
                  className='bg-white text-blue-400 py-1 px-3 rounded-lg'
                >
                  Rename bucket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Bucket
