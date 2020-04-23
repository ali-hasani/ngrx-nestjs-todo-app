"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(`db.json`);
const db = low(adapter);
const uuidv4 = require('uuid/v4');
const findTodoById = (id) => {
    const result = db.get('todos')
        .find(todo => todo.id === id);
    if (result)
        return result;
    else
        return null;
};
const findAll = () => {
    return db.get('todos');
};
const addTodo = (model) => {
    model.id = uuidv4();
    db.get('todos')
        .push(model)
        .write();
    return model;
};
const removeTodoById = (id) => {
    db.get('todos')
        .remove({ id: id })
        .write();
};
const updateTodo = (model) => {
    db.get('todos')
        .find({ id: model.id })
        .assign(model)
        .write();
    return model;
};
const getManager = () => {
    db.defaults({
        todos: []
    })
        .write();
    const todos = db.defaults({
        todos: []
    }).get('todos');
    return {
        getTodoById: (id) => {
            return findTodoById(id);
        },
        getAll: () => {
            return findAll();
        },
        addTodo: (model) => {
            return addTodo(model);
        },
        removeTodoById: (id) => {
            removeTodoById(id);
        },
        updateTodo: (model) => {
            return updateTodo(model);
        }
    };
};
exports.default = getManager;
//# sourceMappingURL=todos-manager.js.map