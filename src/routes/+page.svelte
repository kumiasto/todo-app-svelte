
<script>
	import '/src/styles/global.css';
   import AddTodo from '../components/AddTodo.svelte';
   import Todo from '../components/Todo.svelte';
</script>

<main class="container">
   <section>
      <Todo />
      <Todo />
      <Todo />
   </section>
   <section>
      <AddTodo />
   </section>
</main>


<style>
   .container{
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding-top: 150px;
      padding-bottom: 50px;
   }

   .container section{
      width: 100%;
   }
</style>