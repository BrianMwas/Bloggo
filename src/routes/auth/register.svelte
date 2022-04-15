<script>
	import SignUp from '../../lib/auth/sign_up_form.svelte';
	import { Link } from 'carbon-components-svelte';
	import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { auth, userDoc } from '../../firebase';
	import { setDoc } from 'firebase/firestore/lite';

	 let errors;

	async function signUp(event) {
		try {
			let user = await createUserWithEmailAndPassword(
				auth,
				event.detail.email,
				event.detail.password
			);
			await updateProfile(user.user, { displayName: event.detail.username });
			await setDoc(userDoc(auth.currentUser.uid), {
				username: user.user.displayName,
				email: user.user.email
			});
			await goto('/admin');
		} catch (e) {
			console.log('error from creating user', e);
		}
	}
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div>
	<div class="header">
		<h4>Sign Up</h4>
	</div>
	<div class="form-container">
		{#if errors}
			{#each errors as error, i (i)}
				<div class="notification-block">
					<p>{error}</p>
				</div>
			{/each}
		{/if}
		<SignUp on:signup={signUp} />
		<div>Already have an account? <Link href="/auth/login">Sign In</Link></div>
	</div>
</div>

<style>
	.header {
		width: 100vw;
		padding: 2em 0;
		min-height: 20vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #e5f0ff;
	}

	.header h4 {
		color: black;
		font-weight: 600;
		font-size: 3rem;
	}
	.form-container {
		min-height: 80vh;
		display: grid;
		place-content: center;
	}

	.form-container div:last-of-type {
		padding: 2em 0;
		text-align: center;
	}

	.notification-block {
		min-width: 10vw;
		padding: 1.2em 0.75em;
		border-radius: 5px;
		background-color: #fe634e;
		margin-bottom: 1.25em;
	}

	.notification-block p {
		color: white;
	}
</style>
