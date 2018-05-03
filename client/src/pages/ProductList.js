import React from 'react'
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


import Layout from '../components/Layout'

class ProductList extends React.Component {
  render() {
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
                <col />
              </colgroup>
              <thead>
                <th>#</th>
                <th>Nama</th>
                <th>Satuan</th>
                <th>Harga</th>
                <th> </th>
              </thead>
            </Table>
          </Col>
        </Row>
      </Layout>
  )
  }
}

export default ProductList

