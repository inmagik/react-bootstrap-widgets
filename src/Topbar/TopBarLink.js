import React from 'react'
import { NavLink } from 'react-router-dom'
import DropDown from './DropDown'

const TopBarLink = ({ label, links, to, onClick }) => (
  links
    ? <DropDown label={label} items={links} />
    : (
      <li className='nav-item' onClick={onClick}>
        {to
          ? <NavLink className='nav-link ml-1 mr-1' to={to}>{label}</NavLink>
          : <span className='nav-link ml-1 mr-1'>{label}</span>
        }
      </li>
    )
)

export default TopBarLink
