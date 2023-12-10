import axiosInstance from "@/utils/axiosInstance";
import { Product } from "@/utils/interfaces";
import axios, { AxiosError, AxiosResponse } from "axios";

const handleResponse = (response: AxiosResponse) => {
  return response.data;
};

const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    console.error(axiosError.message);
  } else {
    console.error("An unexpected error occurred");
  }
  throw error;
};

const productsApi = {
  getProducts: async () => {
    try {
      const response = await axiosInstance.get<Product[]>("/products");
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
  getProduct: async (id: string) => {
    try {
      const response = await axiosInstance.get<Product>(`/products/${id}`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
  getProductCategory: async (category: string) => {
    try {
      const response = await axiosInstance.get<Product[]>(
        `/products/category/${category}`
      );
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
  createProduct: async (productData: Product) => {
    try {
      const response = await axiosInstance.post("/products", productData);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
  updateProduct: async (id: string, updateData: Partial<Product>) => {
    try {
      const response = await axiosInstance.put(`/products/${id}`, updateData);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
  deleteProduct: async (id: string) => {
    try {
      const response = await axiosInstance.delete(`/products/${id}`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

export default productsApi;
