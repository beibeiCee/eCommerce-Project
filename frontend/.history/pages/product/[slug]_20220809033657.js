import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import { DetailsStyle, ProductInfo } from "../../styles/ProductDetails";

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
  const { title, description, image } = data.products.data[0].attributes;

  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <Produ>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
         <span>Quantity</span>
         <button>Plus</button>
         <p>0</p>
         <button>Minus</button>
        </div>
      </Produ>  
      <button>Add to Cart</button>
    </DetailsStyle>
  );
}
