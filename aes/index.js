const crypto = require('crypto');

// 生成一个256位的随机密钥
const secretKey = crypto.randomBytes(32);
console.log("Secret Key:", secretKey.toString('hex'));

const crypto = require('crypto');

// 使用相同的密钥
const iv = Buffer.alloc(16, 0); // 初始化向量

// 解密函数
function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secretKey), iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// 假设这是从前端接收到的加密字符串
const encrypted = '加密字符串';

console.log("Decrypted:", decrypt(encrypted));
