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
  default: () => Projects
});
var import_index_7340f048 = require("../../../chunks/index-7340f048.js");
const Projects = (0, import_index_7340f048.c)(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  console.log("1");
  console.log(projects);
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  return `${$$result.head += `${$$result.title = `<title>Projects</title>`, ""}`, ""}

<h1>Projects</h1>
<p>This is a page about projects</p>

<div class="${"lmp-projects-container svelte-19fohyj"}">${(0, import_index_7340f048.a)(projects, (project) => {
    return `<div class="${"lmp-project-item"}"><a${(0, import_index_7340f048.b)("href", `/project/${project.name}`, 0)}><h2>${(0, import_index_7340f048.e)(project.name)}</h2></a>
    </div>`;
  })}
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
