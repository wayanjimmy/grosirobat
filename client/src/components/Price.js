import PropTypes from 'prop-types'

import { currency } from '../utils/common'

const Price = ({ price }) => currency(price)

Price.propTypes = {
  price: PropTypes.string.isRequired,
}

Price.defaultProps = {
  price: '0',
}

export default Price
