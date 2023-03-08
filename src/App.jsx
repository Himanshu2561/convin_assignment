import React from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import HistoryTab from './components/HistoryTab'
import CreateBucket from './components/CreateBucket'
import CreateCard from './components/CreateCard'
import PageNotFound from './components/PageNotFound'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<HistoryTab />} />
        <Route path='/createbucket' element={<CreateBucket />} />
        <Route path='/createcard' element={<CreateCard />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
