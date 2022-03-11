<script>
import { onMount } from 'svelte';

const routes = [
    { path: '/', displayName: 'Home' },
    { path: '/projects', displayName: 'Projekt' },
    { path: '/admin', displayName: 'Admin' },
];

let activeRoute = null

onMount(() => {
    activeRoute = location.pathname;
});
</script>

<div class='mpl-main-nav-wrapper'>
    <ul class='mpl-main-nav'>
        {#each routes as route}
            <li class={`mpl-main-nav-item ${activeRoute === route.path && 'mpl-main-nav-item--active'}`}>
                <a href={route.path}>{route.displayName}</a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .mpl-main-nav-wrapper {
        background-color: #333333;
        font-family: Arial, Helvetica, sans-serif;
    }
    .mpl-main-nav {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 1200px;
        margin: 0 auto;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 16px;
        text-decoration: none;
        }

        .mpl-main-nav-item--active, .mpl-main-nav-item a:hover {
        background-color: #111111;
        }

</style>