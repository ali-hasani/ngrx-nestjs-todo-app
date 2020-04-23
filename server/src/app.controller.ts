import { Controller, Get, Post, HttpCode, Param, Delete, Put, Body } from '@nestjs/common';
import { AppService } from './app.service';
import getManager from './todos-manager';
import { Todo } from './todo';


@Controller('todos')
export class AppController {
  manager = null;
  constructor(private readonly appService: AppService) {
    this.manager = getManager();
  }

  @Get()
  getAll(): Todo[] {    
    return this.manager.getAll();    
  }

  @Get(':id')
  getTodoById(@Param() params): Todo[] {    
    const id = params.id;
    return this.manager.getTodoById(id);
  }

  @Post()
  @HttpCode(201)
  addTodo(@Body() todo: Todo): Todo {
    return this.manager.addTodo(todo);    
  }

  @Delete(':id')
  deleteTodoById(@Param() params) {    
    const id = params.id;
    return this.manager.removeTodoById(id);
  }

  @Put(':id')
  @HttpCode(202)
  updateTodo(@Param() params, @Body() todo: Todo) {    
    const id = params.id;
    return this.manager.updateTodo({
      ...todo,
      id      
    });
  }
}
