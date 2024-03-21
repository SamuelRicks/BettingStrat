import { Link } from "react-router-dom";
import { NavBarInterface } from "../types";

const NavBar = ({ text, href }: NavBarInterface) => {
  return (
    <nav>
      <ul>
        <Link to={href}>{text}</Link>
      </ul>
    </nav>
  );
};
export default NavBar;
