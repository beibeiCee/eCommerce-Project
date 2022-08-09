import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavStyles } from "../styles/NavStyles";

export default function Nav() {
    return (
      <Nav>
        <Link href={"/"}>Styled.</Link>
        <div>
          <div>
            <FiShoppingBag />
            <h3>Cart</h3>
          </div>
        </div>
      </Nav>
    ); 
}