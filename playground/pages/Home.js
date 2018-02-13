import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className='container-fluid'>
        <h1 className='text-center py-2' style={{ color: 'deepskyblue'}}>react-bootstrap-widgets</h1>
        <h2>Components:</h2>
        <div className='p-2'>
          <ul>
            <li><Link to='/TopBar'>TopBar</Link></li>
            <li><Link to='/Paginator'>Paginator</Link></li>
            <li><Link to='/withDataTable'>withDataTable</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
