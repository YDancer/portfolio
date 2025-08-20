import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from "./components/Navbar"
import Header from './Header'
import Project from "./components/Project"
import Body from "./Body"


createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <Body/>
  </>
)
