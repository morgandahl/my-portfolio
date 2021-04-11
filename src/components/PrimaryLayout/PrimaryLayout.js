import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader'
import Home from '../Home/Home'
import PrimaryFooter from '../PrimaryFooter/PrimaryFooter'

function PrimaryLayout() {
  return (
    <div className="primary-layout">
      <PrimaryHeader />
      <main className="primary-content">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <PrimaryFooter />
    </div>
  )
}

export default PrimaryLayout
