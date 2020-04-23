import { Todo } from "./todo";
declare const getManager: () => {
    getTodoById: (id: any) => Todo;
    getAll: () => Todo[];
    addTodo: (model: Todo) => Todo;
    removeTodoById: (id: any) => void;
    updateTodo: (model: Todo) => Todo;
};
export default getManager;
