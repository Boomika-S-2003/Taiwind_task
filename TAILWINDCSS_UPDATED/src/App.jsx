import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import HomePage from './pages/HomePage.jsx'

const App=()=>{
  return(
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
      </Routes>
    </main>
    <footer>
      <div className='bg-gray-800 flex justify-center items-center h-30 text-white'>
        booms@gmil
      </div> 
    </footer>
    
    </>
  )
}

export default App