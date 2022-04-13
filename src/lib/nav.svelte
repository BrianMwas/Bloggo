<script>
	import { Button, Link } from 'carbon-components-svelte';
	import { getStores } from '$app/stores';
	import { signOut } from 'firebase/auth';
	import { auth } from '../firebase';
	import { goto } from '$app/navigation';
	let { session } = getStores();


	async function logOut() {
		await signOut(auth);
		await goto('/');
	}
</script>

<nav>
	<h2>
		{#if $session['user'] != null}
			<Link class="link" size="lg" href="/admin">Let's Create</Link>
		{:else}
			<Link class="link" size="lg" href="/">Bloggy</Link>
		{/if}
	</h2>
	<ul>
		{#if $session['user'] != null}
		
			<li>
				<Button size="sm" kind="danger" on:click={logOut}>Log Out</Button>
			</li>
			<li>
				<Link href="/admin/create-blog">Create a new post</Link>
			</li>
			
		{:else}
			<li>
				<Link href="/auth/login">Login</Link>
			</li>
			<li>
				<Link href="/auth/register">Sign Up</Link>
			</li>
		{/if}
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.3em 2em;
		background-color: whitesmoke;
		box-shadow: 0 6px 8px #d7e1e9;
	}

	nav h2 {
		font-weight: bold;
		font-size: 18px;
		color: black;
	}

	nav ul {
		display: flex;
		align-items: center;
	}

	nav ul li {
		list-style: none;
		display: inline-block;
		padding-right: 1em;
	}
</style>
