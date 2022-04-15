<script context="module">
    import { getDoc, setDoc } from 'firebase/firestore/lite';
	import { blogDoc } from '../../../../firebase';

	export async function load({ params }) {
		const docSnap = await getDoc(blogDoc(params.id));
		if (!docSnap.exists()) {
			return {
				status: 404,
				redirect: "/admin"
			}
		} else {
			return {
				status: 200,
				props: {
					blog: { ...docSnap.data(), id: docSnap.id }
				}
			};
		}
	}
</script>

<script>
	import { goto } from '$app/navigation';

    import BlogForm from "../../../../lib/blog/blog-form.svelte"
    export let blog

    async function updateBlogDetails(event) {
        await setDoc(blogDoc(blog.id), event.detail, { merge: true })
        await goto("/admin")
    }
</script>

<svelte:head>
    <title>Update blog</title>
</svelte:head>

<div class="container">
	<div class="header">
		<h2>Update Blog</h2>
	</div>

    <BlogForm on:sendBlogDetails={updateBlogDetails} title={blog.title} summary={blog.summary} description={blog.description} />
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