import React, { Component } from 'react'
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import cn from 'classnames'

import Layout from '../components/Layout'

class AddOrder extends Component {
  state = {
    activeTab: 0,
  }

  toggle = tab => e => {
    this.setState({ activeTab: tab })
  }

  render() {
    return (
      <Layout>
        <Row>
          <Col md={12}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={cn({ active: this.state.activeTab === 0 })}
                  onClick={this.toggle(0)}
                >
                  Tab1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={cn({ active: this.state.activeTab === 1 })}
                  onClick={this.toggle(1)}
                >
                  Tab 2
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId={0}>
                <Row>
                  <Col md={12}>
                    <h4>Tab 1 Content</h4>
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>

                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={1}>
                <Row>
                  <Col md={12}>
                    <h4>Tab 2 Content</h4>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default AddOrder
