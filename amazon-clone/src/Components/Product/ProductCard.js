import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ Product, flex, renderDesc }) {
  const { image, title, id, rating, price, description } = Product;

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
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
