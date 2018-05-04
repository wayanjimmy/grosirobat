import React from 'react'
import { connect } from 'react-redux'
import get from 'lodash/get'
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
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'

import Layout from '../components/Layout'
import Price from '../components/Price'
import * as actions from '../actions/productActions'

class ProductList extends React.Component {
  handleEdit = product => e => {
    e.preventDefault()
  }

  handleDelete = product => e => {
    e.preventDefault()
  }

  componentDidMount() {
    this.props.dispatch(actions.getAllProducts())
  }

  render() {
    const { products, pagination } = this.props
    return (
      <Layout>
        <Row className="p-2">
          <Col md={7}>
            <h4>Produk</h4>
            <Table>
              <colgroup>
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Satuan</th>
                  <th>Harga</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{get(product, 'unit.name', '')}</td>
                    <td>
                      <Price price={product.price} />
                    </td>
                    <td className="text-center">
                      <ButtonGroup>
                        <Button
                          size="sm"
                          outline
                          color="primary"
                          onClick={this.handleEdit(product)}
                        >
                          sunting
                        </Button>
                        <Button
                          size="sm"
                          outline
                          color="danger"
                          onClick={this.handleDelete(product)}
                        >
                          hapus
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination>
              {pagination.prev_page && (
                <PaginationItem>
                  <PaginationLink previous href="#" />
                </PaginationItem>
              )}
              {(() => {
                let items = []
                for (let i = 1; i <= pagination.total_pages; i++) {
                  items.push(
                    <PaginationItem>
                      <PaginationLink href="#">{i}</PaginationLink>
                    </PaginationItem>
                  )
                }
                return items
              })()}
              {pagination.next_page && (
                <PaginationItem>
                  <PaginationLink next href="#" />
                </PaginationItem>
              )}
            </Pagination>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default connect(state => {
  const { products, pagination } = state.product
  return { products, pagination }
})(ProductList)
