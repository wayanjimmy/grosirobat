import React from 'react'
import { Row, Col, Table } from 'reactstrap'

import Layout from '../components/Layout'

class OrderDetail extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <Row>
          <Col md={12}>
            <h4>Order</h4>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Table>
              <colgroup>
                <col />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <td>No Pesanan</td>
                  <td />
                </tr>
                <tr>
                  <td>Tanggal</td>
                  <td />
                </tr>
                <tr>
                  <td>Pelanggan</td>
                  <td />
                </tr>
                <tr>
                  <td>Customer</td>
                  <td />
                </tr>
                <tr>
                  <td>Jumlah Item</td>
                  <td />
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={12} />
        </Row>
      </Layout>
    )
  }
}

export default OrderDetail
