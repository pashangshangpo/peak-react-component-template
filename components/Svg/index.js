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

export default class Svg extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.object
  }

  static defaultProps = {
    className: '',
    icon: {}
  }

  render() {
    let icon = this.props.icon

    if (!icon.viewBox && icon.default) {
      icon = icon.default
    }

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
