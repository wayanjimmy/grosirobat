import React from 'react'
import { connect } from 'react-redux'

import { Row, Col, Table } from 'reactstrap'

import Layout from '../components/Layout'

class OrderList extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <Row>
          <Col md={12}>
            <h4>Transaksi</h4>
            <Table>
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>#</th>
                  <th>No. Invoice</th>
                  <th>Tanggal</th>
                  <th>Customer</th>
                  <th>Item</th>
                  <th>Total</th>
                  <th />
                </tr>
              </thead>
              <tbody />
            </Table>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default connect(state => ({}))(OrderList)
