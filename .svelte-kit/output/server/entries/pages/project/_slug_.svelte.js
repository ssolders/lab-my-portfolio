import { c as create_ssr_component, e as escape } from "../../../chunks/index-7340f048.js";
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  return `${$$result.head += `${$$result.title = `<title>${escape(project.name)}</title>`, ""}`, ""}

<h1>${escape(project.name)}</h1>
<p>${escape(project.description)}</p>`;
});
export { U5Bslugu5D as default };
