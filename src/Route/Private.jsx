import { useContext } from "react";
import { AuthProvider } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" replace={true}></Navigate>;
};

export default Private;
