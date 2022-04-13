<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                error,
                status
            }
        }
    }

</script>

<script>
    import { dev } from "$app/env"

    export let status, error
</script>

<div class="full-page">
    <h2>{status}</h2>
    <p>{error.message}</p>

    {#if dev && error.stack}
        <pre>{error.stack}</pre>
    {/if}
</div>

<style>
    .full-page {
        min-height: 80vh;
        display: grid;
        place-content: center;
    }
</style>