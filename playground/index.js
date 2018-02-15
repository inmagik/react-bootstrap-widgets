import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import TopbarExample from './pages/TopbarExample'
import PaginatorExample from './pages/PaginatorExample'
import PropertiesGridExample from './pages/PropertiesGridExample'
import WithDataTableExample from './pages/WithDataTableExample'
import WithModalConfirmExample from './pages/WithModalConfirmExample'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => (
  <Router basename={process.env.NODE_ENV === 'production' ? '/react-bootstrap-widgets/' : undefined}>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Topbar' exact component={TopbarExample} />
      <Route path='/Paginator' exact component={PaginatorExample} />
      <Route path='/PropertiesGrid' exact component={PropertiesGridExample} />
      <Route path='/withDataTable' exact component={WithDataTableExample} />
      <Route path='/withModalConfirm' exact component={WithModalConfirmExample} />
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
