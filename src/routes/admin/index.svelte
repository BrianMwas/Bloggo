<script context="module">
import { deleteDoc, getDocs, query, where } from 'firebase/firestore/lite';
import { blogCollection, blogDoc } from '../../firebase';

	export async function load({ session }) {
		  let { user } = session
		  if (user == null) {
			  return {
				  status: 302,
				  redirect: "/",
			  }
		  }

		  const q = query(blogCollection, where("owner", "==", "f59AlXew0bgaDQuctCS6xJvZjzg2"))
		  const querySnapshot = await getDocs(q)
		  let blogs = [];
		  querySnapshot.forEach(blog => {
			blogs.push({...blog.data(), id: blog.id})
		  })

		console.log("blogs", blogs)
		  return {
			  status: 200,
			  props: {
				  blogs
			  }
		  }
	}
</script>

<script>
	import BlogCard from '../../lib/blog/blog-card.svelte';
	//Delete a blog
	async function deleteBlog(event) {
		await deleteDoc(blogDoc(event.detail.id))
	}
	
	export let blogs
</script>

<svelte:head>
	<title>Bloggy</title>
</svelte:head>

<div class="content">
	<div class="header">
		<h2>My Blogs</h2>
	</div>
	<div class="blogs">
		{#each blogs as blog}
			<BlogCard title={blog.title} summary={blog.summary} id={blog.id} on:deleteBlog={deleteBlog}/>
		{:else}
			 <div class="center">
				 <h2>You don't have any blogs yet.</h2>
			 </div>
		{/each}
	</div>
</div>

<style>
	.content {
		min-height: 90vh;
		padding: 1em;
		margin: 0 auto;
		max-width: 80%;
	}

	.header {
		padding: 1em 2em;
	}

	.header h2 {
		font-weight: 700;
	}

	.blogs {
		display: flex;
		flex-wrap: wrap;
	}
</style>
