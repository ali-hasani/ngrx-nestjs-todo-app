import { AppService } from './app.service';
import { Todo } from './todo';
export declare class AppController {
    private readonly appService;
    manager: any;
    constructor(appService: AppService);
    getAll(): Todo[];
    getTodoById(params: any): Todo[];
    addTodo(todo: Todo): Todo;
    deleteTodoById(params: any): any;
    updateTodo(params: any, todo: Todo): any;
}
