/**

检测电子邮件

示例：

输入：["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
输出：2
解释：实际收到邮件的是 "testemail@leetcode.com" 和 "testemail@lee.tcode.com"。



 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    if (emails.length === 0) {
        return 0
    }
    let emailName = {}
    for (let i = 0; i < emails.length; i++) {
        let item = emails[i]
        let temp = ''
        let domin = item.slice(item.indexOf('@'))
        if (item.indexOf('+') > -1) {
            temp = item.slice(0, item.indexOf('+'))
        }
        temp = temp.replace(/\./g, '')
        emailName[temp + domin] = true
    }

    return Object.keys(emailName).length
};

var emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]

var result = numUniqueEmails(emails)
console.log(result)
