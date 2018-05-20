import React from 'react'
import { connect } from 'react-redux'
import sum from 'lodash/sum'

import { Row, Col, Table } from 'reactstrap'

import Layout from '../components/Layout'
import Date from '../components/Date'
import * as actions from '../actions/orderActions'
import Price from '../components/Price'

const ItemSummary = ({ order }) => `${order.line_items.length} Item`

class OrderList extends React.Component {
  componentDidMount() {
    const { search } = this.props.location
    this.props.dispatch(actions.getAllOrders(search))
  }

  render() {
    const { orders } = this.props
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
                  <th>No. Invoice</th>
                  <th>Tanggal</th>
                  <th>Customer</th>
                  <th>Item</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.number}</td>
                    <td>
                      <Date date={order.created_at} />
                    </td>
                    <td>{order.customer_name}</td>
                    <td>
                      <ItemSummary order={order} />
                    </td>
                    <td>
                      <Price
                        price={sum(
                          order.line_items.map(
                            item => item.quantity * +item.product.price
                          )
                        ).toString()}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default connect(({ order: { orders } }) => ({ orders }))(OrderList)
