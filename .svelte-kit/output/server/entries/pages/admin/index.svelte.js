import { c as create_ssr_component } from "../../../chunks/index-7340f048.js";
/* empty css                                                                    */const Admin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  console.log("1");
  console.log(projects);
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  return `${$$result.head += `${$$result.title = `<title>Admin</title>`, ""}`, ""}

<h1>Admin</h1>
<p>Do admin stuff here</p>

<a href="${"/"}">Back</a>`;
});
export { Admin as default };
