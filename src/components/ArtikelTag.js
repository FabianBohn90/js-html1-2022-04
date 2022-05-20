import React from 'react'

class ArtikelTag extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const artikel = this.props.artikel

    return (
      <React.Fragment>
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}


        <dd>
          <label><input type="checkbox" />{artikel.name}</label>
        </dd>




      </React.Fragment>
    )
  }
}

export default ArtikelTag
