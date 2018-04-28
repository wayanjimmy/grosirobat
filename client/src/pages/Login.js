import React from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap'
import { Formik } from 'formik'

import * as actions from '../actions/authActions'

class Login extends React.Component {
  render() {
    return (
      <section className="h-100">
        <Container className="h-100">
          <Row className="justify-content-md-center h-100">
            <div
              className="card-wrapper"
              style={{ width: '400px', margin: '0 auto' }}
            >
              <div className="brand" style={{ marginTop: 40 }} />
              <div
                className="card p-10"
                style={{
                  borderColor: 'transparent',
                  boxShadow: '0 0 40px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div className="card-body">
                  <h4 className="card-title mb-30">Login</h4>
                  <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                      let errors = {}
                      if (!values.email) {
                        errors.email = 'Required'
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = 'Invalid email address'
                      }
                      return errors
                    }}
                    onSubmit={({ email, password }) => {
                      this.props.dispatch(actions.login(email, password))
                    }}
                    render={({
                      values,
                      errors,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <Form onSubmit={handleSubmit}>
                        <FormGroup>
                          <Label>Email</Label>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={handleChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Password</Label>
                          <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={handleChange}
                          />
                        </FormGroup>
                        <Button color="primary" block disabled={isSubmitting}>
                          {isSubmitting ? 'Logging in' : 'Login'}
                        </Button>
                      </Form>
                    )}
                  />
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    )
  }
}

export default connect(state => ({}))(Login)
