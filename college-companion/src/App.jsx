import AppRoutes from "./Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
      <Navbar />
      <div className="flex-grow">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;