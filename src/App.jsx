
import './App.css'
import Header from './pages/Header'
import Footer from './pages/Footer';
import Home from './pages/Home'
import Skill from './pages/Skill'
import Project from './Project';
import Aboutme from './Aboutme';













function App() {


  return (
    <div className='w-screen bg-[#12061f] min-h-screen flex flex-col'> 
      <Header/>
      <Home/>
      <Aboutme/>
      <Skill/>
      <Project/>
      <Footer/>
    </div>

  )
}

export default App
