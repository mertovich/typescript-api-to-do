import fs from 'fs';
import ToDoManager from '../DataManager/ToDoManager';

class Todo {
    public id: number;
    public title: string;
    public completed: boolean;
    constructor() {
        this.id = 0;
        this.title = "";
        this.completed = false;
    }
    public save(): void {
        const t = new Todo();
        let TodoList: Todo[] = [];
        try {
            TodoList = ToDoManager.getAll();
        } catch (error) {}
        t.id = this.id;
        t.title = this.title;
        t.completed = this.completed;
        TodoList.push(t);
        const data = JSON.stringify(TodoList);
        fs.writeFileSync("./src/data/todo.json", data);
    }
}

export default Todo;