
class Artikel {
  static counter = 1
  id
  position
  name
  gekauft = true

  constructor(name, position) {
    this.name = name
    this.position = position
    this.id = Artikel.counter++
  }
}

export {Artikel}