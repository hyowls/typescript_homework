import React from 'react'
import { getCountry } from './api/country'
import CountryList from './components/CountryList'

const App = () => {
  getCountry()
  return (
    <>
      <CountryList />
    </>
  )
}

export default App