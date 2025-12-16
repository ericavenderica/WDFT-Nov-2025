import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleDelete(id) {
    const filteredProducts = products.filter((oneProduct) => {
      if (oneProduct.id !== id) {
        return true;
      }
    });
    setProducts(filteredProducts);
  }

  return (
    <div id="products-container">
      {products &&
        products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <img alt={product.title} src={product.thumbnail} />
              <Link to={`/products/${product.id}`} className="product-title">
                <p>{product.title}</p>
              </Link>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
};
export default ProductList;
