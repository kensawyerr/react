import React from 'react'
import teaImage from "./images/tea.jpg";
import coffeeImage from "./images/coffee.jpg";
import cerealImage from "./images/cereal.jpg";
// import hotchocImage from "./images/milo.jpg";
// import honeyImage from "./images/honey.jpg";
// import riceImage from "./images/rice.jpg";
// import couscousImage from "./images/cous-cous.jpg";
// import salmonImage from "./images/salmon.jpg";
// import beefImage from "./images/beef.jpg";
// import mackerelImage from "./images/salmon.jpg";
// import chickenImage from "./images/chicken.jpg";
// import tomatoImage from "./images/tomatoes.jpg";
// import onionImage from "./images/onion.jpg";
// import potatoImage from "./images/potatoes.jpg";
// import soapImage from "./images/soap.jpg";
// import pasteImage from "./images/paste.jpg";
import Items from "./components/Items";

export default function Home() {
    return (
      <div>
         <div className="container-fluid">

            <header className="header grey darken-2 tc row col s12">
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
                <a href="Beverage/bev-img">Beverage</a>
                <a href="Dry-food-produce/dry-food-img">Dry Foods</a>
                <a href="Fresh-produce/fresh-produce-img">Fresh items</a>
                <a href="Protein/protein-img">Animal Protein</a>
                <a href="Protein/protein-img">Toiletries</a>
                <a
                  className="fa fa-fw fa-search"
                  href="Toiletries/toiletries-img"
                >
                  Search
                </a>
              </div>
            </header>
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

{/* <p>My name is Hafsat</p> */}
</div>    
</div>
</div>

    )
};
