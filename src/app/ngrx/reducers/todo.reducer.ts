import { createReducer, on } from '@ngrx/store';
import { fill, create, remove, update, toggle } from '../actions/todo.actions';
import { Todo } from 'src/app/models/todo';
import * as _ from 'lodash';
import { _MatCheckboxRequiredValidatorModule } from '@angular/material/checkbox';

export interface TodoState {
    list: Todo[]
}

export const initialState: TodoState = {
    list: []
};

const _toDoReucer = createReducer(initialState,
    on(fill, (state, action) => ({ ...state, list: action.list })),
    on(create, (state, action) => ({ ...state, list: _.concat(state.list, action.task) })),
    on(remove, (state, action) => ({ ...state, list: state.list.filter(l => l.id !== action.id) })),
    on(update, (state, action) => {
        const tempList = _.cloneDeep(state.list);
        let obj: Todo = tempList.find(l => l.id === action.task.id);
        obj = action.task;
        return {
            ...state,
            list: tempList
        }
    }),
    on(toggle, (state, action) => {
        const tempList = _.cloneDeep(state.list);
        const obj: Todo = tempList.find(l => l.id === action.task.id);
        obj.complete = action.task.complete;
        return {
            ...state,
            list: tempList
        }
    })
);

export function toDoReducer(state, action) {
    return _toDoReucer(state, action);
}
