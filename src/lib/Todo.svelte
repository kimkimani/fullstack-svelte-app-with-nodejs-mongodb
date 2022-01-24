<script>
export let todo;
async function deleteTodo(todo) {
    const response = await fetch('http://localhost:4000/api/todos/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: todo._id
        })
    });
    const data = await response.json();
    if(data.success){
        window.location.href = '/';
    }
}
</script>

<article>
<div class="todo-info">
    <h1>{todo.title}</h1>
    <p>
        {todo.description} 
    </p>
</div>
<div class="todo-actions">
    <button on:click={
        () => deleteTodo(todo)
    }>Delete</button>
</article>

<style>
article{
    width:100%;
    margin:10px 5px;
    padding:10px;
    box-shadow:0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    display: flex;
    justify-content: space-between;
}

.todo-actions button{
    background: #f5f5f5;
    border: 1px solid #d4d4d5;
    border-radius: 3px;
    color: #333;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    padding: 5px 10px;
    text-transform: uppercase;
}
</style>