import React from 'react'
import ArtikelTag from './ArtikelTag'

class GruppenTag extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const gruppe = this.props.gruppe
    let artikelArray = []
    for (const artikel of gruppe.artikelListe ) {
      artikelArray.push(<ArtikelTag artikel = {artikel} key={artikel.id}/>)
    }


    return (
      <React.Fragment>
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
        <dt>
          Obst & Gemüse
          <i className="material-icons">expand_less</i>
        </dt>

        {artikelArray}

      </React.Fragment>
    )
  }
}

export default GruppenTag
