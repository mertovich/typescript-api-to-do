import express, { Request, Response } from "express";
import Todo from "../model/todo";
import bodyParser from "body-parser";
import ToDoManager from "../DataManager/ToDoManager";

const router = express.Router();
const urlBodyParser = bodyParser.urlencoded();

router.get("/todo", (req: Request, res: Response) => {
    let todos = ToDoManager.getAll();
    res.json(todos);
    res.status(200);
    res.end();
}
);

router.post("/todo", urlBodyParser, (req: Request, res: Response) => {
    const todo = new Todo();
    todo.id = req.body.id;
    todo.title = req.body.title;
    todo.completed = req.body.completed;
    todo.save();
    res.send(todo);
    res.status(200);
    res.end();
}
);

router.post("/todo/delete", urlBodyParser, (req: Request, res: Response) => {
    ToDoManager.delete(req.body.id);
    res.send("Deleted");
    res.status(200);
    res.end();
}
);

export default router;