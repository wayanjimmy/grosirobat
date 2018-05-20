import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Header from './Header'
import './Layout.css'

const Layout = ({ children }) => (
  <div className="wrapper">
    <Header />
    <Container className="content" fluid>
      {children}
    </Container>
    <div className="footer">
      <Container>
        <Row>
          <Col className="text-center">
            <small>grosirobat</small>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
)

export default Layout
