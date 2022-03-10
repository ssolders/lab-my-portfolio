import { c as create_ssr_component, v as validate_component } from "../../chunks/index-7340f048.js";
/* empty css                                                                 */const css$1 = {
  code: ".mpl-main-nav.svelte-m76n5t.svelte-m76n5t{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333333}li.svelte-m76n5t.svelte-m76n5t{float:left}li.svelte-m76n5t a.svelte-m76n5t{display:block;color:white;text-align:center;padding:16px;text-decoration:none}li.svelte-m76n5t a.svelte-m76n5t:hover{background-color:#111111}",
  map: null
};
const TopNavigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<ul class="${"mpl-main-nav svelte-m76n5t"}"><li class="${"svelte-m76n5t"}"><a href="${"/"}" class="${"svelte-m76n5t"}">Home</a></li>
    <li class="${"svelte-m76n5t"}"><a href="${"/projects"}" class="${"svelte-m76n5t"}">Projects</a></li>
    <li class="${"svelte-m76n5t"}"><a href="${"/admin"}" class="${"svelte-m76n5t"}">Admin</a></li>
    
</ul>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = { code: "body{margin:0px}", map: null };
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(TopNavigation, "TopNavigation").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
