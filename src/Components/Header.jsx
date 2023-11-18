import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost text-xl">Auth Master</a>
        <Link className="btn btn-ghost text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost text-xl" to="/register">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Header;
