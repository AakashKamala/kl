import { Routes, Route } from "react-router-dom";

import {Link} from 'react-router-dom';

function Nav() {
  return(
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/projects">Projects</Link>
        <div className='essentials'>
          <Link to="/personalNotes">Personal Notes</Link>
          <a href="/">Dark Mode</a>
        </div>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Nav