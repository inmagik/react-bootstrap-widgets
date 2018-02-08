export default {

  navH: {
    height: '56px'
  },

  offCanvas: {
    position: 'fixed',
    top: '56px',
    bottom: 0,
    width: '300px',
    zIndex: 900,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },

  offCanvasBtn: {
    zIndex: 901,
    backgroundColor: 'transparent',
    border: '0px',
  },

  z1000: {
    zIndex: 1000
  },

  left0: {
    left: 0,
  },

  right0: {
    right: 0,
  },

  '@media (max-width: 576px)': {
    offCanvas: {
      left: 0,
      right: 0,
      width: '100%',
    }
  }

}
