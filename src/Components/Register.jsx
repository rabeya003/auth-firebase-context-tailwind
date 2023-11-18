import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider } from "../Providers/AuthProviders";

const Register = () => {
  // context API
  const { createUser } = useContext(AuthProvider);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    console.log(email, password, name);
    // Password Valodation
    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Please add at least one uppercase letter");
      return;
    } else if (!/(?=.*\d)/.test(password)) {
      toast.error("Please add at least one number");
      return;
    } else if (password.length < 6) {
      toast.error("Please add at least 6 characters in your password");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
        toast.success("User register successfully");
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label flex justify-center">
                <Link to="/login" className="btn btn-active btn-link">
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6 ">
              <button className="btn btn-primary ">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
