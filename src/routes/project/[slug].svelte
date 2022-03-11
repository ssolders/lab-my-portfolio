
<script>
    import ProjectItem from './../../components/ProjectItem.svelte';
    export let project;
</script>

<svelte:head>
  <title>{project.name}</title>
</svelte:head>

<ProjectItem name={project.name} description={project.description} />