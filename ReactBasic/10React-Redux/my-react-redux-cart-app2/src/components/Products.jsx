import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductSlice";
import { addToCart } from "../store/CartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  //The job is to add the product to the state store. And the product will be treated as payload to addToCart action in reducer
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="productsWrapper">
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" &&
        products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h5>${product.price}</h5>
            <button onClick={() => handleAddToCart(product)} className="btn">
              Add to cart
            </button>
          </div>
        ))}
    </div>
  );
};

export default Products;

/*

Purpose of handleAddToCart(product)

1> Interaction with Redux:
    The handleAddToCart(product) function uses the dispatch function from the Redux store to send an action that updates the cart state. This is how the component interacts with the global state managed by Redux.

2> Adding Products to Cart:
    When a user clicks the "Add to cart" button for a product, the handleAddToCart(product) function is called with the corresponding product as an argument. This function will dispatch an action to add that product to the cart.

3> Usage in the Component:
    The function is typically defined as follows in the Products.jsx component:
        const handleAddToCart = (product) => {
            dispatch(addToCart(product));
        };
Here, addToCart is an action creator imported from the cartSlice.js file, which generates an action to be dispatched. The product passed to handleAddToCart is sent as the payload of this action.

4> Updating the State:
    When the action is dispatched, the Redux store processes the action and updates the cart state by invoking the appropriate reducer defined in cartSlice.js. Specifically, the addToCart reducer is called, which adds the product to the cart array.

    */
