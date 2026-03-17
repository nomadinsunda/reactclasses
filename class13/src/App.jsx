import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import AppProvider from './components/AppProvider'


function App() {
  return (
    <AppProvider>
      <Header />
      <Sidebar />
      <Main />
      <TaskForm />
      <TaskList />
      <Footer />
    </AppProvider>
  )
}

export default App;