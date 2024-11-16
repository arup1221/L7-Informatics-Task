import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api"; 

// ------------- API of Seasonal Flavors -------------

export const getSeasonalFlavors = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/seasonal-flavors/`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching seasonal flavors:", error);
    throw error;
  }
};


export const createSeasonalFlavor = async (flavor) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/seasonal-flavors/`,
      flavor
    );
    return response.data;
  } catch (error) {
    console.error("Error creating seasonal flavor:", error);
    throw error;
  }
};

export const updateSeasonalFlavor = async (id, flavor) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/seasonal-flavors/${id}/`,
      flavor
    );
    return response.data;
  } catch (error) {
    console.error("Error updating seasonal flavor:", error);
    throw error;
  }
};

export const deleteSeasonalFlavor = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/seasonal-flavors/${id}/`);
  } catch (error) {
    console.error("Error deleting seasonal flavor:", error);
    throw error;
  }
};

// ------------- API of Ingredients -------------

export const getIngredients = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/ingredients/`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    throw error; 
  }
};


export const createIngredient = async (ingredient) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/ingredients/`,
      ingredient
    );
    return response.data;
  } catch (error) {
    console.error("Error creating ingredient:", error);
    throw error;
  }
};


export const updateIngredient = async (id, ingredient) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/ingredients/${id}/`,
      ingredient
    );
    return response.data; 
  } catch (error) {
    console.error("Error updating ingredient:", error);
    throw error;
  }
};


export const partialUpdateIngredient = async (id, ingredient) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/ingredients/${id}/`,
      ingredient
    );
    return response.data; 
  } catch (error) {
    console.error("Error partially updating ingredient:", error);
    throw error;
  }
};


export const deleteIngredient = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/ingredients/${id}/`);
  } catch (error) {
    console.error("Error deleting ingredient:", error);
    throw error;
  }
};

// ------------- API of Customer Suggestions -------------

export const getSuggestions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/customer-suggestions/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching customer suggestions:", error);
    throw error;
  }
};

export const createSuggestion = async (suggestion) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/customer-suggestions/`,
      suggestion
    );
    return response.data;
  } catch (error) {
    console.error("Error creating customer suggestion:", error);
    throw error;
  }
};


export const updateSuggestion = async (id, suggestion) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/customer-suggestions/${id}/`,
      suggestion
    );
    return response.data;
  } catch (error) {
    console.error("Error updating customer suggestion:", error);
    throw error;
  }
};


export const deleteSuggestion = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/customer-suggestions/${id}/`);
  } catch (error) {
    console.error("Error deleting customer suggestion:", error);
    throw error;
  }
};
