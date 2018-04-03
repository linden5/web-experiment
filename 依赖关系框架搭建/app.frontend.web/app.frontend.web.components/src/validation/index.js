/**
 * @module {Object} validation 字符串校验模块
  */

import { validation } from '@gfloan/app.frontend.web.utils'
import a from '@gfloan/app.frontend.web.utils'

/**
    @function isEmailValid 检测email是否是合法的
    @param {String} email email地址字符串
*/
export function isEmailValid(email) {
    return validation.isEmailValid(email)
}

/**
    @function isIDNumberValid 检测身份证号是否是合法的
    @param {String} idNumber  身份证号字符串
*/
export function isIDNumberValid(idNumber) {
    return validation.isIDNumberValid(idNumber)
}

/**
    @function isMobileNumberValid 检测手机号是否是合法的
    @param {String} mobileNumber 手机号字符串
*/
export function isMobileNumberValid(mobileNumber) {
    return validation.isMobileNumberValid(mobileNumber)
}