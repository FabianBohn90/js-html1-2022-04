/**
 * Lektion 5: Schleifen
 */

/**
 * 1) Schreibe ein Array `artikelListe`, fülle es und geb es auf der Konsole mithilfe einer Schleife aus
 */
function artikelAuflisten() {
  // ToDo: füge ab hier deinen Code ein
  let artikelListe = ["Brokkoli", "Reis", "Streukäse"]
  for (let artikel of artikelListe) {
    console.debug(artikel)
  }
    }

/**
 * 2) Erstelle die Arrays `milchListe`, `gemüseListe` und `getreideListe`, fülle diese, füge sie der gruppenListe hinzu und
 * gebe sie auf der Konsole aus
 */
function allesAuflisten() {
  let gruppenListe = []

// ToDo: füge ab hier deinen Code ein
  let gemueseListe = ["Brokkoli", "Zwiebeln", "Salat"]
  let getreideListe = ["Reis", "Nudeln", "Quinoa"]
  let milchListe = ["Streukäse", "Sahne", "Joghurt"]

  gruppenListe.push(gemueseListe, getreideListe, milchListe,)

  for (let i = 0; i <= 2; i++) {

    console.debug ("Gruppe", i + ":" ,gruppenListe[i])

  }
}

/**
 * 3) Erstelle ein befülltes Array `gemueseListe`, entferne diese Elemente aus dem Array und gebe es vor und nach dem Entfernen
 * auf der Konsole aus
 */
function artikelEntfernen() {
  // ToDo: füge ab hier deinen Code ein
  let gruppenListe = []
  let gemueseListe = ["Brokkolie", "Zwiebeln", "Salat"]

  gruppenListe.push(gemueseListe)

  console.debug("gemueseGruppe vorher:", gruppenListe[0])

  for (let i = 0; i <= 2 ; i++) {
    gemueseListe.splice(0, 1)
  }
  console.debug("gemueseGruppe nachher:", gruppenListe[0])
}

/**
 * 4) Schreibe die Sortieren-Funktion
 */
function sortieren() {
  // ToDo: füge ab hier deinen Code ein
  let gruppenListe = []

  let gemueseListe = ["Brokkoli", "Zwiebeln", "Salat"]
  let getreideListe = ["Reis", "Nudeln", "Quinoa"]
  let milchListe = ["Streukäse", "Sahne", "Joghurt"]

  gruppenListe.push(gemueseListe, getreideListe, milchListe)
console.debug("gruppenListe vorher", gruppenListe)
  for (let artikel of gruppenListe) {
    artikel.sort()

  }
  gruppenListe.sort()
console.debug("gruppenListe nachher",gruppenListe)
}


export {
  artikelAuflisten, allesAuflisten, artikelEntfernen, sortieren
}