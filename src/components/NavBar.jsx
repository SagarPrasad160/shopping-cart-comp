import { Link, useParams, useLocation } from "react-router-dom";

function NavBar() {
  const params = useParams();
  const location = useLocation();

  const matchRoute = (route) => {
    if (location.pathname === route) {
      return true;
    }
    return false;
  };

  return (
    <div className="p-4 text-xl">
      <ul>
        <li
          className={matchRoute("/") ? "border-b-4 border-blue-400" : undefined}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={
            matchRoute("/cart") ? "border-b-4 border-blue-400" : undefined
          }
        >
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
