/**
 * Lektion 4: Bedingungen
 */

/**
 * 1) 1) Erstelle eine if-Anweisung, die abfragt, ob ein bestimmter Artikel bereits gekauft wurde */
function artikel_Gekauft(artikelGekauft) {
  //ToDo: füge ab hier deinen Code ein
  let artikelName = "Streukäse"
  artikelGekauft = true
  if (artikelGekauft === true) {
    console.debug("[Artikel]", artikelName, "wurde gekauft")
  }
}


/**
 * 2) Erstelle eine if-Abfrage, die in der Konsole ausgibt, dass ein Artikel hinzugefügt wurde,
 * falls der `artikelName` NICHT leer ist.
 */
function artikel_Hinzufuegen(artikelName) {
  //ToDo: füge ab hier deinen Code ein
  let gruppenName = "Getreide"
  artikelName = "Quinoa"

  if (!artikelName !== undefined) {
    console.debug
    (gruppenName, artikelName, "hinzugefügt")
  }
}

/**
 * 3) Erstelle eine if-else-Anweisung, die überprüft, ob die Gruppe `neueGruppe` bereits im leeren Array `gleicheGruppe`
 * existiert und dementsprechend passende Sätze auf der Konsole ausgibt
 */
function gruppe_Hinzufuegen() {
  // ToDo: füge ab hier deinen Code ein
  let gleicheGruppe
  let neueGruppe = "Getränke"
  if (gleicheGruppe === undefined) {
    console.debug
    ("[App]", "Gruppe", neueGruppe, "hinzugefügt")
  } else {
    console.warn
    ("[App] Gruppe", neueGruppe, "existiert schon!")
  }

}

/**
 * 4) Überprüfe mithilfe einer switch-case-Anweisung, ob ein bestimmter Artikel in dem Array `einkaufsliste` vorkommt
 */
function einkaufsliste_Vorhanden() {
  // ToDo: füge ab hier deinen Code ein
  let milchProdukte = ["Milch", "Jogurt", "Sahne"]
  let artikel = "Eisbergsalat"
  switch (artikel) {
    case 1:
      "Milch";
      console.debug("Milch", "ist ein Milchprodukt")
      break
    case 2:
      "Jogurt";
      console.debug("Jogurt", "ist ein Milchprodukt")
      break
    case 3:
      "Sahne";
      console.debug("Sahne", "ist ein Milchprodukt")
      break
    default:
      console.debug("Artikel", artikel, "ist KEIN Milchprodukt")
  }
}

/**
 * ZUSATZ: Durch folgenden Code sollst du als Zahl erhalten, an welcher Stelle im Array ein bestimmter Artikel steht
 */
function zusatz_indexOf() {
  // ToDo: füge ab hier deinen Code ein
  let einkaufliste = ["Tofu", "Milch", "Honig"]
  let tomatenIndex

  tomatenIndex = einkaufliste.indexOf("Tomate")
  if (tomatenIndex === -1) {
    console.debug("Auf der Einkaufsliste stehen KEINE Tomaten")

  } else {
    console.debug("Auf der Einkaufsliste stehen Tomaten")
  }

}

export {
  artikel_Gekauft, artikel_Hinzufuegen, gruppe_Hinzufuegen, einkaufsliste_Vorhanden, zusatz_indexOf
}