import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";

export default function ProductDetails() {
  //Fetch Slug
  const { query } = useRouter();
  // console.log(router);

  //Fetch graphQL data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;
  //Check for the data coming in:
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Uh-oh...{error.message}</p>;
  // console.log(data);

  //extract our data
  const {title,description, image} = data.products.data

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
