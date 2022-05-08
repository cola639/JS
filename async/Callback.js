function getName(name, callback) {
  setTimeout(() => {
    console.log(name)
    callback('18')
  }, 2000)
}

function getAge(age) {
  console.log(age)
}

// callback
function getUser(name, callback) {
  setTimeout(() => {
    callback(name, getAge)
  }, 1000)
}

getUser('John', getName)
