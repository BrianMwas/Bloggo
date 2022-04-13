<script context="module">
	import { getDoc } from 'firebase/firestore/lite';
	import { blogDoc } from '../../../firebase';

	export async function load({ params }) {
		const docSnap = await getDoc(blogDoc(params.id));
		if (!docSnap.exists()) {
			return {
				status: 404,
				props: {
					blog: null
				}
			};
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
	export let blog;
</script>

<svelte:head>
    <title>{blog.title ? blog.title : 'Bloggy'}</title>
</svelte:head>

<div class="container-blog-detail">
	{#if blog == null}
		<div class="center">
			<h2>Blog does not exist or has been deleted</h2>
		</div>
	{:else}
		<div>
			<h2>
				{blog.title}
			</h2>
			<p>{blog.summary}</p>
			<p class="description">{blog.description}</p>
		</div>
	{/if}Î
</div>

<style>
	.container-blog-detail {
		margin: 0 auto;
		width: 80%;
		padding: 2em 0;
		height: 80vh !important;
	}

	.center {
		display: grid;
		place-content: center;
	}

	.description {
		margin-top: 20px;
	}
</style>
