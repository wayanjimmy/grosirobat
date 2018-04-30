import React from 'react'
import { connect } from 'react-redux'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import Swal from 'sweetalert2'

import * as authUtil from '../utils/auth'

class Header extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  handleLogout = e => {
    e.preventDefault()
    Swal({
      title: 'Logout',
      text: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
    }).then(result => {
      if (result.value) {
        authUtil.logout(() => window.location.reload())
      }
    })
  }

  render() {
    const { user } = this.props
    return (
      <Navbar dark color="dark" expand="md">
        <NavbarBrand href="/">Grosir Obat</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Manage Products</DropdownItem>
                <DropdownItem>Manage Units</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {user.name}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Manage Users</DropdownItem>
                <DropdownItem>Change Password</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.handleLogout}>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default connect(state => {
  const { user } = state.auth
  return { user }
})(Header)
