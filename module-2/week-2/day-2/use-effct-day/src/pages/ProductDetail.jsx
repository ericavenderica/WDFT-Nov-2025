import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  //this grabs the id from the url
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    async function getOneProduct() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneProduct();
  }, [productId]);

  return (
    <div>
      <img alt="something" src={product.thumbnail} />
      <h3>Title: {product.title}</h3>
      <h3>Price: {product.price}</h3>
      <Link to="/products">
        <button>Back</button>
      </Link>
    </div>
  );
};
export default ProductDetail;
