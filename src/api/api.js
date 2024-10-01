import axios from 'axios';

const BASE_URL_TUTORS = 'https://66bf2a1942533c4031454600.mockapi.io/';

const apiT = axios.create({
  baseURL: BASE_URL_TUTORS,
});

const resourceApi = resource => {
  return {
    getAll: async () => {
      try {
        return await apiT.get(`${resource}`);
      } catch (error) {
        console.error(`Error fetching ${resource}:`, error);
        throw error;
      }
    },
    get: async id => {
      if (!id) {
        throw new Error('ID is required');
      }
      try {
        return await apiT.get(`${resource}/${id}`);
      } catch (error) {
        console.error(`Error fetching ${resource} with id ${id}:`, error);
        throw error;
      }
    },
    create: async data => {
      try {
        return await apiT.post(`${resource}`, data);
      } catch (error) {
        console.error(`Error creating ${resource}:`, error);
        throw error;
      }
    },
    update: async (id, data) => {
      if (!id) {
        throw new Error('ID is required for update');
      }
      try {
        return await apiT.put(`${resource}/${id}`, data);
      } catch (error) {
        console.error(`Error updating ${resource} with id ${id}:`, error);
        throw error;
      }
    },
    delete: async id => {
      if (!id) {
        throw new Error('ID is required for deletion');
      }
      try {
        return await apiT.delete(`${resource}/${id}`);
      } catch (error) {
        console.error(`Error deleting ${resource} with id ${id}:`, error);
        throw error;
      }
    },
  };
};

const tutorsApi = resourceApi('tutors');
const universitiesApi = resourceApi('universities');

export { tutorsApi, universitiesApi };
