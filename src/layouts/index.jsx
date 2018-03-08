import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'
import '../scss/main.scss';

class TemplateWrapper extends Component {
  render() {
    return this.props.children()
  } 
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
