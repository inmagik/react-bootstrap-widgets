import 'match-media'
import React, { PureComponent, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { breakpoints } from '../consts'
import TopBarLink from './TopBarLink'
import PaddedList from './PaddedList'
import TogglerButton from './TogglerButton'

const baseOffCanvasStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  zIndex: 900,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}

class Topbar extends PureComponent {
  state = {
    open: false,
    showOffCanvas: false,
  }

  componentDidMount() {
    this.updateOffCanvas()
    window.addEventListener('resize', this.updateOffCanvas, false)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateOffCanvas)
  }

  componentDidUpdate(oldProps) {
    if (oldProps.breakpoint !== this.props.breakpoint ) {
      this.updateOffCanvas()
    }
  }

  updateOffCanvas = () => {
    const { breakpoint } = this.props
    let showOffCanvas = false
    if (window.matchMedia(`only screen and (${breakpoints[breakpoint]})`).matches) {
      showOffCanvas = true
    }

    if (this.state.showOffCanvas !== showOffCanvas) {
      this.setState({ showOffCanvas })
    }
  }

  toggleMenu = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const {
      classes,
      navbarClass,
      navbarHeight,
      brand,
      rightLinks,
      leftLinks,
      togglerPosition,
      togglerClassName,
      offCanvasClass,
      offCanvasStyle,
      offCanvasItemClass,
      offCanvasPosition,
      offCanvasMenuOpenClass,
      offCanvasMenuClosedClass,
    } = this.props

    let offCanvasStyles = {
      ...baseOffCanvasStyle,
      ...offCanvasStyle,
      top: navbarHeight,
    }
    if (offCanvasPosition === 'right') {
      offCanvasStyles = { ...offCanvasStyles, right: 0 }
    } else if (offCanvasPosition === 'left') {
      offCanvasStyles = { ...offCanvasStyles, left: 0 }
    }

    const { showOffCanvas } = this.state
    const offCanvasClasses = `${navbarClass}`

    return (
      <div
        className={`navbar navbar-expand w-100 ${navbarClass}`}
        style={{ height: navbarHeight }}>

        {!showOffCanvas && (
          // "Desktop" layout
          <Fragment>
            <span className="navbar-brand">{brand}</span>

            <ul className="navbar-nav mr-auto">
              {leftLinks.map((linkConf, i) => (
                <TopBarLink key={i} right={false} {...linkConf} />
              ))}
            </ul>

            <ul className="navbar-nav">
              {rightLinks.map((linkConf, i) => (
                <TopBarLink key={i} right={true} {...linkConf} />
              ))}
            </ul>
          </Fragment>
        )}

        {showOffCanvas && (
          // "Mobile" layout
          <Fragment>
            <ul className={`navbar-nav m${togglerPosition === 'left' ? 'r' : 'l'}-auto`}>
              {togglerPosition === 'right' && <span className="navbar-brand">{brand}</span>}
              <TogglerButton
                openIconClass={offCanvasMenuOpenClass}
                closedIconClass={offCanvasMenuClosedClass}
                className={togglerClassName}
                onClick={this.toggleMenu}
                open={this.state.open}
              />
              {togglerPosition === 'left' && <span className="navbar-brand">{brand}</span>}
            </ul>
          </Fragment>
        )}

        {showOffCanvas && this.state.open &&
          <div className={offCanvasClasses} style={offCanvasStyles}>
            <ul className="list-group w-100">
              {leftLinks.concat(rightLinks).map((l, i) => (
                l.links
                  ? <PaddedList label={l.label} items={l.links} className={offCanvasItemClass} key={i} />
                  : (
                    <li onClick={l.onClick} className={`list-group-item ${offCanvasItemClass}`} key={i}>
                      {
                        l.to
                          ? <NavLink to={l.to}>{l.label}</NavLink>
                          : l.label
                      }
                    </li>
                  )
              ))}
            </ul>
          </div>}

        </div>
    )
  }
}

Topbar.defaultProps = {
  breakpoint: 'xs',
  leftLinks: [],
  rightLinks: [],
  togglerPosition: 'left',
  togglerClassName: 'text-white',
  offCanvasPosition: 'left',
  offCanvasItemClass: 'bg-dark',
  offCanvasMenuOpenClass: 'fa fa-times',
  offCanvasMenuClosedClass: 'fa fa-bars',
  navbarClass: 'navbar-dark bg-dark text-white',
  navbarHeight: 56,
  offCanvasClass: '',
}
export default Topbar
