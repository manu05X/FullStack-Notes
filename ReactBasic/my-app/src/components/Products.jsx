import React from "react";

//https://legacy.reactjs.org/docs/lists-and-keys.html

// 1
// function Products() {
//   let products = ["Laptops", "Headphones", "Mouse", "Keyboard", "Laptops"];

//   return (
//     <div>
//       {/* {products.map((product) => {
//         return <li>{product}</li>;
//       })} */}

//       {/* if we are using () after => we donot need to use return statement */}
//       {products.map((product) => (
//         <li>{product}</li>
//       ))}
//     </div>
//   );
// }

// export default Products;

//____________________we will wrap our list in unorder list i.e <ul>____________________________________________

//2
// function Products() {
//   let products = ["Laptops", "Headphones", "Mouse", "Keyboard", "Laptops"];

//   return (
//     <div>
//       {/* use ul (unordered list) */}

//       <ul>
//         {products.map((product) => {
//           return <li>{product}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Products;

//__________________above code had error in browser as provide diffret key to element of array______________________________________________

//3>
// function Products() {
//   let products = ["Laptops", "Headphones", "Mouse", "Keyboard", "Laptops"];

//   return (
//     <div>
//       {/* use ul (unordered list) */}

//       <ul>
//       {/* we are poviding index with product in the list to identify each element in array products as unique elements*/}
//         {products.map((product, index) => {
//           return <li key={index}>{index}{product}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Products;

//__________________above code had we were only handling array elements now we will handle objects______________________________________________

//4
function Products() {
  //  let products = ['Laptops' , 'Headphones' , 'Mouse' , 'Keyboard' , "Laptops"]

  //array of objects
  let productsObjects = [
    { name: "Laptop ", price: "35000 ", Brand: "HP" },
    { name: "Headphones ", price: "5000 ", Brand: "Sony" },
    { name: "Mouse ", price: "1000 ", Brand: "HP" },
    { name: "KeyBoard ", price: "2000 ", Brand: "Dell" },
  ];
  return (
    <div>
      <ul>
        {productsObjects.map((product, index) => {
          return (
            <li key={index}>
              Name : {product.name}
              Price : {product.price}
              Brand : {product.Brand}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
