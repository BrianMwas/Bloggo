<script>
import { goto } from '$app/navigation';

	import { addDoc, serverTimestamp } from 'firebase/firestore/lite';

	import { auth, blogCollection } from '../../firebase';
	import BlogForm from '../../lib/blog/blog-form.svelte';

	async function createNewBlog(event) {
		await addDoc(blogCollection, {...event.detail, owner: auth.currentUser.uid, timestamp: serverTimestamp()});
        await goto("/admin")
	}
</script>

<svelte:head>
	<title>Create Blog</title>
</svelte:head>

<div class="container">
	<div class="header">
		<h2>Create a new Blog</h2>
	</div>
	<BlogForm on:sendBlogDetails={createNewBlog} title={""} summary={""} description={""}/>
</div>

<style>
	.container {
		margin: 3em auto;
		width: 80%;
		min-height: 90vh;
	}

	.header {
		margin-bottom: 2em;
	}
</style>
