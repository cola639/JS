const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("123456", salt);
console.log(hash);

const validation = false;
bcrypt.compare("123456", hash, function (err, res) {
  validation = res;
});

console.log(validation);
