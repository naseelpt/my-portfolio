
import './App.css'
import Header from './pages/Header'
import Footer from './pages/Footer';
import Home from './pages/Home'
import Skill from './pages/Skill'
import Project from './Project';
import Aboutme from './Aboutme';













function App() {


  return (
    <div className=' bg-[#12061f] w-full min-h-screen '> 
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
