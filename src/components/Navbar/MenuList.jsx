import { NavLink } from "react-router-dom";
import MenuItem from "./MenuItem";

const MenuList = () => {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <NavLink to={"/"}>
          <MenuItem>Home</MenuItem>
        </NavLink>
        <MenuItem>Colleges</MenuItem>
        <MenuItem>Admission</MenuItem>
        <MenuItem>My Collage</MenuItem>
      </ul>
    </div>
  );
};
export default MenuList;
