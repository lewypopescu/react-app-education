import axios from "axios";

const BASE_URL_TUTORS = "https://66bf2a1942533c4031454600.mockapi.io/";
const BASE_URL_AUTH = "https://connections-api.goit.global/";

const apiT = axios.create({
  baseURL: BASE_URL_TUTORS,
});

const apiA = axios.create({
  baseURL: BASE_URL_AUTH,
});

const setAuthHeader = (token) => {
  if (token) {
    apiA.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete apiA.defaults.headers.common.Authorization;
  }
};

const resourceApi = (resource) => {
  return {
    getAll: async () => {
      try {
        return await apiT.get(`${resource}`);
      } catch (error) {
        console.error(`Error fetching ${resource}:`, error);
        throw error;
      }
    },
    get: async (id) => {
      if (!id) {
        throw new Error("ID is required");
      }
      try {
        return await apiT.get(`${resource}/${id}`);
      } catch (error) {
        console.error(`Error fetching ${resource} with id ${id}:`, error);
        throw error;
      }
    },
    create: async (data) => {
      try {
        return await apiT.post(`${resource}`, data);
      } catch (error) {
        console.error(`Error creating ${resource}:`, error);
        throw error;
      }
    },
    update: async (id, data) => {
      if (!id) {
        throw new Error("ID is required for update");
      }
      try {
        return await apiT.put(`${resource}/${id}`, data);
      } catch (error) {
        console.error(`Error updating ${resource} with id ${id}:`, error);
        throw error;
      }
    },
    delete: async (id) => {
      if (!id) {
        throw new Error("ID is required for deletion");
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

const tutorsApi = resourceApi("tutors");
const facultiesApi = resourceApi("faculties");

const userApi = {
  signup: async (data) => {
    try {
      const response = await apiA.post("/users/signup", data);
      setAuthHeader(response.data.token);
      return response;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  },
  login: async (data) => {
    try {
      const response = await apiA.post("/users/login", data);
      setAuthHeader(response.data.token);
      return response;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },
  logout: async () => {
    try {
      await apiA.post("/users/logout");
      setAuthHeader(null);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },
};

export { tutorsApi, facultiesApi, userApi };
