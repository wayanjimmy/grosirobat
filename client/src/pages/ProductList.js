import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { Formik } from 'formik'
import get from 'lodash/get'
import omit from 'lodash/omit'
import Swal from 'sweetalert2'
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
} from 'reactstrap'

import Layout from '../components/Layout'
import Price from '../components/Price'
import InputUnitSelect from '../components/InputUnitSelect'
import * as actions from '../actions/productActions'

class ProductList extends React.Component {
  state = {
    currentProduct: {
      id: '',
      name: '',
      unit_id: '',
      price: 0,
    },
  }

  handleCreateNew = e => {
    e.preventDefault()
    this.setState({
      currentProduct: {
        id: '',
        name: '',
        unit_id: '',
        price: 0,
      },
    })
  }

  handleEdit = product => e => {
    e.preventDefault()
    const { currentProduct } = this.state
    this.setState({
      currentProduct: {
        ...currentProduct,
        ...product,
      },
    })
  }

  handleDelete = product => e => {
    e.preventDefault()
    Swal({
      title: 'Hapus Produk',
      text: `Hapus ${product.name} ?`,
      type: 'warning',
      showCancelButton: true,
    }).then(async result => {
      if (result.value) {
        await this.props.dispatch(actions.destroyProduct(product))
        const { search } = this.props.location
        await this.props.dispatch(actions.getAllProducts(search))
      }
    })
  }

  componentDidMount() {
    const { search } = this.props.location
    this.props.dispatch(actions.getAllProducts(search))
  }

  render() {
    const { products, pagination } = this.props
    console.log(pagination)
    const { currentProduct } = this.state
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
                {products.map((product, index) => (
                  <tr key={index}>
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
                      <Link to={`/products?page=${i}`} className="page-link">
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
          <Col md={5}>
            <Button
              color="primary"
              className="float-right"
              onClick={this.handleCreateNew}
            >
              Tambah Produk
            </Button>
            <div className="clearfix" />
            <Formik
              initialValues={Object.assign({}, currentProduct, {
                unit: {
                  value: get(currentProduct, 'unit.id', ''),
                  label: get(currentProduct, 'unit.name', ''),
                },
                price: +currentProduct.price,
              })}
              enableReinitialize
              validate={values => {
                let errors = {}
                if (!values.name) {
                  errors.name = 'Required'
                }

                if (!values.price) {
                  errors.price = 'Required'
                }

                if (!values.unit) {
                  errors.unit = 'Required'
                }

                return errors
              }}
              onSubmit={async (values, { setSubmitting }) => {
                values.unit_id = values.unit.value
                values = omit(values, ['created_at', 'updated_at', 'unit'])
                if (values.id === '') {
                  await this.props.dispatch(actions.createProduct(values))
                } else {
                  await this.props.dispatch(actions.updateProduct(values))
                }
                const { search } = this.props.location
                await this.props.dispatch(actions.getAllProducts(search))
                setSubmitting(false)
              }}
              render={({
                values,
                errors,
                isSubmitting,
                handleChange,
                handleSubmit,
                setFieldValue,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="name">
                      Nama <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nama"
                      value={values.name}
                      autoComplete="off"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="value">
                      Harga <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="number"
                      name="price"
                      id="value"
                      placeholder="Harga"
                      value={values.price}
                      autoComplete="off"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="value">
                      Satuan <span className="text-danger">*</span>
                    </Label>
                    <InputUnitSelect
                      value={values.unit}
                      onChange={unit => {
                        setFieldValue('unit', unit)
                      }}
                    />
                  </FormGroup>
                  <Button disabled={isSubmitting}>
                    {isSubmitting ? 'Menyimpan..' : 'Simpan'}
                  </Button>
                </Form>
              )}
            />
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default compose(
  withRouter,
  connect(state => {
    const { products, pagination } = state.product
    return { products, pagination }
  })
)(ProductList)
