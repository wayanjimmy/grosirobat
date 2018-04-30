import React from 'react'
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  ButtonGroup,
} from 'reactstrap'

import Layout from '../components/Layout'
import * as actions from '../actions/unitActions'

class Unit extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.getAllUnits())
  }

  render() {
    const { units } = this.props
    return (
      <Layout>
        <Row className="p-2">
          <Col md={7}>
            <h4>Units</h4>
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
                  <th>Name</th>
                  <th>Qty</th>
                  <th className="text-center">Action</th>
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
                        <Button size="sm" outline color="primary">
                          edit
                        </Button>
                        <Button size="sm" outline color="danger">
                          delete
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={5}>
            <h4>Create Unit</h4>
            <Form>
              <FormGroup>
                <Label for="name">
                  Name <span className="text-danger">*</span>
                </Label>
                <Input type="text" name="name" id="name" placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <Label for="value">
                  Value <span className="text-danger">*</span>
                </Label>
                <Input
                  type="number"
                  name="value"
                  id="value"
                  placeholder="Value"
                />
              </FormGroup>
              <Button>Save</Button>
            </Form>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default connect(state => {
  const { units } = state.unit
  return { units }
})(Unit)
