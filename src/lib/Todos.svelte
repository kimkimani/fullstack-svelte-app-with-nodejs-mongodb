<script>
    import {onMount} from "svelte";
    import Todo from "./Todo.svelte";
    let todos = [];
    onMount(async () => {
        await fetch(`http://localhost:4000/api/todos/`)
        .then(r => r.json())
        .then(data => {
            todos = data;
        });
    });
</script>

{#if todos}
{#each todos as todo }
    <ul>
    <li>    
        <Todo {todo} />
    </li>
    </ul>
{/each}
{:else}
<p class="loading">loading...</p>
{/if}

<style>
ul{
    width:80%;
    margin:10px auto;
    list-style-type:none;
    padding:0px;
}

li{
    display:block
}

.loading{
    opacity:0;
    animation: 0.5s 0.6s forwards fade-in;
}

@keyframes fade-in{
    from {opacity:0;}
    to {opacity:1;}
}
</style>