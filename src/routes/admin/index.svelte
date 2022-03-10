
<script>
    import TopNavigation from '../../components/TopNavigation.svelte';

    export let projects;

    console.log('1');
    console.log(projects);
</script>

<svelte:head>
  <title>Admin</title>
</svelte:head>

<h1>Admin</h1>
<p>Do admin stuff here</p>

<a href='/'>Back</a>