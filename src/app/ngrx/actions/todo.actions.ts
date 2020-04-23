import { createAction, props } from "@ngrx/store";
import { Todo } from 'src/app/models/todo';

export const fill = createAction('[Todo App] FillState', props<{ list: Todo[] }>());
export const create = createAction('[Todo Header] Add', props<{ task: Todo }>());
export const remove = createAction('[Todo List] Remove', props<{ id: string }>());
export const update = createAction('[Todo Header] Update', props<{ task: Todo }>());
export const toggle = createAction('[Todo List] Toggle', props<{ task: Todo }>());


