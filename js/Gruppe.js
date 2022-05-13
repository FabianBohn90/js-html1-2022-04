import Artikel from './Artikel'
import App from './Shopping'

class Gruppe {

  static counter = 1
  artikelListe
  id

  artikelAuflisten (gekauft)

  constructor(name, index) {
    this.name = name
    this.index = index
    this.id = Gruppe.counter++
  }

}

export {Gruppe}