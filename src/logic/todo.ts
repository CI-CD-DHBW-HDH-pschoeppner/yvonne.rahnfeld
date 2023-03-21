import { writable } from 'svelte/store';

export class TodoItem {
  id = '';
  value = '';
  done = false;
}

// this function must return a unique ID every time it is called
export function generateID(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  let found = true;

  while (found) {
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    todoList.subscribe((value) => {
      value.find(item => {
          if (item.id == result) {
            found = true;
          }
        }
      );
    });
  }

  return result;
}

// make sure, that
// the value isn't longer than 255 characters
// the value isn' empty
// the todo isn't contained in the todos array (case insensitive)
export function validateTodo(todo: TodoItem, todos: TodoItem[]): boolean {
  let found = false

  todos.find(
    item => {
      if (item.id == todo.id) {
        found = true;
      }
    }
  );

  return todo.value.length > 0 && todo.value.length <= 255 && !found;
}

// capitalize the first letter of the todo
export function formatTodo(todo: TodoItem): TodoItem {
  todo.value[0].toUpperCase();
  return {
    id: todo.id,
    value: todo.value[0].toUpperCase(),
    done: false
  };
}

// generate a random rgb color
// each value (r,g,b) should be between 50 and 150
export function generateColor(): string {
  const r = Math.floor(Math.random() * 150) + 50;
  const g = Math.floor(Math.random() * 150) + 50;
  const b = Math.floor(Math.random() * 150) + 50;
  return '(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ')';
}

export const todoList = writable<TodoItem[]>([]);
