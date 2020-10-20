import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Nav } from './Nav'
import { HomePage } from './HomePage'
import { BadExamplePage } from './BadExamplePage'
import { InProgressExamplePage } from './InProgressExamplePage'
import { GoodExamplePage } from './GoodExamplePage'
import './App.css'

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/a11y-workshop/build">
        <Nav />
        <div className="appPages">
          <Switch>
            <Route path="/bad-example">
              <BadExamplePage />
            </Route>
            <Route path="/in-progress-example">
              <InProgressExamplePage />
            </Route>
            <Route path="/good-example">
              <GoodExamplePage />
            </Route>
            <Route path="*">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
