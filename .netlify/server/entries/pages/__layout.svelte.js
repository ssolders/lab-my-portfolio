var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
var import_index_7340f048 = require("../../chunks/index-7340f048.js");
const css$1 = {
  code: ".mpl-main-nav.svelte-m76n5t.svelte-m76n5t{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333333}li.svelte-m76n5t.svelte-m76n5t{float:left}li.svelte-m76n5t a.svelte-m76n5t{display:block;color:white;text-align:center;padding:16px;text-decoration:none}li.svelte-m76n5t a.svelte-m76n5t:hover{background-color:#111111}",
  map: null
};
const TopNavigation = (0, import_index_7340f048.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<ul class="${"mpl-main-nav svelte-m76n5t"}"><li class="${"svelte-m76n5t"}"><a href="${"/"}" class="${"svelte-m76n5t"}">Home</a></li>
    <li class="${"svelte-m76n5t"}"><a href="${"/projects"}" class="${"svelte-m76n5t"}">Projects</a></li>
    <li class="${"svelte-m76n5t"}"><a href="${"/admin"}" class="${"svelte-m76n5t"}">Admin</a></li>
    
</ul>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = { code: "body{margin:0px}", map: null };
const _layout = (0, import_index_7340f048.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_7340f048.v)(TopNavigation, "TopNavigation").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
module.exports = __toCommonJS(stdin_exports);
