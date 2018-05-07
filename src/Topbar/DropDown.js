import React, { PureComponent } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class DropDown extends PureComponent {
  render() {
    const { label, items, icon, right } = this.props
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle caret nav>{label}</DropdownToggle>
        <DropdownMenu right={right}>
          {items.map((item, i) => (
            item.to
              ? <DropdownItem key={i} onClick={item.onClick} tag={NavLink} to={item.to}>{item.label}</DropdownItem>
              : <DropdownItem key={i} onClick={item.onClick}>{item.label}</DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
}

DropDown.defaultProps = {
  right: true,
}

export default DropDown
