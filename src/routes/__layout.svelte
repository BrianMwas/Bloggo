<script>
	import 'carbon-components-svelte/css/white.css';
	import Nav from '../lib/nav.svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import { auth } from '../firebase';
	import { getStores } from '$app/stores';
	import { Loading } from 'carbon-components-svelte';
	let { session } = getStores();

	onMount(() => {
		onAuthStateChanged(
			auth,
			(user) => {
				session.set({ user });
			},
			(error) => {
				session.set({ user: null });
				console.log(error);
			}
		);
	});
</script>

{#if $navigating}
	<Loading />
{:else}
	<Nav />

	<main>
		<slot />
	</main>

	<footer>
		<h2>bloggo</h2>
	</footer>
{/if}

<style>
	footer {
		background-color: #d7e1e9;
		padding: 2em;
		height: 20vh;
		display: flex;
		justify-content: center;
	}
</style>
