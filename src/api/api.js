import axios from "axios";

const BASE_URL = "https://66bf2a1942533c4031454600.mockapi.io/";

const api = axios.create({
  baseURL: BASE_URL,
});

const resourceApi = (resource) => {
  return {
    getAll: () => api.get(`${resource}`),
    get: (id) => api.get(`${resource}/${id}`),
    create: (data) => api.post(`${resource}`, data),
    update: (id, data) => api.put(`${resource}/${id}`, data),
    delete: (id) => api.delete(`${resource}/${id}`),
  };
};

const tutorsApi = resourceApi("tutors");
const facultiesApi = resourceApi("faculties");

export { tutorsApi, facultiesApi };
