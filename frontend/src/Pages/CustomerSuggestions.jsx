import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getSuggestions,
  createSuggestion,
  updateSuggestion,
  deleteSuggestion,
} from "../api";

const CustomerSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [newSuggestion, setNewSuggestion] = useState({
    name: "",
    email: "",
    suggestion: "",
    allergy_concern: "",
    priority: "low",
  });
  const [editingSuggestion, setEditingSuggestion] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const data = await getSuggestions();
      setSuggestions(data);
    };
    fetchSuggestions();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSuggestion((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createSuggestion(newSuggestion);
    const updatedSuggestions = await getSuggestions();
    setSuggestions(updatedSuggestions);
    setNewSuggestion({
      name: "",
      email: "",
      suggestion: "",
      allergy_concern: "",
      priority: "low",
    });
  };

  const handleEdit = (suggestion) => {
    setEditingSuggestion(suggestion);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (editingSuggestion) {
      await updateSuggestion(editingSuggestion.id, editingSuggestion);
      const updatedSuggestions = await getSuggestions();
      setSuggestions(updatedSuggestions);
      setEditingSuggestion(null);
    }
  };

  const handleDelete = async (id) => {
    await deleteSuggestion(id);
    const updatedSuggestions = await getSuggestions();
    setSuggestions(updatedSuggestions);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          &larr; Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-semibold mb-4">Customer Suggestions</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-4 p-4 border border-gray-300 rounded-md"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Suggestion</h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="name"
            value={newSuggestion.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            value={newSuggestion.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <textarea
            name="suggestion"
            value={newSuggestion.suggestion}
            onChange={handleInputChange}
            placeholder="Your Suggestion"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <textarea
            name="allergy_concern"
            value={newSuggestion.allergy_concern}
            onChange={handleInputChange}
            placeholder="Allergy Concern (Optional)"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <select
            name="priority"
            value={newSuggestion.priority}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Add Suggestion
          </button>
        </div>
      </form>
      <h2 className="text-xl font-semibold mb-4">Existing Suggestions</h2>
      <div className="grid grid-cols-1 gap-4">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="border p-4 rounded-md shadow-md">
            <h3 className="font-semibold text-lg">
              {editingSuggestion && editingSuggestion.id === suggestion.id ? (
                <input
                  type="text"
                  value={editingSuggestion.name}
                  onChange={(e) =>
                    setEditingSuggestion((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ) : (
                suggestion.name
              )}
            </h3>

            <p>
              Email:{" "}
              {editingSuggestion && editingSuggestion.id === suggestion.id ? (
                <input
                  type="email"
                  value={editingSuggestion.email}
                  onChange={(e) =>
                    setEditingSuggestion((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ) : (
                suggestion.email
              )}
            </p>

            <p>
              Suggestion:{" "}
              {editingSuggestion && editingSuggestion.id === suggestion.id ? (
                <textarea
                  value={editingSuggestion.suggestion}
                  onChange={(e) =>
                    setEditingSuggestion((prev) => ({
                      ...prev,
                      suggestion: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ) : (
                suggestion.suggestion
              )}
            </p>

            <p>
              Allergy Concern:{" "}
              {editingSuggestion && editingSuggestion.id === suggestion.id ? (
                <textarea
                  value={editingSuggestion.allergy_concern}
                  onChange={(e) =>
                    setEditingSuggestion((prev) => ({
                      ...prev,
                      allergy_concern: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ) : (
                suggestion.allergy_concern
              )}
            </p>

            <p>
              Priority:{" "}
              {editingSuggestion && editingSuggestion.id === suggestion.id ? (
                <select
                  value={editingSuggestion.priority}
                  onChange={(e) =>
                    setEditingSuggestion((prev) => ({
                      ...prev,
                      priority: e.target.value,
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              ) : (
                suggestion.priority
              )}
            </p>

            <div className="mt-4">
              {editingSuggestion && editingSuggestion.id === suggestion.id ? (
                <div>
                  <button
                    onClick={handleUpdate}
                    className="bg-yellow-500 text-white p-2 rounded-md mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => setEditingSuggestion(null)}
                    className="bg-gray-500 text-white p-2 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => handleEdit(suggestion)}
                    className="bg-yellow-500 text-white p-2 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(suggestion.id)}
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

export default CustomerSuggestions;
