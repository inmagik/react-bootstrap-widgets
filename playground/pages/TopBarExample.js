import React from 'react'
import {Topbar} from 'react-bootstrap-widgets'

export default class TopbarExample extends React.PureComponent {
  render(){
    return <div>
      <Topbar
        brand="Ciao"
        navbarClass="bg-primary text-white">

      </Topbar>
    </div>
  }
}
