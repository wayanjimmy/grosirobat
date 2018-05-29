import React from 'react'
import { connect } from 'react-redux'
import sum from 'lodash/sum'
import { Link } from 'react-router-dom'
import { Row, Col, Table, Pagination, PaginationItem } from 'reactstrap'

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
    const { orders, pagination } = this.props
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
                  <th className="text-right">Total</th>
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
                    <td className="text-right">
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
            <Pagination>
              <PaginationItem disabled={!pagination.prev_page}>
                {pagination.prev_page ? (
                  <Link
                    to={`/products?page=${pagination.current_page - 1}`}
                    className="page-link"
                  >
                    Prev
                  </Link>
                ) : (
                  <span className="page-link">Prev</span>
                )}
              </PaginationItem>
              {(() => {
                let items = []
                for (let i = 1; i <= pagination.total_pages; i++) {
                  items.push(
                    <PaginationItem
                      active={pagination.current_page === i}
                      key={i}
                    >
                      <Link to={`/orders?page=${i}`} className="page-link">
                        {i}
                      </Link>
                    </PaginationItem>
                  )
                }
                return items
              })()}
              <PaginationItem disabled={!pagination.next_page}>
                {pagination.next_page ? (
                  <Link
                    to={`/products?page=${pagination.current_page + 1}`}
                    className="page-link"
                  >
                    Next
                  </Link>
                ) : (
                  <span className="page-link">Next</span>
                )}
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default connect(state => {
  const { orders, pagination } = state.order
  return { orders, pagination }
})(OrderList)
