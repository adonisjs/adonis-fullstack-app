'use strict'

class NoTimestamp {
  register (Model) {
    Object.defineProperties(Model, 'createdAtColumn', {
      get () { return null }
    })

    Object.defineProperties(Model, 'updatedAtColumn', {
      get () { return null }
    })
  }
}

module.exports = NoTimestamp
