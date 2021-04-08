import teaImage from "./images/tea.jpg";
import coffeeImage from "./images/coffee.jpg";
import cerealImage from "./images/cereal.jpg";
import hotchocImage from "./images/milo.jpg";
import honeyImage from "./images/honey.jpg";
import riceImage from "./images/rice.jpg";
import couscousImage from "./images/cous-cous.jpg";
import salmonImage from "./images/salmon.jpg";
import beefImage from "./images/beef.jpg";
import mackerelImage from "./images/salmon.jpg";
import chickenImage from "./images/chicken.jpg";
import tomatoImage from "./images/tomatoes.jpg";
import onionImage from "./images/onion.jpg";
import potatoImage from "./images/potatoes.jpg";
import soapImage from "./images/soap.jpg";
import pasteImage from "./images/paste.jpg";
import Items from "./components/Items";
// import {Route, BrowserRouter as Router} from "react-router-dom"
// import Home from "./pages/Home.js";

function App() {
  return (

    
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col s12">
            <header className="header grey darken-2 tc">
              <h1>Kitchen Organizer</h1>
              <div>
                <button className="signup-button">
                  <a href="Form/signup.html">Sign up</a>
                </button>
              </div>
              <div className="navbar">
                <a className="active" href="index.html">
                  All items
                </a>
                <a href="./">Beverage</a>
                <a href="./">Dry Foods</a>
                <a href="./">Fresh items</a>
                <a href="./">Animal Protein</a>
                <a href="./">Toiletries</a>
                <a
                  className="fa fa-fw fa-search"
                  href="Toiletries/toiletries-img"
                >
                  Search
                </a>
              </div>
            </header>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <Items
            name="Coffee"
            image={coffeeImage}
            brand="Coffee"
            quantity="10"
          />

          <Items name="Tea" image={teaImage} brand="My Tea" quantity="13" />

          <Items
            name="Cereal"
            image={cerealImage}
            brand="Cereal"
            quantity="14"
          />

                <Items
                  name="Milo"
                  image={hotchocImage}
                  brand="Milo"
                  quantity="1"
                /> 
                <Items
                  name="Honey"
                  image={honeyImage}
                  brand="No Name"
                  quantity="1"
                />

                <Items
                  name="Cereal"
                  image={cerealImage}
                  brand="Kelloggs"
                  quantity="1"
                />

                <Items
                  name="Rice"
                  image={riceImage}
                  brand="No name"
                  quantity="1"
                />

                <Items
                  name="Cous Cous"
                  image={couscousImage}
                  brand="Zinda"
                  quantity="1"
                />

                <Items
                  name="Salmon"
                  image={salmonImage}
                  brand="PC Organics"
                  quantity="1"
                />

                <Items
                  name="Beef"
                  image={beefImage}
                  brand="PC Organics"
                  quantity="1"
                />

                <Items
                  name="Mackerel"
                  image={mackerelImage}
                  brand="PC Organics"
                  quantity="1"
                />

                <Items
                  name="Chicken"
                  image={chickenImage}
                  brand="PC Organics"
                  quantity="1"
                />

                <Items
                  name="Tomatoes"
                  image={tomatoImage}
                  brand="PC Organics"
                  quantity="1"
                />

                <Items
                  name="Onion"
                  image={onionImage}
                  brand="No Name"
                  quantity="1"
                />

                <Items
                  name="Potatoes"
                  image={potatoImage}
                  brand="Farmers Market"
                  quantity="1"
                />

                <Items
                  name="Bath Bar"
                  image={soapImage}
                  brand="Olay"
                  quantity="1"
                />

                <Items
                  name="Toothpaste"
                  image={pasteImage}
                  brand="Colgate"
                  quantity="1"
                />















        </div>
      </div>
    </div>
  );
}

export default App;
