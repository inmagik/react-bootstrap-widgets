import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  offCanvasBtn: {
    zIndex: 901,
    backgroundColor: 'transparent',
    border: 0,
  },
}

const TogglerButton = ({ onClick, open, className, classes }) => (
  <button className={classes.offCanvasBtn} onClick={onClick}>
    <i
      className={`fa fa-${open ? `times` : `bars`} ${className}`}
      aria-hidden="true"
    />
  </button>
)

export default injectSheet(styles)(TogglerButton)
