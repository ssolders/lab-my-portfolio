
<script>
    import TopNavigation from '../../components/TopNavigation.svelte';

    export let projects;

    console.log('1');
    console.log(projects);
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1>Projects</h1>
<p>This is a page about projects</p>

<div class='lmp-projects-container'>
  {#each projects as project}
    <div class='lmp-project-item'>    
      <a href={`/project/${project.name}`}>
        <h2>{project.name}</h2>
      </a>
    </div>
  {/each}
</div>

<style>
  .lmp-projects-container {
  
  }

</style>