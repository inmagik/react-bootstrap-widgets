import React, { PureComponent } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class DropDown extends PureComponent {
  state = {
    open: false,
  }

  toggleDropdown = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    const { label, items, icon, right } = this.props
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" onClick={this.toggleDropdown}>
          {!icon ? label : <i className={`fa fa-${label}`}/>}
          </a>
          <div
            className={`dropdown-menu ${this.state.open ? 'show' : ''}`}
            aria-labelledby="navbarDropdown"
            style={right && {right:0, left:'auto'}}
            >
            {items.map((item, i) => (
              item.link ?
                <NavLink
                  className="dropdown-item" key={i}
                  to={item.link}
                  >
                  {item.label}
                </NavLink>
              : <span
                  onClick={item.onClick}
                  className="dropdown-item"
                  key={i}
                  >
                  {item.label}
                </span>
              ))}
          </div>
        </li>
    )
  }
}

export default DropDown
