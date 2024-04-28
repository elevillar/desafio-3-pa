import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './layout/Home'
import Pokemones from './layout/Pokemones'
import NotFound from './layout/NotFound'
import Cards from './layout/Cards'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pokemones' element={<Pokemones />} />
      <Route path='/pokemones/:name' element={<Cards />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
