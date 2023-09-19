import './App.css'
import { Home, Dashboard, Loggin, Secret, Signup } from '@/Pages'
import Header from '@/Components/Header'

function App () {
  return (
    <>
      <Header />
      <p>React Auth</p>
      <Home />
      <Dashboard />
      <Loggin />
      <Secret />
      <Signup />
    </>
  )
}

export default App
