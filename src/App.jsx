import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Navbar/Footer/Footer'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/coin/:coinId' element={<Coin />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  
  )
}

export default App
