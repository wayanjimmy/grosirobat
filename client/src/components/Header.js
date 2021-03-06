import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
      title: 'Log keluar',
      text: 'yakin?',
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
    console.log(user)
    return (
      <Navbar dark color="dark" expand="md">
        <NavbarBrand href="#">Grosir Obat</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Transaksi
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/orders" className="dropdown-item">
                  Daftar Transaksi
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Produk
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/products" className="dropdown-item">
                  Kelola Produk
                </Link>
                <Link to="/units" className="dropdown-item">
                  Kelola Satuan
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {user.name}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Kelola Pengguna</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.handleLogout}>Keluar</DropdownItem>
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
