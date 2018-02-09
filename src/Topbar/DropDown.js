import React, { PureComponent } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
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
       <Dropdown isOpen={this.state.open} toggle={this.toggleDropdown} nav>
        <DropdownToggle caret nav>
          {label}
        </DropdownToggle>
        <DropdownMenu>
          {items.map((item, i) => (
            item.to
              ? <DropdownItem key={i} onClick={item.onClick} tag={NavLink} to={item.to}>{item.label}</DropdownItem>
              : <DropdownItem key={i} onClick={item.onClick}>{item.label}</DropdownItem>
        ))}
        </DropdownMenu>
      </Dropdown>
    )
  }
}

export default DropDown
