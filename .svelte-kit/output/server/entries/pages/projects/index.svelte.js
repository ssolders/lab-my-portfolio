import { c as create_ssr_component, a as each, b as add_attribute, e as escape } from "../../../chunks/index-7340f048.js";
/* empty css                                                                    */const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  console.log("1");
  console.log(projects);
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  return `${$$result.head += `${$$result.title = `<title>Projects</title>`, ""}`, ""}

<h1>Projects</h1>
<p>This is a page about projects</p>

<div class="${"lmp-projects-container svelte-19fohyj"}">${each(projects, (project) => {
    return `<div class="${"lmp-project-item"}"><a${add_attribute("href", `/project/${project.name}`, 0)}><h2>${escape(project.name)}</h2></a>
    </div>`;
  })}
</div>`;
});
export { Projects as default };
