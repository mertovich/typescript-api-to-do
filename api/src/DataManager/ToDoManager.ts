import Todo from "../model/todo";
import fs from "fs";

class ToDoManager {
    public static getAll(): Todo[] {
        const getData = fs.readFileSync("./src/data/todo.json");
        const data = JSON.parse(getData.toString());
        // data for each todo
        const todos: Todo[] = [];
        data.forEach((todo: any) => {
            const t = new Todo();
            t.id = todo.id;
            t.title = todo.title;
            t.completed = todo.completed;
            todos.push(t);
        }
        );
        return todos;
    }
}

export default ToDoManager;