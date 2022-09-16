import React from 'react'
import New from './New'
import Navbar from './Navbar'
import FetchApi from './FetchApi'
import Footer from './Footer'



const App = () => {
  return (
    <div >
        
        <Navbar />
        <New />
        <FetchApi /> 
        <Footer />
    </div>
  )
}

export default App