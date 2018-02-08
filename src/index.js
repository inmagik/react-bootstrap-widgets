import React, { PureComponent } from 'react'
import DropDown from './DropDown'
import { Nav, Navbar, NavItem } from 'reactstrap'
import matchMedia from 'match-media'
import { NavLink } from 'react-router-dom'
import './Topbar.css'

const ButtonMenu = ({ onClick, bigToggler = false, open, navbarClass }) => (
  <button className={'off-canvas-btn'} onClick={onClick}>
    <i
      className={`fa fa-${open ? `close` : `bars`} ${bigToggler ? `fa-2x`: ''} ${navbarClass}`}
      aria-hidden="true"
    />
  </button>
)

class PaddedList extends PureComponent {
  render() {
    const { label, items, navbarClass } = this.props
    return (
      <div>
      <li className={`list-group-item ${navbarClass}`}>
        <span className={'d-inline-flex align-items-center'}>{label}</span>
      </li>
      {items.map((item, i) => (
        <li key={i} className={`list-group-item ${navbarClass} pl-5`}>
          <NavLink
            to={item.link}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
      </div>
    )
  }
}



class Topbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showOffCanvas: false,
    }
  }

  componentDidMount() {
    this.updateOffCanvas()
    window.addEventListener('resize', this.updateOffCanvas, false)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateOffCanvas)
  }

  componentDidUpdate(oldProps) {
    if(oldProps.breakpoint !== this.props.breakpoint ) {
      this.updateOffCanvas()
    }
  }

  updateOffCanvas = () => {
    const { breakpoint } = this.props
    let showOffCanvas = false
    if (window.matchMedia(`only screen and (${breakpoints[breakpoint]})`).matches) {
      showOffCanvas = true
    }

    this.setState({
      showOffCanvas,
    })

  }

  toggleMenu = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { navbarClass,
            rightLinks,
            leftLinks,
            leftBtn,
            rightBtn,
            bigToggler,
            breakpoint,
            offCanvRight,
            brand } = this.props

      const { showOffCanvas } = this.state

    return (
        <div
          className={`navbar navbar-expand w-100 nav-h ${navbarClass}`}
          >
          <div className='d-inline-flex justify-content-between w-100 align-items-center'>

            <div className='d-inline-flex z-1000'>
              {showOffCanvas && leftBtn &&
                <ButtonMenu
                  onClick={this.toggleMenu}
                  bigToggler={bigToggler}
                  open={this.state.open}
                  navbarClass={navbarClass}
                />}

              <div className="navbar-brand">{brand}</div>

              {!showOffCanvas && leftLinks &&
                <ul className='navbar-nav'>
                {leftLinks.map((l, i) => (
                  l.children
                  ? <DropDown key={i} label={l.label} items={l.children}  />
                  : <li className="nav-item " key={i}>
                    <NavLink
                      to={l.link}
                      className={`nav-link ml-1 mr-1`}
                      >
                      {l.label}
                    </NavLink>
                    </li>
                ))}
              </ul>
            }
            </div>

            <div className='d-inline-flex p-2 '>
              {!showOffCanvas && rightLinks && <Nav className=''>
                {rightLinks.map((l, i) => (
                  l.children
                  ? <DropDown
                      key={i}
                      label={l.label}
                      items={l.children}
                      icon={l.icon}
                      right
                    />
                  : <NavLink
                      key={i}
                      to={l.link}
                      className='ml-1 mr-1'
                    >
                    {l.label}
                    </NavLink>
                ))}
              </Nav>}
              {showOffCanvas && rightBtn &&
                <ButtonMenu
                  onClick={this.toggleMenu}
                  bigToggler={bigToggler}
                  open={this.state.open}
                />}
            </div>

          </div>

          {showOffCanvas && this.state.open &&
            <div
              className={`off-canvas ${offCanvRight ? `right0` : `left0`} ${navbarClass}`}
              >
              <ul className="list-group w-100">
              {rightLinks && rightLinks.map((l, i) => (
                l.children
                ? <PaddedList key={i} label={l.label} items={l.children} navbarClass={navbarClass} />
                : <li className={`list-group-item ${navbarClass}`} key={i}>
                  <NavLink
                    to={l.link}
                    className='ml-1 mr-1'
                    >
                      {l.label}
                  </NavLink>
                  </li>
              ))}
              {leftLinks && leftLinks.map((l, i) => (
                l.children
                ? <PaddedList key={i} label={l.label} items={l.children} navbarClass={navbarClass} />
                : <li className={`list-group-item ${navbarClass}`} key={i}><NavLink

                    to={l.link}
                    className='ml-1 mr-1'
                  >
                    {l.label}
                  </NavLink></li>
              ))}
            </ul>
            </div>}
        </div>
    )
  }
}

Topbar.defaultProps = {
  breakpoint: 'sm',
  leftBtn: false,
  rightBtn: false,
  offCanvRight: false,
  navbarClass: 'navbar-dark bg-dark text-white',
}

export default Topbar
