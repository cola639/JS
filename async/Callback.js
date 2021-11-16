function logName(name) {
  console.log(name);
}

//callback
function getUser(name, callback) {
  setTimeout(() => {}, 0);
  callback(name);
}

getUser("John", logName);
