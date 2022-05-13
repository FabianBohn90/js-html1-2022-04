import {Artikel} from "./Artikel.js";
import {Shopping} from "./Shopping.js";

class Gruppe {

  static counter = 1
  artikelListe = []
  id

  artikelAuflisten (gekauft = true) {
    for (let artikel of this.artikelListe) {
      if (artikel.gekauft) {
        console.debug(`${artikel.name}`)

      }
    }

  }

  constructor(name, index) {
    this.name = name
    this.index = index
    this.id = Gruppe.counter++
  }

}

export {Gruppe}