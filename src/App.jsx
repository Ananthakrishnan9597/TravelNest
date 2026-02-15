import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
    <style>{`html { scroll-behavior: auto !important; }`}</style>
    <Navbar></Navbar>
    <Home></Home>
    <Main></Main>
    <Footer></Footer> 
    </>
  )
}

export default App
