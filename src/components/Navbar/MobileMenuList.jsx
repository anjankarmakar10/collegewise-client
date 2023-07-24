import { NavLink } from "react-router-dom";
import MenuItem from "./MenuItem";
import { FcMenu } from "react-icons/fc";

const MobileMenuList = () => {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <FcMenu size={20} color="white" />
      </label>
      <ul
        tabIndex={0}
        className="menu  z-50 menu-sm dropdown-content relative bg-green-600 rounded-md"
      >
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
export default MobileMenuList;
