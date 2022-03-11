<script>
  import { onMount } from 'svelte';

  export let project;
  export let imageUrl = null;

  onMount(() => {
    imageUrl = `${location.origin}/${project.imageRelativeUrl}`;
  });

  const getProjectTypeLabel = (type) => {
    const dict = {
      contract: 'Konsult',
      employment: 'Anställning',
    }

    console.log(type);
    return dict[type];
  }


</script>

<div class='lmp-project-list-item'>
  <a href={`/project/${project.name}`}>
    <img class='lmp-project-list-item__image' src={imageUrl} alt='project' />
  </a>

  <div class='lmp-project-list-item__tags'>
    <span class='lmp-project-list-item__tags__item'>
      {getProjectTypeLabel(project.type)}
    </span>
  </div>

  <div class='lmp-project-list-item__container'>
    <h2>{project.name}</h2>

    <p>{project.description.substring(0, 200)}...</p>

    <a href={`/project/${project.name}`}>Läs mer</a>
  </div>
</div>

<style>
  .lmp-project-list-item {
    width: calc(50% - (calc(var(--base-margin) * 4)));
    min-width: 450px;
    flex-grow: 1;
    justify-content: center;
    margin: var(--base-margin2);
    margin-bottom: var(--base-margin4);
    position: relative;
  }
  
  .lmp-project-list-item__image {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }

  .lmp-project-list-item__tags {
    position: absolute;
    top: 3px;
    left: 0px;
  }

  .lmp-project-list-item__tags__item {
    background-color: #ff5d4c;
    color: #fff;
    margin-right: 5px;
    padding: 3px;
  }
  
  .lmp-project-list-item__type {
    font-size: 14px;
    color: #888;
  }

  .lmp-project-list-item__container h2 {
    margin: 10px 0 0 0;
    font-weight: normal;
  }

  .lmp-project-list-item__container p {
    color: #2e2e2e;
  }
  
</style>