<script>
    let todoValue = ''
	import { todos } from '../store.ts';

    const handleSubmit = () => {
        $todos = [...$todos, {
            id: Math.random().toString(36).replace(/[^a-z]+/g, ''),
            value: todoValue
        }]
        todoValue = ''
    }

    console.log(Math.random().toString(36).replace(/[^a-z]+/g, ''))
</script>

<form>
    <div>
        <label for="elo">Create task</label>
    </div>
    <div class="input-wrapper">
        <input id="elo" bind:value={todoValue}/>
        <button type="submit" on:click={handleSubmit}>Add</button>
    </div>
</form>

<style>
    form {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }


    div {
        display: flex;
        width: 100%;
    }

    .input-wrapper{
        width: 50%;
        background-color: #fff;
        border-radius: 10px;
        height: 50px;

    }

    input {
        width: 90%;
        border: none;
        border-radius: 10px;
        font-size: 18px;
        padding-left: 20px;
        background-color: transparent;

    }

    button{
        width: 15%;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        background-color: #EF767A;
        color: #fff;
    }

</style>