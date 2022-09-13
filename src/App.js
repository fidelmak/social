import React from 'react'
import New from './New'
import Navbar from './Navbar'

const xApp = {
    backgroundColor:'red'
}

const App = () => {
  return (
    <div style={xApp}>
        <New />
        <Navbar />
    </div>
  )
}

export default App