import express from "express"
import employees from "#db/employees";

const app = express();
export default app;

app.route("/").get((req, res) => {
    res.send("Hello employees!")
})

app.route("/employees").get((req, res) => {
    res.send(employees)
})

app.route("/employees/random").get((req, res) => {
    const id = Math.floor(Math.random() * (employees.length))
    res.send(employees[id])
})

app.route("/employees/:id").get((req, res) => {
    const {id} = req.params;
    if (id > employees.length - 1) {
        return res.status(404).send("employee not found")
    }
    res.send(employees[id - 1])
})