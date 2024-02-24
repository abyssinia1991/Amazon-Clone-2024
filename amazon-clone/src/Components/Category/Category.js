
import React from "react";
import { CatagoryInfos } from "./CatagoryFullInfos"
import CategoryCard from "./CategoryCard";
import classes from "./Catagory.module.css"; 

function Category() {
  return (
    <section className={classes.Category_container}>
      {CatagoryInfos.map((infos) => (
        <CategoryCard data ={infos} />
      ))}
    </section>
  );
};

export default Category;















