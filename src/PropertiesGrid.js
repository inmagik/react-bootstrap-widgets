import React, { PureComponent } from 'react'

class PropertiesGrid extends PureComponent {
  render() {
    const { list, breakpoint, className, labelClass, valueClass, equalColumn } = this.props
    const nested = list.length && Array.isArray(list[0])

    return (
      <div className={className}>
        {!nested
        ? <ul className='list-group'>
            {list && list.map((item , i) => (
              <li className='list-group-item' key={i}>
                <div className='w-100 d-inline-flex justify-content-between'>
                  <span className={labelClass}>{item.label}</span>
                  <span className={valueClass}>{item.value}</span>
                </div>
              </li>
            ))}
          </ul>
        : <div className='row ml-0 mr-0'>
            {list && list.map((l, i) => (

              <ul
                key={i}
                className={`col${equalColumn ? `-md-${12 / list.length} col-sm-12`: ``} list-group mb-3 mb-${breakpoint}-0`}
                >
                {l.map((item , i) => (
                  <li className='list-group-item' key={i}>
                    <div
                      className={`w-100 d-flex justify-content-between flex-column flex-${breakpoint}-row`}
                      >
                      <span className={labelClass}>{item.label}</span>
                      <span className={valueClass}>{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
         }
      </div>
    )
  }
}

PropertiesGrid.defaultProps = {
  breakpoint: 'sm',
}

export default PropertiesGrid
