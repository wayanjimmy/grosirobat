import PropTypes from 'prop-types'
import dayjs from 'dayjs'

const LocalDate = ({ date }) =>
  date === undefined ? null : dayjs(new Date(date)).format('D MMM YYYY')

LocalDate.propTypes = {
  date: PropTypes.string.isRequired,
}

export default LocalDate
