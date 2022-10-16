import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products?.find((product) => product.id === productId);
  const productFound = product ? true : false;

  return (
    <section className='section product'>
      {productFound ?
        <div>
          <h2>single product -&gt; {productId}</h2>
          <h3>{product.name}</h3>
          <img src={product.image} alt="" />
          <div>
            <Link to='/products'>Back to products</Link>
          </div>
        </div>
        :
        <div>
          <h2>Product not found</h2>
        </div>
      }

    </section>
  );
};

export default SingleProduct;
