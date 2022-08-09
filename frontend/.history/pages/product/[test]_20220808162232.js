import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";

export default function ProductDetails() {
  //Fetch graphQL data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: {slug: "denim-jacket"}
  });
  const {data, fetching, erros};
  
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
