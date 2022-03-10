export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-0e97ac8e.js","js":["start-0e97ac8e.js","chunks/vendor-c6b1e087.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "projects",
				pattern: /^\/projects\/?$/,
				params: null,
				path: "/projects",
				shadow: () => import('./entries/endpoints/projects/index.ts.js'),
				a: [0,3,4],
				b: [1]
			},
			{
				type: 'page',
				key: "project/[slug]",
				pattern: /^\/project\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				shadow: () => import('./entries/endpoints/project/_slug_.ts.js'),
				a: [0,5,6],
				b: [1]
			},
			{
				type: 'page',
				key: "admin",
				pattern: /^\/admin\/?$/,
				params: null,
				path: "/admin",
				shadow: () => import('./entries/endpoints/admin/index.ts.js'),
				a: [7,8],
				b: []
			}
		]
	}
};
