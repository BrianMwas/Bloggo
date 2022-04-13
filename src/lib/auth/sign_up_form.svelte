<script>
	import { Form, TextInput, PasswordInput, Button } from 'carbon-components-svelte';
	import { createEventDispatcher } from "svelte"
	let dispatch = createEventDispatcher()
	let username, email, password;
	
	function signup() {
		dispatch("signup", {
			username,
			email,
			password
		})
	}
</script>

<div class="form">
	<Form>
		<TextInput bind:value={username} labelText="Username" placeholder="Enter your username" name="username"/>
		<div class="space" />
		<TextInput bind:value={email} labelText="Email address" placeholder="Enter your email" type="email" name="email" />
		<div class="space" />
		<PasswordInput
			bind:value={password}
			tooltipAlignment="start"
			tooltipPosition="left"
			labelText="Password"
			placeholder="Enter password"
			name="password"
		/>
		<div class="space" />
		<Button size="small" on:click={signup}>Sign Up</Button>
	</Form>
</div>

<style>
	.form {
		width: 400px;
	}
	.form .space {
		margin: .6em 0;
	}
</style>
