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

        <header>
          <h1>Lager</h1>
          <nav>
            <input type="text" placeholder="Artikel Hinzufügen" />
            <button className="material-icons">
              add_circle
            </button>
          </nav>
          <hr />
        </header>

        <main>
          <section>
            <h2>
              Einkaufen<i className="material-icons"> expand_less
            </i>
            </h2>

            <dl>
              <dt>
                  Obst & Gemüse
                  <i className="material-icons">expand_less</i>
              </dt>
              <dd>
                <label><input type="checkbox" />Broccoli</label>
              </dd>

              <dt>
                  Getreideprodukte
                  <i className="material-icons">expand_less</i>
              </dt>

              <dd>
                <label><input type="checkbox" />Reis</label>
              </dd>

              <dt>
                  Milchprodukte
                  <i className="material-icons">expand_less</i>
              </dt>

              <dd>
                <label><input type="checkbox" />Streukäse</label>
              </dd>
            </dl>
            <hr />
          </section>

          <section>
            <h2>
              Erledigt<i className="material-icons">expand_less</i>
            </h2>

            <dl>
              <dt>

                  Hülsenfrüchte<i  className="material-icons"
                >expand_less</i
                >
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

    <GruppenTag/>
      </div>
    )
  }
}

export default ShoppingList
