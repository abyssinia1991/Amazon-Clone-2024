
import React from "react";
import { categoryInfos } from "./CategoryFullinfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css"

const Category = () => {
  return (
    <section className= {classes.Category_container}>
      {categoryInfos.map((infos) => (
        <CategoryCard key={infos.id} data={infos} />
      ))}
    </section>
  );
};

export default Category;















// import React from "react";
// import { categoryInfos } from "./CategoryFullinfos";
// import CategoryCard from "./CategoryCard";

// const Category = () => {
//   return;
//     <section>
      
//         {
//             categoryInfos.map((infos) => {
//                 <CategoryCard data = {infos} />;
                
//             })
//         }
//   </section>;
// };

// export default Category;