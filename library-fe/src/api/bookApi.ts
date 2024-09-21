import apiBookInstance from "./axiosConfig";

import { Book } from "../types";

const baseEndpoint = "/books";

export const getAllBooks = async (): Promise<Book[]> => {
  const response = await apiBookInstance.get<Book[]>(baseEndpoint);
  return response.data;
};

export const getBookById = async (id: number): Promise<Book> => {
  const response = await apiBookInstance.get<Book>(`${baseEndpoint}/${id}`);
  return response.data;
};

export const addBook = async (newBook: Book): Promise<Book> => {
  const response = await apiBookInstance.post<Book>(baseEndpoint, newBook);
  return response.data;
};

export const updateBook = async (id: number, newBook: Book): Promise<Book> => {
  const response = await apiBookInstance.put<Book>(`${baseEndpoint}/${id}`, newBook);
  return response.data;
};

export const deleteBook = async (id: number): Promise<void> => {
  await apiBookInstance.delete<string>(`${baseEndpoint}/${id}`);
};
