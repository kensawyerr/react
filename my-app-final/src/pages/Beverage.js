import React from "react";
import Items from "../components/Items";
import coffeeImage from "../images/coffee.jpg";
import teaImage from "../images/tea.jpg";
import cerealImage from "../images/cereal.jpg";
import hotchocImage from "../images/milo.jpg";
import honeyImage from "../images/honey.jpg";
import riceImage from "../images/rice.jpg";
import couscousImage from "../images/cous-cous.jpg";
import salmonImage from "../images/salmon.jpg";
import beefImage from "../images/beef.jpg";
import mackerelImage from "../images/salmon.jpg";
import chickenImage from "../images/chicken.jpg";
import tomatoImage from "../images/tomatoes.jpg";
import onionImage from "../images/onion.jpg";
import potatoImage from "../images/potatoes.jpg";
import soapImage from "../images/soap.jpg";
import pasteImage from "../images/paste.jpg";

export default function Beverage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Items name="Beef" image={beefImage} brand="PC Organics" quantity="1" />

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

        <Items name="Onion" image={onionImage} brand="No Name" quantity="1" />

        <Items
          name="Potatoes"
          image={potatoImage}
          brand="Farmers Market"
          quantity="1"
        />

        <Items name="Bath Bar" image={soapImage} brand="Olay" quantity="1" />

        <Items
          name="Toothpaste"
          image={pasteImage}
          brand="Colgate"
          quantity="1"
        />
      </div>
    </div>
  );
}
