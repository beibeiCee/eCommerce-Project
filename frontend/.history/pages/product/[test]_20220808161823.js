import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";

export default function ProductDetails() {
  //Fetch graphQL data
  const [results] =  useQuery({})
  
  
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h3>Title</h3>
        <p>Description</p>
      </div>
      <div>
        <span>Quantity</span>
        <button>Plus</button>
        <p></p>
        <button>Minus</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}
