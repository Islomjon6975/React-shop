import { useContext } from "react";
import { ShopContext } from "../context";

export default function BasketItem(props) {
  const { id, name, price, quantity, decrementQuantity, incrementQuantity } =
    props;

  const { example } = useContext(ShopContext);

  console.log(example);
  return (
    <li classNameName="collection-item">
      {name} x {quantity} = {price * quantity}$
      <span classNameName="secondary-content">
        <a
          className="waves-effect waves-light btn"
          onClick={() => incrementQuantity(id)}
        >
          <i className="material-icons left">add</i>Add
        </a>
        
        <a
          className="waves-effect waves-light btn"
          onClick={() => decrementQuantity(id)}
          style={{ margin: "0px 10px" }}
        >
          <i className="material-icons left">remove</i>Remove
        </a>

        <a
          className="waves-effect waves-light btn"
          onClick={() => props.removeFromBasket(id)}
        >
          <i classNameName="material-icons basket-delete">delete_forever</i>{" "}
          Delete
        </a>
      </span>
    </li>
  );
}
