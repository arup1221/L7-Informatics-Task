import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SeasonalFlavors from "./Pages/SeasonalFlavors";
import Ingredients from "./Pages/Ingredients";
import CustomerSuggestions from "./Pages/CustomerSuggestions";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seasonal-flavors" element={<SeasonalFlavors />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/customer-suggestions" element={<CustomerSuggestions />} />
      </Routes>
    </Router>
  );
};

export default App;
