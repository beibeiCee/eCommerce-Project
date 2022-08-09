import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

export default function Nav() {
    return (
      <div>
        <Link href={"/"}>Styled.</Link>
        <div>
          <div>
            <FiShoppingBag />
            <h3>Cart</h3>
          </div>
        </div>
      </div>
    ); 
}