/**
 * 字符串中提取街道地址、城市、省份 收件人 手机号
 *
 *
 */

function extractInformation(text) {
  const phoneRegex = /\b\d{11}\b/ // 匹配11位数字的手机号码
  const nameRegex = /(\S+)先生|(\S+)女士/ // 匹配“官先生”或“李女士”格式的姓名
  const addressRegex =
    /([\u4e00-\u9fa5]+省)?([\u4e00-\u9fa5]+市)?([\u4e00-\u9fa5]+区)?([\u4e00-\u9fa5]+街道)?([\u4e00-\u9fa5]+路[\u4e00-\u9fa5]*\d+号?\d*室?)/ // 匹配地址

  const phoneMatch = text.match(phoneRegex)
  const nameMatch = text.match(nameRegex)
  const addressMatch = text.match(addressRegex)

  return {
    phone: phoneMatch ? phoneMatch[0] : null,
    name: nameMatch ? nameMatch[1] || nameMatch[2] : null,
    address: addressMatch ? addressMatch[0] : null
  }
}

// 使用示例
const result1 = extractInformation('官先生 18826078154 广州市海珠区凤阳街道 海珠区泰沙路49号601')
console.log(result)

function extractInformation(text) {
  const phoneRegex = /\b\d{11}\b/ // 示例：匹配11位数字的手机号码
  const nameRegex = /姓名：(\S+)/ // 示例：匹配“姓名：张三”格式的姓名
  // 添加更多正则表达式以匹配地址等

  const phoneMatch = text.match(phoneRegex)
  const nameMatch = text.match(nameRegex)
  // 添加更多匹配逻辑

  return {
    phone: phoneMatch ? phoneMatch[0] : null,
    name: nameMatch ? nameMatch[1] : null
    // 返回更多提取的信息
  }
}

// 使用示例
const result2 = extractInformation('这里是一段包含姓名：张三，手机号码：12345678901的文本')
console.log(result)
