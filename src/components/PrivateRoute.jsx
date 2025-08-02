import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="text-center mt-20 text-white">Loading...</div>;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;