import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'

function PrimaryHeader() {
  return (
    <header className="primary-header">
      <div className="container">
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  )
}

export default PrimaryHeader
