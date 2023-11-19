import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../Providers/AuthProviders";
const Header = () => {
  const { user, logOut } = useContext(AuthProvider);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.massage);
      });
  };
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
        {user && <Link to="/profile">Profile</Link>}
        <Link className="btn btn-ghost text-xl" to="/orders">
          Orders
        </Link>
        {user ? (
          <div>
            <span className="m-2 text-lg">{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-xs">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login">Login </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
