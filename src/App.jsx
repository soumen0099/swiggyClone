import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Category from './components/Category'
import TopRest from './components/TopRest'
import OnlineDelivery from './components/OnlineDelivery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Category />
      <TopRest/>
      <OnlineDelivery/>
    </>
  )
}

export default App
