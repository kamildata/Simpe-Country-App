import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={classes.cart}>
      <img src={props.imgSource} alt={`flag of ${props.countryName}`}></img>
      <div className={classes.countryInfo}>
        <h3>{props.countryName}</h3>
        <p>
          Population: <span>{props.countryPopulation}</span>
        </p>
        <p>
          Region: <span>{props.countryRegion}</span>
        </p>
        <p>
          Capital: <span>{props.countryCapital}</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
