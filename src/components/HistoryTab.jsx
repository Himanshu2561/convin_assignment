import React, { useEffect, useState } from 'react'

const HistoryTab = () => {
  const [playedCards, setPlayedCards] = useState([])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('playedCards')) || []
    setPlayedCards(storedData)

    window.addEventListener('storage', () => {
      const newData = JSON.parse(localStorage.getItem('playedCards')) || []
      setPlayedCards(newData)
    })
  }, [])

  const handleClearHistory = () => {
    localStorage.removeItem('playedCards')
    setPlayedCards([])
  }

  return (
    <div>
      <h2>History</h2>
      {playedCards.length > 0 ? (
        <>
          <button onClick={handleClearHistory}>Clear History</button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Link</th>
                <th>Time Played</th>
              </tr>
            </thead>
            <tbody>
              {playedCards.map((card) => (
                <tr key={card.timePlayed}>
                  <td>{card.name}</td>
                  <td>{card.link}</td>
                  <td>{card.timePlayed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>No history available</p>
      )}
    </div>
  )
}

export default HistoryTab
