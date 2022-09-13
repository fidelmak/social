import React from 'react'
import New from './New'
import Navbar from './Navbar'
import FetchApi from './FetchApi'

const xApp = {
    backgroundColor:'red'
}

const App = () => {
  return (
    <div >
        
        <Navbar />
        <New />
        <FetchApi />
    </div>
  )
}

export default App