const db = require('../database/dbConfig')

function add(project) {
    return db('projects').insert(project)
}
function add(resource) {
    return db('resources').insert(resource)
}
function add(task) {
    return db('tasks').insert(task)
}

function find() {
    return db('projects')
}
function find() {
    return db('resources')
}
function find() {
    return db('resources')
}