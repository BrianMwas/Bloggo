<script>
import { goto } from "$app/navigation";

import { createEventDispatcher } from "svelte";


    export let title, summary, id;
    const dispatcher = createEventDispatcher();
    function dispatchBlogDelete() {
        dispatcher("deleteBlog", {
            id
        })
    }

    async function editBlog() {
        await goto(`/admin/blogs/update/${id}`);
    }
</script>

<div class="card">
    <div class="title">
        <h2>{title}</h2>
    </div>
    <div class="content">
        <p>{summary}</p>
        <a href="/admin/blogs/{id}">Read more</a>
    </div>
    <div class="button-set">
        <button class="edit" on:click={editBlog}>Edit</button>
        <button class="delete" on:click={dispatchBlogDelete}>Delete</button>
    </div>
</div>

<style>
    .card {
        max-width: 300px;
        min-width: 300px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 8px 7px #F1F2F2;
        padding: 1em;
        margin: 1em 2em;
        transition: all 200ms ease-in;
    }

    .card:hover {
        box-shadow: 0 4px 7px #f1f2f2;
    }

    .card .content {
        margin-bottom: 1em;
    }

    .card .content a {
        margin-top: 10px;
    }
    
    .card a {
        display: flex;
    }

    .button-set {
        display: flex;
        flex-direction: row;
    }

    .button-set .edit {
        margin-right: 0.75em;
        padding: .35em .45em;
        background-color: green;
        border-radius: 3px;
        outline: none;
        border: none;
        color: white;
    }

    .button-set .delete {
        background-color: red;
        border-radius: 3px;
        padding: .35em .45em;
        outline: none;
        border: none;
        color: white;
    }
</style>