<script context="module">
      export async function load({ session }) {
            let { user } = session
            console.log("current user", user)
            if (user != null) {
                return {
                    status: 302,
                    redirect: "/admin",
                }
            }

            return {
                status: 200,
            }
      }
</script>


<script>
    import "carbon-components-svelte/css/white.css";
    import { getStores } from "$app/stores"
    let { session } = getStores();
</script>

<svelte:head>
    <title>
        Bloggy
    </title>
</svelte:head>

<div>
    <h4>Welcome to Bloggy 😁</h4>
</div>

<style>
    div {
        height: 80vh;
        display: grid;
        justify-content: center;
        padding-top: 2em;
    }
</style>