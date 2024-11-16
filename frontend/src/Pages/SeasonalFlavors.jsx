import  { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import {
  getSeasonalFlavors,
  createSeasonalFlavor,
  updateSeasonalFlavor,
  deleteSeasonalFlavor,
} from "../api"; 

const SeasonalFlavors = () => {
  const [flavors, setFlavors] = useState([]);
  const [newFlavor, setNewFlavor] = useState({
    name: "",
    description: "",
    flavor_type: "chocolate",
    availability_start: "",
    availability_end: "",
    price: 0.0,
    rating: 0.0,
    is_active: "true", 
  });
  const [editingFlavor, setEditingFlavor] = useState(null);


  useEffect(() => {
    const fetchFlavors = async () => {
      const data = await getSeasonalFlavors();
      setFlavors(data);
    };
    fetchFlavors();
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFlavor((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createSeasonalFlavor(newFlavor);
    const updatedFlavors = await getSeasonalFlavors();
    setFlavors(updatedFlavors);
    setNewFlavor({
      name: "",
      description: "",
      flavor_type: "chocolate",
      availability_start: "",
      availability_end: "",
      price: 0.0,
      rating: 0.0,
      is_active: "true", 
    });
  };

  const handleEdit = (flavor) => {
    setEditingFlavor(flavor);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateSeasonalFlavor(editingFlavor.id, editingFlavor);
    const updatedFlavors = await getSeasonalFlavors();
    setFlavors(updatedFlavors);
    setEditingFlavor(null);
  };


  const handleDelete = async (id) => {
    await deleteSeasonalFlavor(id);
    const updatedFlavors = await getSeasonalFlavors();
    setFlavors(updatedFlavors);
  };

  return (
    <div className="container mx-auto p-4">
      
      <div className="mb-4">
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          &larr; Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-semibold mb-4">Seasonal Flavors</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-4 p-4 border border-gray-300 rounded-md"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Flavor</h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="name"
            value={newFlavor.name}
            onChange={handleInputChange}
            placeholder="Flavor Name"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <textarea
            name="description"
            value={newFlavor.description}
            onChange={handleInputChange}
            placeholder="Flavor Description"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <select
            name="flavor_type"
            value={newFlavor.flavor_type}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="chocolate">Chocolate</option>
            <option value="vanilla">Vanilla</option>
            <option value="strawberry">Strawberry</option>
            <option value="mint">Mint</option>
          </select>
          <input
            type="date"
            name="availability_start"
            value={newFlavor.availability_start}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="date"
            name="availability_end"
            value={newFlavor.availability_end}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="number"
            name="price"
            value={newFlavor.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="number"
            name="rating"
            value={newFlavor.rating}
            onChange={handleInputChange}
            placeholder="Rating"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <select
            name="is_active"
            value={newFlavor.is_active}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md mt-4"
          >
            Add Flavor
          </button>
        </div>
      </form>

      <h2 className="text-xl font-semibold mb-4">Existing Flavors</h2>
      <div className="grid grid-cols-1 gap-4">
        {flavors.map((flavor) => (
          <div key={flavor.id} className="border p-4 rounded-md shadow-md">
            <h3 className="font-semibold text-lg">
              {editingFlavor && editingFlavor.id === flavor.id ? (
                <input
                  type="text"
                  value={editingFlavor.name}
                  onChange={(e) =>
                    setEditingFlavor((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ) : (
                flavor.name
              )}
            </h3>

            <p>
              Description:{" "}
              {editingFlavor && editingFlavor.id === flavor.id ? (
                <textarea
                  value={editingFlavor.description}
                  onChange={(e) =>
                    setEditingFlavor((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ) : (
                flavor.description
              )}
            </p>

            <p>
              Type:{" "}
              {editingFlavor && editingFlavor.id === flavor.id ? (
                <select
                  value={editingFlavor.flavor_type}
                  onChange={(e) =>
                    setEditingFlavor((prev) => ({
                      ...prev,
                      flavor_type: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                >
                  <option value="chocolate">Chocolate</option>
                  <option value="vanilla">Vanilla</option>
                  <option value="strawberry">Strawberry</option>
                  <option value="mint">Mint</option>
                </select>
              ) : (
                flavor.flavor_type
              )}
            </p>

            <p>
              Available from:{" "}
              {editingFlavor && editingFlavor.id === flavor.id ? (
                <input
                  type="date"
                  value={editingFlavor.availability_start}
                  onChange={(e) =>
                    setEditingFlavor((prev) => ({
                      ...prev,
                      availability_start: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ) : (
                flavor.availability_start
              )}
            </p>

            <p>
              Available until:{" "}
              {editingFlavor && editingFlavor.id === flavor.id ? (
                <input
                  type="date"
                  value={editingFlavor.availability_end}
                  onChange={(e) =>
                    setEditingFlavor((prev) => ({
                      ...prev,
                      availability_end: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ) : (
                flavor.availability_end
              )}
            </p>

            <p>
              Price:{" "}
              {editingFlavor && editingFlavor.id === flavor.id ? (
                <input
                  type="number"
                  value={editingFlavor.price}
                  onChange={(e) =>
                    setEditingFlavor((prev) => ({
                      ...prev,
                      price: parseFloat(e.target.value),
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ) : (
                flavor.price 
              )}
                ₹
            </p>

            <p>
              Rating:{" "}
              {editingFlavor && editingFlavor.id === flavor.id ? (
                <input
                  type="number"
                  value={editingFlavor.rating}
                  onChange={(e) =>
                    setEditingFlavor((prev) => ({
                      ...prev,
                      rating: parseFloat(e.target.value), // Ensure rating is a number
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                  step="0.1" 
                  min="0" 
                  max="5" 
                />
              ) : (
                flavor.rating
              )}
            </p>

            <p>
              Active:{" "}
              {editingFlavor && editingFlavor.id === flavor.id ? (
                <select
                  value={editingFlavor.is_active}
                  onChange={(e) =>
                    setEditingFlavor((prev) => ({
                      ...prev,
                      is_active: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              ) : (
                flavor.is_active.toString()
              )}
            </p>

            {/* <div className="flex space-x-2">
              {editingFlavor && editingFlavor.id === flavor.id ? (
                <button
                  onClick={handleUpdate}
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(flavor)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => handleDelete(flavor.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div> */}
            <div className="mt-4">
              {editingFlavor && editingFlavor.id === flavor.id ? (
                <div>
                  <button
                    onClick={handleUpdate} // Call the handleUpdate function correctly
                    className="bg-yellow-500 text-white p-2 rounded-md mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleEdit(null)}
                    className="bg-gray-500 text-white p-2 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => handleEdit(flavor)}
                    className="bg-yellow-500 text-white p-2 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(flavor.id)}
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

export default SeasonalFlavors;
