import { Routes, Route } from "react-router-dom";


import Nav from "./components/Nav"

import './App.css'
import Home from './pages/Home'
import PersonalNotes from './pages/PersonalNotes'
import Articles from './pages/Articles'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

export default function App() {
  return (
      <main>
        <Nav />
        <Routes>
          <Route path='/articles' element ={<Articles />} />
          <Route path='/' element ={<Home />} />
          <Route path='/personalNotes' element={<PersonalNotes /> } />
          <Route path='/projects' element={<Projects /> } />
          <Route path='/resume' element ={<Resume />} />
          <Route path='/contact' element ={<Contact />} />
        </Routes>
      </main>
  )
}


// contact, resume, dark mode to add
