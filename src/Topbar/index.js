import 'match-media'
import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'
import { breakpoints } from '../consts'
import TopbarStyles from './TopbarStyles'
import TopBarLink from './TopBarLink'
import PaddedList from './PaddedList'
import TogglerButton from './TogglerButton'

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
      brand,
      rightLinks,
      leftLinks,
      togglerPosition,
      togglerClassName,
      offCanvasItemClass,
      offCanvasPosition,
      offCanvasMenuOpenClass,
      offCanvasMenuClosedClass,
    } = this.props

    let offCanvasPosClass = ''
    if (offCanvasPosition === 'right') {
      offCanvasPosClass = classes.right0
    } else if (offCanvasPosition === 'left') {
      offCanvasPosClass = classes.left0
    }

    const { showOffCanvas } = this.state

    return (
      <div className={`navbar navbar-expand w-100 ${classes.navH} ${navbarClass}`}>

        {showOffCanvas && togglerPosition === 'left' &&
          <TogglerButton
            openIconClass={offCanvasMenuOpenClass}
            closedIconClass={offCanvasMenuClosedClass}
            className={togglerClassName}
            onClick={this.toggleMenu}
            open={this.state.open}
          />}

        <span className="navbar-brand">{brand}</span>

        <ul className="navbar-nav mr-auto">
          {!showOffCanvas && leftLinks.map((linkConf, i) => (
            <TopBarLink key={i} {...linkConf} />
          ))}
        </ul>

        <ul className="navbar-nav">
          {!showOffCanvas && rightLinks.map((linkConf, i) => (
            <TopBarLink key={i} {...linkConf} />
          ))}
        </ul>

        {showOffCanvas && togglerPosition === 'right' &&
          <TogglerButton
            openIconClass={offCanvasMenuOpenClass}
            closedIconClass={offCanvasMenuClosedClass}
            className={togglerClassName}
            onClick={this.toggleMenu}
            open={this.state.open}
          />}

          {showOffCanvas && this.state.open &&
            <div
              className={`Topbar__offCanvas ${classes.offCanvas} ${offCanvasPosClass} ${navbarClass}`}
              >
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
}

export default injectSheet(TopbarStyles)(Topbar)
