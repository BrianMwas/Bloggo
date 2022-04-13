<script>
    import SignIn from "../../lib/auth/sign_in_form.svelte";
    import { Link } from "carbon-components-svelte";
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { auth, userDoc } from "../../firebase";
    import { goto } from "$app/navigation";
    import { setDoc } from "firebase/firestore/lite";
    export let errors;

    async function signIn(event) {
        try {
            let user = await signInWithEmailAndPassword(auth, event.detail.email, event.detail.password)
            await setDoc(userDoc(auth.currentUser.uid), { username: user.user.displayName, email: user.user.email })
            await goto("/admin")
        } catch (error) {
            console.log("error signin in", error)
        }
    }
</script>

<svelte:head>
    <title>
        Login
    </title>
</svelte:head>

<div>
    <div class="header">
        <h4>Login</h4>
    </div>
    <div class="signin-form">
        {#if errors}
            <div class="notification-block">
                <p>{errors}</p>
            </div>
        {/if}

        <SignIn on:login={signIn}/>
        <div>Already have an account? <Link href="/auth/register">Sign Up</Link></div>
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
         background-color: #E5F0FF;
     }

     .header h4 {
         color: black;
         font-weight: 600;
         font-size: 3rem;
     }

     .signin-form {
         min-height: 80vh;
         display: grid;
         place-items: center;
     }

     .notification-block {
         min-width: 20vw;
         padding: 1.2em .75em;
         border-radius: 5px;
         background-color: #FE634E;
     }

     .notification-block p {
         color: white;
     }
</style>