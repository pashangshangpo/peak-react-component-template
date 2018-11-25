/**
 * @file common
 * @author xiaozhihua
 * @date 2018-11-25 13:14:22
 */

import React from 'react'
import Classnames from 'classnames'

const PREFIX = 'react'

export const El = (...arg) => {
  return React.createElement(...arg)
}

/**
 * @param {*} prefix
 * @param {*} className
 * @example
 * C(
 * 'button',
 *   {
 *     true: true,
 *     false: false,
 *     undefined: undefined,
 *     null: null,
 *     string: '123'
 *   }
 * )
 *
 * react-button true string
 */
export const C = (prefix, className) => {
  return Classnames(`${PREFIX}-${prefix}`, className)
}
