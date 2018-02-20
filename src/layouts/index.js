import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import '../scss/main.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Caitlin Baird - Trainer, Speaker, Coach"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'caitlin, baird, trainer, training, coaching, speaker, speaking' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: 0,
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
