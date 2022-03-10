
<script>
    export let project;
</script>

<svelte:head>
  <title>{project.name}</title>
</svelte:head>

<h1>{project.name}</h1>
<p>{project.description}</p>