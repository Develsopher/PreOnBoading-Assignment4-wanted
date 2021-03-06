import React from 'react'
import PropTypes from 'prop-types'

Fieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

function Fieldset({ legend, children }) {
  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.legend}>{legend}</legend>
      {children}
    </fieldset>
  )
}

const styles = {
  wrapper: '',
  legend: 'block mb-2 text-gray-700 text-sm font-bold'
}

export default Fieldset
