import React from 'react'
import { NavLink } from 'react-router-dom'
import DropDown from './DropDown'

const TopBarLink = ({ label, right, links, to, onClick, exact }) => (
  links
    ? <DropDown label={label} items={links} right={right} />
    : (
      <li className='nav-item' onClick={onClick}>
        {to
          ? <NavLink className='nav-link ml-1 mr-1' exact={exact} to={to}>{label}</NavLink>
          : <span className='nav-link ml-1 mr-1'>{label}</span>
        }
      </li>
    )
)

TopBarLink.defaultProps = {
  exact: false,
}

export default TopBarLink
