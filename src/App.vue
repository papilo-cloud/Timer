<template>
 <div id="app">
    <h1>
        My Todo App
    </h1>
    <Todo @todo-added="addToDo" />
    <ul>
        <li v-for="todo in ToDoItems" :key="todo.id">
            <Todoitem  :label="todo.label" :done="todo.done" :id="todo.id" />
        </li>
    </ul>
  </div>
</template>

<script>
import Todoitem from './todoApp/Todoitem.vue';
import Todo from './todoApp/Todo.vue';

export default {
  name: 'App',
  components: {
    Todoitem,
    Todo
},
  data() {
    return {
      ToDoItems: [
        { id: 1, label: 'Learn Vue', done: false },
        { id: 2, label: 'Create a Vue project with the CLI', done: true },
        { id: 3, label: 'Have fun', done: true },
        { id: 4, label: 'Create a to-do list', done: false }
      ]
    }; 
  },
  methods:{
    addToDo(toDoLabel) {
  // this.ToDoItems.push({id:5, label: toDoLabel, done: false});
  this.ToDoItems = [...this.ToDoItems, toDoLabel]
}
  }
}
</script>

<style>

</style>
