/**
 * @file Button 示例
 * @author pashangshangpo
 * @date 2018-11-21 11:56:09
 */

import React from 'react'
import PropTypes from 'prop-types'
import { El } from '$common'

export default class ButtonExample extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick: () => {
      console.log('hello')
    }
  }

  render() {
    return El(
      'button',
      {
        style: {
          color: this.props.color
        },
        onClick: this.props.onClick
      },
      this.props.children
    )
  }
}
