import { Link } from "react-router-dom";
import Logo from "./Logo";
import MenuList from "./MenuList";
import MobileMenuList from "./MobileMenuList";
import { useAuth } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-black opacity-70 ">
      <nav className="navbar container mx-auto px-2">
        <div className="navbar-start">
          <MobileMenuList />
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <MenuList />
        <div className="navbar-end">
          {user ? (
            <Link to="/profile" className=" text-white">
              {user.displayName}
            </Link>
          ) : (
            <Link to="/login" className="button text-white">
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
