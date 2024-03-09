import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { type } from "../../Utility/action.type";

function ProductCard({ Product, flex, renderDesc,rendrAdd}) {
  const { image, title, id, rating, price, description } = Product;
  const [state, dispatch] = useContext(DataContext);
 

  const addToCart = () => {
    dispatch({
      type: type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/product/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>

        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}

        <div className={classes.rating}>
          {/* rating */}
          {rating && (
            <div className={classes.rating}>
              <Rating value={rating.rate} precision={0.1} />
              <small>{rating.count}</small>
            </div>
          )}
        </div>
        {/* count */}
        <small>{rating && rating.count}</small>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {
          rendrAdd &&   <button className={classes.button} onClick={addToCart}>
          Add to Cart
        </button>
        }
      
      </div>
    </div>
  );
}

export default ProductCard;
