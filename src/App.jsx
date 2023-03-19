import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'

const Home = lazy(() => import('./pages/Home'))
const HistoryTab = lazy(() => import('./pages/HistoryTab'))
const CreateBucket = lazy(() => import('./pages/CreateBucket'))
const CreateCard = lazy(() => import('./pages/CreateCard'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))

function App() {
  return (
    <>
      <Nav />
      <Suspense fallback={<h1>Please Wait, Loading...</h1>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/history' element={<HistoryTab />} />
          <Route path='/createbucket' element={<CreateBucket />} />
          <Route path='/createcard' element={<CreateCard />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
