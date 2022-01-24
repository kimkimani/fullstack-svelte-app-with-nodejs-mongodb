<script>
async function onSubmit(e) {

    // Get the data from the form
    const formData = new FormData(e.target)
    const data = {};
    for (let field of formData) {
        const [key, value] = field;
        data[key] = value;    
    }
    // Send data to the API
    await fetch('http://localhost:4000/api/todos/',{
        method:'POST',
        body: JSON.stringify(data),
    }).then(
        () => {
            // reload current page
            window.location.href = '/';
        }
    )     
}
</script>

<div class="form-container">
<form on:submit|preventDefault={onSubmit}>
<div class="form-group">
    <input
        type="text"
        id="title"
        name="title"
        placeholder="Title of todo"
    />
</div>
<div class="form-group">
<textarea
    id="description"
    name="description"
    placeholder="Todo's description"
    cols="30"
/>
</div>
<div class="form-group">
<button type="submit">Submit</button>
</div>
</form>
</div>

<style>
.form-container {
    width: 80%;
    margin: 10px auto;
}
form{
    display: flex;
    justify-content: flex-start;
    width: 100%;
}
.form-group {
    margin: 10px;
    width: 30%;
}
.form-group input[type="text"]{
    padding:10px;
}

.form-group textarea{
    padding:10px;
}

button{
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