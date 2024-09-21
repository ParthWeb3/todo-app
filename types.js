const zod = require("zod");

const createTodo = zod.object({
    topic : zod.string(),
    explanation : zod.string()
})

const updateTodo = zod.object({
    id:zod.string()
})

module.exports ={
    createTodo : createTodo,
    updateTodo : updateTodo
}