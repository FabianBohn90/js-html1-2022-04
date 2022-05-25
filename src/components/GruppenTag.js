import React from 'react'
import ArtikelTag from './ArtikelTag'
import artikel from "../model/Artikel";

class GruppenTag extends React.Component {
  constructor(props) {
    super(props)
  }

  artikelEntfernen(name) {
    // ToDo: implementiere diese Methode
    this.props.gruppe.artikelEntfernen(artikel.name)
  }

  render() {
    const gruppe = this.props.gruppe

    let gruppenHeader = ""
    if (this.props.gekauft === false) {
      gruppenHeader = (
        <dt className={this.props.aktiv ? "aktiv" : "inaktiv"}
            onClick={() => this.props.aktiveGruppeHandler(gruppe)}>
          <span>{gruppe.name}</span>
          <i className="material-icons">expand_less</i>
        </dt>)
    }

    let artikelArray = []
    for (const artikel of gruppe.artikelListe) {
      if (artikel.gekauft === this.props.gekauft) {
        artikelArray.push(
          <ArtikelTag artikel={artikel} key={artikel.id}
                      checkHandler={this.props.checkHandler}
                      deleteHandler={() => this.artikelEntfernen(artikel.name)}/>)
      }
    }
    return (
      <React.Fragment>
        {gruppenHeader}
        {artikelArray}
      </React.Fragment>
    )
  }
}

export default GruppenTag
