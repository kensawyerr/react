import ItemImage from "./ItemImage";

function Items(props) {
  return (
    <div className="col s12 m4 l3 tc item-height">
      <ItemImage image={props.image} />
      <p className="f3">{props.name}</p>
      <p>Brand name: {props.brand}</p>
      <div className="col s2 m3 l2">
        <label htmlFor="name">Quantity</label>
        <input
          type="number"
          name="tetley-tea"
          id="tetley-tea"
          value={props.quantity}
        />
      </div>
    </div>

    
  );
  }

export default Items;
