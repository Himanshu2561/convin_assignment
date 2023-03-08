import React, { useEffect, useState } from 'react'
import Bucket from '../components/Bucket'
import axios from 'axios'

const Home = () => {
  const [buckets, setBuckets] = useState([])
  const [cards, setCards] = useState([])

  const BUCKET_URL = 'https://convin-assign-himanshu.onrender.com/buckets'
  const CARD_URL = 'https://convin-assign-himanshu.onrender.com/cards'

  useEffect(() => {
    axios
      .get(BUCKET_URL)
      .then((res) => {
        setBuckets(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get(CARD_URL)
      .then((res) => {
        setCards(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      {buckets.map((bucket) => {
        return (
          <div key={bucket.id}>
            <Bucket bucket={bucket} cards={cards} buckets={buckets} />
          </div>
        )
      })}
    </div>
  )
}

export default Home
