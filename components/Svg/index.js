/**
 * @file Svg
 * @author xiaozhihua
 * @date 2018-11-21 18:57:03
 */

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { El } from '$common'

import './index.scss'

const ImportAll = r => {
  let result = {}

  r.keys().forEach(path => {
    let value = r(path).default

    result[value.id] = value
  })

  return result
}

const Icon = ImportAll(require.context('$svg', true, /\.svg$/))

export default class Svg extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    let icon = Icon[this.props.name]

    return El(
      'svg',
      {
        'aria-hidden': true,
        className: classnames('iec-svg', this.props.className),
        viewBox: icon.viewBox
      },
      El(
        'defs',
        {
          key: 'defs'
        },
        El(
          'style',
          {
            key: 'style'
          },
          'path{fill:currentColor}'
        )
      ),
      El('use', {
        xlinkHref: `#${icon.id}`,
        key: 'use'
      })
    )
  }
}
