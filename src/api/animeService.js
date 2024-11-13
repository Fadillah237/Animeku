import apiClient from './apiClient';

// Mendapatkan daftar anime
export const getAnimeList = async () => {
  try {
    const response = await apiClient.get('/'); // Pastikan endpoint sesuai di Mock API Anda
    return response.data;
  } catch (error) {
    console.error("Error fetching anime list:", error.toJSON());
    throw error;
  }
};

// Mendapatkan detail anime
export const getAnimeDetails = async (id) => {
  try {
    const response = await apiClient.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching anime details:", error.toJSON());
    throw error;
  }
};

// Menambahkan anime baru
export const addAnime = async (animeData) => {
  try {
    const response = await apiClient.post('/', animeData); // Pastikan endpoint sesuai
    return response.data;
  } catch (error) {
    console.error("Error adding anime:", error.toJSON());
    throw error;
  }
};

// Memperbarui data anime
export const updateAnime = async (id, animeData) => {
  try {
    const response = await apiClient.put(`/${id}`, animeData); // Sesuaikan endpoint
    return response.data;
  } catch (error) {
    console.error("Error updating anime:", error.toJSON());
    throw error;
  }
};

// Menghapus anime
export const deleteAnime = async (id) => {
  try {
    const response = await apiClient.delete(`/${id}`); // Pastikan endpoint sesuai
    return response.data;
  } catch (error) {
    console.error("Error deleting anime:", error.toJSON());
    throw error;
  }
};
