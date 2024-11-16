import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Chocolate House!</h1>
      </header>

      <main className="p-6 text-center">
        <h2 className="text-xl font-semibold">Manage Your Seasonal Flavors, Ingredients, and Customer Suggestions</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-y-6">
          <Link
            to="/seasonal-flavors"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mx-2"
          >
            Manage Seasonal Flavors
          </Link>
          <Link
            to="/ingredients"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mx-2"
          >
            Manage Ingredients
          </Link>
          <Link
            to="/customer-suggestions"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mx-2"
          >
            View Customer Suggestions
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
