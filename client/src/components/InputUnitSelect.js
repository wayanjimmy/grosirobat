import React, { Component } from 'react'
import Select from 'react-select'

import request from '../utils/request'

class InputUnitSelect extends Component {
  state = {
    isLoading: false,
    units: [],
  }

  fetch = async () => {
    this.setState({ isLoading: true })
    const res = await request().get('/api/units')
    const { units } = res.data
    this.setState({
      isLoading: false,
      units: units.map(unit => ({
        value: unit.id,
        label: unit.name,
      })),
    })
  }

  componentDidMount() {
    this.fetch()
  }

  render() {
    const { isLoading, units } = this.state
    return (
      <Select
        name="unit"
        isLoading={isLoading}
        options={units}
        {...this.props}
      />
    )
  }
}

export default InputUnitSelect
