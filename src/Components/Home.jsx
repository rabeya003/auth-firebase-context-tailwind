import { useContext } from "react";
import { AuthProvider } from "../Providers/AuthProviders";

const Home = () => {
  const user = useContext(AuthProvider);
  return (
    <div>
      <h3>
        This is home{" "}
        {user && (
          <span>
            Name:{user.displayName} and age is {user.age}
          </span>
        )}
      </h3>
    </div>
  );
};

export default Home;
