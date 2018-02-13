import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Input } from 'reactstrap'
import {Paginator, withDataTable} from 'react-bootstrap-widgets'
import { toPairs } from 'lodash'

let DataTable = ({ items, page, numPages, goToPage, filters }) => (
  <div>
     <table className='table table-bordered'>
       <thead>
         <tr>
           <th><Input type='text' {...filters.username} /></th>
           <th><Input type='text' {...filters.age} /></th>
         </tr>
         <tr>
           <th>Username</th>
           <th>Age</th>
         </tr>
       </thead>
       <tbody>
         {items.map(item => (
           <tr key={item.username}>
             <td>{item.username}</td>
             <td>{item.age}</td>
           </tr>
         ))}
       </tbody>
     </table>
     <Paginator currentPage={page} numPages={numPages} goToPage={goToPage} />
  </div>
)

DataTable = withRouter(withDataTable({
  filters: ['username', 'age'],
  // queryString: false,
})(DataTable))

const USERS = [
  {
    username: 'Giova',
    age: 24,
  },
  {
    username: 'Lo Re',
    age: 37,
  },
  {
    username: 'Jimmy',
    age: 17,
  },
  {
    username: 'Lu',
    age: 70,
  },
  {
    username: 'Ninja',
    age: 24,
  },
]
const PAGE_SIZE = 2

class WithDataTableExample extends React.PureComponent {
  state = {
    users: [],
  }

  loadItems = ({ page, ...filters }) => {
    // Fake data
    let users = USERS

    // Fake filters
    users = users.filter(u => {
      return toPairs(filters).every(f => {
        const [ field, value ] = f
        if (value === '') {
          return true
        }
        if (field === 'age') {
          return u.age === +value
        }
        return `${u[field]}`.toLowerCase().indexOf(value.toLowerCase()) !== -1
      })
    })

    // Fake pagination
    const paginateUsers = users.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

    // Fake taxi
    this.setState({
      users: paginateUsers,
      numPages: Math.ceil(users.length / PAGE_SIZE),
    })
  }

  render(){
    return (
      <div className='container-fluid p-2'>
        <DataTable
          loadItems={this.loadItems}
          numPages={this.state.numPages}
          items={this.state.users}
        />
      </div>
    )
  }
}

export default WithDataTableExample
