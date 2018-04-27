import React, { Component } from 'react'
import { Container, Row, Col, Table, Button, ButtonGroup } from 'reactstrap'

import Header from './Header'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Container className="content" fluid>
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
                    <th>Value</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Box</td>
                    <td>10</td>
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
                </tbody>
              </Table>
            </Col>
            <Col md={5} />
          </Row>
        </Container>
        <div className="footer">
          <Container>
            <Row>
              <Col className="text-center">
                <small>paramore</small>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default App
