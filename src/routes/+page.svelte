
<script>
	import '/src/styles/global.css';
</script>

<main class="container">
   <section>siema</section>
   <section class="input-wrapper">
      <div >
         <label for="elo">Add new todo</label>
         <input id="elo"/>
      </div>
   </section>
</main>


<style>
   .container{
      height: 100vh;
   }

   .container section { 
      height: 50%;
   }

   .input-wrapper div {
      background-color: green;
      display: flex;
      flex-direction: column;
      justify-items: end;
   }
</style>