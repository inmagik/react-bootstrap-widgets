import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import TopbarExample from './pages/TopbarExample'

const App = () => (
    <Router basename={process.env.NODE_ENV === 'production' ? '/react-bootstrap-widgets/' : undefined}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/topbar' exact component={TopbarExample} />
      </Switch>
    </Router>

)

ReactDOM.render(<App />, document.getElementById('root'))
