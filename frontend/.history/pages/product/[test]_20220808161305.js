import { useQuery } from "urql";

export default function ProductDetails() {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h3></h3>
        <p></p>
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
