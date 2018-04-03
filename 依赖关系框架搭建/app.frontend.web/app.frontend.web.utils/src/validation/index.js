/**
 * @module {Object} validation 字符串校验模块
  */

/**
  @function isEmailValid 检测email是否是合法的
  @param {String} email email地址字符串
*/
export function isEmailValid (email) {
    return (/^[\w\-_.]+@(\w)+(\.\w{2,})+$/).test(email)
}

/**
 @function isIDNumberValid 检测身份证号是否是合法的
@param {String} idNumber  身份证号字符串
*/
export function isIDNumberValid (idNumber) {
    if (!idNumber || idNumber.length !== 18) {
        return false
    }

    // 每一位的权值
    var WEIGHT = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    // 余数与校验码的对应关系,数组index为余数
    var CHECK_CODE = ['1', '0', 'x', '9', '8', '7', '6', '5', '4', '3', '2']

    // 分离身份证号前17位与最后的校验位
    var idNumArray = Array.prototype.slice.apply(idNumber)
    var checkCode = idNumArray.pop().toLowerCase()

    // 计算较验
    var remainer = idNumArray.map((digit, index) => {
        return digit * WEIGHT[index]
    }).reduce((acc, value) => acc + value) % 11

    return CHECK_CODE[remainer] === checkCode
}

/**
    @function isMobileNumberValid 检测手机号是否是合法的
    @param {String} mobileNumber 手机号字符串
*/
export function isMobileNumberValid (mobileNumber) {
    return mobileNumber && (/^1(3|5|7|8|9)\d{9}$/).test(mobileNumber)
}
