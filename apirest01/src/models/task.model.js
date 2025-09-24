const { randomUUID } = require("node:crypto");

let tasks = [
    { id: randomUUID(), title: "Aprender Api Rest", completed: false },
    { id: randomUUID(), title: "Utilizar el MVC en Api Rest", completed: false }
];

function findAll() {
    return tasks;
}

function addTask(title) {
    const task = {
        id: randomUUID(),
        title: title,
        completed: false
    };
    tasks.push(task);
    return tasks;
}

function removeTask(id) {
    const index = tasks.findIndex(item => item.id === id);
    if (index === -1) {
        return false;
    }
    tasks.splice(index, 1);
  return true;
}

module.exports = {
    findAll,
    addTask,
    removeTask
};