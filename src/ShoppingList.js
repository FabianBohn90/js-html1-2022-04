import React from 'react'
import GruppenTag from './components/GruppenTag'

class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      //füge hier deinen HTML-Code ein
      <div id="container">
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
        <head>
          <meta charSet="UTF-8"/>
          <title>Title</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </head>

        <body>
        <header>
          <h1>Lager</h1>
          <nav>
            <input type="text" placeholder="Artikel Hinzufügen" />
            <button className="material-icons" style="vertical-align: bottom">
              add_circle
            </button>
          </nav>
          <hr />
        </header>

        <main>
          <section>
            <h2>
              Einkaufen<i style="float: right" className="material-icons">
              expand_less
            </i>
            </h2>

            <dl>
              <dt>
                <p style="background-color: lightblue">
                  Obst & Gemüse
                  <i style="float: right" className="material-icons">expand_less</i>
                </p>
              </dt>
              <dd>
                <label><input type="checkbox" />Broccoli</label>
              </dd>

              <dt>
                <p style="background-color: lightblue">
                  Getreideprodukte
                  <i style="float: right" className="material-icons">expand_less</i>
                </p>
              </dt>

              <dd>
                <label><input type="checkbox" />Reis</label>
              </dd>

              <dt>
                <p style="background-color: lightblue">
                  Milchprodukte
                  <i style="float: right" className="material-icons">expand_less</i>
                </p>
              </dt>

              <dd>
                <label><input type="checkbox" />Streukäse</label>
              </dd>
            </dl>
            <hr />
          </section>

          <section>
            <h2>
              Erledigt<i style="float: right" className="material-icons">expand_less</i>
            </h2>

            <dl>
              <dt>
                <p style="background-color: lightblue">
                  Hülsenfrüchte<i style="float: right" className="material-icons"
                >expand_less</i
                >
                </p>
              </dt>

              <dd>
                <label><input type="checkbox" /><s>Tofu</s></label>
              </dd>
            </dl>
            <hr />
          </section>
        </main>

        <footer>
          <nav>
            <button><span className="material-icons">bookmark_add</span>Gruppe</button>
            <button><span className="material-icons">sort</span>Sortieren</button>
            <button><span className="material-icons">settings</span>Einstellungen</button>
          </nav>
        </footer>
      </body>

    <GruppenTag/>
      </div>
    )
  }
}

export default ShoppingList
