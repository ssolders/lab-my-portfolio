
<script>
  import ProjectListItem from "./../../components/ProjectListItem.svelte";

  export let projects;
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<div class='lmp-project-list-wrapper'>
  <h2>Projekt/tidigare anställningar</h2>

  <div class='lmp-projects-list-container'>
    {#each projects as project}
      <ProjectListItem project={project} />
    {/each}
  </div>
</div>

<style>
  :root {
    --base-margin: 8px;
    --base-margin2: 16px;
    --base-margin3: 24px;
    --base-margin4: 32px;
    --font: 
  }

  .lmp-project-list-wrapper {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 var(--base-margin3);
    margin: 0 auto;
  }
  .lmp-projects-list-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

</style>