import React from 'react'
import { Row, Col, Table } from 'reactstrap'
import { connect } from 'react-redux'
import get from 'lodash/get'

import Layout from '../components/Layout'
import Date from '../components/Date'
import ItemSummary from '../components/ItemSummary'
import * as actions from '../actions/orderActions'
import Price from '../components/Price'

class OrderDetail extends React.Component {
  componentDidMount() {
    const orderId = get(this.props, 'match.params.id', '')
    if (orderId !== '') {
      this.props.dispatch(actions.getOrder(orderId))
    }
  }

  render() {
    const { order } = this.props
    return (
      <Layout>
        <Row>
          <Col md={12}>
            <h4>Transaksi {order.number}</h4>
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
                  <td>{order.number}</td>
                </tr>
                <tr>
                  <td>Tanggal</td>
                  <td>
                    <Date date={order.created_at} />
                  </td>
                </tr>
                <tr>
                  <td>Pelanggan</td>
                  <td>{order.customer_name}</td>
                </tr>
                <tr>
                  <td>Jumlah Item</td>
                  <td>
                    <ItemSummary order={order} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={8}>
            <Table>
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Produk</th>
                  <th>Harga Satuan</th>
                  <th className="text-right">Banyak</th>
                  <th className="text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.line_items.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.product.name}</td>
                    <td>
                      <Price price={item.product.price} />
                    </td>
                    <td className="text-right">{item.quantity}</td>
                    <td className="text-right">
                      <Price price={item.quantity * item.product.price} />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4} className="text-right">
                    Total
                  </td>
                  <td className="text-right">
                    <Price
                      price={order.line_items.reduce(
                        (carrier, i) => carrier + i.product.price * i.quantity,
                        0
                      )}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default connect(state => {
  const { order } = state.order
  return { order }
})(OrderDetail)
