<script>
    import { Link } from "carbon-components-svelte"
</script>

<svelte:head>
    <title>
        Admin
    </title>
</svelte:head>

<div class="error">
    <h2>404</h2>
    <p>Sorry we were unable to fetch the information requested please try again.</p>
    <br>
    <Link href="/" size="lg">Go Home</Link>
</div>

<style>
    .error {
        display: grid;
        place-content: center;
        height: 80vh;
    }

    .error h2 {
        font-size: 28;
        font-weight: 800;
    }
</style>