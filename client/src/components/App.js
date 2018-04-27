import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import Header from './Header'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Container className="content">
          <h3>Content</h3>
        </Container>
        <div className="footer">
          <Container>
            <Row>
              <Col className="text-center">
                <small>paramore</small>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default App
