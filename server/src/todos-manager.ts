/* eslint-disable @typescript-eslint/no-var-requires */
import { Todo } from "./todo";

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(`db.json`)
const db = low(adapter)
const uuidv4 = require('uuid/v4');


const findTodoById = (id): Todo => {
    const result = db.get('todos')
        .find(todo => todo.id === id)
    if (result)
        return result
    else
        return null

}

const findAll = (): Todo[] => {
    return db.get('todos');
}

const addTodo = (model: Todo) => {
    model.id = uuidv4()
    db.get('todos')
        .push(model)
        .write();
    return model;
}

const removeTodoById = (id) => {
    db.get('todos')
        .remove({ id: id })
        .write()
}

const updateTodo = (model: Todo) => {
    db.get('todos')
        .find({ id: model.id })
        .assign(model)
        .write()
    return model;
}

const getManager = () => {
    db.defaults({
        todos: []
    })
        .write()
    const todos = db.defaults({
        todos: []
    }).get('todos')

    return {
        getTodoById: (id) => {
            return findTodoById(id)
        },
        getAll: () => {
            return findAll()
        },
        addTodo: (model: Todo) => {
            return addTodo(model)
        },
        removeTodoById: (id) => {
            removeTodoById(id)
        },
        updateTodo: (model: Todo) => {
            return updateTodo(model);
        }
    }
}

export default getManager;
