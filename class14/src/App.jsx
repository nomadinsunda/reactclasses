import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import LayoutMeasurer from './components/LayoutMeasurer'
import { AppProvider } from './components/AppProvider'

function App() {
  return (
    <AppProvider>
      <Header />
      <Main />
      <LayoutMeasurer />
      <Footer />
    </AppProvider>
  )
}

export default App