
class Shopping {
  gruppenListe
  aktiveGruppe
  setup

  gruppeFinden(gruppenName) {

    let gruppenIndex = this.gruppenListe.indexOf(gruppenName)

    if (gruppenIndex > -1) {
      return gruppenName

    } else {
      console.warn("Gruppe", gruppenName, "nicht gefunden")
      return null
    }

  }

  gruppeHinzufuegen(name) {

    let gleicheGruppe = this.gruppenListe.indexOf(name)

    if (gleicheGruppe === -1) {
      let neueGruppe = name
      this.gruppenListe.push(neueGruppe)
      this.aktiveGruppe = neueGruppe
      console.debug("Gruppe", neueGruppe, "hinzugefügt")

    } else {
      console.warn("Gruppe", name, "existiert schon!")
      return null

    }
  }

  gruppeUmbenennen(alterName, neuerName) {
    let vorhandeneGruppe = this.gruppeFinden(alterName)
    if (vorhandeneGruppe != null) {
      let index = this.gruppenListe.indexOf(alterName)
      this.gruppenListe.splice(index, 1, neuerName)

      console.debug("Gruppe wurde von", alterName, "nach", neuerName, "umbenannt")
    }
  }

  gruppeEntfernen(gruppenName) {
    let entfernGruppe = this.gruppeFinden(gruppenName)
    if (entfernGruppe != null) {
      let index = this.gruppenListe.indexOf(gruppenName)
      this.gruppenListe.splice(index, 1)
      console.debug("Gruppe", gruppenName, "wurde entfernt")
    } else {
      console.warn("Gruppe", gruppenName, "konnte NICHT entfernt werden")
    }
  }

}

export {Shopping}