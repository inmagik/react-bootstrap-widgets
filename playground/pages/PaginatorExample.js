import React, { Fragment } from 'react'
import {Paginator} from 'react-bootstrap-widgets'

export default class PaginatorExample extends React.PureComponent {
  state = {
    page: 1,
  }

  render(){
    return (
      <div>
        <h1>Page: {this.state.page}</h1>
        <Paginator
          numPages={10}
          goToPage={page => this.setState({ page })}
          currentPage={this.state.page}
        />
      </div>
    )
  }
}
