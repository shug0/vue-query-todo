import axios from "axios";
//import { useMutation, useQueryClient } from "vue-query";

const API_KEY = "keyPgG4ba1NyOwydT";
const API_SHOPS = "https://api.airtable.com/v0/appYfHXTwsSyV6c30/shops";

const config = {
  headers: { Authorization: `Bearer ${API_KEY}` },
};

export const getShops = () =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const { data } = await axios.get(`${API_SHOPS}`, config);
        resolve(data.records);
      } catch (error) {
        reject(error());
      }
    })();
  });

/*
const API_ROUTE = "https://jsonplaceholder.typicode.com";


export const getTodos = () =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const { data } = await axios.get(`${API_ROUTE}/todos`);
        resolve(data);
      } catch (error) {
        reject(error());
      }
    })();
  });

export const deleteTodo = (id) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const { data } = await axios.delete(`${API_ROUTE}/todos/${id}`);
        resolve(data);
      } catch (error) {
        reject(error());
      }
    })();
  });

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation((id) => deleteTodo(id), {
    onMutate: async (id) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries("todos");

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData("todos");
      const newTodos = previousTodos.filter((todo) => todo.id !== id);

      // Optimistically update to the new value
      queryClient.setQueryData("todos", () => newTodos);

      // Return a context object with the snapshotted value
      return { previousTodos };
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (err, newTodo, context) => {
      queryClient.setQueryData("todos", context.previousTodos);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};
*/
