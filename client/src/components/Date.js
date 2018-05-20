import PropTypes from 'prop-types'

const LocalDate = ({ date }) => new Date(date).toString()

LocalDate.propTypes = {
  date: PropTypes.string.isRequired
}

export default LocalDate
