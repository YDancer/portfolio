import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import Body from "./Body"
import Footer from "./Footer"

createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <Body/>
    <Footer/>
  </>
)
