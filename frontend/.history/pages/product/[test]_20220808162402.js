import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";

export default function ProductDetails() {
  //Fetch graphQL data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: "denim-jacket" },
  });
  const { data, fetching, error } = results;

  //Check for the data coming in:
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Uh-oh...{error.message}</p>;
  console.log(data);;

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
