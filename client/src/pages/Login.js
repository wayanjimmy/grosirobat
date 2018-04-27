import React from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'

class Login extends React.Component {
  render() {
    return (
      <section className="h-100">
        <Container className="h-100">
          <Row className="justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Login</h4>
                  <Form>
                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Login
