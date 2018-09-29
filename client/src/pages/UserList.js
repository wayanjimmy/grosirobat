import React, { Component } from 'react'
import { Row, Col, Table } from 'reactstrap'

import Layout from '../components/Layout'

class UserList extends Component {
  render() {
    return (
      <Layout>
        <Row className="p-2">
          <Col md={7}>
            <h4>Pengguna</h4>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default UserList
