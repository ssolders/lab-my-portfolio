const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/projects/index.svelte"),
	() => import("../../src/routes/project/[slug].svelte"),
	() => import("../../src/routes/admin/__layout.reset.svelte"),
	() => import("../../src/routes/admin/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/projects/index.svelte
	[/^\/projects\/?$/, [c[0], c[3]], [c[1]], null, 'projects'],

	// src/routes/project/[slug].svelte
	[/^\/project\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ slug: d(m[1])}), 'project/[slug]'],

	// src/routes/admin/index.svelte
	[/^\/admin\/?$/, [c[5], c[6]], [], null, 'admin']
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];