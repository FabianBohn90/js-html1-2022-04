class Artikel {
  counter = 1
  id
  position
  name
  gekauft

  constructor(name, position) {
    this.name = name
    this.position = position
    this.id = Artikel.counter++
  }
}

export {Artikel}