
<script>
	import '/src/styles/global.css';
   import AddTodo from '../components/AddTodo.svelte';
   import Todo from '../components/Todo.svelte';
   import { todos } from '../store'
</script>

<main class="container">
   <section>
      {#each $todos as {value}}
         <Todo value={value} />
      {/each}
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