import React from 'react'

const styles = {
  offCanvasBtn: {
    zIndex: 901,
    outline: 'none',
    backgroundColor: 'transparent',
    border: 0,
  },
}

const TogglerButton = ({ onClick, open, className, classes, openIconClass, closedIconClass }) => (
  <button style={styles.offCanvasBtn} onClick={onClick}>
    <i
      className={`${open ? openIconClass : closedIconClass} ${className}`}
      aria-hidden="true"
    />
  </button>
)

export default TogglerButton
