<script>
  import Todos from './lib/Todos.svelte';
  import AddTodo from './lib/AddTodo.svelte';
</script>

<main>
  <h1>Todo List</h1>
  <AddTodo />
  <Todos />
</main>

<style>
  main {
    padding: 1rem;
    width: 80%;
    margin: 0px auto;
  }
  h1 {
    text-align: center;
  }
</style>