// object this
const object = {
  name: 'John',
  logThis() {
    console.log('object this name:', this.name)
  }
}

/** this指向object */
object.logThis()
