import React, { Fragment, PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

class PaddedList extends PureComponent {
  render() {
    const { label, items = [], className } = this.props
    return (
      <Fragment>
        <li className={`list-group-item ${className}`}>
          <span className={'d-inline-flex align-items-center'}>{label}</span>
        </li>
        {items.map((item, i) => (
          <li
            key={i}
            className={`list-group-item pl-5 ${className}`}
            onClick={item.onClick}>
            {item.to
              ? <NavLink to={item.to}>{item.label}</NavLink>
              : item.label
            }
          </li>
        ))}
      </Fragment>
    )
  }
}

export default PaddedList
