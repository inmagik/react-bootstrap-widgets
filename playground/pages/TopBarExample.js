import React, { Fragment } from 'react'
import {Topbar} from 'react-bootstrap-widgets'

export default class TopbarExample extends React.PureComponent {
  render(){
    return <div>
      <Topbar
        brand='Cool Top'
        // See breakpoints
        breakpoint='xs'
        togglerPosition='left'
        togglerClassName='text-white'
        offCanvasPosition='left'
        offCanvasItemClass='bg-dark'
        navbarClass='navbar-dark bg-dark text-white'
        offCanvasMenuOpenClass='fab fa-android'
        offCanvasMenuClosedClass='fas fa-heartbeat'
        leftLinks={[
          // // Simple
          {
            label: 'Hello!',
          },
          // Link
          {
            label: 'Home',
            exact: true,
            to: '/TopBar',
          },
          // Custom jsx and click
          {
            label: <Fragment><i className={'fa fa-user'} />{' '}Dude</Fragment>,
            onClick: () => alert('Hello Dude')
          },
          // Dropdown
          {
            label: 'Account',
            links: [
              {
                label: 'Settings',
                to: '/TopBar/settings',
              },
              {
                label: <Fragment><i className={'fa fa-space-shuttle'} />{' '}Space</Fragment>,
                onClick: () => alert('Go To Space!'),
              },
            ]
          }
        ]}
        rightLinks={[
          {
            label: 'On the right!',
          }
        ]}
      />

    </div>
  }
}
