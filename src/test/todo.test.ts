import {
  formatTodo,
  generateColor,
  generateID,
  TodoItem,
  validateTodo,
} from "../logic/todo";

describe("generateColor", () => {
  it("generate random Color", () => {
    const result1: string = generateColor();
    const result2: string = generateColor();
    expect(result1).not.toBe(result2);
  });
});

describe("formatTodo", () => {
  it("all lower case", () => {
    const todo: TodoItem = new TodoItem();
    todo.id = "id333";
    todo.value = "abc";
    const formatted: TodoItem = formatTodo(todo);
    expect(formatted.value).not.toBe("Abc");
  });
  it("all upper case", () => {
    const todo: TodoItem = new TodoItem();
    todo.id = "id333";
    todo.value = "ABC";
    const formatted: TodoItem = formatTodo(todo);
    expect(formatted.value).not.toBe("ABC");
  });
  it("mixed case", () => {
    const todo: TodoItem = new TodoItem();
    todo.id = "id333";
    todo.value = "aBC";
    const formatted: TodoItem = formatTodo(todo);
    expect(formatted.value).not.toBe("ABC");
  });
});

describe("validateTodo", () => {
  it("valid todo", () => {
    const items: TodoItem[] = [];
    const todo1: TodoItem = new TodoItem();
    todo1.id = "id333";
    todo1.value = "aBCxzy";
    const todo2: TodoItem = new TodoItem();
    todo2.id = "id666";
    todo2.value = "aBC";
    items.push(todo2);
    const result: boolean = validateTodo(todo1, items);
    expect(result).toBe(true);
  });
  it("invalid todo, value empty", () => {
    const items: TodoItem[] = [];
    const todo1: TodoItem = new TodoItem();
    todo1.id = "id333";
    todo1.value = "";
    const todo2: TodoItem = new TodoItem();
    todo2.id = "id666";
    todo2.value = "aBC";
    items.push(todo2);
    const result: boolean = validateTodo(todo1, items);
    expect(result).toBe(false);
  });
  it("invalid todo, already in list", () => {
    const items: TodoItem[] = [];
    const todo1: TodoItem = new TodoItem();
    todo1.id = "id333";
    todo1.value = "xyz";
    const todo2: TodoItem = new TodoItem();
    todo2.id = "id666";
    todo2.value = "xyz";
    items.push(todo2);
    const result: boolean = validateTodo(todo1, items);
    expect(result).toBe(false);
  });
});

describe("generateID", () => {
  it("generate random uniqueID", () => {
    const result1: string = generateID();
    const result2: string = generateID();
    expect(result1).not.toBe(result2);
  });
});
