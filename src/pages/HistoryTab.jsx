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
    <div className='history-page flex flex-col justify-center my-10'>
      {playedCards.length > 0 ? (
        <>
          <button
            className='text-white bg-blue-300 py-1 px-3 my-5 w-fit m-auto rounded-lg'
            onClick={handleClearHistory}
          >
            Clear History
          </button>
          <div className='tbl-header'>
            <table cellPadding={0} cellSpacing={0} border={0}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Link</th>
                  <th>Time Played</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className='tbl-content'>
            <table cellPadding={0} cellSpacing={0} border={0}>
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
          </div>
        </>
      ) : (
        <p className='text-white bg-blue-400 py-1 px-3 my-5 w-fit m-auto rounded-lg'>
          No history available
        </p>
      )}
    </div>
  )
}

export default HistoryTab
