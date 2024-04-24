import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <PrivateSet unauthenticated="home">
          <Route path="/todos" page={TodoPage} name="todos" />
        </PrivateSet>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
