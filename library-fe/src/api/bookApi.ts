import apiBookInstance from "./axiosConfig";
import { Book } from "../types";

const baseEndpoint = "/books";

export const getAllBooks = async (): Promise<Book[]> => {
  const response = await apiBookInstance.get<Book[]>(baseEndpoint);
  return response.data;
};

export const getBookById = async (id: string): Promise<Book> => {
  const response = await apiBookInstance.get<Book>(`${baseEndpoint}/${id}`);
  return response.data;
};

export const addBook = async (newBook: Book): Promise<Book> => {
  const response = await apiBookInstance.post<Book>(baseEndpoint, newBook);
  return response.data;
};

export const updateBook = async (id: string, newBook: Book): Promise<Book> => {
  const response = await apiBookInstance.put<Book>(id, newBook);
  return response.data;
};

export const deleteBook = async (id: string): Promise<void> => {
  await apiBookInstance.delete<string>(`${baseEndpoint}/${id}`);
};
