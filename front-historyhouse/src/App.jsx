import { Routes, Route } from 'react-router-dom'

import Libro from './componente/Libro'
import Navbar from './inicio/Navbar'
import Home from './inicio/Home'



const App = () => {
  return (
    <>

      <Navbar></Navbar>
      <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Libro' element={<Libro />} />
        </Routes>
      </div>


    </>
  )
}

export default App



