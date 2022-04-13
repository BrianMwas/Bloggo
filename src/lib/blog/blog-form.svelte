<script>
    import {Form, TextArea, TextInput, Button} from "carbon-components-svelte"
    import { createEventDispatcher } from "svelte";
    const dispatcher = createEventDispatcher()

    export let title, summary, description;

    function dispatchBlog() {
        dispatcher("sendBlogDetails", {
            title,
            summary,
            description
        })
        title = "", summary = "", description = ""
    }
</script>

<div class="form-container">
    <Form>
        <TextInput bind:value={title} label="Blog title" placeholder="Enter the title of the blog" name="title" required/>
        <div class="space"></div>
        <TextInput bind:value={summary} label="Blog summary" placeholder="Summary" name="Summary" required/>
        <div class="space"></div>
        <TextArea bind:value={description} label="Blog description" placeholder="THE STORY!!!" name="description" required/>
        <div class="space"></div>
        <Button on:click={dispatchBlog}>Submit</Button>
    </Form>
</div>


<style>
    .form-container {
        max-width: 40%;
    }

    .space {
        margin: 1em 0;
    }
</style>
