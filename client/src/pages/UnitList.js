import React from 'react'
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Table,
  Button,
  ButtonGroup,
  Form,
  Label,
  Input,
  FormGroup,
} from 'reactstrap'
import { Formik } from 'formik'
import omit from 'lodash/omit'
import Swal from 'sweetalert2'

import Layout from '../components/Layout'
import * as actions from '../actions/unitActions'

class UnitList extends React.Component {
  state = {
    currentUnit: {
      id: '',
      name: '',
      value: 0,
    },
  }

  handleCreateNew = e => {
    this.setState({
      currentUnit: {
        id: '',
        name: '',
        value: 0,
      },
    })
  }

  handleEdit = unit => e => {
    this.setState({
      currentUnit: {
        ...this.state.currentUnit,
        ...unit,
      },
    })
  }

  handleDelete = unit => e => {
    Swal({
      title: 'Hapus Unit',
      text: `Hapus ${unit.name} ?`,
      type: 'warning',
      showCancelButton: true,
    }).then(result => {
      if (result.value) {
        this.props.dispatch(actions.destroyUnit(unit))
      }
    })
  }

  componentDidMount() {
    this.props.dispatch(actions.getAllUnits())
  }

  render() {
    const { units } = this.props
    let { currentUnit } = this.state
    currentUnit = omit(currentUnit, ['created_at', 'updated_at'])
    return (
      <Layout>
        <Row className="p-2">
          <Col md={7}>
            <h4>Satuan</h4>
            <Table>
              <colgroup>
                <col />
                <col />
                <col />
                <col width="20%" />
              </colgroup>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama</th>
                  <th>Kuantitas</th>
                  <th className="text-center"> </th>
                </tr>
              </thead>
              <tbody>
                {units.map((unit, index) => (
                  <tr key={unit.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{unit.name}</td>
                    <td>{unit.value}</td>
                    <td className="text-center">
                      <ButtonGroup>
                        <Button
                          size="sm"
                          outline
                          color="primary"
                          onClick={this.handleEdit(unit)}
                        >
                          sunting
                        </Button>
                        <Button
                          size="sm"
                          outline
                          color="danger"
                          onClick={this.handleDelete(unit)}
                        >
                          hapus
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={5}>
            <Button
              color="primary"
              className="float-right"
              onClick={this.handleCreateNew}
            >
              Tambah Satuan
            </Button>
            <div className="clearfix" />
            <Formik
              initialValues={Object.assign({}, currentUnit)}
              enableReinitialize
              validate={values => ({})}
              onSubmit={async (values, { setSubmitting }) => {
                if (values.id === '') {
                  await this.props.dispatch(actions.createUnit(values))
                } else {
                  await this.props.dispatch(actions.updateUnit(values))
                }
                setSubmitting(false)
              }}
              render={({
                values,
                errors,
                isSubmitting,
                handleChange,
                handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="name">
                      Nama <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nama"
                      value={values.name}
                      autoComplete="off"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="value">
                      Kuantitas <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="number"
                      name="value"
                      id="value"
                      placeholder="Kuantitas"
                      value={values.value}
                      autoComplete="off"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button disabled={isSubmitting}>
                    {isSubmitting ? 'Menyimpan..' : 'Simpan'}
                  </Button>
                </Form>
              )}
            />
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default connect(state => {
  const { units } = state.unit
  return { units }
})(UnitList)
