import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getIngredients,
  createIngredient,
  updateIngredient,
  deleteIngredient,
} from "../api";
import { FaArrowLeft } from "react-icons/fa";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState({
    name: "",
    quantity_in_stock: 0,
    unit: "",
    supplier: "",
    expiry_date: "",
    ingredient_type: "",
  });

  const [editIngredient, setEditIngredient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchIngredients();
  }, []);

  const fetchIngredients = async () => {
    try {
      const data = await getIngredients();
      setIngredients(data);
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient({ ...newIngredient, [name]: value });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditIngredient({ ...editIngredient, [name]: value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createIngredient(newIngredient);
      fetchIngredients();
      setNewIngredient({
        name: "",
        quantity_in_stock: 0,
        unit: "",
        supplier: "",
        expiry_date: "",
        ingredient_type: "",
      });
    } catch (error) {
      console.error("Error creating ingredient:", error);
    }
  };

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    try {
      await updateIngredient(id, editIngredient);
      fetchIngredients();
      setEditIngredient(null);
    } catch (error) {
      console.error("Error updating ingredient:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteIngredient(id);
      fetchIngredients();
    } catch (error) {
      console.error("Error deleting ingredient:", error);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <button
          onClick={handleBack}
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </button>
      </div>
      <h1 className="text-3xl font-semibold mb-4">Ingredients Management</h1>

      <form
        onSubmit={handleCreate}
        className="mt-4 p-4 border border-gray-300 rounded-md"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Ingredient</h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="name"
            value={newIngredient.name}
            onChange={handleChange}
            placeholder="Ingredient Name"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="number"
            name="quantity_in_stock"
            value={newIngredient.quantity_in_stock}
            onChange={handleChange}
            placeholder="Quantity in Stock"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="unit"
            value={newIngredient.unit}
            onChange={handleChange}
            placeholder="Unit (e.g., kg, L)"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="supplier"
            value={newIngredient.supplier}
            onChange={handleChange}
            placeholder="Supplier"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="date"
            name="expiry_date"
            value={newIngredient.expiry_date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <select
            name="ingredient_type"
            value={newIngredient.ingredient_type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Ingredient Type</option>
            <option value="dairy">Dairy</option>
            <option value="sugar">Sugar</option>
            <option value="flavoring">Flavoring</option>
            <option value="additive">Additive</option>
          </select>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Add Ingredient
          </button>
        </div>
      </form>

      <h2 className="text-xl font-semibold mb-4">Existing Ingredients</h2>
      <div className="grid grid-cols-1 gap-4">
        {ingredients.map((ingredient) => (
          <div key={ingredient.id} className="border p-4 rounded-md shadow-md">
            <h3 className="font-semibold text-lg">
              {editIngredient && editIngredient.id === ingredient.id ? (
                <input
                  type="text"
                  value={editIngredient.name}
                  onChange={handleEditChange}
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ) : (
                ingredient.name
              )}
            </h3>

            <p>
              Quantity:{" "}
              {editIngredient && editIngredient.id === ingredient.id ? (
                <input
                  type="number"
                  value={editIngredient.quantity_in_stock}
                  onChange={handleEditChange}
                  name="quantity_in_stock"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ) : (
                ingredient.quantity_in_stock
              )}
            </p>

            <p>
              Unit:{" "}
              {editIngredient && editIngredient.id === ingredient.id ? (
                <input
                  type="text"
                  value={editIngredient.unit}
                  onChange={handleEditChange}
                  name="unit"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ) : (
                ingredient.unit
              )}
            </p>

            <p>
              Supplier:{" "}
              {editIngredient && editIngredient.id === ingredient.id ? (
                <input
                  type="text"
                  value={editIngredient.supplier}
                  onChange={handleEditChange}
                  name="supplier"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ) : (
                ingredient.supplier
              )}
            </p>

            <p>
              Expiry Date:{" "}
              {editIngredient && editIngredient.id === ingredient.id ? (
                <input
                  type="date"
                  value={editIngredient.expiry_date}
                  onChange={handleEditChange}
                  name="expiry_date"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ) : (
                ingredient.expiry_date
              )}
            </p>

            <p>
              Ingredient Type:{" "}
              {editIngredient && editIngredient.id === ingredient.id ? (
                <select
                  value={editIngredient.ingredient_type}
                  onChange={handleEditChange}
                  name="ingredient_type"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                >
                  <option value="dairy">Dairy</option>
                  <option value="sugar">Sugar</option>
                  <option value="flavoring">Flavoring</option>
                  <option value="additive">Additive</option>
                </select>
              ) : (
                ingredient.ingredient_type
              )}
            </p>

            <div className="mt-4">
              {editIngredient && editIngredient.id === ingredient.id ? (
                <div>
                  <button
                    onClick={(e) => handleUpdate(e, ingredient.id)}
                    className="bg-yellow-500 text-white p-2 rounded-md mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => setEditIngredient(null)}
                    className="bg-gray-500 text-white p-2 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => setEditIngredient(ingredient)}
                    className="bg-yellow-500 text-white p-2 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ingredient.id)}
                    className="bg-red-500 text-white p-2 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
