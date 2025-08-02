import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <div className="text-center">
          <div className="loader mb-4 flex justify-center gap-2">
            <div className="bounce"></div>
            <div className="bounce bounce2"></div>
            <div className="bounce bounce3"></div>
          </div>
          <p className="text-sm">College Companion is loading...</p>
          <p className="text-xs mt-2">Crafted by <span className="text-blue-400">Mohammed Imad Umar</span></p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto text-center mt-20">
        <h1 className="text-3xl font-bold mb-4">Welcome back 👋</h1>
        <p className="text-lg">Your all-in-one College Companion dashboard</p>
        <p className="text-sm text-gray-400 mt-2">Built by <span className="text-blue-400">Mohammed Imad Umar</span></p>
      </div>
    </div>
  );
};

export default Dashboard;