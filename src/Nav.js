import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => (
  <nav className="nav">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/bad-example">Bad Example</Link>
      </li>
      <li>
        <Link to="/in-progress-example">In Progress Example</Link>
      </li>
      <li>
        <Link to="/good-example">Good Example</Link>
      </li>
    </ul>
  </nav>
)
