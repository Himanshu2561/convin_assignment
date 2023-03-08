import React from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import HistoryTab from './pages/HistoryTab'
import CreateBucket from './pages/CreateBucket'
import CreateCard from './pages/CreateCard'
import PageNotFound from './pages/PageNotFound'

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
