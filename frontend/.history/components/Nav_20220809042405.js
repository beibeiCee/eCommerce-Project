import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavStyles, Nav } from "../styles/NavStyles";

export default function Nav() {
    return (
      <NavStyles>
        <Link href={"/"}>Styled.</Link>
        <div>
          <div>
            <FiShoppingBag />
            <h3>Cart</h3>
          </div>
        </div>
      </NavStyles>
    ); 
}