import { PureComponent, createElement } from 'react'
import defaults from 'lodash.defaults'
import debounce from 'lodash.debounce'
import qs from 'query-string'
import hoistStatics from 'hoist-non-react-statics'

export default function withDataTable(c = {}) {

  const config = {
    filters: [],
    queryString: true,
    ...c,
  }

  const defaultFilters = config.filters.reduce((d, f) => ({
    ...d,
    [f]: '',
  }), {})

  return function wrapWithDataTable(WrappedComponent) {
    class DataTable extends PureComponent {
      constructor(props) {
        super(props)
        // Use React state as source of truth otherwise use query string!
        if (!config.queryString) {
          this.state = {
            params: {
              ...defaultFilters,
              page: 1,
            }
          }
        }
      }

      componentDidMount() {
        this.props.loadItems(this.getParams())
      }

      componentWillUnmount() {
        const { unloadItems } = this.props
        if (typeof unloadItems === 'function') {
          unloadItems()
        }
      }

      getParams = () => {
        const defaultParams = {
          ...defaultFilters,
          page: 1,
        }
        const baseParams = config.queryString
          ? qs.parse(this.props.location.search)
          : this.state.params

        return defaults(baseParams, defaultParams)
      }

      updateParam = (name, value, debounced = false) => {
        const { location } = this.props
        const currentParams = config.queryString
          ? qs.parse(qs.extract(location.search))
          : this.state.params

        const nextParams = {
          ...currentParams,
          // Reset page ... until name is page eheh
          page: 1,
          [name]: value,
        }

        if (config.queryString) {
          this.props.history.push(`${location.pathname}?${qs.stringify(nextParams)}`)
        } else {
          this.setState({ params: nextParams })
        }

        if (debounced) {
          this.loadItemsDebounced(nextParams)
        } else {
          this.props.loadItems(nextParams)
        }
      }

      reload = () => this.props.loadItems(this.getParams())

      loadItemsDebounced = debounce(this.props.loadItems, 150)

      goToPage = page => this.updateParam('page', page)

      makeFiltersProp = () => {
        const params = this.getParams()
        return config.filters.reduce((r, f) => {
          const value = params[f]
          const onChange = e => {
            let value = e
            if (e && e.target && e.target instanceof Element) {
              value = e.target.value
            }
            this.updateParam(f, value, true)
          }

          return {
            ...r,
            [f]: {
              value,
              onChange,
            }
          }
        }, {})
      }

      render() {
        const { page } = this.getParams()
        const filters = this.makeFiltersProp()

        return createElement(WrappedComponent, {
          ...this.props,
          page: +page,
          filters,
          reload: this.reload,
          goToPage: this.goToPage,
        })
      }
    }

    return hoistStatics(DataTable, WrappedComponent)
  }
}
